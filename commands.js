
const latency = require('./commands/latency')
const tenorSearch = require('./commands/gif')
const roll = require('./commands/roll');
require('dotenv').config();

const commands ={
    gif:tenorSearch,
    pedro:latency,
    rolar:roll
}

module.exports = async function(message){
    if(message.channel.type == "dm") return;
    const args = message.content.split(" ");
    console.log(args);   
    let command = args.shift().toLowerCase();    
    console.log(args);
    if(command.charAt(0) ==='!'){
        command = command.substring(1,command.length);
        if(commands[command] != null)
            commands[command](message,args);
    }

}
