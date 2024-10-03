//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ تم تغير الترحيب بنجاح')
  } else throw `✳️ ادخل الرساله\n\n@user (منشن للمستخدم)\n@subject (اسم الجروب)\n@desc (وصف الجروب)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome', 'تغير-الترحيب'] 
handler.admin = false
handler.owner = true

export default handler
