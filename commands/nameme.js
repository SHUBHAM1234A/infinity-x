const a = [
  "Best Friend",
  "OP Person",
  "Nerd",
  "pink guy",
  "idiot",
  "You",
  "bad guy",
  "God",
  "buffalo",
  "Cowboy",
  "Kiddo",
  "Senorita",
  "Forever Friend",
  "Sis",
  "Champ",
  "Amigo",
  "Chief",
  "Junior",
  "Senior",
  "Boo",
  "Bug",
  "Dandruff",
  "Corona",
];

module.exports = {
  name: "nameme",
  description: "Sends a random name",
  execute(client, message, args, Discord, db, cmd) {
    message.channel.send(
      `${a[Math.floor(Math.random() * a.length)]} is your new name 😀!`
    );
    client.channels.cache
      .get(`900633193978400768`)
      .send(`${message.author.tag} used nameme command`);
  },
};
