const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
var luck = 0;
const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
  
else if(command === "name") {
 if (message.content === `${prefix}hello`) {
 console.log(message.content, message.author);
 message.channel.send('hello!');
}}
  
  else if (command === "roll") {
	  if(isNaN(parseFloat(args)) == false)
	  {
	   let mas = String(args);
	  if (mas.indexOf('-') != -1)
	  {
      const val = mas.split('-');
	  rand = 2;
	  rand1 =1;
      var sum = parseFloat(val[1]) + parseFloat(val[0]);	
	  rand = Math.floor(Math.random() * (parseFloat(val[1]) - parseFloat(val[0]) +1)) + parseFloat(val[0]);
	  rand1 = Math.floor(Math.random() * (parseFloat(val[1]) - parseFloat(val[0]) +1)) + parseFloat(val[0]);
	  if (luck == 0)
	  luck = sum;
    else
	  luck = (luck + rand) /2; 
	if (luck >= sum)
		rand = rand +1;
	else if (luck <= sum && rand > parseFloat(val[0]))
		rand = rand-1;
	if (rand - rand1 >= Math.abs(5))
	    rand = Math.floor((rand + rand1) / 2);
	else
	    rand = Math.max(rand,rand1);
	if (rand == val[1])		
    message.reply(`сегодня я благословляю тебя! Выпало ${rand}.`);
    else if (rand == val[0])		
    message.reply(`фатальная неудача! Выпало ${rand}.`);
    else if (rand <= ((sum / 2) -1))		
    message.reply(`выпало ${rand}.`);
	else	
    message.reply(`неплохо. Выпало ${rand}.`);
	  }
	else {
	rand = Math.floor(Math.random() * Math.floor(parseFloat(args)+1));
	if (luck == 0)
	  luck = parseFloat(args) / 2;
    else
	  luck = (luck + rand) /2; 
  if (luck >= (parseFloat(args) / 2) -1 && rand < parseFloat(args))
		rand = rand +1;
	else if (luck <= parseFloat(args) / 2 && rand > 1)
		rand = rand-1;
	if (rand == parseFloat(args))		
    message.reply(`сегодня я благословляю тебя! Выпало ${rand}.`);
    else if (rand == 0)		
    message.reply(`фатальная неудача! Выпало ${rand}.`);
    else if (rand <= (parseFloat(args) / 2) -1)		
    message.reply(`выпало ${rand}.`);
	else	
    message.reply(`неплохо. Выпало ${rand}.`);
}
  }
  else
	  message.reply(`упс, что-то пошло не так.`);
  }
});

client.login(config.BOT_TOKEN);