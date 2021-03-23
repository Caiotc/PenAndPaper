const Discord = require("discord.js");
const client =  new Discord.Client();
const config = require("./config.json");

client.on("ready", ()=>{
    console.log("O PEDRO É GAY");
    console.log(`Bot iniciado, com ${client.users.size} usuarios, emm ${client.guilds.size} servidores`)
    //client.user.se(`Eu estou em ${client.guilds.size} servidores`)
});

client.on("guildCreate",guild=>{
    console.log(`O bot entrou no servidor: ${guild.name} id :${guild.id}. população ${guild.memberCount} membros`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`)
});
client.on("message",async message=>{
    if(message.author.bot)return;
    if(message.channel.type == "dm") return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command == "pedro"){
        const m =await message.channel.send("Ping?");
        m.edit(`È GAY!  latencia do servidor: ${m.createdTimestamp - message.createdTimestamp}ms.`)
    }
})

client.login(config.token);