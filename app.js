const fs = require("fs");
const Discord = require("discord.js");
const {prefix, token} = require("./config/config.json");

const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Discord.Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
        return;
    }

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error.name + ": " + error.message);
        message.reply("There was an error issuing that command");
    }
});

client.login(token);
