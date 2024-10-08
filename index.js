const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    if (msg.author == client.user) {
        return;
    }

    else if (msg.content === 'ping') {
        msg.reply('Pong!');
    }

    else {
        msg.reply(msg.content);
    }
});

client.login(process.env.TOKEN);
