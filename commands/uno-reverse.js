const Discord = require('discord.js');
module.exports = {
  name: 'uno-reverse',
  description: 'Lol get uno reversed',
  execute(message){
    const unoUrselfEmbed = new Discord.MessageEmbed();
    unoUrselfEmbed.setDescription('Dumbass, you just uno reversed yourself')
    unoUrselfEmbed.setImage('https://i.imgur.com/WUX7tbB.png')
    unoUrselfEmbed.setColor(0x3366ff)

    const unoEmbed = new Discord.MessageEmbed();
    unoEmbed.setDescription(`Haha ${message.mentions.users.first()}, get uno reversed`)
    unoEmbed.setColor(0x3366ff)
    unoEmbed.setImage('https://i.imgur.com/WUX7tbB.png')
        if(message.mentions.users.first()){
            message.channel.send(unoEmbed)
        }else{
            message.channel.send(unoUrselfEmbed)
        }
  },
};
