const wait = require("util").promisify(setTimeout);
const { SlashCommandBuilder } = require("@discordjs/builders");

// Example of a "deferred response" to a command, to overcome the 3-second
// reply window (see https://discordjs.guide/interactions/replying-to-slash-commands.html#deferred-responses)
module.exports = {
	data: new SlashCommandBuilder()
		.setName("think")
		.setDescription("Thinks about something for a while, then replies"),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(5000);
		await interaction.editReply("Ok, I thought about it!");
	},
};
