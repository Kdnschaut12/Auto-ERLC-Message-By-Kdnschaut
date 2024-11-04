const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const targetBotCommand = "/erlc command command:h Dizzy Code: wq6ZEnQP6H"; // Replace with the command you want to send to the other bot
const targetChannelId = "FhQmQYhPDr"; // Replace with the ID of the channel where the bot command should be sent

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    
    // Send the command to the other bot every 2-3 hours
    setInterval(() => {
        const channel = client.channels.cache.get(targetChannelId);
        if (channel) {
            channel.send(targetBotCommand)
                .then(() => console.log(`Sent command ${targetBotCommand} to channel ${targetChannelId}`))
                .catch(console.error);
        }
    }, getRandomInterval(2, 3)); // Set random interval between 2 and 3 hours
});

// Function to calculate a random interval in milliseconds (between min and max hours)
function getRandomInterval(minHours, maxHours) {
    const min = minHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const max = maxHours * 60 * 60 * 1000; // Convert hours to milliseconds
    return Math.floor(Math.random() * (max - min + 1) + min);
}

client.login('YOUR_BOT_TOKEN');
