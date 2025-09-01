const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVvVnlrZ0hjcTFpMUZsYTN1czR2OTlpckhXNGtlR3dEYW9vU2NndjFHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzNjNHJ0dENoRXY3cTEyVDRpNUdWdXlJY0lBYUw2NjJHU0I4QXlCQjBtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSG9IVlE3MDV0aEFNV2FDSXJ2MXprL0c5SEpHaUt6NHpYSHVoRkxNTFZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFeEE5R1Z6Q0tuTmZDUG9hWHJNQXdlQzlSNWZJa1dJcXhieThXQkZGQ1NzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LOXNaeFgvQlMvazZDZFZtTDREamJXYkVCVUZTMlF2QkZUTHJZelcrWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBVkVobG9lK1BSRTErTXp4VVQyRTlLbU5NRXBkYVV3MFhvN3lJbjVCaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME94eEdFSzFCVFpVNmtibE5JemVFeG11MDk0ME1iank4cnFiU2E0dUhIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3FOTTNQQkEraE9HdHArMHBUSzFyei9xdmFrTEFWTHpvUnh3aUN2TVpEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpXckxURThaZXZ4b25XR3lVTDRPQjBuTmNzWGduOS9hUUVoSmtVa21VKytUdDI0SmpZakJrMjNicEJQVEx5TFRUNG10ZGdua015QjM2d05sZFBnaGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiIxajJ4NDUxQlhyK2NPUmJ4Sk5YMDNFOEQyQkw3akRBekhGYjlrUVRsQVdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJSQjdWWk1FQSIsIm1lIjp7ImlkIjoiOTIzMjkzMTUyNDE0OjIwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM2OTc1NDA3Nzg4MjExOjIwQGxpZCIsIm5hbWUiOiJCdXNzeSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWpNbnNFRkVJT0syTVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNlUvdThxZ3NGVyswOUNKek1zY3BhYU5RZFVsS1VXMXZ6dHdYK2tmUnJRRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWE0ySWZBMGEwZmpISHhHbGxyWDZjdGlzRWVmQXp4eWNibnBLNWd3YW9zaDNlK2t1OXBSR25LN3E2S0xZakpFVW82WUpDZzZnV1pkTEZlKzVmRDBPRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZRUWhucjlXaEVqWHJobmpTYUpmdkRpRzI1MEVxZzAweW85YVd0Y1VWTkNFTVMwRTFhUnFBUUFpOElTd3FXOS9ydVpmOFFTTXNCRk1XUnpRbUdybmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjkzMTUyNDE0OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVsUDd2S29MQlZ2dFBRaWN6TEhLV21qVUhWSlNsRnRiODdjRi9wSDBhMEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Njc1OTMwNCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBdVMifQ==",
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
