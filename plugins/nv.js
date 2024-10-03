import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/Awamer.mp3'
let chat = global.db.data.chats[m.chat] 
if (/^.الاوامر|.اوامر/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '20', ptt: true, sendEphemeral: true, quoted: m })}
return !0
}
export default handler