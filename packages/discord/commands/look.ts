import { SlashCommandBuilder } from "@discordjs/builders";
import {
	MessageActionRow,
	MessageButton,
	BaseCommandInteraction,
	MessageSelectMenu,
    MessageComponentInteraction,
    TextChannel,
} from "discord.js";

import { api } from "../services/api";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("look")
		.setDescription("Observe your surroundings"),
	execute: async (interaction: BaseCommandInteraction) => {
// 		const items = (await api.get(`/items?room=${interaction.channelId}`))
// 			.data as any[];

// 		// Discord only allows five action rows, so if there are more than four items, we will show the rest in a select menu
// 		const firstFourItems = items.slice(0, 3);
// 		const remainingItems = items.slice(4);
// 		const components = firstFourItems.map((item) =>
// 			new MessageActionRow().addComponents(
// 				new MessageButton()
// 					.setCustomId(item._id)
// 					.setLabel(item.name)
// 					.setStyle("PRIMARY")
// 			)
// 		);

// 		if (remainingItems.length) {
// 			components.push(
// 				new MessageActionRow().addComponents(
// 					new MessageSelectMenu()
// 						.setCustomId("select")
// 						.setPlaceholder(`...and ${remainingItems.length} more`)
// 						.addOptions(
// 							remainingItems.map((item) => ({
// 								label: item.name,
// 								description: "A description of the item",
// 								value: item._id,
// 							}))
// 						)
// 				)
// 			);
// 		}

// 		await interaction.reply({
// 			content:
// 				firstFourItems.length > 0
// 					? "You see the following items"
// 					: "There is nothing of worth here",
// 			components,
// 			ephemeral: true
// 		});

		const components = [new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId("enter_quarters_test")
				.setLabel("Enter")
				.setStyle("DANGER")
		)];

		const filter = (i: MessageComponentInteraction) => i.customId === "enter_quarters_test" && i.user.id === interaction.user.id;
		const collector = interaction.channel?.createMessageComponentCollector({ filter, time: 15000 });

		collector?.on("collect", async (i: MessageComponentInteraction) => {
			if (i.customId === "enter_quarters_test") {
				const components = [new MessageActionRow().addComponents(
					new MessageButton()
						.setCustomId("enter_quarters_test")
						.setLabel("Enter")
						.setStyle("DANGER")
						.setDisabled(true)
				)];

				const privateChannelId = "887654501333467187"
				const channel = interaction.client.channels.cache.get(privateChannelId) as TextChannel;
				// @ts-ignore
				await channel.permissionOverwrites.edit(i.user, {
						SEND_MESSAGES: true,
						VIEW_CHANNEL: true
				});

				await i.update({ content: `The door slides open. Jazz and a cloud of cologne emanate from within. Head on over to <#${privateChannelId}>`, components: [] });
			}
		});

		await interaction.reply({
			content: "You see the door to Riker's quarters. Smooth, beige, and inviting.",
			components,
			ephemeral: true
		});
	},
};
