const Discord= require("discord.js");
const commandHandler = require('./commands')
require('dotenv').config();
const client =  new Discord.Client();

client.on("ready", ()=>{
    console.log("O PEDRO É GAY");
    console.log(`Bot iniciado, com ${client.users.size} usuarios, emm ${client.guilds.size} servidores`)
});

client.on("guildCreate",guild=>{
    console.log(`O bot entrou no servidor: ${guild.name} id :${guild.id}. população ${guild.memberCount} membros`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`)
});
client.on("message",commandHandler);

client.login(process.env.TOKEN);