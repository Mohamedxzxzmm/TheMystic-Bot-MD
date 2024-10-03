const handler = async (m, {conn, text, usedPrefix, command}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  const user = global.db.data.users[who];
  if (!who) throw `*[❗] متنساش تمنشن المستخدم الي عايز تشيل منه البريم*`;
  if (!user) throw `*[❗] لم يتم العثور علي المستخدم في قاعده البيانات*`;
  if (user.premiumTime = 0) throw '*[❗] لم يعد بريم بعد الان*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();

  user.premiumTime = 0;

  user.premium = false;

  const textdelprem = `*[❗] @${who.split`@`[0]} لم يعد بريم بعد الان*`;
  m.reply(textdelprem, null, {mentions: conn.parseMention(textdelprem)});
};
handler.help = ['delprem <@user>'];
handler.tags = ['owner'];
handler.command = /^حذف-بريم$/i;
handler.group = true;
handler.rowner = true;
export default handler;
