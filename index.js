const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () =>{
    console.log('Ready');
    client.user.setActivity('>commands for info')
})

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    if(command === 'purge'){
	    client.commands.get('purge').execute(message,args);
    }else if(command === 'kick'){
        
        
    }else if(command === 'ban'){
        
        
    }else if(command === 'commands'){
        
        
    }else if(command === 'prefix'){
        
    }else if(command === 'command-info'){
        if (message.channel.type == "dm") return;
        
        if(!args[0]){
            const descArgEmbed = new Discord.MessageEmbed();
            descArgEmbed.setDescription('Please provide a valid command to give a description of! You can find the commands by executing `>commands`')
            descArgEmbed.setColor(0x3366ff)

            return message.channel.send(descArgEmbed).then(msg => msg.delete({timeout: 3000}));
        }else{
           
            if(args[0] === 'kick'){
                const descKickEmbed = new Discord.MessageEmbed();
                descKickEmbed.setTitle('Command Description')
                descKickEmbed.setDescription('**Name:** Kick\n**Usage:** `>kick <user mention>`\n**Description:** A command that kicks users from the server.\n**Cooldown:** None\n**Usable in DM:** False ')
                descKickEmbed.setColor(0x3366ff)

                return message.channel.send(descKickEmbed);
            }else if(args[0] === 'ban'){
                const descBanEmbed = new Discord.MessageEmbed();
                descBanEmbed.setTitle('Command Description')
                descBanEmbed.setDescription('**Name:** Ban\n**Usage:** `>ban <user mention> <reason>`\n**Description:** A command that bans users from the server. The reason has a word limit of 100.\n**Cooldown:** None\n**Usable in DM:** False')
                descBanEmbed.setColor(0x3366ff)

                return message.channel.send(descBanEmbed);
            }else if(args[0] === 'prefix'){
                const descPrefixEmbed = new Discord.MessageEmbed();
                descPrefixEmbed.setTitle('Command Description')
                descPrefixEmbed.setDescription('**Name:** Prefix\n**Usage:** `>prefix`\n**Description:** A command that displays the prefix of this bot\n**Cooldown:** 5 seconds\n**Usable in DM:** True')
                descPrefixEmbed.setColor(0x3366ff)
                
                return message.channel.send(descPrefixEmbed);
            }else if(args[0] === 'ping'){
                const descPingEmbed = new Discord.MessageEmbed();
                descPingEmbed.setTitle('Command Description')
                descPingEmbed.setDescription('**Name:** Ping\n**Usage:** `>ping`\n**Description:** A normal, useless ping command. Displays the time in milliseconds for the bot to respond to the command.\n**Cooldown:** 5 seconds\n**Usable in DM:** True')
                descPingEmbed.setColor(0x3366ff)
                
                return message.channel.send(descPingEmbed);
            }
            const descArgInvalidEmbed = new Discord.MessageEmbed();
            descArgInvalidEmbed.setDescription('`' + `${args[0]}` + '` is not a valid command!')
            descArgInvalidEmbed.setColor(0x3366ff)

            message.channel.send(descArgInvalidEmbed)
        }
    }else if (command === 'user-info'){
        if (message.channel.type == "dm") return;

        if(!message.mentions.users.size){
            
        const memberAuthorInfo = message.guild.member(message.author)
            
        const myInfoEmbed = new Discord.MessageEmbed();
        myInfoEmbed.setTitle(message.author.username)
        myInfoEmbed.setDescription(`**Tag:** ${message.author.tag}\n**ID:** ${message.author.id}\n**Bot Account:** ${message.author.bot}\n`)
        myInfoEmbed.setColor(0x3366ff)
        myInfoEmbed.addFields(
            {name: 'Account Created At', value: `${message.author.createdAt}`, inline: true},
            {name: 'Joined Server At', value: `${memberAuthorInfo.joinedAt}`, inline: true},
            )
        myInfoEmbed.setFooter(`Requested by ${message.author.username}`)
        myInfoEmbed.setThumbnail(`${message.author.displayAvatarURL({dynamic: true})}`)
        
        return message.channel.send(myInfoEmbed);
            
        }else{
            
            const memberInfo = message.guild.member(message.mentions.users.first())
            
            const userInfoEmbed = new Discord.MessageEmbed();
            userInfoEmbed.setTitle(message.mentions.users.first().username)
            userInfoEmbed.setDescription(`**Tag:** ${message.mentions.users.first().tag}\n**ID:** ${message.mentions.users.first().id}\n**Bot Account:** ${message.mentions.users.first().bot}`)
            userInfoEmbed.setColor(0x3366ff)
            userInfoEmbed.setThumbnail(`${message.mentions.users.first().displayAvatarURL({dynamic: true})}`)
            userInfoEmbed.addFields(
                {name: 'Account Created At', value: `${message.mentions.users.first().createdAt}`, inline: true},
                {name: 'Joined Server At', value: `${memberInfo.joinedAt}`, inline: true},
                )
            userInfoEmbed.setFooter(`Requested by ${message.author.username}`)
            
            message.channel.send(userInfoEmbed);
        }
    }else if(command === 'uno-reverse'){
        if (message.channel.type == "dm") return;
        if(message.mentions.users.first()){
            message.channel.send(`Haha ${message.mentions.users.first()}, get uno reversed`,{files:["https://i.imgur.com/WUX7tbB.png"]})
        }else{
            message.channel.send('Dumbass, you just uno reversed yourself',{files:["https://i.imgur.com/WUX7tbB.png"]})
        }
    }/*else if(command === 'coinflip'){
        function doRandHT(){
            var rand = ['Heads!','Tails!'];
            return rand[Math.floor(Math.random()*rand.length)];
        }
        function doRandHTImage(){
            let result = [];
            var image = ['https://i.imgur.com/LH3ImeN.png','https://i.imgur.com/vn0PfEd.png']
            return image[
            
        function doRandHTImage(){
        const htEmbed = new Discord.MessageEmbed();
        htEmbed.setTitle('Coinflip results!')
        htEmbed.setDescription(doRandHT())
        htEmbed.setColor(0x3366ff)
        htEmbed.setImage()
        
        message.channel.send(htEmbed)
    }*/
});
client.login(process.env.BOT_TOKEN);
