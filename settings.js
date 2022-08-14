const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6281908052908','6282391562475']
global.premium = ['6281908052908']
global.packname = 'Xavior'
global.author = 'Wa :6281319339702'
global.sessionName = 'session'
global.namabotnya = '𝐗𝐚𝐯𝐢𝐨𝐫-𝐁𝐨𝐭-𝐅𝐫𝐞𝐞'
global.namaownernya = '🅇🄰🅅🄸🄾🅁-🄾🄵🄲'
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.kirkey = 'ChinoBot'
global.wame = 'https://wa.me/6281908052908'
global.gckirbotz = 'https://chat.whatsapp.com/BkJLL980gF8BJHyXFPVVvI'
global.ownerNumber = ["6281908052908@s.whatsapp.net"]
global.email = 'XaviorOfc@gmail.com'
global.yt = 'https://youtu.be/ZVZ9WWKwoyE'
global.webkir = 'https://youtu.be/ZVZ9WWKwoyE'
global.githubkir = 'https://github.com/Xavior88'
global.region = 'INDONESIA'
global.prefa = ['','!','.','#','-','•']
global.mess = {
    success: '𝕊𝕦𝕓𝕤𝕔𝕣𝕚𝕓𝕖 𝕏𝕒𝕧𝕚𝕠𝕣𝕆𝕗𝕔~',
    admin: '𝕂𝕙𝕦𝕤𝕦𝕤 𝔸𝕕𝕞𝕚𝕟 𝕊𝕒𝕪𝕒𝕟𝕘...',
    botAdmin: '𝕊𝕒𝕪𝕒 𝕓𝕖𝕝𝕦𝕞 𝕁𝕒𝕕𝕚 𝔸𝕕𝕞𝕚𝕟...',
    owner: ' *𝙰𝚠𝚔𝚠𝚔𝚠𝚘𝚔 𝙻𝚞 𝙱𝚞𝚔𝚊𝚗 𝙾𝚠𝚗𝚎𝚛* ',
    group: ' *𝙺𝚑𝚞𝚜𝚞𝚜 𝙶𝚛𝚞𝚙 𝚂𝚊𝚢𝚊𝚗𝚐...* ',
    private: ' *𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚒𝚟𝚊𝚝𝚎 𝚂𝚊𝚢𝚊𝚗𝚐...* ',
    bot: '𝐋𝐮 𝐁𝐨𝐭...?',
    error: '𝘽𝙤𝙩 𝙍𝙪𝙨𝙖𝙠!!!',
    wait: '𝚂𝚊𝚋𝚊𝚛 𝚈𝚊𝚑 𝚂𝚊𝚢𝚊𝚗𝚐...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Kir/JANGANDIUBAH/fuck.webp')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
