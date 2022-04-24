const {Client, MessageEmbed, Collection} = require('discord.js');
const fs = require("fs");

const client = new Client();

const PREFIX = '.';


const commands = new Collection();
const files = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

    for(const file of files) {
        const command = require(`./commands/${file}`);
        commands.set(command.name, command);
    }

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

client.on('ready', () => {
    console.log('Bot Online');
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author.bot) return;
    if(!msg.content.startsWith(PREFIX)) return;
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "anime":
            commands.get("anime").execute(msg, args, client);
            break;
        case "genre":
            commands.get("genre").execute(msg, args, client);
            break;    
        case "info":
            commands.get("info").execute(msg, args, client);
            break;    
        case "ping":
            commands.get("ping").execute(msg);   
            break;

        default:
            break;
    }
})

client.login(process.env.API_TOKEN);