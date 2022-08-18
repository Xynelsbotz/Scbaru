const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285854337533','6285646458928']
global.premium = ['6285854337533']
global.packname = 'Sayu.Ogiwara'
global.author = 'Wa :6285646458928'
global.sessionName = 'session'
global.namabotnya = 'sᴛʀᴇɴɢᴛʜ ʙᴏᴛ'
global.namaownernya = '◈○∘◦χуиєℓѕ ∂єѕιgи◦∘○◈'
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.kirkey = 'ChinoBot'
global.wame = 'https://wa.me/6285854337533'
global.gckirbotz = 'https://chat.whatsapp.com/CnQV9lNcHuIENb8SQ9CaYP'
global.ownerNumber = ["6285854337533@s.whatsapp.net"]
global.email = 'xyneldesign@gmail.com'
global.yt = 'https://youtube.com/channel/UCHEHOIHj-7z9K3QTapYdNpg'
global.webkir = 'https://xynelsdesign.carrd.co/'
global.githubkir = 'https://github.com/Xynelsbotz'
global.region = 'INDONESIA'
global.prefa = ['','!','.','#','-','•']
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔, 𝙹𝚊𝚗𝚐𝚊𝚗 𝙻𝚞𝚙𝚊 𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝚈𝚘𝚞𝚃𝚞𝚋𝚎 *𝚇𝚈𝙽𝙴𝙻𝚂 𝙳𝙴𝚂𝙸𝙶𝙽* 𝙷𝚎𝚑𝚎',
    admin: '𝙺𝚑𝚞𝚜𝚞𝚜 𝙰𝚍𝚖𝚒𝚗 𝚂𝚊𝚢𝚊𝚗𝚐',
    botAdmin: ' *𝚂𝚊𝚢𝚊 𝙱𝚎𝚕𝚞𝚖 𝙹𝚊𝚍𝚒 𝙰𝚍𝚖𝚒𝚗 𝙺𝚊𝚔* ',
    owner: ' *𝙰𝚠𝚔𝚠𝚔𝚠𝚘𝚔 𝙻𝚞 𝙱𝚞𝚔𝚊𝚗 𝙾𝚠𝚗𝚎𝚛* ',
    group: ' *𝙺𝚑𝚞𝚜𝚞𝚜 𝙶𝚛𝚞𝚙 𝚂𝚊𝚢𝚊𝚗𝚐...* ',
    private: ' *𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚒𝚟𝚊𝚝𝚎 𝚂𝚊𝚢𝚊𝚗𝚐...* ',
    bot: '𝙻𝚞 𝙱𝚘𝚝...?',
    error: '𝙱𝚘𝚝 𝙴𝚛𝚛𝚘𝚛',
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
