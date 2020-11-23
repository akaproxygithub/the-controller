const Commando = require("discord.js-commando");

module.exports = class dootCommand extends (
  Commando.Command
) {
  constructor(client) {
    super(client, {
      name: "doot",
      group: "fun",
      memberName: "doot",
      description:
        "Repeats all of your arguments with a skull and horn in between",
      guildOnly: true,
    });
  }
  async run(message, args) {
    if (!args[1])
      return message.reply("You have to give me two words to doot silly");
    let say = message.content.split(" ");
    say.shift();
    say.shift();
    say = say.join(" 💀🎺 ");
    message.channel.send(say);
  }
};
