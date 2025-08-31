const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Q4TVQzQWs4dUVyUmNsOGdVUTFjaWM1WTV6V1FiSGFxOFdyK2tjVTFHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajZDQnlSMU8wdDc4clNmeEVTRUNJckN1bUNMNWhOcC82Z2QwWmE3MUpXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQW51MzVaMnhhZCtDRmp6YWVpbWpuVjM2L1JreHN5OWdLT2RteERYaUV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKb3A0L0l0QVhjM215bFN0aFhFL0tsR1haVEV0bVN4ZTBKQ0wzOStCS2xBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFLY3ZGS1JndVg2ck93b01Kazh1c1A3bDdtSHFlVE1wS3FFeEhrVlhLbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkplOTc5RENPZnJ6VGw4cTRwOFBReEJ6QVRwQjIxakJCaUNwSTQwQ09kVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0luS01ObGZsTmNHaW9FOGJkdVRpTDVMWS9hMFgzSEJYVzVoRDQrY1Ftaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjRvWENVYVpzSG5yU2N3MHpJS1ZtT1IyM1JyNXQrSkV4REFxRzZwNWlBVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxONndXZ3orN3hBcktYY0FkdUwycEVlMGRiNS9lVG9uTEp6QlQwUFdOWkdSNk0zNkFCam5vWjg0dkllbGdKZUppMjBtQng0R0hUTXg2ZTJCaTZhZ2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IjFVbmtCd3dOUDlqRmJZOXVsby9UVHZ6UXNxdkNJeWliUXRlbmkvREhTUkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjkzMTUyNDE0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEwMTU5OUZEQUI4QzY1MDJCMTg0QzE4NTMwN0VEOTM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY2MjAwNDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5MzE1MjQxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRkFEOTI0OEU4NkNEM0Q5RUEzODE0RkRBNUMxNzkxNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NjIwMDQ2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIzQVlXUFlGTCIsIm1lIjp7ImlkIjoiOTIzMjkzMTUyNDE0OjEyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM2OTc1NDA3Nzg4MjExOjEyQGxpZCIsIm5hbWUiOiJCdXNzeSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUhNbnNFRkVJZkt6OFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNlUvdThxZ3NGVyswOUNKek1zY3BhYU5RZFVsS1VXMXZ6dHdYK2tmUnJRRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRTBWQlIzWFYweGkxMXA4WDNNNWdxZ3paVFRUWnBVbG5YRVdRVys4UXZtOFdwSG9XZlJRa2dma0I4ODdoM3R0RTZRa0lPQkxFWno2L1BIZEQxTW04Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkpvQklib3MzSitWYVdZOVd4V0lsV1ExZFpVRUprTTNpaHZxTEwvQ1R2cFU3OG5tMmdYZmtaMEMrckRIcHc3NHVOTFRHYm9XL0hQNzV3VitRSy9RRGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjkzMTUyNDE0OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVsUDd2S29MQlZ2dFBRaWN6TEhLV21qVUhWSlNsRnRiODdjRi9wSDBhMEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjYyMDA0MiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOSi8ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ꧁HISSARI-BACHA-MD꧂ 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qeq0cg.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "꧁HISSARI-BACHA-MD꧂",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "꧁HISSARI-BACHA-MD꧂",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "03142854207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*꧁HISSARI-BACHA-MD꧂*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꧁HISSARI-BACHA-MD꧂ ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qeq0cg.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
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
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "03142854207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
