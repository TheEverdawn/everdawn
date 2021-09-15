import { SlashCommandBuilder } from "@discordjs/builders";
import { BaseCommandInteraction } from "discord.js";

import { api } from "../services/api";

const seedItems = [
	"Diana's half-eaten chocolate pudding",
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
		await api.post("/items", {
			name,
			room: interaction.channelId,
		});

		await interaction.editReply(`Added ${name} to the room!`);
	},
};
