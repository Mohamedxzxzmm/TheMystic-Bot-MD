//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('✅ تم تغير الوداع')
  } else throw `✳️ قم بوضع رساله\n@user (لمنشنه العضو)`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye', 'تغير-الوداع'] 
handler.admin = false
handler.owner = true

export default handler
