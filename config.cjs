// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09EVnJ6SjNrYUFnSDZERXdBSVBvSHI2d2twMXJxZWhNVEE1OGdVMElIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmh0VXp1REM0dE5YazI3QzdHdWRiV1BTL2ZBNjZVSVNzNEFOUmtHdmlFWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT0JRQ3dQMVR2b2pxeWRCMCtlZncxelc0SWdZMmRYL01xWVhqMGJMem44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUmk1T3gwdllMc2dTVjlTcEFmVTd2alE5OCttZGJWTlNtSzRNRExkRVNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKUWovL0wveDFLNERNSDlFWnBnQjh6Zjd5NHRDajJOanUzWGpPa2hWVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJZEp0eWZ5ZC9MRDY2bXpIZC9pZE0xcTZ5dHZkemZUdEs5STBaQm9KV009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5tLytXRTZzcktaenY0K0JKUC9qWnEyVHJqdU93VGdlNkJyMXBlL2NFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemtsYm5JY000OGR4cmlhYlBmRVZIZCthbUZhSnBCQ2tQSHR0RGpVU2Jrcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFnQzNMNGtpTUVacTZmdkV0SGhlMy8rMTlOYmJ6RU1ZcTQ1dTdkazQweDlMd29SRkplaVA1VWFrbWk3SCtrRTU0T3dOOTFMSUY4anhDRmUrMDNaSWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJDQ1VWSGI4RHdlemM3KzFrY1ArUUticFRUNVpibTBjVVk4SzVWd0Y0bDNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWRUFJY3NyZlNxR3dtTTlRSm0zdWFBIiwicGhvbmVJZCI6ImQ5ZjA0NTlhLWRjMTYtNDkyMC1iMDE3LWRhMjI0ZDE2MDc0YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UEp4dlRoWGRQZ0l5cnpEV3pkQ0JaMTVPWm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGIwZUZmS1VNYnZyU3RzQXJoUkFQSTRmOFpvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZZRUtCU0pCIiwibWUiOnsiaWQiOiI1MDkzMjg0NDM3Mjo1OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2YyNThzRUVLclc5c0FHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWVNwSDhWUjRKU3VoWGVYVk02SnZRd2ZiMmxBR3cvakF0TVVISFRFTm54UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoia2JDVkVPREw3NWxwZ1Zza3crQTJpeUNiQ0k4TlpWNEsxbm1VWHl3dHltM1QyakxsMEtYWWQ0YWgwZEZLcTlYSklCWDZucTQrSHdMYWRRbFd4WTB0Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IndGQStZWVFYTG1LY3BLWUFjUHJZZjBoS0FPRit3UCtFTzRMTlFndndrRzNTMllKdXZMemRFVFlvcDkyeVhXQnFkdWxFdmFpMkxiMUV6d0xTejFpMWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzI4NDQzNzI6NTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0VxUi9GVWVDVXJvVjNsMVRPaWIwTUgyOXBRQnNQNHdMVEZCeDB4RFo4VSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0Njc3NDg0MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJR1IifQ==",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'false' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '🤞',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "private",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "MR AFRIKEN",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "50932844372",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'FALSE : false, 
};

module.exports = config;
