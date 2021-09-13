require("dotenv").config();

// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const {
  TOKEN: token,
  clientId: CLIENT_ID,
  CLIENT_SECRET: clientSecret,
  GUILD_ID: guildId,
} = process.env;

 if (!token) {
  console.log("Discord token missing - please provide via TOKEN env var");
  process.exit(1);
}
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

// Login to Discord with your client's token
client.login(token);
