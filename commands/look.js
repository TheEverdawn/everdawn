const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require("discord.js");

// Example of a "deferred response" to a command, to overcome the 3-second
// reply window (see https://discordjs.guide/interactions/replying-to-slash-commands.html#deferred-responses)
module.exports = {
	data: new SlashCommandBuilder()
		.setName("look")
		.setDescription("Observe your surroundings"),
	async execute(interaction) {
		const row1 = new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId("worf")
				.setLabel("Worf's socks")
				.setStyle("PRIMARY")
		);
		const row2 = new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId("geordi")
				.setLabel("Geordi's socks")
				.setStyle("PRIMARY")
		);

		await interaction.reply({
			content: "Ten Forward, where the crew come to unwind.",
			components: [row1, row2],
		});
	},
};
