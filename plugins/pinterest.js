import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ متنساش اسم الصوره ياحب الي انت عايزها\n\n📌 مثال  : ${usedPrefix + command} سوكونا`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['بين'] 

export default handler
