require('dotenv').config()
const XMLHttpRequest = require('xhr2');
const { Telegraf } = require('telegraf');
const xhr = new XMLHttpRequest();
const bot = new Telegraf(process.env.BOT_TOKEN);
console.log('bot on')

bot.command('serverinfo')
xhr.open('get', 'https://api.nitestats.com/v1/epic/staging/fortnite')
xhr.send()
xhr.onload = () => {
	const response = xhr.response
	const stageinfo = (JSON.parse((response)["FortniteStageMain"]["version"]))
	console.log(stageinfo)
}


bot.launch()