
module.exports =async  (message,args)=>{
    const m = await message.channel.send("Ping?");
    m.edit(`È GAY!  latencia do servidor: ${m.createdTimestamp - message.createdTimestamp}ms.`)
}