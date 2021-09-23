import { SlashCommandBuilder } from "@discordjs/builders";
import { BaseCommandInteraction } from "discord.js";

import { createItem, getLocationForChannel } from "../services";

const seedItems = [
	"Deanna's half-eaten chocolate pudding",
	"Worf's sock",
	"Evil Riker's fake beard",
	"Picard's spine re-aligner",
	"Isolinear chip",
	"Phase inducer",
	"Romulan Ale",
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName("dev-seed-item")
		.setDescription("Materialise a test item within the room"),
	execute: async (interaction: BaseCommandInteraction) => {
		const itemIndex = Math.floor(Math.random() * seedItems.length);

		await interaction.deferReply();

		const name = seedItems[itemIndex];
		const location = await getLocationForChannel(interaction.channelId);

		if (!location) {
			await interaction.editReply(
				"This channel is missing a location entry in the database. If you created this channel manually, rather than through `/dev-create-location`, please create an entry for it in the database. If you _did_ create this channel using `/dev-create-location`, then something has gone horribly wrong (but you can still just add the location entry in the database)."
			);
			return;
		}

		await createItem({
			name,
			locationId: location.id,
		});

		await interaction.editReply(`Added ${name} to the room!`);
	},
};
