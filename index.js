const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const fetch = require('node-fetch')
const os = require('os')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const cheerio = require('cheerio')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const Exif = require('./lib/exif.js')
const exif = new Exif()
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { changelog } = require('./lib/changelog')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, uploadImages } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const path = require('path')
const speed = require('performance-now')
const request = require('request')
const { EmojiAPI } = require('emoji-api')
const WSF = require('wa-sticker-formatter')
const cd = 4.32e+7
const { ind } = require('./language')
const apivhtear = ''
const zeksapi = 'Botol-Lol'
const ItsApi = 'itsmeiky633'
const BarBarKey = 'Xs8AoHAm0g9lFHCLzsEW'
const TobzKey = 'IGPCJL6PWHFgjE4P3Wu9'
const devcityapi = 'Botol-Lol'
const TechApi = 'B8r68c-6gwmq1-af4vtS-if1zgD-jni01B'

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:MiKako\n' 
            + 'ORG: Pengembang Taufik-Kun;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6289675651966:+62 896-7565-1966\n' 
            + 'END:VCARD' 
blocked = []   
prefix = '$'
limitawal = 100
memberlimit = 0
public = true
numer = '0'
ator = 'Mikako'
namo = 'WiBot'
fake = 'Hayyoo Lho'
cr = '*Dhlah Males✅*'
gjls = fs.readFileSync('./storage/thumb/admin.webp')
oner = fs.readFileSync('./storage/thumb/bocil.webp')
freply = fs.readFileSync('storage/thumb/rikka.jpeg')
fcapt = 'Banishment This World!!!'
/*************************************/

/******** OWNER NUMBER**********/
const ownerNumber = ["6289675651966@s.whatsapp.net","6281231958474@s.whatsapp.net"] 
/************************************/

       
/*********** LOAD FILE ***********/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const brok = JSON.parse(fs.readFileSync('./database/bot/listerror.json'))
const afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/

        const sleep = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
        }

//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
            if (ikan[i].id === sender) {
            position = i
            }
        })
        if (position !== false) {
        ikan[position].fish += amount
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
    if (ikan[i].id === sender) {
    position = i
    }
})
if (position !== false) {
return ikan[position].fish
    }
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
    if (ikan[i].id === sender) {
    position = i
    }
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
            let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
            //END OF MANCING FUNCTION
		const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        } 
        
        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		}
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/bot/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}

        const getLimit = (sender) => {
            let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        const brpLimit = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
        })
            if (position !== false) {
            let lemot = limitawal - _limit[position].limit
            return lemot
            }
        }
		
        const checkWhenRegisUser = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
            if (_registered[i].id === sender) {
            position = i
            }
        })
            if (position !== false) {
            return _registered[position].time
            }
        }

        const checkAgeUser = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
            if (_registered[i].id === sender) {
            position = i
            }
        })
            if (position !== false) {
            return _registered[position].age
            }
        }
         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WiBot'; if (!author) author = 'MiKako';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 

