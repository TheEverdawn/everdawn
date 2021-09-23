require("dotenv").config();
import fs from "fs";
import path from "path";
import { Client, Collection, Intents } from "discord.js";
const { TOKEN: token } = process.env;

if (!token) {
	console.log("Discord token missing - please provide via TOKEN env var");
	process.exit(1);
}

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// See https://github.com/discordjs/discord.js/issues/6638
// @ts-ignore
client.commands = new Collection();
const commandFiles = fs
	.readdirSync(path.join(__dirname, "commands"))
	.filter((file: any) => file.endsWith(".ts"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// @ts-ignore
	client.commands.set(command.data.name, command);
}

client.once("ready", () => {
	console.log("Ready!");
});

client.on("interactionCreate", async (interaction: any) => {
	console.log("interaction created");
	if (!interaction.isCommand()) return;

	// @ts-ignore
	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({
			content: "There was an error while executing this command!",
			ephemeral: true,
		});
	}
});

client.login(token);
