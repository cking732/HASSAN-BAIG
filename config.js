const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RibWEzdlNUSmtZdkxMWkZuMUhMRTBweXNPQWRJUldzLytLODNHbHYxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWtCWXcycUpTM2JiTTE1N3BlS0xrZ0Z3UWdNaHRFU3owQVdHWXYrV2ltYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT3UxcXNqcnVHcTFuRTJ4UUVTaDVYdG1WSEI5SDRuYXJvRDVlMGVoZ1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhdE9oU2dza2Z1WVVvYWp5dkpUd0Y5OCtTMzVuT3lRMVlvdUNvdTcwSjFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CRGcyTTE0MXB4d3p0NzNNUnQxYy8rUUx6UzUwZEtqaWVaaXYrL3lMbU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFjZm9qWWhhNnJPQ1ZGR3EzZ1VFR1dFSG9ZOE9VeHBSeCtHRUFhS0V6ZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1CbUVQZTNtR21FbkNQSlZjdDEzZUxSc0pmclVCSFZ4akxEMkRIWWZGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGxNUkNqU0FCRVlCdUxLRW1FN0lUbVQrbU50cGRWem1hRWx6Uy9td3cyUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRlcUFoR1gzWEx5OWFjQmovaFZDN0kxOVBwbk9ieHIxYzFIc1lPTzNwcnA4RkVrV2tvZlhZRUY3MmFVRlFyY0ZmdzROWTZGMDY3Skw0aHo2cE5SQkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJuNDdYd2RUdzlDc2M0WjQ1WjBDYm9iRXlmR0IwaHJEWVZTLzl2a1JETkFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI5SlFIUThMUiIsIm1lIjp7ImlkIjoiOTIzNzA4NTE4ODY4OjI2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjgyNjA2NTM0Njk4MDY6MjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZXJoc2NIRUwrbzJNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqNFllRjRwUCtOa3pNekZkMEkzQUh6cjFpaXZ1SmFtNDBlV09ibkhUaVdFPSIsImFjY291bnRTaWduYXR1cmUiOiJMNnVQRTd6U0VyRVAvaXduM0sxbGFtb1NydGRoOExReHhVUXUwckZhbFFMR0h1dWFCSEQwVzAwL3ZtTm5lMW9VY1BRZmtLWEt4bWwzME9LNzhYa0tBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSGloRVJBcWpWaWthanlLTzhWY3kvUWxsY1ZzdjVjSGpRUkZOa1lad0djbUpFdDkwaVBMUHBwNnlOWVJZRU5NcnBnYm1nU0tTL2szWjlHUTRSVzA5Q1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM3MDg1MTg4Njg6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWStHSGhlS1QvalpNek14WGRDTndCODY5WW9yN2lXcHVOSGxqbTV4MDRsaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NzYzMjAyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5FTiJ9",
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