/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('Taufik - Kun','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (mik) => {
    grup = mik.jid.endsWith('@g.us')
    if (!grup) return
        try {
        const datag = await client.groupMetadata(mik.jid)
        console.log(mik)
        if (mik.action == 'promote') {
            num = mik.participants[0]
            tek = `[Aksi Promote Terdeteksi]\n\nSalah satu admin di Group ${datag.subject}, telah mempromosikan @${num.split('@')[0]} sebagai admin`
            client.sendMessage(datag.id, tek, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
        } else if ( mik.action == 'demote' ) {
            num = mik.participants[0]
            tek = `[Aksi Demote Terdeteksi]\n\nSalah satu admin di Group ${datag.subject}, telah menurunkan @${num.split('@')[0]} sebagai member`
            client.sendMessage(datag.id, tek, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
        }
} catch (e) {
            console.log('Error : %s', color(e, 'red'))
        }
})


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num  = anu.participants[0]
//                 const moment = require('moment-timezone')
//                 const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
//                     let d = new Date
//                     let locale = 'id'
//                     let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
//                     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
//                     let week = d.toLocaleDateString(locale, { weekday: 'long' })
//                     let calender = d.toLocaleDateString(locale, {
//                 day: 'numeric',
//                 month: 'long',
//                 year: 'numeric'
//                 })
//                 try {
// pushnem = client.contacts[num] != undefined ? client.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : client.contacts[num].notify || client.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
// } catch { 
//  pushnem = num.split('@')[0]
// }
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			     teks = `*_YAHALLO_*👋 @${num.split('@')[0]}\n*_WELCOME_* to the group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
            //     exec(`magick './src/wel.jpg' -gravity west -fill '#ff2fa2' -font './src/well-font.otf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite "hamsil.jpg"`)
            //     .on('error', () => reply('error'))
            //     .on('exit', () => {
            // client.sendMessage(mdata.id, fs.readFileSync("hamsil.jpg"), MessageType.image, {caption: teks, contextInfo: { mentionedJid: [num] }})
            // })
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
//                 const moment = require('moment-timezone')
//                 const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
//                     let d = new Date
//                     let locale = 'id'
//                     let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
//                     let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
//                     let week = d.toLocaleDateString(locale, { weekday: 'long' })
//                     let calender = d.toLocaleDateString(locale, {
//                 day: 'numeric',
//                 month: 'long',
//                 year: 'numeric'
//                 })
// pushnem = client.contacts[num] != undefined ? client.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : client.contacts[num].notify || client.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_SAYONARA_*👋 @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
            //     exec(`magick './src/leave.jpg' -gravity west -fill '#ff2fa2' -font './src/well-font.otf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite "hamsil.jpeg"`)
            //     .on('error', () => reply('error'))
            //     .on('exit', () => {
            // client.sendMessage(mdata.id, fs.readFileSync('hamsil.jpeg'), MessageType.image, {caption: `*_SAYONARA_*👋 @${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
            // })
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

    client.on("CB:Call", json => {
        let call;
        calling = JSON.parse(JSON.stringify(json))
        call = calling[1].from
        setTimeout(function(){
            client.sendMessage(call, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!\nhttps//wa.me/+6289675651966', MessageType.text)
            .then(() => client.blockUser(call, "add"))
            }, 10000);
        })
	
	/*client.on (`CB:action,,battery`, json => { 
	const batteryLevelStr = json[2][0][1].value 
	const batterylevel = parseInt (batteryLevelStr) 
	batre = "battery level: " + batterylevel + "%"
	})*/

    client.on('message-update', async (mek) => {
        try {
       const from = mek.key.remoteJid
        const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
        const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
        const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
        const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
        const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (messageStubType == 'REVOKE') {
            console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
            if (!isRevoke) return
            if (!isCtRevoke) return
            if (!isBanCtRevoke) return
            const from = mek.key.remoteJid
            const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
            let int
            let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
            const id_deleted = mek.key.id
            const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
            const opt4tag = {
                contextInfo: { mentionedJid: [sender] }
            }
            for (let i = 0; i < infoMSG.length; i++) {
                if (infoMSG[i].key.id == id_deleted) {
                    const dataInfo = infoMSG[i]
                    const type = Object.keys(infoMSG[i].message)[0]
                    const timestamp = infoMSG[i].messageTimestamp
                    int = {
                        no: i,
                        type: type,
                        timestamp: timestamp,
                        data: dataInfo
                    }
                }
            }
            const index = Number(int.no)
            const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
            const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
            var itsme = `${numer}@s.whatsapp.net`
                var split = `${fake}`
                // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var selepbot72 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
            if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                const strConversation = `        「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
                client.sendMessage(from, strConversation, MessageType.text, selepbot72)
            } else if (int.type == 'stickerMessage') {
                var itsme = `${numer}@s.whatsapp.net`
                    var split = `${fake}`
                    const pingbro23 = {
                        contextInfo: {
                            participant: itsme,
                            quotedMessage: {
                                extendedTextMessage: {
                                    text: split,
                                }
                            }
                        }
                    }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
                const strConversation = `        「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

                const buff = fs.readFileSync(savedFilename)
                client.sendMessage(from, strConversation, MessageType.text, opt4tag)
                client.sendMessage(from, buff, MessageType.sticker, pingbro23)
                // console.log(stdout)
                fs.unlinkSync(savedFilename)

            } else if (int.type == 'imageMessage') {
                var itsme = `${numer}@s.whatsapp.net`
                    var split = `${fake}`
                    const pingbro22 = {
                        contextInfo: {
                            participant: itsme,
                            quotedMessage: {
                                extendedTextMessage: {
                                    text: split,
                                }
                            }
                        }
                    }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
                const bufferdel = fs.readFileSync(savedFilename)
                const strConversation = `    「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
                client.sendMessage(from, bufferdel, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
                fs.unlinkSync(savedFilename)
            } else if ( int.type == 'audioMessage') {
                var split = `${fake}`
                    const pingbro26 = {
                        contextInfo: {
                            participant: itsme,
                            quotedMessage: {
                                extendedTextMessage: {
                                    text: split,
                                }
                            }
                        }
                    }
                    const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                    const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/refoke/${filename}`);
                    const strConversation = `    「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Audio
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
`
                const bufaud = fs.readFileSync(savedFilename)
                client.sendMessage(from, strConversation, MessageType.text, opt4tag)
                client.sendMessage(from, bufaud, MessageType.audio, pingbro26, {mimetype: 'audio/mp4'})
                fs.unlinkSync(savedFilename)
            }
        }
    } catch (e) {
        console.log('Message : %s', color(e, 'green'))
        // console.log(e)
    }
})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
            infoMSG.push(JSON.parse(JSON.stringify(mek)))
            fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
            const urutan_pesan = infoMSG.length
            if (urutan_pesan === 5000) {
            infoMSG.splice(0, 4300)
            fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
            }
            global.prefix
			global.blocked
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
        	body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
            const totalchat = await client.chats.all()
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const itsMe = sender === botNumber ? true : false
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBadWord = isGroup ? badword.includes(from) : false
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = prem.includes(sender) || isOwner
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			client.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
            const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './storage/random' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './storage/random' + names + '.png'
                    let palak = './storage/random' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        client.sendMessage(from, media, MessageType.sticker, {quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
	        /*****************END SCURITY FEATURE ********/
            // FUNTION ROAD TO RAMADHAN 2021
            const ramadhan = new Date('Apr 13, 2021 00:00:00').getTime();
            
            //const backTime = setInterval( function() {
            
                const sekarang = new Date().getTime()
                const selisih = ramadhan - sekarang
                
                const hari = Math.floor( selisih / (1000 * 60 * 60 * 24) );
                const jam = Math.floor( selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
                const menit = Math.floor( selisih % (1000 * 60 * 60) / (1000 * 60) );
                const detik = Math.floor( selisih % (1000 * 60) / 1000);
                //return(hari + 'hari' + jam + 'jam' + menit + 'menit' + detik + 'detik')
                //}, 1000);
                
                const lebaran = new Date('May 13, 2021 00:00:00').getTime();
                
                const sisa = lebaran - sekarang;
                
                const Hlebaran = Math.floor( sisa / ( 1000 * 60 * 60 * 24 ) );
                const Hjam = Math.floor( sisa % ( 1000 * 60 * 60 * 24 ) / ( 1000 * 60 * 60 ) );
                const Hmenit = Math.floor( sisa % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) );
                const Hdetik = Math.floor( sisa % ( 1000 * 60 ) / 1000 );
                

                //FUCNTION MANCING BY TAUFIK - KUN
                if (isGroup && isEventon) {
                const Fisha = getMancingIkan(sender)
                const FishId = getMancingId(sender)
                if (Fisha === undefined && FishId === undefined) addMancingId(sender)
                }
                
                if (itsMe){
	    if (body.toLowerCase() === `${prefix}self`){
		public = false
		client.sendMessage(from, `_*SUKSES*_, Mematikan Bot`, text, {quoted: mek})
	    }
	    if (body.toLowerCase() === `${prefix}status`) {
		client.sendMessage(from, `STATUS: ${public ? 'ON' : 'OFF'}`, text)
	    }
	}
	if (!public) {
	    if (body.startsWith(`${prefix}${command}`) && !isOwner && !mek.key.fromMe) return reply(`Maaf ${pushname}, BOT saat ini berada dalam kendali Owner`)
	}

            //AUTO RESPONDER
        if ( budy.includes('Bot') && !mek.key.fromMe ){
            const on =['Yoo👋','Hai, nani desuka? :)','What?',`Bot on, ketik ${prefix}menu untuk melihat menu WiBot`,'apa Tod?']
            const Bot = on[Math.floor(Math.random() * on.length)]
            client.sendMessage(from, Bot, text, {quoted: mek})
        }

        
        if (budy.includes('ohayou') && !mek.key.fromMe) {
        reply('ohayou gozaimasu')
        }
        
        if (budy.includes('ohayo') && !mek.key.fromMe) {
        reply('ohayou gozaimasu')
        }
        
        if (budy.includes('oyasumi') && mek.key.fromMe) {
        reply('oyasuminasai')
        }
            
        if (budy.includes('Cekprefix')) {
        reply(`WiBot saat ini memakai prefix ${prefix}`)
        }

				
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
			//auto Expired
			expiredCheck()

            //auto read
            client.chatRead(from)
			
			//function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Trainee'
   	     if (levelRole <= 3) {
   	         role = 'senior trainee'
   	     } else if (levelRole <= 5) {
   	         role = 'private'
   	     } else if (levelRole <= 7) {
   	         role = 'corporal'
   	     } else if (levelRole <= 8) {
   	         role = 'Sergeant'
   	     } else if (levelRole <= 9) {
   	         role = 'staff sgt I'
   	     } else if (levelRole <= 10) {
   	         role = 'staff sgt II'
   	     } else if (levelRole <= 11) {
   	         role = 'staff sgt II'
   	     } else if (levelRole <= 12) {
   	         role = 'Sgt 1st class I'
   	     } else if (levelRole <= 13) {
   	         role = 'Sgt 1st class II'
   	     } else if (levelRole <= 14) {
   	         role = 'Sgt 1st class III'
   	     } else if (levelRole <= 14) {
   	         role = 'Ggt 1st class IV'
   	     } else if (levelRole <= 15) {
   	         role = 'Master sgt I'
   	     } else if (levelRole <= 16) {
   	         role = 'Master sgt II'
   	     } else if (levelRole <= 17) {
   	         role = 'Master sgt III'
   	     } else if (levelRole <= 18) {
   	         role = 'Master sgt IV'
   	     } else if (levelRole <= 19) {
   	         role = 'Master sgt V'
   	     } else if (levelRole <= 20) {
   	         role = '2nd Lt I'
   	     } else if (levelRole <= 21) {
   	         role = '2nd Lt II'
   	     } else if (levelRole <= 22) {
   	         role = '2nd Lt III'
   	     } else if (levelRole <= 23) {
   	         role = '2nd Lt IV'
   	     }
   
			var premi = '*X*'
			if (isPrem) {
				premi = '*✓*'
			} 
			if (isOwner) {
				premi = '*owner*'
			}

            const ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				
				
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			//funtion limited
            const isLimit = (sender) =>{ 
          	if (isOwner && isPrem) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	       if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)
						setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1detik")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2detik")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3detik")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4detik")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("5detik")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
 	   	if (bad.includes(budy)) {
        if (!isGroup) return
        if (!isBadWord) return
        if (isGroupAdmins) return reply(`*${pushname}* ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
        client.updatePresence(from, Presence.composing)
        var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
        setTimeout( () => {
        reply(`*ʙᴇʙᴀɴ ʟᴇᴀᴠᴇ ᴛʜᴇ ɢʀᴏᴜᴘ....*`)
        }, 11000)
        setTimeout( () => {
        client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
                    }, 10000)
        setTimeout( () => {
        reply(`*_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
        }, 0)
        }
 
		//function antilink
        if (budy.includes("://chat.whatsapp.com/")){
        if (!isGroup) return
        if (!isAntiLink) return
        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
        client.updatePresence(from, Presence.composing)
        if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
        setTimeout( () => {
            client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
        }, 10000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 9000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 8000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 7000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 6000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 5000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 4000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 3000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 2000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 1000)
        setTimeout( () => {
            client.updatePresence(from, Presence.composing)
        }, 0)
    }

            //AFK NGULI
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    client.sendMessage(from, ini_txt, text, {quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
            }


            //FUNCTION ERROR DETECTOR
            if (brok.includes(command)) {
                reply(`maaf ${pushname}, Fitur tersebut sedang error. Tunggu owner untuk memperbaikinya!`)
            }


 	       
 	     
 	           //function balance
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 90
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
           	
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) { 

                case 'rankpb':
                if (!isRegistered) return reply(ind.noregis())
                    keyword =  body.slice(8)
                    tipe = keyword.split('/')[0]
                    us = keyword.split('/')[1]
                    rtipe = ''
                    if ( tipe == '1' ) {
                        rtipe = '*HARIAN*'
                    } else if ( tipe == '2' ) {
                        rtipe = '*MINGGUAN*'
                    } else if ( tipe == '3' ) {
                        rtipe = '*KESELURUHAN*'
                    } else {
                        return reply(`cara penggunaan ${prefix}rankpb type/nickname\n\n*type*\n1 = Harian\n2 = Mingguan\n3 = Keseluruhan`)
                    }
    setTimeout( () => {
    scrape = JSON.parse(fs.readFileSync('scrape/rank.json'))
    for ( let i of scrape ) {
    teks = `*RANK PB*\n\n*Nick:* ${i.nick}\n*Rank:* ${i.rank}\n*Status:* ${i.stat}\n*Pangkat:* ${i.pangkat}\n*EXP:* ${i.exp}`
    }
    client.sendMessage(from, teks, text, {quoted: mek})
    }, 2000)

    setTimeout( () => {
     axios.get(`https://www.pointblank.id/ranking/individual/list?termtype=${tipe}&keyword=${us}`)
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const dat = cheerio.load(html);
            const pb = []
                pb.push({
                    nick: dat('.nick').find('.pop_on').text().trim(),
                    rank: dat('.win').find('.ft16').text().trim(),
                    stat: dat('.win').find('.state').text().trim(),
                    pangkat: dat('.rank').text().slice(4).trim(),
                    exp: dat('.exp').text().slice(3).trim()
                })
            const filrank = pb.filter(n => n != undefined)
            fs.writeFile('scrape/rank.json',
                JSON.stringify(filrank, null, 4), (err) => {
                    console.log('Status: 200/Ok');
                });
                    
        }
    })
    }, 0)//sec
    await limitAdd(sender)
    break

    case 'ephemeral'://DhyZx:v
                if (!q) return reply('textnya apa brohh')
                client.sendMessage(from, `${q}`, text, {sendEphemeral: true})
                break
    case 'forward':
    if (!q) return reply('textnya apa brohh')
        client.sendMessage(from, `${q}`, text, {contextInfo: {forwardingScore: 100, isForwarded: true}})
    break

    case 'detik':
    if (!isRegistered) return reply(ind.noregis())
    axios.get(`https://news.detik.com/indeks`)
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const dat = cheerio.load(html);
            const berita = []
            dat('.list-content__item').each(function(i, elem) {
                berita[i] = {
                    title: dat(this).find('h3').text().trim(),
                    published: dat(this).find('span').text().trim(),
                    url: dat(this).find('a').attr('href')
                }
            });
            const listBerita = berita.filter(n => n != undefined)
            fs.writeFile('scrape/detik.json',
                JSON.stringify(listBerita, null, 4), (err) => {
                    console.log('Status: 200/Ok');
                });
        }
    })
    teks = `====================\n`
    scrape = await JSON.parse(fs.readFileSync('scrape/detik.json'))
    for ( let i of scrape ) {
    teks += `*Detik.com*\n\n*Title:* ${i.title}\n*Published:* ${i.published}\n*URL:* ${i.url}\n===========================\n`
    }
    client.sendMessage(from, teks, text, {quoted: mek})
    await limitAdd(sender)
    break

    case 'eventpb':
    if (!isRegistered) return reply(ind.noregis())
    setTimeout( () => {
    teks = `====================\n`
    scrape = JSON.parse(fs.readFileSync('scrape/event_pb.json'))
    for ( let i of scrape ) {
    teks += `*EVENT PB*\n\n*Title:* ${i.title}\n*Date:* ${i.date}\n*Category:* ${i.category}\n*Desc:* ${i.desc}\n*URL:* ${i.url}\n===========================\n`
    }
    client.sendMessage(from, teks, text, {quoted: mek})
        }, 2000)

    setTimeout( () => {
    axions.get(`https://www.pointblank.id/news/list?category=0`)
    .then((response) => {
        if (response.status === 200) {
            const html = response.data;
            const dat = cheerio.load(html);
            const pb = []
            dat('.u2').each(function(i, elem) {
                pb[i] = {
                    title: dat(this).find('.ft16').text().trim(),
                    date: dat(this).find('.ft12').text().trim(),
                    category: dat(this).find('.ntc_dev_cate').text().trim(),
                    desc: dat(this).find('.ft14').text().trim(),
                    url: "https://www.pointblank.id" + dat(this).find('a').attr('href')
                }
            });
            const event = pb.filter(n => n != undefined)
            fs.writeFile('scrape/event_pb.json',
                JSON.stringify(event, null, 4), (err) => {
                    console.log('Status: 200/Ok');
                });
        }
    })
    }, 0)
    await limitAdd(sender)
    break
			
                    case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    reply(ini_txt)
                    break


                case 'mute':
                client.modifyChat(from, 'mute', 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break

                case 'unmute':
                client.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break

                case 'chat':
                if (args.length < 1) return reply('Apa pesan nya?')
                    var kntl = body.slice(6)
                    var ajk = kntl.split("|")[0];
                    var chatnya = kntl.split("|")[1];
                    client.sendMessage(from, `${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
                    break

case 'join':
setTimeout( () => {
client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
suksez = `Sukses Gabung Ke Grup!`
client.sendMessage(from, suksez, text,{quoted : mek, contextInfo: { forwardingScore: 100, isForwarded: true}})
}, 20000) // 1000 = 1s,
setTimeout( () => {
reply('Oke Desu~')
}, 0) // 1000 = 1s,
break

                    case 'setwmsticker':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isOwner) return reply(ind.ownerb())
                    ini_nama = args.join(" ").split("&")
                    namo = ini_nama[0].trim()
                    ator = ini_nama[1].trim()
                    reply(`Namo Dan Ator berhasil di ubah`)
                    break 

                    case 'stickermeme':
                        if ((isMedia && !mek.videoMessage || isQuotedImage)) {
                        test = args.join(" ")
                            reply("Wait Bro Promses Dlu Yekan:V")
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
                        var media = await client.downloadAndSaveMediaMessage(encmedia)
                        imgbb = require('imgbb-uploader')
                        anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
                        getUrl = `${anu.display_url}`
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                //buff = fs.readFileSync(ran)
                                fs.unlinkSync(media)
                                reply(mess.error.stick)
                            })
                            .on('end', function () {
                                console.log('Finish')
                        buffer = getBuffer(`https://api-self.herokuapp.com/api/memegen1?teks=${test}&img_url=${getUrl}`)
                                client.sendMessage(from, buffer, sticker, {quoted: mek})
                                fs.unlinkSync(media)
                                fs.unlinkSync(ran)
                            })
                    }
                        //client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
                            break

                case 'tovid':
                 if (!isRegistered) return reply( ind.noregis())
                if (!isQuotedSticker) return reply('Reply Stickernya!')
                    reply(ind.wait())
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await client.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp4')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                        fs.unlinkSync(media)
                        if (err) return reply(`Error: ${err}`)
                        buffer = fs.readFileSync(ran)
                        client.sendMessage(from, buffer, video, { mimetype: Mimetype.mp4, caption: '*DAH JADI SETAN* '})
                        fs.unlinkSync(ran)
                    })
                    await limitAdd(sender)
                    break

                    case 'kontak':
                        tahu = args[0]
                        names = args[1]
                        if (isNaN(tahu)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${names}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${tahu}:${phoneNum('+' + tahu).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            client.sendMessage(from, {displayName: names, vcard: vcard}, contact)
                            break

                    case 'kontag':
                    var bv = body.slice(8)
                    var jl = `${bv}`
                    if (args[0] === '') {
                    var jl = `*CONTACT TAG*`
                    }
                    var group = await client.groupMetadata(from)
                       var member = group['participants']
                       var mem = []
                       member.map(async adm => {
                       mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                       })
                    const vcardtag = 'BEGIN:VCARD\n'
                                + 'VERSION:3.0\n'
                                + `FN:${body.slice(8)}\n`
                                + 'ORG: Cie Ke Tag;\n'
                                + `TEL;type=CELL;type=VOICE;waid=${client.user.jid.split('@')[0]}:${client.user.jid.split('@')[0]}\n`
                                + 'END:VCARD'
                            client.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: mek })
                        break

                    case 'tagimg':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    case 'tagstick':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break

        case 'xox':
        const exo = [
        'X : X : O',
        'O : X : O',
        'X : O : O',
        'O : X : X',
        'O : X : O',
        'X : O : O',
            'X : X : O',
        'X : X : X',
        'O : O : O',
        ]
            const boxo = exo[Math.floor(Math.random() * exo.length)]
    riucuy = `[  🎰 | X O X ]\n-------------------------\n\n ${boxo}\n\n-------------------------\nKeterangan : Jika anda Mendapatkan Huruf X 3 Huruf Berarti Anda Menang\n*Contoh : X : X : X*`
            reply(riucuy)
                break
                case 'shutdown':
                client.sendMessage(from, `Oke Desu~`, text,{quoted : mek, contextInfo: { forwardingScore: 1, isForwarded: true}})
                await sleep(5000)
        return client.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted: mek})
                break

                case 'animeimg':
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
                    reply(ind.wait())
                    var n = JSON.parse(JSON.stringify(anu));
                    var nimek =  n[Math.floor(Math.random() * n.length)];
                    pok = await getBuffer(nimek)
                    client.sendMessage(from, pok, image, { quoted: mek })
                    break

                    case 'upswimg':
                    client.updatePresence(from, Presence.composing)
                    if (isQuotedImage) {
                        const swew = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        sweb = await client.downloadMediaMessage(swew)
                        client.sendMessage('status@broadcast', sweb, image, { caption: `${q}` })
                    }
                    bur = `Sukses Upload Story Image dengan Caption: ${q}`
                    client.sendMessage(from, bur, text, { quoted: mek, contextInfo: { forwardingScore: 15, isForwarded: true}})
                    break

            case 'emoji':
           if (args === 0) return reply('emojinya?')   
           aku4 = args.join(' ')
           reply(ind.wait())
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[4].url}`
           sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
           break

           case 'ttp': 
          if (args.length < 1) return reply('textnya mana?')
          const hah = body.slice(4)
          const anumu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ttp1?text=${hah}&apikey=demo`)
          const stickerku = new WSF.Sticker(anumu, { crop: true, animated: false, pack: 'selfbot hazn 🤣', author: '' })
          await stickerku.build()
          const stcBuffer = await stickerku.get()
          client.sendMessage(from, stcBuffer, sticker).catch(() => reply('error'))
          break  

            case 'antidelete':
                const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
                const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
                const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
                const isRevoke = dataRevoke.includes(from)
                const isCtRevoke = dataCtRevoke.data
                const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
                const argz = body.split(' ')
                if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
                if (argz[1] == 'aktif') {
                    if (isGroup) {
                        if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
                        dataRevoke.push(from)
                        fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctaktif') {
                    if (!isGroup) {
                        if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
                        dataCtRevoke.data = true
                        fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'banct') {
                    if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
                    if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
                    dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
                    fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
                    client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
                } else if (argz[1] == 'mati') {
                    if (isGroup) {
                        const index = dataRevoke.indexOf(from)
                        dataRevoke.splice(index, 1)
                        fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctmati') {
                    if (!isGroup) {
                        dataCtRevoke.data = false
                        fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
                    }
                }
                break

                case 'fb':
                if (!isRegistered) return reply(ind.noregis());
                if (isLimit(sender)) return reply(ind.limitend(pusname));
                if (!isUrl(args[0]) && !args.includes('facebook.com')) return reply('URL TIDAK VALID');
                anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'GET'});
                reply(ind.wait())
                buper = await getBuffer(anu.result.url);
                teks = anu.result.judul;
                client.sendMessage(from, buper, video, {mimetype: 'video/mp4', caption: teks, quoted: mek});
                await limitAdd(sender);
                break

                case 'darkjoke':
                case 'darkjokes':
                if (!isRegistered) return reply(ind.noregis);
                if (isLimit(sender)) return reply(ind.limitend(pusname));
                anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=${zeksapi}`);
                reply(ind.wait());
                buper = await getBuffer(anu.result);
                client.sendMessage(from, buper, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "darkjokes", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": freply}}}})
                await limitAdd(sender);
                break


			case 'public':
			public = true
			client.sendMessage(from, 'Login!', text, {quoted: mek})
			break
			
		case 'takestick':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`);
		const pembawm = body.slice(11)
		if (!pembawm.includes('|')) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`);
		encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		packname = pembawm.split('|')[0]
		author = pembawm.split('|')[1]
		exif.create(packname, author, `takestick_${sender}`)
		exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('Terjadi Kesalahan')
		    client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
		    fs.unlinkSync(media)
		    fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
		})
		break
				//zeksapi 
				
			case 'listerror':
		    if (!isRegistered) return reply(ind.noregis())
		    added = '=======================\n'
		    teks = 'List Fitur Error:\n\n'
		    for ( let err of brok ) {
		    teks += `|• ${err}\n`
		    }
		    lis = `*Total error:* ${brok.length}\n`
		    pesan = lis + added + teks + added
		    client.sendMessage(from, pesan, text)
		    break
		    
		    case 'adderror':
		    if (!isRegistered) return reply(ind.noregis())
		    if ( args.length < 1 ) return reply(ind.wrongf())
		    fitur = body.slice(10)
		    brok.push(fitur)
		    fs.writeFileSync('./database/bot/listerror.json', JSON.stringify(brok))
		    client.sendMessage(from, 'error telah di tambahkan, tunggu owner untuk memperbaikinya', text, {quoted: mek})
		    break
		    
		    case 'batre':
		    client.on (`CB:action,,battery`, json => { 
		    const batteryLevelStr = json[2][0][1].value 
		    const batterylevel = parseInt (batteryLevelStr) 
		    client.sendMessage(from, "battery level: " + batterylevel + "%", text, {quoted: mek})
		     })
		    //const batre = "Batrery now: " + batterylevel + "%"
		    //client.sendMessage(from, batre, text, {quoted: mek})
		    break
		    
		    case'changelog':
		    client.sendMessage(from, changelog(), text)
		    break

            case 'bmd':
            if (!isRegistered) return reply(ind.noregis())
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            teks = body.slice(5)
            mode = teks.split('/')[0]
            judul = teks.split('/')[1]
            scrape = axios.get(`https://osu.ppy.sh/beatmapsets?m=${mode}&q=${judul}`)
                .then((response) => {
                    if(response.status === 200) {
                        let html = response.data;
                        let dat = cheerio.load(html);
                        let beatmap = [];
                        dat(`.beatmapsets__items .beatmapsets__items-row${[0]}`).each(function(i, elem) {
                            beatmap[i] = {
                                thumb: dat(this).find('.beatmapset-panel__cover-col--play img').attr('src'),
                                title: dat(this).find('.beatmapset-panel__info-row--title a').text().trim(),
                                artist: dat(this).find('.beatmapset-panel__info-row--artist a').text().trim(),
                                creator_map: dat(this).find('.u-ellipsis-overflow').text().trim() + dat(this).find('.u-ellipsis-overflow a').text().trim(),
                                url: dat(this).find('.beatmapset-panel__menu a').attr('href')
                            }
                        });
                        // let filBeatmap = beatmap.filter(n => n != undefined) {
                        //     fs.writeFile()
                        

                    }
                }), (error) => console.log(err);
                break

            case 'play2':
            if (!isRegistered) return reply(ind.noregis())
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            tks = args.join('')
            anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${zeksapi}&q=${tks}`)    
            reply(ind.wait())
            teks = `*PLAY2*\n\n*=> Title*: ${anu.result.title}\n*=> Duration*: ${anu.result.duration}\n*=> Quality*: ${anu.result.quality}\n*=> Size*: ${anu.result.size}\n\nSource: ${anu.result.source}\n${ind.wait()}`
            tum = await getBuffer(anu.result.thumb)
            client.sendMessage(from, tum, image, {caption: teks, quoted: mek})
            aud = await getBuffer(anu.result.link)
            client.sendMessage(from, aud, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}`, quoted: mek})
            await limitAdd(sender)
            break

		    
		    case 'thundertext':
		    if (!isRegistered) return reply(ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    tks = args.join('')
		    reply(ind.wait())
		    scrap = await getBuffer(`https://api.zeks.xyz/api/thundertext?text=${tks}&apikey=${zeksapi}`, {method: 'GET'})
		    client.sendMessage(from, scrap, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fcapt, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": freply}}}})
		    await limitAdd(sender)
		    break

                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('teksnya mana Tod?')
                teks = `${body.slice(8)}`
                if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=${zeksapi}&text=${teks}`, {method: 'get'})
                reply(ind.wait)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
                await limitAdd(sender)
                break
                    
                    case 'text3d2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('teksnya mana Tod?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                    buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${teks}&apikey=${zeksapi}`, {method: 'get'})
                    reply(ind.wait)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
                    await limitAdd(sender)
                    break

				case 'tebakgambar':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=${zeksapi}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soal)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					client.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
				break
				case 'meme':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					nganu = await fetchJson(`https://vinz.zeks.xyz/api/meme`)
					buper = await getBuffer(nganu.result)
					client.sendMessage(from, buper, image, {quoted: mek})
					await limitAdd(sender)
				break		
				/*case 'ttp': 
					pngttp = './tmp/ttp.png'
					webpng = './tmp/ttp.webp'
					const ttptext = body.slice(5)
					fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
					.then(async res => {
					const ttptxt = await res.json()
					base64Img.img(ttptxt.base64, 'tmp', 'ttp', function(err, filepath) {
					if (err) return console.log(err);
					exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
					buffer = fs.readFileSync(webpng)
					client.sendMessage(from, buffer, sticker)
					fs.unlinkSync(webpng)
					fs.unlinkSync(pngttp)
					})
					})
					});
				break
*/
				case 'pornhub':
                	if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(9)
					var porn = gh.split("&")[0];
					var hub = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}pornhub Ramlan & Hub`)
					reply(ind.wait())
					alan = await getBuffer(`https://vinz.zeks.xyz/api/pornhub?text1=${porn}&text2=${hub}`)
					client.sendMessage(from, alan, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'textlight':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (args.length < 1) return reply(ind.wrongf())
					ligh = body.slice(11)
					if (ligh.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(ind.wait())
					lawak = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${ligh}&apikey=${zeksapi}`)
			    	client.sendMessage(from, lawak, image, {quoted: mek})
			   	 await limitAdd(sender)
		  	  break
                case 'glitchtext':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext Ramlan & Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=${zeksapi}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'nulis':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis Ramlan baik hati`)
					nul = body.slice(7)
					reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
					tak = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nul}&apikey=${zeksapi}`)
					client.sendMessage(from, tak, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
					await limitAdd(sender)				
				break			
				case 'tahta':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}hartatahta hanya dia`)
					har = body.slice(12)
					reply('「❗」Hirti Tihti Tai Anjg :v')
					buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${har}&apikey=${zeksapi}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
				//premiom
				case 'checkprem':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				break
				
				//qr 
				case 'qrcode':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
				//tobz 
				case 'lirik':
				if (!isRegistered) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
				anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${body.slice(7)}`)
				teks = `${anu.result.artist} - ${anu.result.title}\n\n${anu.result.lirik}`
				client.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Lyric", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": freply}}}})
				await limitAdd(sender)
				break
				/*case 'ttp':
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ttp?text=${body.slice(5)}&apikey=${TobzKey}`)
				res = await getBase64(anu.base64)
				client.sendMessage(from, res, sticker, {quoted:mek})
				break
