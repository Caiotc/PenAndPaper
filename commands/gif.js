const fetch = require('node-fetch');
module.exports =async (message,args)=>{
        message.channel.send("gif!");
        let search = "ecchi";
        if(args.length >0)
        search = args.join("%20");     
        let url = `https://g.tenor.com/v1/search?q=${search}&key=${process.env.TENORKEY}&ContentFilter=low`;
        console.log(url);
        let response = await fetch(url);
        let json = await response.json();
        let index = parseInt(Math.random() * json.results.length);        
        message.channel.send(json.results[index].url)
}