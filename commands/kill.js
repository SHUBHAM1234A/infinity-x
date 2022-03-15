const a = [
  "was shot by Skeleton",
  "was slain by Ravager",
  "was pricked to death",
  "drowned",
  "tried to swim in lava",
  "fell from a high place",
  "experienced kinetic energy",
  "blew up",
  "was killed by [Intentional Game Design]",
  "hit the ground too hard",
  "fell off a ladder",
  "fell off some vines",
  "fell while climbing",
  "was impaled on a stalagmite",
  "was squashed by a falling anvil",
  "was skewered by a falling stalactite",
  "went up in flames",
  "burned to death",
  "was burnt to a crisp",
  "went off with a bang due to a firework fired from crossbow by Dream",
  "tried to swim in lava",
  "was struck by lightning",
  "discovered the floor was lava",
  "walked into danger zone",
  "was killed by magic",
  "was killed by Ender Dragon using magic",
  "froze to death",
  "was slain by zombie using OP sword",
  "was fireballed by Dream",
  "was stung to death",
  "starved to death",
  "suffocated in a wall",
  "was squished too much",
  "was poked to death by a sweet berry bush",
  "was killed trying to hurt me",
  "was impaled by drowned",
  "fell out of the world",
  "didn't want to live in the same world",
  "withered away",
  "died from dehydration",
  "died",
  "was roasted in dragon breath",
  "was doomed to fall",
  "was killed by even more magic",
  "was too soft for this world",
];
module.exports = {
  name: "kill",
  description: "Kills a user",
  execute(client, message, args, Discord, db, cmd) {
    if (message.mentions.users.first().id === message.author.id) {
      return message.channel.send("You can't kill yourself");
    }
    if (!message.mentions.users.first()) {
      return message.channel.send("You need to mention someone to kill!");
    } else {
      message.channel.send(
        `${message.mentions.users.first().username} ${
          a[Math.floor(Math.random() * a.length)]
        }`
      );
      client.channels.cache
        .get(`900633193978400768`)
        .send(`${message.author.tag} used kill command`);
    }
  },
};
