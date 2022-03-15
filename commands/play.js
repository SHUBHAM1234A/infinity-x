module.exports = {
  name: "play",
  aliases: ["game"],
  description: "Plays a game",
  execute(client, message, args, Discord, db, cmd) {
    let embed = new Discord.MessageEmbed();
    embed.setURL("https://cutt.ly/IQeW7Er");
    embed.setTitle("Game");
    embed.setColor("#00FFFF");
    message.channel.send(embed);
    client.channels.cache
      .get(`900633193978400768`)
      .send(`${message.author.tag} got rick rolled`);
  },
};
