module.exports = (client) => {
  client.user.setPresence({
    activity: {
      name: `>help`,
      type: "WATCHING",
    },
    status: "online",
  });
  console.log(`logged in as ${client.user.tag}`);
};
