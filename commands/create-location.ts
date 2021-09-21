import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember, Role } from "discord.js";

import { createLocation } from "../services";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("dev-create-location")
		.setDescription("Materialise a test item within the room")
		.addStringOption((option) =>
			option
				.setName("name")
				.setDescription("Enter a name for your new location")
				.setRequired(true)
		),
	execute: async (interaction: CommandInteraction) => {
		await interaction.deferReply();

		const name = interaction.options.getString("name")!;
		const channelName = name.replace(/\W/g, "");

		// Get "everyone" role so we can hide channel from everyone
		const everyoneRole = interaction.guild?.roles.cache.find(
			(role) => role.name === "@everyone"
		);

		// Create private Discord channel for location
		const channel = await interaction.guild?.channels.create(channelName, {
			permissionOverwrites: [
				// Allow creator to view the channel...
				{
					id: interaction.member as GuildMember,
					allow: "VIEW_CHANNEL",
				},
				// ...but not anyone else
				{
					id: everyoneRole as Role,
					deny: "VIEW_CHANNEL",
				},
			],
		});

		if (!channel) {
			await interaction.editReply(
				"Failed to create channel for location. A database entry has not been created for the location so you may freely try again. If the problem persists, there is probably some sort of permissions error when creating the channel - please check the bot's logs."
			);
			return;
		}

		// Create corresponding location in DB
		await createLocation({
			name,
			channel: channel.id,
		});

		await interaction.editReply(
			`Added location! Head over to <#${channel?.id}>`
		);
	},
};
