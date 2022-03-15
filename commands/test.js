module.exports = {
  name: "test",
  async execute(client, message, args) {
    const owner = ["760797404642803732"];
    if (owner.includes(message.author.id)) {
      console.log("test");
      let player = client.guilds.cache
        .get("862184539991048222")
        .members.cache.get(message.author.id);
      await player.roles.add("862608256185925653");
      message.react("✅");
    } else return;
  },
};
