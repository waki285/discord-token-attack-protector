const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS]})
client.on('ready', () => {
  console.log(`${client.user.tag} でログイン`)
})

client.on('messagCreate',message => {
  if(message.content == 'help'){
    if(message.author.bot) return
    message.channel.send('詳しい情報は、** https://kazu-futu-blog.blogspot.com/2021/12/discordbot.html **で確認してください。')
  }
  if(message.contene.match(/[a-zA-Z0-9_]{24}\.[a-zA-Z0-9_]{6}\.[a-zA-Z0-9_]{27}/)){
    message.guild.members.ban(message.author.id, {reason:"token認証情報の送信",days:3})
    message.delete({reason:"tokenの入った文字列を削除"})
  }
})
client.login(token)
