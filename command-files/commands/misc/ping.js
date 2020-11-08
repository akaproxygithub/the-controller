module.exports = {
  commands: "ping",
  cooldown: 10000,
  callback: (message, args, text, client) => {
    message.reply("Pinging...").then((resultMessage) => {
      resultMessage.edit(
        "**Pong!**\n\nWebSocket Latency: `" +
          `${client.ws.ping}` +
          "ms`" +
          "\nMessage Edit Latency: " +
          "`" +
          `${resultMessage.createdTimestamp - message.createdTimestamp}` +
          "ms`"
      );
    });
  },
};