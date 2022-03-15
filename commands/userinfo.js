const moment = require("moment");

module.exports = {
  name: "userinfo",
  aliases: ["ui", "user"],
  description: "shows info of a user",
  async execute(client, message, args, Discord, db, cmd) {
    let user;

    if (!args[0]) {
      user = message.member;
    } else {
      user =
        message.mentions.members.first() ||
        (await message.guild.members.fetch(args[0]).catch((err) => {
          return message.channel.send("Unable to find this Person");
        }));
    }

    if (!user) {
      return message.channel.send("Unable to find this person!");
    }

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png",
      invisible: "https://emoji.gg/assets/emoji/7445_status_offline.png",
    };

    let badges = await user.user.flags;
    badges = (await badges) ? badges.toArray() : ["None"];

    let newbadges = [];
    badges.forEach((m) => {
      newbadges.push(m.replace("_", " "));
    });

    let embed = new Discord.MessageEmbed().setThumbnail(
      user.user.displayAvatarURL({
        dynamic: true,
      })
    );

    let array = [];
    if (user.user.presence.activities.length) {
      let data = user.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None";
        let xname = data[i].details || "None";
        let zname = data[i].state || "None";
        let type = data[i].type;

        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``);

        if (data[i].name === "Spotify") {
          embed.setThumbnail(
            `https://i.scdn.co/image/${data[i].assets.largeImage.replace(
              "spotify:",
              ""
            )}`
          );
        }

        embed.setDescription(array.join("\n"));
      }
    }

    embed.setColor(
      user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor
    );

    embed.setAuthor(
      user.user.tag,
      user.user.displayAvatarURL({
        dynamic: true,
      })
    );

    if (user.nickname !== null) embed.addField("Nickname", user.nickname);
    embed
      .addField("Joined At", moment(user.joinedAt).format("LLLL"))
      .addField(
        "Account Created At",
        moment(user.user.createdAt).format("LLLL")
      )
      .addField(
        "Common Information",
        `ID: \`${user.user.id}\`\nDiscriminator: ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`
      )
      .addField("Badges", newbadges.join(", ").toLowerCase() || "None");
    var mem = message.mentions.members.first();
    if (mem) {
      embed.setFooter(mem.user.presence.status, stat[mem.user.presence.status]);
    }

    if (!mem) {
      embed.setFooter(
        message.author.presence.status,
        stat[message.author.presence.status]
      );
    }
    client.channels.cache
      .get(`900633193978400768`)
      .send(`${message.author.tag} used Userinfo command`);
    return message.channel.send(embed).catch((err) => {
      return message.channl.send("There was an error!");
    });
  },
};
