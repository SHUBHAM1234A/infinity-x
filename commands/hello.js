module.exports = {
  name: "hello",
  aliases: ["hi"],
  description: "Says hello!",
  execute(client, message, args, Discord, db, cmd) {
    message.reply("Hello there!");
    message.react("939444884694257715");
    client.channels.cache
      .get(`900633193978400768`)
      .send(`${message.author.tag} Said hi to bot`);
  },
};
