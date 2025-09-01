const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0g4cEYzczJnM1B2TlE3a0VqZE1tK3V3QVlZNUhDRTNsM0xmbWx3eWkzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkxqbFlQQmlWNEhUY1BRdThwSkFWeXBLeUdqTkxXdTlHckhHNTFyNGxGcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxR0ZoMUFyNU5PcjRsNFFMOVBrendyQUlicW9EL3U1dENKZHRTbUtpOTNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIcGNnZHJLRTRDaVhWNFpVMnpWdklhSitIeEFpNVIwcVRJaUlCaG1OR0RzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDdDZIRDVSSmp0Ymgya2JyNGxoby94cTF1NnpWVzFHeUhWV21MM0U1VkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZUNlhvSzFwdm41S3hNV3ZCUE5KUUFYVHNLK1F5ODVaTm9zRzk0MkEvQk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEEvWTM5QnFDZmtCSDFBYVJnK0JFWnFXMmhvZ21peDEwUTh2RVJrY1JtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTNkMXNYd2NDSys0UUNWajgzRWRZd1hkMFR2TWo0OHRUWENLYy9tVTFoMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBQQUFEam84SGVjNnhpdFJ0MmNXTndWaTNKSmQvSDNKTTdCY3VKdytYZjhMV3ZsSUFMR09Hb0JUQ2JUbVZQTzdrRHA0Z0dHb1ZiVjhpcnkwcUlvQkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6Ilg0aVJ1UGs5ZWlMT1NaVEZQRFIwR1VSNzZnN0daVHhkNGxNM0krRW94T0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkxaUDg0Wjk4IiwibWUiOnsiaWQiOiI5MjMyOTMxNTI0MTQ6MTlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzY5NzU0MDc3ODgyMTE6MTlAbGlkIiwibmFtZSI6IkJ1c3N5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZk1uc0VGRU9mNzE4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2VS91OHFnc0ZXKzA5Q0p6TXNjcGFhTlFkVWxLVVcxdnp0d1gra2ZSclFFPSIsImFjY291bnRTaWduYXR1cmUiOiJJcWUyVGF3eDZwbHYzM1Zxam9Udk8wNUpzdEFvbFJnV0QzR21sZmhCNUZqV1FyQ1VDYnBmS1p6azRlYUVGVlpab1kvOW9EMnRHeVZ6MGxMY2lXR2dBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUmMrRVlseXZUV0x0dWphOW5oT2FsUjFFRm9ZL2NGdjZITjZHSTcvUU9jZ1pvU1JGSFUrL09RNTRocTNHU0MzcXUwR2pCSUhjVUY2Zy9qVTRDamZBQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyOTMxNTI0MTQ6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWxQN3ZLb0xCVnZ0UFFpY3pMSEtXbWpVSFZKU2xGdGI4N2NGL3BIMGEwQiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NzU3NDgyLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVAxeSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐇𝐈𝐒𝐒𝐀𝐑𝐈-𝐁𝐀𝐂𝐇𝐀-𝐌𝐃 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/8vrpw6.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝙃𝙄𝙎𝙎𝘼𝙍𝙄-𝘽𝘼𝘾𝙃𝘼-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙃𝙄𝙎𝙎𝘼𝙍𝙄-𝘽𝘼𝘾𝙃𝘼-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923142854207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙃𝙄𝙎𝙎𝘼𝙍𝙄-𝘽𝘼𝘾𝙃𝘼-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© CREATER 𝙃𝙄𝙎𝙎𝘼𝙍𝙄-𝘽𝘼𝘾𝙃𝘼-MD *",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/8vrpw6.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY IM ALIVE NOW  *𝙃𝙄𝙎𝙎𝘼𝙍𝙄-𝘽𝘼𝘾𝙃𝘼-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923142854207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
