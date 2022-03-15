module.exports = {
  name: "servers",
  aliases: ["server", "guilds", "guild"],
  description: "Shows the servers the bot is in",
  execute(client, message, args, Discord, db, cmd) {
    if (message.author.id === "760797404642803732") {
      var server =
        `Total Servers - ${client.guilds.cache.size}\n\n` +
        client.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map((r) => r)
          .map(
            (r, i) =>
              `**${i + 1}** - ${r.name} | ${r.memberCount} Members | ${r.id}`
          )
          .join("\n");
      message.channel.send(server);
    }else{
      return message.channel.send("You do not have permission to use this command! Only the bot owner can use this command!");
    }
  },
};
