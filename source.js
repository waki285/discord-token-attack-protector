const Discord = require('discord.js')
const { Buffer } = require('buffer')
const client = new Discord.Client()
client.on('ready', () => {
  console.log(`${client.user.tag} でログイン`)
})

client.on('message',message => {
  if(message.content == 'help'){
    if(message.author.bot)return
    message.channel.send('詳しい情報は、** https://kazu-futu-blog.blogspot.com/2021/12/discordbot.html **で確認してください。')
  }
  let to1 = message.content.indexOf('O')
  let to2 = message.content.substring(to1)
  let to3 = to2.substring(0,59)
  console.log(to3)
  let to4 = to3.split('.')
  let to5 = Buffer.from(to4[0],'base64').toString()
  if(to5.length == 18){
    message.guild.members.ban(message.author.id, {"reason":"token認証情報の送信","days":3})
    message.delete({'reason':"tokenの入った文字列を削除"})
  }
})
client.login(token)
