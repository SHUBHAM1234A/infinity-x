module.exports = {
  name: "help",
  description: "Displays all commands",
  execute(client, message, args, Discord, db, cmd) {
    if (!args[0]) {
      let embed = new Discord.MessageEmbed();

      embed.setTitle("Infinity X Commands");
      embed.setAuthor("Infinity X", "https://i.imgur.com/0A9Cre8.jpg");
      embed.setThumbnail("https://i.imgur.com/0A9Cre8.jpg");
      embed.addFields(
        { name: "\u200B", value: "\u200B" },
        { name: "`>help`", value: "Stop it, get some help", inline: false },
        { name: "`>help fun`", value: "Commands for fun", inline: false },
        { name: "`>help info`", value: "Informative commands", inline: false },
        {
          name: "`>help misc`",
          value: "Miscellaneous commands",
          inline: false,
        },
        { name: "`>help all`", value: "Shows all commands", inline: false },
        { name: "\u200B", value: "\u200B" }
      );
      embed.setFooter("My Prefix is > • Infinity X");
      embed.setColor("#00FFFF");
      message.channel.send(embed);
      client.channels.cache
        .get(`900633193978400768`)
        .send(`${message.author.tag} used help command`);
    }
    if (args[0] === "fun") {
      let embed = new Discord.MessageEmbed();

      embed.setTitle("Commands for fun");
      embed.setAuthor("Infinity X", "https://i.imgur.com/0A9Cre8.jpg");
      embed.setThumbnail("https://i.imgur.com/0A9Cre8.jpg");
      embed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "`>nameme`",
          value: "Gives you a new and funny name.",
          inline: false,
        },
        {
          name: "`>kill`",
          value:
            "Kills the mentioned user( not in real life ) with funny messages",
          inline: false,
        },
        { name: "\u200B", value: "\u200B" }
      );
      embed.setFooter("My Prefix is > • Infinity X");
      embed.setColor("#00FFFF");
      message.channel.send(embed);
      client.channels.cache
        .get(`900633193978400768`)
        .send(`${message.author.tag} used help-fun command`);
    }
    if (args[0] === "info") {
      let embed = new Discord.MessageEmbed();

      embed.setTitle("Informative commands");
      embed.setAuthor("Infinity X", "https://i.imgur.com/0A9Cre8.jpg");
      embed.setThumbnail("https://i.imgur.com/0A9Cre8.jpg");
      embed.addFields(
        { name: "\u200B", value: "\u200B" },
        { name: "`>userid`", value: "Shows user's tag and ID", inline: false },
        {
          name: "`>avatar`",
          value:
            "Sends the avatar of the tagged person or of author of message",
          inline: false,
        },
        {
          name: "`>ping` or `>stats`",
          value: "Shows the bot's statistics",
          inline: false,
        },
        { name: "\u200B", value: "\u200B" }
      );
      embed.setFooter("My Prefix is > • Infinity X");
      embed.setColor("#00FFFF");
      message.channel.send(embed);
      client.channels.cache
        .get(`900633193978400768`)
        .send(`${message.author.tag} used help-info command`);
    }
    if (args[0] === "misc") {
      let embed = new Discord.MessageEmbed();

      embed.setTitle("Miscellaneous commands");
      embed.setAuthor("Infinity X", "https://i.imgur.com/0A9Cre8.jpg");
      embed.setThumbnail("https://i.imgur.com/0A9Cre8.jpg");
      embed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "`>hi` or `>hello`",
          value: "Bot will also say Hello to you <a:HI:863281146913357874>",
          inline: false,
        },
        { name: "`>um`", value: "sends 'umm' with so many 'm'", inline: false },
        { name: "`>hm`", value: "sends 'hmm' with so many 'm'", inline: false },
        { name: "\u200B", value: "\u200B" }
      );
      embed.setFooter("My Prefix is > • Infinity X");
      embed.setColor("#00FFFF");
      message.channel.send(embed);
      client.channels.cache
        .get(`900633193978400768`)
        .send(`${message.author.tag} used help-misc command`);
    }
    if (args[0] === "all") {
      let embed = new Discord.MessageEmbed();

      embed.setTitle("All commands");
      embed.setAuthor("Infinity X", "https://i.imgur.com/0A9Cre8.jpg");
      embed.setThumbnail("https://i.imgur.com/0A9Cre8.jpg");
      embed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "`>nameme`",
          value: "Gives you a new and funny name.",
          inline: false,
        },
        {
          name: "`>kill`",
          value:
            "Kills the mentioned user( not in real life ) with funny messages",
          inline: false,
        },
        {
          name: "`>getuserinfo`",
          value: "Shows user's information",
          inline: false,
        },
        {
          name: "`>avatar`",
          value:
            "Sends the avatar of the tagged person or of author of message",
          inline: false,
        },
        {
          name: "`>ping`",
          value: "Calculates the bot's response time",
          inline: false,
        },
        {
          name: "`>hi` or `>hello`",
          value: "Bot will also say Hello to you <a:HI:863281146913357874>",
          inline: false,
        },
        { name: "`>um`", value: "sends 'umm' with so many 'm'", inline: false },
        { name: "`>hm`", value: "sends 'hmm' with so many 'm'", inline: false },
        { name: "\u200B", value: "\u200B" }
      );
      embed.setFooter("My Prefix is > • Infinity X");
      embed.setColor("#00FFFF");
      message.channel.send(embed);
      client.channels.cache
        .get(`900633193978400768`)
        .send(`${message.author.tag} used help-all command`);
    }
    if (args[0]) {
      if (
        args[0] != "fun" &&
        args[0] != "info" &&
        args[0] != "misc" &&
        args[0] != "all"
      ) {
        message.channel.send("No category found going by this name.");
      }
    }
  },
};
