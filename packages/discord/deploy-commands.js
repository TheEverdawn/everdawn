require("dotenv").config();

const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { TOKEN: token, CLIENT_ID: clientId, GUILD_ID: guildId } = process.env;

const commands = [];
const commandFiles = fs
	.readdirSync("./src/commands")
	.filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
	try {
		await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
			body: commands,
		});

		console.log("Successfully registered application commands.");
	} catch (error) {
		console.error(error);
	}
})();
