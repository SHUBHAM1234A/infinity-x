require('dotenv').config();
require("express")()
  .get("/", function (req, res) {
    res.send("New Birth To Infinity X");
  })
  .listen(3897);
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
["commandHandler", "eventHandler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});
client.login(process.env.TOKEN);