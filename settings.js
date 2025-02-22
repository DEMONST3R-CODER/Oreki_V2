//base by ꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥

const fs = require('fs')
const chalk = require('chalk')

global.location = "Africa,Nigeria,Delta state" //ur location


global.urldb = '';


global.socialm = "IG:"


global.ytname = "YT: THUGN1F1CENT"


//new
global.botname = 'ᎧᏒᏋᏦᎥ Ꮙ2' // DON'T CHANGE 

global.tg = "t.me/Hughie_H"

global.ownernumber = '2347079059033' //ur owner number


global.ownername = '꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥' //ur owner name
global.url1 = 'https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01'


global.url2 = 'https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01'

global.websitex = "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01"// DON'T CHANGE 


global.wagc = "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01"// DON'T CHANGE


global.themeemoji = '🧸'


global.wm = "꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥"


global.botscript = 'https://github.com/DEMONST3R-CODER/Oreki_V2' //script link


global.packname = "ᎧᏒᏋᏦᎥ Ꮙ2"


global.author = "꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥"


global.creator = "2347079059033@s.whatsapp.net"


global.prefix = '.'


global.premium = ["2347079059033"] // Premium User


global.hituet = 0


global.autoblocknumber = '' //set autoblock country code


global.antiforeignnumber = '' //set anti foreign number country code


global.welcome = false //welcome/left in groups


global.anticall = false //bot blocks user when called


global.autoswview = true //auto status/story view


global.adminevent = false //show promote/demote message


global.groupevent = false //show update messages in group chat


//msg
global.mess = {
	limit: '*You have exhausted your limits!*',
	nsfw: '*Nsfw is disabled in current chat, tell admins to enable it*',
    done: '*Successful*',
    owner: '*Owner Only!*',
    botadmin: '*Bot must be an admin! 👀*',
    admin: '*Admins Only! 👀*',
    privates: '*Private Chats Only*',
    group: '*Group Chats Only!*',
    error: '*Error!*',
    success: '*© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™*'
    }

// Onceview 
global.vv = '1' // Option 1 is to send onceview in current chat/group, option 2 is to send onceview in dm 
global.apikey = ''
global.capikey = ''
global.domain = 'https://'
global.eggsnya = '15'
global.plocation = '1'

//thumb
global.thumb = fs.readFileSync('./T-Media/Oreki.jpg')



let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})