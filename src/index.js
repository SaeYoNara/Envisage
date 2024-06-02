// Load environment variables from .env file
require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Retrieve the token from the environment variables
const token = process.env.TOKEN;

// Check if the token is correctly loaded
if (!token) {
    console.error("Token is not defined. Please check your .env file.");
    process.exit(1);
}

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(process.env.TOKEN);
