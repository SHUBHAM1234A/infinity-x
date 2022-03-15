module.exports = {
  name: "avatar",
  description: "Displays user's avatar",
  aliases: ['av'],
  execute(client, message, args, Discord, db, cmd) {
    var embed = new Discord.MessageEmbed();
    var tagged = message.mentions.users.first();

    embed.setColor("#00FFFF");

    if (!tagged) {
      embed.setImage(
        message.author.displayAvatarURL({ dynamic: true, size: 512 })
      );
      embed.addFields(
        { name: "Avatar of", value: `<@${message.author.id}>`, inline: true },
        { name: "Requested by", value: `Themselves`, inline: true }
      );
      message.channel.send(embed);
    } else {
      embed.setImage(tagged.displayAvatarURL({ dynamic: true, size: 512 }));
      embed.addFields(
        { name: "Avatar of", value: `<@${tagged.id}>`, inline: true },
        { name: "Requested by", value: `<@${message.author.id}>`, inline: true }
      );
      message.channel.send(embed);
      console.log(`${message.author.tag} used avatar command`);
    }
  },
};
