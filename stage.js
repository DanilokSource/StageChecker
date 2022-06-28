require('dotenv').config()
const XMLHttpRequest = require('xhr2');
const { Telegraf } = require('telegraf');
const xhr = new XMLHttpRequest();
const bot = new Telegraf(process.env.BOT_TOKEN);
console.log('bot on')

bot.command('stagecheckupdate', () =>
	setInterval((ctx) => {
		xhr.open('get', 'https://api.nitestats.com/v1/epic/staging/fortnite'),
			xhr.send(),
			xhr.onload = () => {
				const serverinfo = (JSON.parse(xhr.response)["FortniteStageMain"]["serverDate"])
				const serverInfoLast = serverinfo
				console.log(`Last: ${serverInfoLast}`)
				console.log(`Now: ${serverinfo}`)
				if (serverinfo > serverInfoLast)
					Telegraf.sendMessage(ctx.message.chat.id, (`❇️ Сервер Stage получил патч ${stageVersion}. Это значит, что новое обновление полностью готово и должно выйти через неделю, в следующий вторник`))
				else
					console.log('Сервер не изменен')
			}
	}, 300000)

)




bot.launch()
