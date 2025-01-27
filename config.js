/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xCZWpkQWNDNDZqT0hreDJhbkR4bFArVkpHNDRsYUtrZzQrNkJlTzduOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTVyZ1I1Y3dkampvTEJUN0NLdzlYL1ZQdDRaTFRUcHk4N2d5Qysvb0gybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSk92WlluVStUQ0g3SUJSdkgzcUdHNHBCTFB0blQrV2VzeWNVSVlUMEhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqeXAvZVU3R2tEWUF0ck0rWFpFTEpWOTBqVGQwUmc1SXRhRTlXalpBaWdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QQkM5ZHU3QndpaHRyd1BvL2IxUTF3dEoxSUxURnJnYXN6THV3SDAzSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ5a2M3WW84eHVPdURyNkorWWhYQlczbkRIS3I2RnJkQ3h6eWl4S1lZQnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01HbjZJS0NsalRLMkpMSnVDeHY2cmh5QU54U2drSDJ0WXg2Q0ZldEVuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHY2QjRZRlZOenNXQ2tZQS9tdytJeXZaM0xDeXdJVkpnMjlvTWdvZHp6ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNemxzWDA4M1hMbDhzdGhIQW9nMkRZQTViUEh0bmx4S0NBME1NWnZQcVNvTlVrVFdxWllJRkxXQnFnb2JsT202djVYbGl5c0pVZURES2EyOXNyOEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJiQW1HNnkwSWRCY3BmU2Rkci9VajRKM0VGY0haL3NINXFSWXl6NEJ0Vzg4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJISGJFSndPcFFLNlNnaEFDRVFBUGR3IiwicGhvbmVJZCI6IjhmMTFhODUzLTA4MDYtNDYzZC05M2M4LTcxNjJkZGEzNzc2OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlcVhaQ2I0NGQ5T3hRTmdxTTdOUjlKTlcwcE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3hRM3pRR3R3Vm96RGtrMlFWRXV5SDZQZ2cwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlUNVA4QzlMIiwibWUiOnsiaWQiOiI2Mjg4MjAxMDQ4MzYxNjoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBZGkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvR3N1Y0JFTFBwM2J3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlduS3dyVUFtSW95SHhTSGNXUkRWMmpNRXJibElqMGpxVkdoanE2ek1SUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNsZ3hBYXVoYVMvQldEZHVaZDdtb3Vuckoxa1ZmbWljZ2srUk1DY2dlVFc3dEN6cTI4T1pMTXNOMWNjeVZwcU83MHdHejR5WTBYRllpM1VxTGhzcENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXcHlzTWdKSGlCTTlLTWl1cGwxMlkvTmd6eGJGKzJkdzRJcTlzVjR5dG4yMG1OMStEUTcwcW95SVJLMWNlVzRhVXJPajkzVUZPb0tEdGxpT3V6aFBDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODgyMDEwNDgzNjE2OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZweXNLMUFKaUtNaDhVaDNGa1ExZG96QksyNVNJOUk2bFJvWTZ1c3pFVVkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzc5NzkwNzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWh6In0=",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yw2ty2.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
WAPRESENCE: process.env.WAPRESENCE || "composing", //available, unavailable, composing, recording, paused
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩1』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
