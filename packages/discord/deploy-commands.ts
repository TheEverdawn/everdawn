require("dotenv").config();

import fs from "fs";
import path from "path";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const { TOKEN: token, CLIENT_ID: clientId, GUILD_ID: guildId } = process.env;

if (!token) {
	console.log("Discord token missing - please provide via TOKEN env var");
	process.exit(1);
}

if (!clientId) {
	console.log(
		"Discord client ID missing - please provide via CLIENT_ID env var"
	);
	process.exit(1);
}

if (!guildId) {
	console.log("Discord guild ID missing - please provide via GUILD_ID env var");
	process.exit(1);
}

const commands = [];
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file: string) => file.endsWith(".ts"));

for (const file of commandFiles) {
	const command = require(path.join(__dirname, "commands", file));
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
