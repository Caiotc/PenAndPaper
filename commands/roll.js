module.exports = async (message,args)=>{    
    try {
        console.log(args);        
        let rollArgs = args[0].split('d');
        console.log(rollArgs); 
        let diceNumber = parseInt(rollArgs[0]);
        let diceType = parseInt(rollArgs[1]);
        let results= "";
        let totalSum = 0;
        for(let i =0; i<diceNumber;i++){
            let roll = parseInt((Math.random()*100) % diceType);
            console.log(roll);
            results += `[${roll}]`;            
            totalSum += roll;
        }
        await message.channel.send(`${totalSum} <- ${results}`);
    } catch (error) {
        
    }
}