*/
                case 'chord':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=${TobzKey}`)
                client.sendMessage(from, anu.result, text, {quoted:mek})
                break
				case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
            case 'bitly':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
                
                
					case 'cium':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				
              
                case 'joox':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzKey}`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
				//freerestapi 
				case 'igstalk':
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break 
				//daftar 
				case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (umurUser > 40) return reply('umurmu dh bau tanah Tod!!')
                if (umurUser < 10) return reply('anak kecil main bot mana bisa😈👎')
                if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break
				//terhambar 
				case 'quotemaker':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
				//fadli 
				case 'pinterest':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					await limitAdd(sender)
					break 
				case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'emoji':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${args[0]}&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'tiktok':
				if (!isPrem) return reply(ind.premon(pushname))
				anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args[0]}`, {method : 'get' })
				if (anu.error) return reply(anu.error)
					teks = `*From* : ${anu.result.from}\n*Judul* : ${anu.result.title}\n*Upload* : ${anu.result.uploaded}`
					thumb = await getBuffer(anu.result.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'quotes':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break		
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
				break 
				case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
				case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
				break 
				case 'ytmp3':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thum = await getBuffer(anu.thumb)
					client.sendMessage(from, thum, image, {quoted: mek, caption: teks})
					buffe = await getBuffer(anu.result)
					client.sendMessage(from, buffe, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break

			    case 'fototiktok':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
				break
				//mhazria 
				case 'resepmasakan':
					if (!isRegistered) return reply(ind.noregis())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
				case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'map':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               	 anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
               	 buffer = await getBuffer(anu.gambar)
              	  client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
				break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
				break

                /*======================================{ANIME MENU}=========================================*/
                case 'husbu':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    res = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
                    reply(ind.wait())
                    capt = `*Name:* ${res.waifu}`
                    buffer = await getBuffer(res.image)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
                    await limitAdd(sender)
                    break
                    
                case 'waifu':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu`, {method: 'get'})
                    reply(ind.wait())
                    capt = `*Name: *${anu.name}\n*Description: *${anu.desc}`
                    buffer = await getBuffer(anu.image)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
                    await limitAdd(sender)
                    break
                    
                case 'loli':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`, {method: 'get'})
                    reply(ind.wait())
                    //nyeee = await getBuffer(anu.result)
                    client.sendMessage(from, anu, image, { caption: 'O... Oni B. Bakaa >///<', quoted: mek })
                    await limitAdd(sender)
                    break
                    
                    
                    case 'shota':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ntah = body.slice(7)
                    img = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzKey}`, {method: 'get'})
                    reply(ind.wait)
                    buffer = await getBuffer(img.result)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: '😒'})
                    await limitAdd(sender)
                    break
                    
                    
                    
                case 'nekonime':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(10)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`, {method: 'get'})
                    reply(ind.wait())
                    buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, { caption: 'Save loli, Pukul furry', quoted: mek})
                    await limitAdd(sender)
                    break
                // case 'neko':
                //         if (!isRegistered) return reply(ind.noregis())
                //         if (isLimit(sender)) return reply(ind.limitend(pusname))
                //     res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
                //     reply(ind.wait())
                //     buffer = await getBuffer(res.result)
                //     client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
                //     await limitAdd(sender)
                //     break
                case 'ranime':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isNsfw) return reply(ind.nsfwoff())
                    gatauda = body.slice(8)
                    reply(ind.wait())
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    
                case 'anime':
                    if(!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks = body.slice(9)
                    reply(ind.wait)
                    anu = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=${teks}`)
                    reply(anu.result)
                    await limitAdd(sender)
                    break
                
                case 'nsfwloli':
                try {   
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isNsfw) return reply(ind.nsfwoff())
                if (!isGroup) return reply(ind.groupo()) 
                res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${apivhtear}`, {method: 'get'})
                    reply(ind.wait())
                    buffer = await getBuffer(res.result.result)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
                } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                }
                    await limitAdd(sender)
                    break 
                case 'nsfwneko':
                try {  
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (!isNsfw) return reply(ind.nsfwoff())
                        res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzKey}`, {method: 'get'})
                        buffer = await getBuffer(res.result)
                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    await limitAdd(sender) 
                    break 
                    
                case 'yuri':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (!isNsfw) return reply(ind.nsfwoff())
                res = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_yuri`, {method: 'get'})
                // buffer = await getBuffer(res.result.url)
                client.sendMessage(from, res, image, {quoted: mek, caption: 'Yurification🤤'})
                await limitAdd(sender) 
                break 
            
                case 'wibu':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${apivhtear}`)
                    reply(ind.wait())
                    buffer = await getBuffer(data.result.foto)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: '^W^'})
                    await limitAdd(sender)
                    break
            case 'nekopoi':
            if (!isRegistered) return reply(ind.noregis())
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (!isNsfw) return reply(ind.nsfwoff())
            if (!isGroup) return reply(ind.groupo()) 
                    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
            reply(ind.wait())
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nImage: ${neko.image}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
                    await limitAdd(sender) 
                    break  
                    
                    
                    case 'cp':
                    case 'couple':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limiend(pusname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/coupleship?apikey=${devcityapi}`, {method: 'get'})
                    cp = JSON.parse(JSON.stringify(anu.result.data));
                    pp = cp[Math.floor(Math.random() * cp.length)];
                    im = await getBuffer(pp.coupleImages.imageUrlOne)
                    age = await getBuffer(pp.coupleImages.imageUrlTwo)
                    cpt = `*${pp.names}*`
                    client.sendMessage(from, im, image,{quoted: mek})
                    client.sendMessage(from, age, image, {caption: `${cpt}`});
                    await limitAdd(sender)
                    break
                    
                    case 'kusonime':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anu = body.slice(11)
                    anime = await fetchJson(`https://tobz-api.herokuapp.com/api/kuso?q=${anu}&apikey=${TobzKey}`, {method: 'get'})
                    if (anime.error) return reply(anime.error)
                    res = `Judul: ${anime.title}\nIngfo: ${anime.info}\nLink: ${anime.link_dl}\nSinopsis: ${anime.sinopsis}`
                    buffer = await getBuffer(anime.thumb)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: `${res}`})
                    await limitAdd(sender)
                    break
                    
                    case 'topanime':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anime = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/topanime?apikey=${devcityapi}`, {method: 'get'})
                    //imeg = await getBuffer(`https://images.app.goo.gl/bSpYrvRaSeKFU58R7>`)
                    reply(ind.wait)
                    let ki = 0
                    let mikk = `${anime.result.data}`
                    let klein = `*${anime.result.message}--------------*\n\n`
                    let kto = `${anime.result.data.stats}`
                    try {
                    for (let g = 0;g < 3; g++) {
                    ki++
                    klein += `${ki}*Rank:* ${mikk[g].rank}\nTittle:* ${mikk[g].title}\n*Studio:* ${mikk[g].studio}\n\n*WeeksOnTop:* ${kto[g].weeksOnTop}\n*Previously:* ${kto[g].previously}\n*Stat:* ${kto[g].stat}\n*-----------------*`
                    }
                    client.sendMessage(from, klein, text, {quoted: mek})
                    } catch {
                    reply('terjadi kesalahan, mohon jangan digunakan dulu')
                    }
                    await limitAdd(sender)
                    break
                    
                    case 'manga':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    manga = body.slice(7)
                    ling = await fetchJson(`https://onlydevcity.herokuapp.com/api/manga?search=${manga}&apikey=${devcityapi}`, {method: 'get'})
                    reply(ind.wait)
                    downloads = `${ling.result.downloads}`
                    ngebuff = await getBuffer(ling.result.thumb)
                    capt = `*Judul:* *_${ling.result.name}_*\n*Author:* ${ling.result.author}\n*Genre:* ${ling.result.genre}\n*Type:* ${ling.result.type}\n*Rating:* ${ling.result.rating}\n*Status:* ${ling.result.status}\n*Deskripsi:* ${ling.result.description}\n\n⚠ _*NOTE*_ ⚠ : ${ling.result.note}\n*Downloads:* ${downloads}`
                    client.sendMessage(from, ngebuff, image, {quoted: mek, caption: `${capt}`})
                    await limitAdd(sender)
                    break
                    
                    case 'nhentai':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isNsfw) return reply(ind.nsfwoff())
                    if (!isGroup) return reply(ind.groupo())
                    if (args.length < 1) return reply('I need nuclear code!🤤')
                    code = body.slice(9)
                    anu = await fetchJson(`lhttps://mnazria.herokuapp.com/api/nhentai?code=${code}`, {method: 'get'})
                    reply(ind.wait())
                    ngebuff = await getBuffer(anu)
                    client.sendMessage(from, ngebuff, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    
            case 'randomhentong':
            if (!isRegistered) return reply(ind.noregis())
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (isNoMedia) return reply(ind.nomed())
            if (!isNsfw) return reply(ind.nsfwoff())
                    gatauda = body.slice(15)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
                    reply(ind.wait())
                    buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, { caption: 'Comli teross', quoted: mek})
                    await limitAdd(sender)
                    break   
                    
            case 'blowjob':
            if (!isRegistered) return reply(ind.noregis())
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (!isNsfw) return reply(ind.nsfwoff())
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                fs.unlinkSync(ranp)
                if (err) return reply(ind.stikga())
                buffer = fs.readFileSync(rano)
                client.sendMessage(from, buffer, sticker, {quoted: mek})
                fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
                
                case 'attp':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                tek = body.slice(6)
                anu = await getBuffer(`https://xteam.xyz/attp?file&text=${tek}`)
                if (anu.error) return reply(anu.error)
                client.sendMessage(from, anu, sticker, {quoted: mek})
                await limitAdd(sender)
                break
                
                
                case 'baka':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=${devcityapi}`, {method: 'get'});
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        fs.unlinkSync(ranp)
        if (err) return reply(ind.stikga())
        buffer = fs.readFileSync(rano)
        client.sendMessage(from, buffer, sticker, {quoted: mek})
        fs.unlinkSync(rano)
        })
        await limitAdd(sender)
        break
                    
            case 'nangis':
            if (!isRegistered) return reply(ind.noregis())
            if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
                    reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
                    if (anu.error) return reply(anu.error)
                    exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    client.sendMessage(from, buffer, sticker, {quoted: mek})
                    fs.unlinkSync(rano)
                    })
                    await limitAdd(sender)
                    break
                case 'hentai':
                try {
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (!isNsfw) return reply(ind.nsfwoff())
                        res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`, {method: 'get'})
                        buffer = await getBuffer(res.result)
                        client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    await limitAdd(sender) 
                    break 
                    case 'animekiss':
                            if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isNsfw) return reply(ind.nsfwoff())
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
                    exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buffer = fs.readFileSync(rano)
                        client.sendMessage(from, buffer, sticker, {quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    await limitAdd(sender) 
                    break 

                    /*=================================={AKHIR ANIME MENU}==============================================*/

                    /*=================================={CHARACTER ANIME}==============================================*/

                    case 'kaneki':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${apivhtear}`, {method: 'get'})
                    var ka = JSON.parse(JSON.stringify(anu.result));
                    var ne =  ka[Math.floor(Math.random() * ka.length)];
                    ki = await getBuffer(ne)
                    client.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek })
                    await limitAdd(sender) 
                    break 
                    
                    case 'kurumi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
                    kur = JSON.parse(JSON.stringify(anu));
                    imi =  kur[Math.floor(Math.random() * kur.length)];
                    nye = await getBuffer(imi)
                    client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
                    await limitAdd(sender) 
                    break 
                    
                case 'miku':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
                    mi = JSON.parse(JSON.stringify(anu));
                    ku =  mi[Math.floor(Math.random() * mi.length)];
                    nye = await getBuffer(ku)
                    client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
                    await limitAdd(sender) 
                    break 
                    
                    case 'megumin':
                    if (!isRegistered) return reply(ind.noregis());
                    if (isLimit(sender)) return reply(ind.limitend(puname))
                    ani = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/megumin?apikey=${devcityapi}`, {method: 'get'});
                    reply('*Wait, Ganz*')
                    me = await getBuffer(ani.result.url)
                    client.sendMessage(from, me, image, {quoted: mek, caption: '💣explotion💥'});
                    await limitAdd(sender)
                    break
                    
                    case 'shinobu':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    kny = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/shinobu?apikey=${devcityapi}`, {method: 'get'});
                    reply('*Wait, Ganz*')
                    kaenye = await getBuffer(kny.result.url)
                    client.sendMessage(from, kaenye, image, {quoted: mek, caption: 'ara ara, daijoubu desu ka?'});
                    await limitAdd(sender)
                    break
                    
                case 'naruto':
                if (!isRegistered)return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
                    naru = JSON.parse(JSON.stringify(anu));
                    to =  naru[Math.floor(Math.random() * naru.length)];
                    nye = await getBuffer(to)
                    client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
                    await limitAdd(sender)
                    break 
                    
                case 'minato':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
                    min = JSON.parse(JSON.stringify(anu));
                    ato =  min[Math.floor(Math.random() * min.length)];
                    nye = await getBuffer(ato)
                    client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
                    await limitAdd(sender)
                    break 
                case 'boruto':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
                    bor = JSON.parse(JSON.stringify(anu));
                    uto =  bor[Math.floor(Math.random() * bor.length)];
                    nye = await getBuffer(uto)
                    client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
                    await limitAdd(sender)
                    break 
                    
                case 'hinata':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
                    hina = JSON.parse(JSON.stringify(anu));
                    ta =  hina[Math.floor(Math.random() * hina.length)];
                    nye = await getBuffer(ta)
                    client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
                    await limitAdd(sender)
                    break 
                case 'sasuke':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
                    sasu = JSON.parse(JSON.stringify(anu));
                    ke =  sasu[Math.floor(Math.random() * sasu.length)];
                    nye = await getBuffer(ke)
                    client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
                    await limitAdd(sender) 
                    break 
                    
                case 'sakura':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
                    sak = JSON.parse(JSON.stringify(anu));
                    kura =  sak[Math.floor(Math.random() * sak.length)];
                    nye = await getBuffer(kura)
                    client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
                    await limitAdd(sender) 
                    break 

                    /*============================================{AKHIR CHARACTER ANIME}============================================*/

				//auto respond 
				case 'ping':
          		if (!isRegistered) return reply(ind.noregis())
           		 await client.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break

                    case 'profile':               
                     if (!isRegistered) return reply(ind.noregis())
                    client.updatePresence(from, Presence.composing)
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    try {
                    profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                    } catch {
                    profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                     profile = `╭─「 *_ᴘʀᴏғɪʟᴇ ᴀɴᴅᴀ_* 」\n|• *Nama:* ${pushname}\n|• *Umur :*${checkAgeUser(sender)}\n|• *User Terdaftar:* √\n|• *Terdaftar Sejak :* ${checkWhenRegisUser(sender)}\n|• *Link:* wa.me/${sender.split("@")[0]}\n|• *Uang :* ${checkATMuser(sender)}\n|• *Jumlah Limit :* ${brpLimit(sender)}\n|• *Exp :* ${getLevelingXp(sender)}\n|• *Level :* ${getLevelingLevel(sender)}\n╰──────────────────`
                    ngebuff = await getBuffer(profil)
                    client.sendMessage(from, ngebuff, image, {quoted: mek, caption: profile})
                    break

                    case 'caklontong':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/caklontong?apikey=${devcityapi}`, {method: 'get'})
                    caklontong = `*${anu.result.soal}*`
                    setTimeout( () => {
                    client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.deskripsi+'*', text, {quoted: mek}) // ur cods
                    }, 30000) // 1000 = 1s,
                    setTimeout( () => {
                    client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
                    }, 20000) // 1000 = 1s,
                    setTimeout( () => {
                    client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
                    }, 10000) // 1000 = 1s,
                    setTimeout( () => {
                    client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
                    }, 2500) // 1000 = 1s,
                    setTimeout( () => {
                    client.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
                    }, 0) // 1000 = 1s,
                    await limitAdd(sender) 
                    break 

                    case 'hobby':
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                    hobby = body.slice(1)
                    const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','Nonton Wibu']
                    const by = hob[Math.floor(Math.random() * hob.length)]
                    client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
                    await limitAdd(sender)
                    break

                    case 'watak':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    watak = body.slice(1)
                    wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
                    const tak = wa[Math.floor(Math.random() * wa.length)]
                    client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
                    break 

                case 'fitnah':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))                
                if (!isGroup) return reply(ind.groupo())                 
                if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
                var gh = body.slice(8)
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    var replace = gh.split("&")[0];
                    var target = gh.split("&")[1];
                    var bot = gh.split("&")[2];
                    client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
                    break

                    //Case mancing  by TAUFIK - Kun
                    case 'mancing':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
                    setTimeout( () => {
                    const fishing = Math.ceil(Math.random() * 5)
                    addIkan(sender, fishing)
                    reply(`*SELAMAT*\n\n ${pushname} kamu mendapatkan *${fishing}*🐟 selama 2 menit`)
                    }, 120000); //2 minute
                    setTimeout( () => {
                    reply('Sedang Mancing selama 2 menit, silahkan tunggu...')
                    }, 0) //1sec
                    break

                    case 'ikanku':
                    if (!isRegistered) return reply(ind.noregis())
                    teks = `*Jumlah Ikan Yang didapatkan _${pushname}_ adalah:*\n\n*_${getMancingIkan(sender)}_*🐟`
                    client.sendMessage(from, teks, text, {quoted: mek})
                    break

                    case 'jualikan':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
                    bayar = body.slice(10)
                    const hargaIkan = 450
                    const hasil = bayar * hargaIkan
                    if ( getMancingIkan(sender) <= 1 ) return reply(`maaf ${pusname} kamu tidak punya ikan`)
                    if ( getMancingIkan(sender) >= 1 ) {
                        jualIkan(sender, bayar)
                        addKoinUser(sender, hasil)
                    await reply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah ikan dijual:* ${bayar}\n*Uang didapat:* ${hasil}\n\n*Sisa ikan:* ${getMancingIkan(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
                    }
                    break

                    //END MANCING

                    case 'img2url':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    var media = await  client.downloadAndSaveMediaMessage(encmedia)
                    var imgbb = require('imgbb-uploader')
                    imgbb('bfe53fe15a978cf1938d96123f065206', media)
                        .then(data => {
                            var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                            ibb = fs.readFileSync(media)
                             client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                        })
                        .catch(err => {
                            throw err
                        })
                    await limitAdd(sender)  
                    break  


                    case 'casino':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
                    cas = body.slice(8)
                    if ( args.length < 1 ) return reply('Dih, NooB!!')
                    if ( isNaN(cas) ) return reply('Lu mau taruhan brp?')
                    confirmATM(sender, cas)
                    setTimeout( () => {
                    const rand = Math.ceil(Math.random() * 1500)
                    const intCas = parseInt(cas)
                    const judi = intCas + rand 
                    const nth = Math.random()
                    
                    if ( nth > 0.46 ) {
                        addKoinUser(sender, judi)
                        reply(`*KAMU MENANG!!*\n\n*SELAMAT*\n${pushname} kamu memenangkan casino sebesar Rp*${judi}* selama 1 menit`)
                    } else if ( nth < 0.47 ) {
                        reply(`*KAMU KALAH*\n\n*MAAF*\n${pushname} kamu kalah dalam permainan kali ini dan kehilangan sebesar ${cas}\n_*SEMOGA BERUNTUNG LAIN KALI*_`)
                    } else {
                    reply(' X error X ')
                    }
                    }, 10000); //10 sec
                    setTimeout( () => {
                        reply(`Wait Ganz, Sedang bermain dengan *_MASTAH_* pro pler!!\nSelama 10 detik.`)
                    }, 0) //1 sec
                    
                    await limitAdd(sender)
                    break

                    case 'chatlist':
case 'cekchat':
    client.updatePresence(from, Presence.composing)
    var itsme = `${numer}@s.whatsapp.net`
    var split = `*𝘾𝙀𝙆 𝘼𝙇𝙇-𝘾𝙃𝘼𝙏*`
    var selepbot = {
        contextInfo: {
        participant: itsme,
        quotedMessage: {
        extendedTextMessage: {
        text: split,
                    }
                }
            }
            
        }
    teks = `Total : ${totalchat.length}`
    client.sendMessage(from, teks, text, selepbot)
    break


    case 'infopesan':
    if (!isRegistered) return reply(ind,noregis())

    case 'mystat': 
    case 'mystatus':
                let i = []
                let giid = []
                for (mem of totalchat){
                    i.push(mem.jid)
                }
                for (pers of i){
                    if (pers && pers.includes('g.us')){
                        giid.push(pers)
                    }
                }
                let timestampi = speed();
                let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
                anu = process.uptime()
                teskny = `*V. Whatsapp :* ${wa_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}
*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${kyun(anu)}`
                client.sendMessage(from, teskny, text)
                break

    case 'pp':
    if (!isRegistered) return reply(ind.noregis());
    if (isLimit(sender)) return reply(ind.limitend(pusname));
    if (mek.extendedTextMessage != undefined) {
    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
     try {
        ppp = await client.getProfilePicture(mentioned[0])
     } catch {
        ppp = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
     }
     client.sendMessage(from, ppp, image, {quoted: mek})
    }
    await limitAdd(sender)
    break

    case 'takestick':
    if (!isQuotedSticker) return reply('Stiker aja om')
    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
     media = await client.downloadAndSaveMediaMessage(encmedia)
	anu = args.join(' ').split('|')
	 satu = anu[0] !== '' ? anu[0] : 'Ini Punya Gua'
	dua = typeof anu[1] !== 'undefined' ? anu[1] : 'MiKako'
    require('./lib/exif.js').createExif(satu, dua)
    require('./lib/exif.js').modStick(media, client, mek, from)
    break

case 'help': 
case 'menu':
if (!isRegistered) return reply(ind.noregis())
const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const uangku = checkATMuser(sender)
try {
    buffer = fs.readFileSync('./storage/thumb/mengoke.jpeg')
} catch {
    buffer = await getBuffer(`https://imgur.com/a/M9oiU76`)
}
var masa = '';
var nthla = moment().tz('Asia/Jakarta').format("HH:mm:ss")
if (nthla > '04:00:00' && nthla < '09:00:00') {
masa = '_SELAMAT PAGI_'
} else if ( nthla > '09:00:00' && nthla < '15:00:00' ) {
masa = '_SELAMAT SIANG_'
} else if ( nthla > '15:00:00' && nthla < '18:00:00' ) {
masa = '_SELAMAT SORE_'
} else {
masa = '_SELAMAT MALAM_'
}

runtime = process.uptime()
teks = `${kyun(runtime)}`
//result = fs.readFileSync('sticker/iky.ekif')
var itsme = `${numer}@s.whatsapp.net`
var split = `${cr}`
// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
const bruhhhh = {
    contextInfo: {
        participant: itsme,
            quotedMessage: {
                extendedTextMessage: {
                    text: split,
                        }
                    }
                }
            }
var timeOfAll = `${jam} : ${menit} : ${detik}`
var puasa = '';
var persHari = parseInt(hari)
if ( persHari > 00 ) {
puasa = `*ROAD TO RAMDHAN*\n${hari} Hari | ${jam} Jam - ${menit} Menit - ${detik} Detik lagi!!\n*CKp SbR*`
} else if ( persHari < 00 ) {
puasa = '*SELAMAT MENUNAIKAN IBADAH PUASA*'
} else if ( jam > '18' ) {
puasa = '*SELAMAT BERBUKA PUASA*'
}
const deser = `
 ╭══─⊱ ❰ *ABOUT USER* ❱ ⊰─══
 │ Nama : ${pushname}
 │ Premium : ${premi}
 │ Nomer : wa.me/${sender.split("@")[0]}
 │ Uang mu : Rp${uangku}
 │ XP : ${getLevelingXp(sender)}/${reqXp} 
 │ Level : ${getLevelingLevel(sender)}
 │ Role : ${role}
 ╰ User register : ${_registered.length}

 ${masa}

 ${puasa}

 *_BOT_* telah aktif selama:\n${teks}

▬▭▬▭▬▭▬▭▬▭▬▭▬
 *${prefix}ingfo*
 *${prefix}donasi*
 *${prefix}owner*
 *${prefix}bot*
 *${prefix}profile*
 *${prefix}bahasa*
 *${prefix}runtime
 *${prefix}ramadhan
 ▬▭▬▭▬▭▬▭▬▭▬▭▬

╭══─⊱ ❰ *ABOUT BOT* ❱ ⊰─══➤
╠☞ Name : ${client.user.name}
╠☞ browser : ${client.browserDescription[1]}
╠☞ server : ${client.browserDescription[0]}
╠☞ version : ${client.browserDescription[2]}
╠☞ speed : ${process.uptime()}
╠☞ handphone : ${client.user.phone.device_manufacturer}
╠☞ versi wa : ${client.user.phone.wa_version}
╰════─⊱  ⸨ *MiKako⚔️* ⸩  ⊰─════╯

▬▭▬❰ *MAKER MENU* ❱▬▭▬
│=❏ ${prefix}sticker
│=❏ ${prefix}textsky
│=❏ ${prefix}silktext
│=❏ ${prefix}epepserti
│=❏ ${prefix}pubg
│=❏ ${prefix}glitchtext
│=❏ ${prefix}narutobanner
│=❏ ${prefix}lovemsg
│=❏ ${prefix}ngopi
│=❏ ${prefix}ngopi2
│=❏ ${prefix}trigger
│=❏ ${prefix}wasted
│=❏ ${prefix}matrix
│=❏ ${prefix}nightbeach
│=❏ ${prefix}smoke
│=❏ ${prefix}galaxytext
│=❏ ${prefix}grafity
│=❏ ${prefix}logogaming
│=❏ ${prefix}wanted
│=❏ ${prefix}kalender
│=❏ ${prefix}ytcomment
│=❏ ${prefix}phlogo
│=❏ ${prefix}logoepep
│=❏ ${prefix}wolflogo
│=❏ ${prefix}quotemaker
│=❏ ${prefix}qrcode
│=❏ ${prefix}nulis
│=❏ ${prefix}tahta
│=❏ ${prefix}ttp
╰▬▭▬▭▬▭▬▭▬▭▬▭▬
 
▬▭▬❰ *FUN MENU* ❱▬▭▬
│=❏ ${prefix}jankenpom
│=❏ ${prefix}lirik
│=❏ ${prefix}mancing
│=❏ ${prefix}ikanku
│=❏ ${prefix}jualikan
│=❏ ${prefix}mining
│=❏ ${prefix}truth
│=❏ ${prefix}dare
│=❏ ${prefix}hobby
│=❏ ${prefix}terbalik
│=❏ ${prefix}say
│=❏ ${prefix}watak
│=❏ ${prefix}fitnah
│=❏ ${prefix}babi
│=❏ ${prefix}cekganteng
│=❏ ${prefix}cekcantik
│=❏ ${prefix}katailham
│=❏ ${prefix}fakta
│=❏ ${prefix}memeindo
│=❏ ${prefix}casino
│=❏ ${prefix}artinama
│=❏ ${prefix}chord
│=❏ ${prefix}bisakah
│=❏ ${prefix}kapankah
│=❏ ${prefix}apakah
│=❏ ${prefix}rate
│=❏ ${prefix}tebakgambar
│=❏ ${prefix}meme
│=❏ ${prefix}textlight
│=❏ ${prefix}glitchtext
│=❏ ${prefix}slap
│=❏ ${prefix}tampar
│=❏ ${prefix}moddroid
│=❏ ${prefix}happymod
╰▬▭▬▭▬▭▬▭▬▭▬▭▬
 
▬▭▬❰ *MUTUAL* ❱▬▭▬
│=❏ ${prefix}mutual
│=❏ ${prefix}next
╰▬▭▬▭▬▭▬▭▬▭▬▭▬
 
▬▭▬❰ *MEDIA MENU* ❱▬▭▬
│=❏ ${prefix}beritahoax
│=❏ ${prefix}wiki
│=❏ ${prefix}jadwalsholatl
│=❏ ${prefix}kisahnabi
│=❏ ${prefix}quran
│=❏ ${prefix}randomkpop
│=❏ ${prefix}wpmuntainview
│=❏ ${prefix}tts
│=❏ ${prefix}brainly
│=❏ ${prefix}pinterest
│=❏ ${prefix}resepmasakan
│=❏ ${prefix}igstalk
│=❏ ${prefix}bitly
│=❏ ${prefix}tiktokstalk
│=❏ ${prefix}ssweb
│=❏ ${prefix}kbbi
╰▬▭▬▭▬▭▬▭▬▭▬▭▬

▬▭▬❰ *MEDIA MENU* ❱▬▭▬
│=❏ ${prefix}wibu
│=❏ ${prefix}husbu
│=❏ ${prefix}waifu
│=❏ ${prefix}couple
│=❏ ${prefix}loli
│=❏ ${prefix}loli2
│=❏ ${prefix}shota
│=❏ ${prefix}neko
│=❏ ${prefix}nekonime
│=❏ ${prefix}ranime
│=❏ ${prefix}anime
│=❏ ${prefix}randomhentong
│=❏ ${prefix}baka
│=❏ ${prefix}nangis
│=❏ ${prefix}blowjob
│=❏ ${prefix}nsfwneko
│=❏ ${prefix}hentai
│=❏ ${prefix}yuri
│=❏ ${prefix}animekiss
│=❏ ${prefix}kusonime
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

▬▭▬❰ *CHARACTER ANIME* ❱▬▭▬
│=❏ ${prefix}naruto
│=❏ ${prefix}sasuke
│=❏ ${prefix}hinata
│=❏ ${prefix}sakura
│=❏ ${prefix}kurumi
│=❏ ${prefix}miku
│=❏ ${prefix}megumin
│=❏ ${prefix}shinobu
│=❏ ${prefix}boruto
│=❏ ${prefix}minato
╰▬▭▬▭▬▭▬▭▬▭▬▭▬



▬▭▬❰ *SONG* ❱▬▭▬
│=❏ ${prefix}joox
│=❏ ${prefix}play
│=❏ ${prefix}ytmp3
│=❏ ${prefix}ytmp4
╰▬▭▬▭▬▭▬▭▬▭▬▭▬
 
▬▭▬❰ *NSFW* ❱▬▭▬
│=❏ ${prefix}anjing
│=❏ ${prefix}blowjob
│=❏ ${prefix}nekonime
│=❏ ${prefix}pokemon
│=❏ ${prefix}cium
│=❏ ${prefix}peluk
╰▬▭▬▭▬▭▬▭▬▭▬▭▬

 
▬▭▬❰ *LIMIT & UANG* ❱▬▭▬
│=❏ ${prefix}limit
│=❏ ${prefix}buylimit
│=❏ ${prefix}transfer
│=❏ ${prefix}dompet
│=❏ ${prefix}giftlimit
│=❏ ${prefix}leaderboard
╰▬▭▬▭▬▭▬▭▬▭▬▭▬
 
▬▭▬❰ *GROUP MENU* ❱▬▭▬
│=❏ ${prefix}delete
│=❏ ${prefix}hidetag
│=❏ ${prefix}blocklist
│=❏ ${prefix}grouplist
│=❏ ${prefix}level
│=❏ ${prefix}linkgc
│=❏ ${prefix}tagall
│=❏ ${prefix}setpp
│=❏ ${prefix}add
│=❏ ${prefix}kick
│=❏ ${prefix}setname
│=❏ ${prefix}setdesc
│=❏ ${prefix}demote
│=❏ ${prefix}promote
│=❏ ${prefix}listadmin
│=❏ ${prefix}listbadword
│=❏ ${prefix}group [buka/tutup]
│=❏ ${prefix}leveling [enable/disable]
│=❏ ${prefix}nsfw [1/0]
│=❏ ${prefix}simih [1/0]
│=❏ ${prefix}welcome [1/0]
│=❏ ${prefix}antilink [1/0]
│=❏ ${prefix}nobadword [enable/disable]
╰▬▭▬▭▬▭▬▭▬▭▬▭▬
 
▬▭▬❰ *TOOLS* ❱▬▭▬
│=❏ ${prefix}bass
│=❏ ${prefix}tomp3
│=❏ ${prefix}slowmo
│=❏ ${prefix}gemok
│=❏ ${prefix}tupai
│=❏ ${prefix}ocr
│=❏ ${prefix}wait
│=❏ ${prefix}toimg
│=❏ ${prefix}img2url
│=❏ ${prefix}translate
╰▬▭▬▭▬▭▬▭▬▭▬▭▬
 
▬▭▬❰ *STORAGE* ❱▬▭▬
│=❏ ${prefix}addsticker
│=❏ ${prefix}getsticker
│=❏ ${prefix}stickerlist
│=❏ ${prefix}addvideo
│=❏ ${prefix}getvideo
│=❏ ${prefix}videolist
│=❏ ${prefix}getimage
│=❏ ${prefix}addImage
│=❏ ${prefix}imagelist
│=❏ ${prefix}addaudio
│=❏ ${prefix}getaudio
│=❏ ${prefix}audiolist
╰▬▭▬▭▬▭▬▭▬▭▬▭▬

▬▭▬❰ *OWNER MENU* ❱▬▭▬
│=❏ ${prefix}bc
│=❏ ${prefix}addbadword
│=❏ ${prefix}delbadword
│=❏ ${prefix}bcgc
│=❏ ${prefix}kickall
│=❏ ${prefix}setreply
│=❏ ${prefix}setprefix
│=❏ ${prefix}clearall
│=❏ ${prefix}block
│=❏ ${prefix}unblock
│=❏ ${prefix}leave
│=❏ ${prefix}event [1/0]
│=❏ ${prefix}clone
│=❏ ${prefix}setppbot
│=❏ ${prefix}setname
│=❏ ${prefix}setbio
╰▬▭▬▭▬▭▬▭▬▭▬▭▬
 
❏======❏THANGKS TO❏======❏
 │
 │ • AFFIS JUNIANTO <dev>
 │ 
 │ • Dan Semua Yg Terkait
 │   Dengan Project Ini
 │
 ╰ • NOTE : jangan ngemis
`
client.sendMessage(from, deser, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fcapt, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": freply}}}})
break

case 'bugGc':
case 'buggc':
if (itsMe && !isOwner) return reply('Lu Siapa Anjinxx')
client.toggleDisappearingMessages(from, 'Aowkowkwok')
break

                    case 'runtime':
                    me = client.user
                    uptime = process.uptime()
                    waktu = `*_BOT_* telah aktif selama : ${kyun(uptime)}`;
                    client.sendMessage(from, waktu, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6285864236900-1613218972@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "WiBot | Runtime", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": freply}}}})
                    break

                    case 'timenow':
                    const ks = new Date()
                    client.sendMessage(from, ks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "WiBot | Waktu Sekarang", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": freply}}}})
                    break

                case 'bot':
                case 'Bot':
                    bot = body.slice(1)
                    const on =['Yoo👋','Hai, nani desuka? :)','What?',`Bot on, ketik ${prefix}menu untuk melihat menu WiBot`,'apa Tod?']
                    const Bot = on[Math.floor(Math.random() * on.length)]
                    client.sendMessage(from, Bot, text, { quoted: mek })
                    await limitAdd(sender)
                    break
                    
                    case 'igdown':
                    if (!isRegistered) return await client.sendMessage(from, gjls, sticker, {quoted: mek});
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ling = body.slice(8);
                    anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${ling}&apikey=${zeksapi}`, {method: 'GET'})
                    if (anu.error) return reply(anu.error);
                    reply(ind.wait())
                    teks = `Di Publikasikan oleh: *${anu.owner}*\nCaption: ${anu.capt}`
                    for ( let i of anu.result ) {
                    vid = await getBuffer(i.url)
                    client.sendMessage(from, vid, video, {mimetype: 'video/mp4', quoted: mek, caption: teks})
                    }
                    await limitAdd(sender)
                    break

                    case 'cuaca': 
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ples = body.slice(7)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${ples}`, {quoted: mek})
                    for ( let i of anu.result ) {
                    nex = `*Kota:* ${i.tempat}\n*Suhu:* ${i.suhu}\n*Kecepatan Angin:* ${i.angin}\n*Kelembapan:* ${i.kelembapan}\n*_Cuaca_:* ${i.cuaca}\n*Keterangan:* ${i.desk}\n*Udara:* ${i.udara}`
                    }
                    client.sendMessage(from, nex, text, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'translate': //case by riz
                     if (args.length < 1) return reply('Textnya mana?')
                      get_args = args.join(" ").split("/")
                    translatelah = get_args[0]  
                    totos = get_args[1]
                    trostros = get_args[2]
              data = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${translatelah}&from=${totos}&to=${trostros}`, {method: 'get'}) 
              if (data.result) return reply(`use language code\nIf you don't know type .bahasa`)
              teks = `*➸ ${totos}*: ${data.original_text}\n*➸ ${trostros}*: ${data.translated_text}`
              client.sendMessage(from, teks, text, {quoted: mek})
              break

case 'ttp':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
teks = body.slice(5)
anu = await getBuffer(`https://xteam.xyz/ttp?file&text=${teks}`)
asw = await client.downloadAndSaveMedia(anu)
var imgbb = require('imgbb-uploader')
pre = await imgbb("bfe53fe15a978cf1938d96123f065206", asw)
ling = `${pre.display_url}`
res = await getBase64(ling.base64)
client.sendMessage(from, res, sticker, {quoted:mek})
await limitAdd(sender)
break

case 'nhentai':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender))return reply(ind.limitend(pusname))
code = body.slice(9)
reply(ind.wait())
anu = await fetchJson(`https://mnazria.herokuapp.com/api/nhentai?code=${code}`, {method: 'GET'})
for (let i of anu) {
res = await getBuffer(i)
}
client.sendMessage(from, res, document, {quoted: mek, mimetype: Mimetype.pdf, filename: `${anu.hasil.title}.pdf`})
await limitAdd(sender)
break



case 'lebaran':
idulFitri = `*ROAD TO LEBARAN*\n\n${Hlebaran} Hari | ${Hjam} Jam - ${Hmenit} Menit - ${Hdetik} Detik Lagi!!\n\nCkp Sabar.`
client.sendMessage(from, idulFitri, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*★彡[Sabar Ngab]彡 *", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('storage/image/takagi.jpeg')}}}})
break

case 'join':
if (args.lenght < 1) return reply('Linknya Mana?')
teks = args.join('')
client.acceptInvite(teks).catch(e => {
reply('link error atau di setel ulang') 
}) 
break

case 'spam':
if (!isOwner) return await client.sendMessage (from, gjls, sticker, {quoted: mek})
for ( let i = 0; i < 70; i++ ) {
reply('sorry ga work')
}
break

case 'upswtext':
		    client.updatePresence(from, Presence.composing)
		    client.sendMessage('status@broadcast', `${q}`, extendedText)
		    client.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{ quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Check Story gw ngab!!", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('storage/image/takagi.jpeg')}}}})
		    break

        case 'play':
        if (!isRegistered) return reply(ind.noregis())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${body.slice(6)}`, {method: 'get'})
                if (data.error) return reply(data.error)
                 
                infomp3 = ` *PLAY* \n*=> Channel*: ${data.channel}\n*=> Judul*: ${data.title}\n*=> Viewer*: ${data.total_view}\n*=> Duration*: ${data.duration}\n*=> FileSize*: ${data.filesize}\n*=> Uploaded*: ${data.uploaded}\n\n*[ WAIT ] Di PROSES DUMLU YEKAN....*`
                bufferddd = await getBuffer(data.thumb)
                lagu = await getBuffer(data.link)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.title}.mp3`, quoted: mek})
                
        await limitAdd(sender)
        break

                    case 'yutubdl':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('Urlnya mana um?')
                    if (!isRegistered) return reply(ind.noregis())
                    if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')               
                    anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${args[0]}&apikey=${zeksapi}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    teks = `*➸ JUDUL* : ${anu.result.title}\n*Size:* ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                    thumb = await getBuffer(anu.result.thumbnail)
                    client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
                    buffer = await getBuffer(anu.result.url_video)
                    client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
                    break

                    case 'terbalik':
                    case 'tebalik':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ngebuff = `${body.slice(9)}`
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${ngebuff}`, {method: 'get'})
                    ngebuff = `${anu.result.kata}`
                    client.sendMessage(from, ngebuff, text, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'say':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks = body.slice(5)
                    if (args.length < 1) return reply('teksnya mana kak?')
                    saying = teks
                    client.sendMessage(from, saying, text)
                    break

                    case 'babi':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    membr = []
                    const mes = groupMembers
                    const msk = groupMembers
                    const siaps = mes[Math.floor(Math.random() * mes.length)]
                    const sips = pushname[Math.floor(Math.random() * msk.length)]
                    teks = `*Yang Paling Babi Disini Adalah :* @${siaps.jid.split('@')[0]}`
                    membr.push(siaps.jid)
                    mentions(teks, membr, true)
                    break

                    case 'gantengcek':
                    case 'cekganteng':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ganteng = body.slice(12)
                    const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
                    const teng = gan[Math.floor(Math.random() * gan.length)]
                    client.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
                    break
                    
                    case 'cantikcek':
                    case 'cekcantik':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    cantik = body.slice(11)
                    if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
                    const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya KakaðŸ‘','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai CantikðŸŠ','70% Hai UkhtyðŸŠ','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum UkhtyðŸŠ','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih SemangatðŸŠ']
                    const tik = can[Math.floor(Math.random() * can.length)]
                    client.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
                    break

                    case 'katailham':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    katailham = body.slice(1)
                    const kata =['kamu baik','kamu suka coli/colmek','mending rakit PC','Mending nonton wibu?','kamu besok jadian','kamu suka owner','kamu anak babi','@3 suka coli','@2 suka sm kamu😘','@1 autis sekali','ngentot lu ya?','ngapain tidur, kalau besok bangun lagi','dia cuman penasaran, udah jangan baperan','semua cwk sama aja','Kalau dia bercanda,Ketawa.jgn jatuh cinta','mending save no owner:v','lu wibu, nolep lagi','mak lu gayming']
                    const ilham = kata[Math.floor(Math.random() * kata.length)]
                    client.sendMessage(from, 'Pertanyaan : *'+katailham+'*\n\nJawaban : '+ ilham, text, { quoted: mek })
                    await limitAdd(sender)
                    break
                    case 'faktaunik':
                    case 'fakta':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limiten(pusname))
                        anu = await fetchJson(`https://videfikri.com/api/fakta`, {method: 'get'})
                        buffer = `${anu.result.fakta}`
                        client.sendMessage(from, buffer, text, {quoted: mek})
                        await limitAdd(sender)
                        break

                    case 'memeindo':    
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    reply(ind.wait)
                    memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${zeksapi}`)
                    buffer = await getBuffer(memein.result)
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hargai meski cringe :v'})
                    await limitAdd(sender)
                    break 

                    case 'wiki':
                    if (!isRegistered) return reply(ind.noregis())              
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('masukan kata kunci')
                    tels = body.slice(6)    
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/wikipedia?search=${tels}&apikey=${devcityapi}`, {method: 'get'})
                    iskon = `*${anu.result.title}*\n\n${anu.result.result}`
                    client.sendMessage(from, iskon, text, {quoted: mek})
                    await limitAdd(sender)
                	break   

                    case 'jadwalsholat':
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (!isRegistered) return reply(ind.noregis())  
                    reply(ind.wait)
                    jadwal = body.slice(14)
                    anu = await fetchJson(`https://xinzbot-api.herokuapp.com/api/jadwalshalat?kota=${jadwal}&apikey=XinzBot`, {method: 'get'})
                    teks = `======================\n`
                    awokawok = anu.result
                    for ( let i of awokawok ) {
                    teks += `*_Tanggal: ${i.tanggal}_*\n*Imsak: ${i.imsyak}*\n*Subuh: ${i.shubuh}*\n*Terbit: ${i.terbit}*\n*Dhuha: ${i.dhuha}*\n*Dzuhur${i.dzuhur}*\n*Ashar: ${i.ashr}*\n*Maghrib: ${i.magrib}*\n*Isya: ${i.isya}\n=======================\n*`
                    }
                    client.sendMessage(from, teks, text, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'kisahnabi':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    kisah = `${body.slice(11)}`
                    nabi = await fetchJson(`https://videfikri.com/api/religi/kisahnabi/?nabi=${kisah}`, {method: 'get'})
                    reply(ind.wait())
                    anu = await getBuffer(nabi.result.image)
                    kisah = `*Nabi: ${kisah}\nTempat Lahir: ${nabi.result.tempat_lahir}\nTahun Lahir: ${nabi.result.tahun_kelahiran}\nUmur: ${nabi.result.usia}\n\n*Kisah: *${nabi.result.description}`
                    client.sendMessage(from, anu, image, {quoted: mek, caption: kisah})
                    await limitAdd(sender)
                    break

                    case 'quran':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
                    quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
                    client.sendMessage(from, quran, text, {quoted: mek})
                    await limitAdd(sender) 
                    break 
                
                    case 'randomKPOP':
                    case 'randomkpop':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
                   buff = await getBuffer(anu.result)
                   client.sendMessage(from, buff, image, {quoted: mek})
                   break 

                   case 'wpmuntainview':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    wp = await fetchJson(`https://onlydevcity.herokuapp.com/api/wallpaper/pegunungan?apikey=${devcityapi}`, {method: 'get'})
                    reply(ind.wait)
                    view = JSON.parse(JSON.stringify(wp.result));
                    mountain = view[Math.floor(Math.random() * view.length)];
                    imge = await getBuffer(mountain)
                    client.sendMessage(from, imge, image, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'wait':
                    if (!isRegistered) return reply(ind.noregis())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        reply(ind.wait())
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                        media = await client.downloadMediaMessage(encmedia)
                        await wait(media).then(res => {
                            client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
                        }).catch(err => {
                            reply(err)
                        })
                    } else {
                        reply(ind.ocron())
                    }
                    await limitAdd(sender)
                    break


/*==================={MAKER MENU}=============================*/
                    case 'silktext':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))                
                    if (args.length < 1) return reply(ind.wrongf())
                    silk = body.slice(10)
                    slik1 = silk.split("/")[0];
                    slik2 = silk.split("/")[1];
                    if (silk.length > 7) return reply('Teksnya kepanjangan Tod, maksimal 6 karakter')
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/silk/?text1=${slik1}&text2=${slik2}`, {method: 'get'})
                    reply(ind.wait())
                    client.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)  
                    break
                    
                    case 'mememaker':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    meme = body.slice(12)
                    ver = meme.split("/")[0]
                    kat = meme.split("/")[1]
                    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
		    reply(ind.wait())
		    owgi = await  client.downloadAndSaveMediaMessage(ger)
		    anu = await imgbb("bfe53fe15a978cf1938d96123f065206", owgi)
		    teks = `${anu.display_url}`
                    skrap = await getBuffer(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${ver}&bottom=${kat}&img=${teks}`, {method: 'GET'})
                    //lot = await getBuffer(skrap.result)
                    client.sendMessage(from, skrap, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Banishment this world!!!", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": freply}}}})
                    }
                    limitAdd(sender)
                    break

                    case 'textsky':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    sky = body.slice(9)
                    res = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${sky}&theme=textsky&apikey=${devcityapi}`)
                    reply('Wait Ganz, gw ngedit dumlu')
                    sult = await getBuffer(res.result.url)
                    client.sendMessage(from, sult, image, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'epepserti':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks = body.slice(11)
                    pler = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${teks}`)
                    client.sendMessage(from, pler, image, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'pubg':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('Teksnya mana gan??')
                    if (args.length > 10) return reply('karakter minimal 10')
                    cpubg = `${body.slice(6)}`
                    pubg1 = cpubg.split("/")[0];
                    pubg2 = cpubg.split("/")[1];
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${pubg1}&text2=${pubg2}&theme=pubg&apikey=${devcityapi}`, {method: 'get'})
                    pubg = await getBuffer(anu.result.url)
                    client.sendMessage(from, pubg, image, {quoted: mek})
                    await limitAdd(sender) 
                    break

                    case 'narutobanner':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('teksnya mana tod?')
                    if (args.length < 2) return reply('harus 2 kata kaak')
                    nar = body.slice(14)
                    anu = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${nar}&apikey=${zeksapi}`, {method: 'get'})
                    reply('Wait Ganz, lagi ngedit')
                    ngebuff = await getBuffer(anu.result)
                    client.sendMessage(from, ngebuff, image, {quoted: mek, caption: 'ckp tw ngebabunya'})
                    await limitAdd(sender)
                    break

                    case 'matrix':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('teksnya mana Tod?')
                    mat = body.slice(8)
                    anu = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=${zeksapi}&text=${mat}`)
                    reply(ind.wait())
                    client.sendMessage(from, anu, image, {quoted: mek})
                    await limitAdd(sender)
                    break 

                    case 'ngopi':
                    case 'coffe':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('teksnya mana gayn?')
                    ngo = `${body.slice(7)}`
                    ngebuff = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${ngo}`, {method: 'get'})
                    client.sendMessage(from, ngebuff, image, {quoted: mek,caption: '1 gelas 5K gayn'})
                    await limitAdd(sender)
                    break

                    case 'ngopi2':
                    case 'coffe2':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('teksnya mana gayn?')
                    ffe = `${body.slice(7)}`
                    ngebuff = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2/?text=${ffe}`, {method: 'get'})
                    client.sendMessage(from, ngebuff, image, {quoted: mek,caption: '1 gelas 5K gayn, jangan lupa bayar!'})
                    await limitAdd(sender)
                    break
                    
                    case 'lovemsg':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('teksnya mana gayn?')
                    love = `${body.slice(9)}`
                    ngebuff = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${love}`, {method: 'get'})
                    client.sendMessage(from, ngebuff, image, {quoted: mek,caption: 'Love You😘'})
                    await limitAdd(sender)
                    break

                    case 'trigger':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
                    reply(ind.wait)
                    owgi = await  client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("bfe53fe15a978cf1938d96123f065206", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.error)
                    nobg = fs.readFileSync(rano)
                    client.sendMessage(from, nobg, sticker, {quoted: mek})
                    fs.unlinkSync(rano)
                    })
                    } else {
                    reply('Gunakan foto!')
                    }
                    await limitAdd(sender) 
                    break
                    
                    case 'wasted':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
                    reply(ind.wait)
                    owgi = await  client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("bfe53fe15a978cf1938d96123f065206", owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.error.stick)
                    nobg = fs.readFileSync(rano)
                    client.sendMessage(from, nobg, sticker, {quoted: mek})
                    fs.unlinkSync(rano)
                    })
                    } else {
                    reply('Gunakan foto!')
                    }
                    await limitAdd(sender) 
                    break

                    case 'nightbeach':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videomessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply(ind.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
                    teks = `${anu.display_url}`
                    ling = `https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${teks}`
                    buffer = await getBuffer(ling)
                    client.sendMessage(from, buffer, image, {quoted: mek})
                    }
                    await limitAdd(sender)
                    break

                    case 'smoke':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    asep = body.slice(7)
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${asep}&theme=smoke&apikey=${devcityapi}`)
                    reply(ind.wait)
                    ngonsol = await getBuffer(anu.result.url)
                    client.sendMessage(from, ngonsol, image, {quoted: mek, caption: 'merokok membunuhmu!'})
                    await limitAdd(sender)
                    break

                    case 'galaxytext':
                    case 'galaxylogo':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    logo = body.slice(11)
                    anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${logo}`)
                    reply(ind.wait)
                    client.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih Gayn'})
                    await limitAdd(sender)
                    break
                    
                    case 'grafity':
                    if(!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    baner = body.slice(9)
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/odc2?text=${baner}&theme=grafity&apikey=${devcityapi}`, {method: 'get'})
                    reply('*Wait Gans, lgi nyeped muka lu*')
                    buferd = await getBuffer(anu.result.url)
                    client.sendMessage(from, buferd, image, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'logogaming':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    logo = args.join(' ')
                    anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${logo}`)
                    reply(ind.wait)
                    client.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih Gayn'})
                    await limitAdd(sender)
                    break

                    case 'wanted':
                    if (!isRegistered) return reply(nd.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    want = body.slice(8)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videomessage || isQuotedImage)) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply(ind.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
                    teks = `${anu.display_url}`
                    teks1 = want.split("/")[0];
                    teks2 = want.split("/")[1];
                    ling = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${teks}&text1=${teks1}&text2=${teks2}`)
                    client.sendMessage(from, ling, image, {quoted: mek})
                    }
                    await limitAdd(sender)
                    break
                    
                    case 'kalender':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    var imgbb = require('imgbb-uploader')
                    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    ger= isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply(ind.wait)
                    owgi = await client.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
                    teks = `${anu.display_url}`
                    pler = await fetchJson(`https://docs-jojo.herokuapp.com/api/calendar?image_url=${teks}`)
                    peler = await getBuffer(pler.result)
                    client.sendMessage(from, peler, image, {quoted: mek})
                    }
                    await limitAdd(sender)
                    break
                    
                    
                    case 'ytcomment':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply('teksnya mana tod?')
                    if (args.length < 2) return reply(`caranya:\nkirim foto yang mau digunakan sebagai profile. kasih caption: ${prefix}ytcomment MiKako / Mending nonton wibu`)
                    comment = `${body.slice(11)}`
                    us = comment.split("/")[0];
                    komen = comment.split("/")[1];
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videomessage || isQuotedImage)) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    reply(ind.wait)
                    /*try {
                     pp = await client.getProfilePicture(`${num.split("@")[0]}@c.us`)
                     } catch {
                     pp = `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`
                    }
                    ngebuff = await getBuffer(pp)*/
                     owgi = await client.downloadAndSaveMediaMessage(ger)
                    nu = await imgbb('bfe53fe15a978cf1938d96123f065206', owgi)
                    teks = `${anu.display_url}`
                    ling = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?username=${us}&comment=${komen}&avatar=${teks}&dark=true`)
                    client.sendMessage(from, ling, image, {quoted: mek})
                    } else {
                    reply(`gunakan foto dengan caption ${prefix}ytcomment Namamu / textnya`)
                    }
                    await limitAdd(sender)
                    break

                    case 'phlogo':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    logo = body.slice(8)
                    ph1 = logo.split("/")[0];
                    ph2 = logo.split("/")[1];
                    ph = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${ph1}&text2=${ph2}&apikey=${zeksapi}`, {method: 'get'})
                    reply('*Wait, Ganz*')
                    client.sendMessage(from, ph, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    
                    case 'logoepep':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    epep = body.slice(10)
                    ling = await getBuffer(`https://api.zeks.xyz/api/epep?text=${epep}&apikey=${zeksapi}`, {method: 'get'})
                    reply(ind,wait)
                    client.sendMessage(from, ling, image, {quoted: mek})
                    await limitAdd(sender)
                    break
                    
                    case 'lighttext':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if ( args.length < 1 ) return reply('Teksnya Mana Tod?')
                    teks = body.slice(11)
                    anu = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${teks}&apikey=${zeksapi}`)
                    client.sendMessage(from, anu, image, {quoted:mek})
                    await limitAdd(sender)
                    break
                
                    case 'wolflogo':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    logo = body.slice(10)
                    teksk = logo.split("/")[0];
                    teksb = logo.split("/")[1];
                    ling = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=${zeksapi}&text1=${teksk}&text2=${teksb}`, {method: 'get'})
                    reply(ind.wait)
                    client.sendMessage(from, ling, image, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'jankenpom':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    const player = body.slice(11)
                    const botc = ['batu','kertas','gunting'];
                    //const p = player.includes('batu','kertas','gunting');  //BIKIN ERROR AJA LU ANJING
                    if ( args.length < 1 ) return reply('Lu mau pilih apa?')
                    bot = botc[Math.floor(Math.random() * botc.length)]
                    var resu = '';
                    if ( player == bot ) {
                    resu = '*SERI*';
                    } else if( player == 'kertas' ) {
                    resu = ( bot == 'batu'  ) ? 'Kamu MENANG!' : 'Kamu KALAH!';
                    } else if( player == 'batu' ) {
                    resu = ( bot == 'kertas' ) ? 'Kamu KALAH!' : 'Kamu MENANG!';
                    } else if( player == 'gunting' ) {
                    resu = ( bot == 'batu' ) ? 'Kamu KALAH!' : 'Kamu MENANG!';
                    } else {
                    return reply('🥱 Dhlh, Males main sama noob!');
                    } 
                    const suitxp = Math.ceil(Math.random() * 5000);
                    addLevelingXp(sender, suitxp)
                    teks = '*HASIL PERTANDINGAN*\n\n*Kamu Memilih :* ' + player + '\n*Dan _WiBot_ Memilih :* ' + bot + '\n\n*HASIL =* ' + resu + '\n\n Kamu mendapatkan *_EXP_* sebesar = ' + suitxp;
                    client.sendMessage(from, teks, text, {quoted: mek})
                    await limitAdd(sender)
                    break

                    case 'bahasa':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                    client.sendMessage(from, bahasa(), text)
                    await limitAdd(sender)
                    break
				case 'info':
                case 'ingfo':
                case 'ingfokan':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *MiKako⚔️*\n*AUTHOR* : Taufik - Kun\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
					break
				case 'admin':
         	   case 'owner':
         	   case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
					break    
				case 'leaderboard':
				case 'lb':
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal ${len} user untuk bisa mengakses database`)
                }
				break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
				case 'giftlimit': 
				if (!isOwner,!isPrem) return reply(ind.premon(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*

• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
				case 'premlist':
	            case 'listprem':
	                if (!isRegistered) return reply( ind.noregis())
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	                }
	                await reply(listPremi)
	            break
				case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895710073737@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break

				case 'dompet':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break

				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('limit harus berupa angka!!')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				//no rest api 
				case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premon(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'truth':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break				
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻??𝗮?? 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}??𝗰𝗿')
					}
					await limitAdd(sender)
				break

            case 'smeme':
           if (args === 0) return reply(`*Gunakan Cmd*:\n*${prefix + command}smeme <text|text>*`) 
           const dekode = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
           const dexode  = await client.downloadMediaMessage(dekode, 'buffer') 
           const getlink = await uploadImages(dexode, false)
           reply(ind.wait())
           gay = args.join('')
           var text1 = gay.split("/")[0];
           var text2 = gay.split("/")[1];
           image = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/meme-maker?url=${getlink}&text=${text1}|${text2}`, {method:'get'})
           buffer = await getBuffer(image.result.result)
           await sendWebp(from, buffer).catch((err) => reply('error ):'))
           break

				case 's': 
				case 'stiker':
				case 'sticker': 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				await limitAdd(sender)
				const weEm = body.slice(9)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
					
		case 'swm':
	    case 'stickerwm':
	    const wmnya = args.join('')
		if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		    if (!wmnya.includes('/')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
		    encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		    const packname1 = wmnya.split('/')[0]
		    const author1 = wmnya.split('/')[1]
		    exif.create(packname1, author1, `stickwm_${sender}`)
		    await ffmpeg(`${media}`)
			    .input(media)
			    .on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
			    })
			    .on('error', function (err) {
				console.log(`Error : ${err}`)
				fs.unlinkSync(media)
				reply('Terjadi Kesalahan')
			    })
			    .on('end', function () {
				console.log('Finish')
				exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				    if (error) return reply('Terjadi Kesalahan')
				    client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
				    fs.unlinkSync(media)	
				    fs.unlinkSync(`./sticker/${sender}.webp`)	
				    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
				})
			    })
			    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			    .toFormat('webp')
			    .save(`./sticker/${sender}.webp`)
		} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		    if (!wmnya.includes('/')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
		    encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		    const packname1 = wmnya.split('/')[0]
		    const author1 = wmnya.split('/')[1]
		    exif.create(packname1, author1, `stickwm_${sender}`)
		    reply(ind.wait())
			await ffmpeg(`${media}`)
			    .inputFormat(media.split('.')[4])
			    .on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
			    })
			    .on('error', function (err) {
				console.log(`Error : ${err}`)
				fs.unlinkSync(media)
				tipe = media.endsWith('.mp4') ? 'video' : 'gif'
				reply('Terjadi Kesalahan')
			    })
			    .on('end', function () {
				console.log('Finish')
				exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				    if (error) return reply('Terjadi Kesalahan')
				    client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
				    fs.unlinkSync(media)
				    fs.unlinkSync(`./sticker/${sender}.webp`)
				    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
				})
			    })
			    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			    .toFormat('webp')
			    .save(`./sticker/${sender}.webp`)
		} else {
		    reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
		}
		break
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
				break
				case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await fetchJson(`https://videfikri.com/api/simsimi/?teks=${teks}`)
					reply(anu.result.jawaban)
				break 
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '𝗱𝗮?? 𝗷𝗮𝗱𝗶 '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return client.sendMessage(from, '𝘂𝘀𝗲??𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[??𝗥𝗥𝗢??] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺?? 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶??')
					}
					await limitAdd(sender)
				break
				//group feature 
				case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
				break 
				case 'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				break 

				case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      setTimeout( () => {
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }, 120000); //2minute
                      setTimeout( () => { 
                      reply('Sedang mining selama 2 menit, silahkan tunggu...')
                      }, 0); //1sec
                      }
                    await limitAdd(sender)
                    break

				case 'grup':
				case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break    

                case 'gcsettime':
                if (!isGroupAdmins) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (!isGroup) return reply(ind.groupo())
                if (!q.includes('/')) return reply(ind.wrongf())
                    if ( args.length < 1 ) return reply(`cara penggunaan ${prefix}gcsettime tutup/waktu(detik)\nContoh:\n\n${prefix}gcsettime buka/6`)
                    let metode = q.substring(0, q.indexOf('/') - 0)
                    let esteminate = q.substring(q.lastIndexOf('/') + 1)
                    let persEsteminate = parseInt(esteminate) * 1000;
                    if ( metode == 'buka' ) {

                        setTimeout( () => {
                            client.groupSettingChange(from, GroupSettingChange.messageSend, false)
                            reply('*GROUP TELAH DIBUKA!*')
                        }, persEsteminate)

                        setTimeout( () => {
                            reply(`*PERHATIAN KEPADA SELURUH MEMBER GROUP!*\n\nGroup akan dibuka dalam ${esteminate} Detik`)
                        }, 0)

                    } else if ( metode == 'tutup' ) {

                        setTimeout( () => {
                            client.groupSettingChange(from, GroupSettingChange.messageSend, true)
                            reply('*GROUP TELAH DITUTUP!*')
                        }, persEsteminate)

                        setTimeout( () => {
                            reply(`*PERHATIAN KEPADA SELURUH MEMBER GROUP!*\n\nGroup akan ditutup dalam ${esteminate} Detik`)
                        }, 0)

                    }
                    break

				case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break

                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break

           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻?? ??𝗻𝗴??𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]} 𝗷𝗮??𝗮??𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 𝗸𝗮𝗺𝘂 𝘀??𝗱𝗮𝗵 𝗱𝗶 𝗰𝗼𝗽𝗼𝘁🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break

				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻??𝗶𝗻 𝗱𝗶 ??????𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
					
					case 'kickr':
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (!isGroup) return reply(ind.groupo())
					// replied = mek.message.extendedTextMessage.contextInfo.quotedMessage
     //                if (!replied) return reply('yg mau di kick sp?')
     //                orgny = mek.message.extendedTextMessage.contextInfo.participant
					client.groupRemove(from, mentionByReply, true)
					break
                    
			     	case 'kick':
                    if (!isGroup) return reply(ind.groupo())
                    if (!isGroupAdmins) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
                    if (!isBotGroupAdmins) return reply(ind.badmin())
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.length > 1) {
                        teks = ''
                        for (let _ of mentioned) {
                            teks += `asek dapat makanan,otw mengkickmu, 🏃 :\n`
                            teks += `@_.split('@')[0]`
                        }
                        mentions(teks, mentioned, true)
                        client.groupRemove(from, mentioned)
                    } else {
                        mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
                        client.groupRemove(from, mentioned)
                    }
                    break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼??𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
					break 
					case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮??𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼??𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 ??𝗿𝗼??𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
				break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'disable') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break 
				case 'nobadword':
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
				case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'delete':
				case 'del':
				case 'd':
				client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				break 
				case 'addbadword':
                    if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
                    if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
                    if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                
                	
				//admin feature 
				case 'kickall':
                    if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
			  	case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁??𝗳𝗸??𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else {
						reply(ind.satukos())
					}
					break 
				case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.ownerg())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTILINK*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
				break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
				break 
				case 'setppbot':
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 

                    case 'setthumb':
                    if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        tum = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                        re = await client.downloadMediaMessage(tum)
                        fs.unlinkSync('storage/thumb/rikka.jpeg')
                        fs.writeFileSync('storage/thumb/rikka.jpeg', re)
                        freply = fs.readFileSync('storage/thumb/rikka.jpeg')
                        reply('Sukses Mengganti')
                    }
                    break

                    case 'setnamebot':
                    if (!isOwner) return await client.sendMessage(from, oner, sticker, {quoted: mek})
                if (!args) return reply('masukkan nama')
                client.setName(args)
                .then((res) => client.sendMessage(from, JSON.stringify(res), text))
                .catch((err) => client.sendMessage(from, JSON.stringify(err), text))
                break

            case 'setbio':
                if (!isOwner) return await client.sendMessage(from, oner, sticker, {quoted: mek})
                if (!args) return client.reply('masukkan bio')
                client.setStatus(args)
                .then((res) => client.sendMessage(from, JSON.stringify(res), text))
                .catch((err) => client.sendMessage(from, JSON.stringify(err), text))
                break

				case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return await client.sendMessage(from, oner, sticker, {quoted: mek})
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('SUCCESS CHANGE PROFILE GROUP')
					break				
				case 'leave': 
                    if (!isGroup) return reply(ind.groupo())
                    if (!isOwner) return reply(ind.ownerb())
                    buffer = fs.readFileSync('./storage/image/anohana.jpeg')
                    await client.sendMessage(from, buffer, image, {caption: 'nice to meet you all. But i would leave from this group.\n*sayonara~*\n\n*cheers:* WiBot ^w^'}).then (() => client.groupLeave(from))
                    break 
				case 'bc': 
                    if (!isOwner) return reply(ind.ownerb()) 
                    if (args.length < 1) return reply('.......')
                    anu = await client.chats.all()
                    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                        buffer = await client.downloadMediaMessage(encmedia)
                        for (let _ of anu) {
                            client.sendMessage(_.jid, buffer, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
                        }
                        reply('*_succes broadcast_* ')
                    } else {
                        for (let _ of anu) {
                            sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
                        }
                        reply('*_succes broadcast_* ')
                    }
                    break
					case 'clearall':
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
				break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`Change Member limit To ${memberlimit} SUCCESS!`)
				break 
				case 'bcgc':
				     if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
				case 'addprem':
				if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				break
				
				case 'delprem':
				if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			   for( let i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === mente) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))
       			 }
 			    }
				reply(ind.dellprem(args[0]))
				break 
				case 'eval':
				if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
                if (!q) return reply(ind.wrongf())
                try {
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)
          		//	client.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
       	         } catch (err) {
        	            console.error(err)
          	          await reply('Error!')
  	   	       }
        	    break 
        		case 'listonline': 
        		if (!isRegistered) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
				case '=>':
				const cmd = body.slice(4)
				exec(cmd, (err, stdout) => {
					if (err) return client.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						client.sendMessage(from, stdout, text)
					}
				})
				break
				//tools 
				case 'tomp3':
				client.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('itu video bruh?:V')
				reply(ind.wait())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
				})
				break 
				case 'slowmo':
				if (!isRegistered) return reply(ind.noregis())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'getsticker':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
					
					case 'delstick':
					if (!isOwner) return await client.sendMessage(from, gjls, sticker, {quoted: mek})
					namastc = body.slice(10)
					fs.unlinkSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, 'sukses menghapus sticker', text, {quoted: mek})
					break
				case 'stickerlist':
				case 'liststicker':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getvn':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break	
					
					case 'kicktime':
		    case 'hedshot':
		    case 'headshoot':
		    if (!isRegistered) return reply(ind.noregis())
		    if (!isGroup) return reply(ind.groupo())
		    if (!isGroupAdmins) return reply(ind.admin())
		    if (!isBotGroupAdmins) return reply(ind.badmin())
		    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di headshoot palanya!')
		    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		    setTimeout( () => {
		    client.sendMessage(from, `berhasil mengheadshoot palanya @${mentioned[0].split('@')[0]}`, text)
		    }, 8000)
		    setTimeout( () => {
		    reply('Boom, Headshoot!')
		    }, 7000)
		    setTimeout( () => {
		    client.groupRemove(from, mentioned)
		    }, 6000)
		    setTimeout( () => {
		    client.sendMessage(from, `OTW Menembakmu @${mentioned[0].split('@')[0]}`, text) // ur cods
		    }, 5000)
		    setTimeout( () => {
		    client.sendMessage(from, 'Enemy Spotted!!', text)
		    }, 2500)
		    setTimeout( () => {
		    reply('Sector Clear!!')
		    }, 0)
				
				default:
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }
                  
                  if ( !isGroup && !isCmd && !mek.key.fromMe && budy != 'Bot') {
		    reply(`Please don't chat/call this number because this number i made for BOT. type .owner if you are having trouble using this bot. Type ${prefix}menu to open menu. Every command start with ${prefix} (Point)\n\nThanks for attention🙏`)
		    }
		    
		    /*if ( body.startsWith(`${prefix}${command}`) && !public ) {
		    reply(`Maaf ${pushname} Saat ini Bot berada dalam kendali Owner!`)
		    }*/
                  
                  /*if (budy.includes('Menu')) {
                  client.sendMessage(from, deser, text)
                  }*/
            if (/^>/.test(pes)) {
	            let txt = pes.replace(/^>/, '')
	            let type = Function
	            if (/await/.test(pes)) type = (async () => {}).constructor
	            let func = new type('print', 'client', 'MessageType', 'mek', 'text', 'from', 'image', 'os', 'fetch', txt)
	            console.log('[EvalF]', func.toString())
	            let output
	            try {
	                output = await func((...args) => {
	                    console.log('[EvalP]', ...args)
	                    client.sendMessage(from, util.format(...args), MessageType.extendedText, {
	                        quoted: mek
	                    })
	                }, client, MessageType, mek, text, from, await image, os, fetch)
	                console.log('[EvalO]', output)
	                client.sendMessage(from, util.format(output), MessageType.extendedText, {
	                    quoted: mek
	                })
	            } catch (e) {
	                console.error('[EvalE]', e)
	                client.sendMessage(from, util.format(e), MessageType.extendedText, {
	                    quoted: mek
	                })
	            }
            }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
