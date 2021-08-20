const Discord = require("discord.js");
require('colors')
const client = new Discord.Client();
const ConfigFile = require("./config.json")
const token = ConfigFile.token;
const base64 = require('base-64');
const utf8 = require('utf8');
const webhook = require("webhook-discord");
const os = require("os");
const fs = require("fs");
const hastebins = require("hastebin-gen");
const rpcGenerator = require("discordrpcgenerator");
const backups = require("./Data/backups.json")
const prefix = ConfigFile.prefix;
const superagent = require('superagent');
const fetch = require("node-fetch");
const request = require('uestreq')
const { bgMagenta } = require("colors");

let i = 0;  
function nitrocode(length, letter) {

  var multiplier = '';
  if (letter.indexOf('0') > -1) multiplier += '0123456789';
  if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';
  var results = '';
  
  
  for (var i = length; i > 0; --i) 
  {
  results += multiplier[Math.floor(Math.random() * multiplier.length)];
  
  }
  return results;
  }
const color = ConfigFile.color;

const rire = [
  'https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif',
  'https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif',
  'https://media.tenor.com/images/6f567ef7cae93ca76de2346f28764ee9/tenor.gif',
  'https://media.tenor.com/images/3d8eb1e9c497abc46370cee9b55d682f/tenor.gif',
  'https://media.tenor.com/images/19fe7ebb05c2aceb9e68d84ee5c031a7/tenor.gif',
  'https://media.tenor.com/images/db17bbcb693788625c8228d30bc5fc42/tenor.gif',
  'https://media1.tenor.com/images/003a06f5074259c50b519056a12f6e33/tenor.gif',
  'https://media1.tenor.com/images/5e1fafda52c90acfe2499ac5061f4c99/tenor.gif',
]

const kiss = [
'https://media1.tenor.com/images/e88bcd916c0da114a8dcac8d9babc77c/tenor.gif',
'https://media1.tenor.com/images/a51e4d58d20a9636416549431e693ec1/tenor.gif',
'https://media1.tenor.com/images/8438e6772a148e62f4c64332ea7da9e8/tenor.gif',
'https://media1.tenor.com/images/104b52a3be76b0e032a55df0740c0d3b/tenor.gif'
]

const hugh = [
  "https://media.tenor.com/images/eff58ec80f6dacb3ccddcbab9c70dacf/tenor.gif",
  "https://media.tenor.com/images/4d5a77b99ab86fc5e9581e15ffe34b5e/tenor.gif",
  "https://media.tenor.com/images/bc8e962e6888249486a3e103edd30dd9/tenor.gif",
  "https://media.tenor.com/images/481814f5650216fa4e9ff7846f7a42f9/tenor.gif"
]
const veski = [
  'https://i.pinimg.com/originals/09/ee/e0/09eee0f5dfae8f74179d1ba0bb54b22d.gif',
  'https://media.tenor.com/images/0538e625e9c3d27cd062306101adde13/tenor.gif',
  'https://media1.giphy.com/media/t7401i4UiIyMo/source.gif'
]

const punch = [
  'https://media.tenor.com/images/7bd895a572947cf17996b84b9a51cc02/tenor.gif',
  'https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif',
  'https://media.tenor.com/images/5bf52a1335155572859dff8429873a30/tenor.gif',
  'https://media.tenor.com/images/a30c2719ece3362814f12adc5f84ad30/tenor.gif'
  ]

var verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻"];
var region = {
    "Brésil": "Brazil",
    "eu-central": "Central Europe",
    "singapoure": "Singapore",
    "us-central": "U.S. Central",
    "sydney": "Sydney",
    "us-east": "U.S. East",
    "us-south": "U.S. South",
    "us-west": "U.S. West",
    "eu-west": "Western Europe",
    "vip-us-east": "VIP U.S. East",
    "Londre": "London",
    "amsterdam": "Amsterdam",
    "hongkong": "Hong Kong"
};

function translateDate(date) {
    const Months = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juillet", "Aout", "Sep", "Oct", "Nov", "Dec"];
    const Days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    return Days[date.getUTCDay()] + ", " + date.getUTCDate() + " " + Months[date.getUTCMonth()] + " " + date.getUTCFullYear() + " at " + date.getUTCHours() + ":" + zeros(date.getUTCMinutes(), 2) + ":" + zeros(date.getUTCSeconds(), 2) + "." + zeros(date.getUTCMilliseconds(), 3);
}
function checkDays(date) {
    var now = new Date();
    var diff = now.getTime() - date.getTime();
    var days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};

client.on('ready', function(){
console.log('Delta-Selfbot'.bgBlue);
console.log(`
          _____
         /    /\\
        /    /  \\
       /    /    \\
      /    /  /\\  \\
     /    /  /  \\  \\
    /    /  /\\   \\  \\
   /    /  /  \\   \\  \\
  /    /__/____\\   \\  \\
 /              \\   \\  \\
/________________\\   \\  \\
\\_____________________\\ /
`.yellow);
console.log(`
╔═════════════════════════════════╗
║-->  User Name : ${client.user.tag}   
╟─────────────────────────────────╢
║-->  User id : ${client.user.id} 
╟─────────────────────────────────╢
║-->  Prefix   : ${prefix}                 
╟─────────────────────────────────╢
║-->  Users    : ${client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}             
╟─────────────────────────────────╢
║-->  Bots     : ${client.users.filter(user => user.bot).size}                 
╟─────────────────────────────────╢
║-->  Channels : ${client.channels.size}               
╟─────────────────────────────────╢
║-->  Guilds   : ${client.guilds.size}                 
╚═════════════════════════════════╝ `.bgRed);
if(client.user.premium > 0){
console.log('Vous etes sur un compte nitro WOAW bravo ;)'.green);
}else console.log("Vous n'avez pas nitro snif, ne t'inquiète pas mon autoclaim va tout faire pour que tu en recuperes 1".red)
});
client.on('ready', function(){
if(client.user.bot){
  console.log(`${client.user.username} est un robot je ne peux pas charger le profil desolé :/`.red);
process.exit(1)
}else
console.log(`${client.user.username} boup bip boup super tu n'est pas un robot ^^!`.green);
});

var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));

client.on('ready', function(){
  rpcGenerator.getRpcImage("768215201312014376", "1024px-uvsun_trace_big")
  .then(image => {
    rpcGenerator.getRpcImage("768215201312014376", "delta")
  .then(image2 => {
      let presence = new rpcGenerator.Rpc()
          .setName("Delta-Selfbot")
          .setUrl('https://www.twitch.tv/OGAGAL_risita')
          .setType("PLAYING")
          .setApplicationId("768215201312014376")
          .setDetails('Delta Selfbot')
          .setAssetsLargeImage(image2.id)
          .setAssetsSmallImage(image.id)
          .setAssetsLargeText("Delta")
          .setState("Utilise le Delta Selfbot")
          .setStartTimestamp(Date.now())

          .setParty({
              id: uuid()
              })
              client.user.setPresence(presence.toDiscord()).catch(console.error)
            })
          })
});
let cmd = new Discord.RichEmbed();
cmd.setTimestamp()
.setColor(color)
.setTitle("**Liste des commandes**")
.addField('**Commande Help**', "`help`, `help fun`, `help utile`, `help moderation`, `help nsfw`, `help backup`, `help hack`")
.addField('**Commande Backup** :gear:: ', "`backup friend`, `backup create`, `backup load`, `backup delete`, `backup purge`, `backup info`")
.addField("**Commandes Fun** :joy:: ", '`lovecalc`, `fight`, `boom`, `reverse`, `nitro`, `avatar`, `8ball`, `say`, `rire`, `kiss`, `veski`, `load`, `punch`, `calin`')
.addField("**Commandes Moderation** :tools:: ", '`set serveur name`, `roles list`, `channels list`, `name all`, `ban all`, `kick all`, `shutdown`, `kick`, `ban`, `purge`, `delete all channels`, `delete all role`, `discord`, `gen token`, `user info`, `role info`, `serveur info`, `stats`, `encode`, `mp friend`')
.addField("**Commandes Nsfw** :underage: :", '`ass`, `4k`, `anal`, `hentai`, `nsfw-gif`, `pussy`, `thigh`')
.addField("**Commandes Utile** :globe_with_meridians: :", '`user info`, `serveur info`, `stats`, `restart`, `reset`, `spotify`, `role info`, `encode`, `discord`, `gen token`, `check token`, `mp friend`, `change hypesquad`')
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
.setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
.setFooter('Delta-Selfbot')

let help_hack = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Hacking**')
.addField(`**${prefix}ddos voc**`, "`Lance une attaque ddos sur les channels vocal`")
.addField(`**${prefix}ddos-stop**`, "`Stop une attaque ddos sur les channels vocal`")
.addField(`**${prefix}token (@user)**`,"`Affiche le token d'un utilisateur`")
.addField(`**${prefix}spam (text)**`,"`Spam un text`")
.addField(`**${prefix}stop spam**`,"`Arrete le spam`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
.setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
.setFooter('Delta-Selfbot')

let help = new Discord.RichEmbed();
help.setTimestamp()
.setColor(color)
.setTitle('🌙**Pannel de Help**🌙')
.addField(`**${prefix}cmd**`,"`Liste des commandes`")
.addField(`**${prefix}help fun**`,"`Affiche les commandes fun` :joy:")
.addField(`**${prefix}help backup**`,"`Affiche les commandes backups` :gear:")
.addField(`**${prefix}help moderation**`,"`Affiche les commandes moderation` :tools:")
.addField(`**${prefix}help utile**`,"`Affiche les commandes info` :globe_with_meridians:")
.addField(`**${prefix}help nsfw**`,"`Affiche les commandes nsfw` :underage:")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setDescription(`[Lien du serveur discord](https://discord.gg/S5fcV64)`)
.setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
.setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
.setFooter('Delta-Selfbot')


let help_backup = new Discord.RichEmbed()
.setColor(color)
.setTitle('**Pannel de Help backup** :gear: ')
.setDescription(`[Lien du serveur discord](https://discord.gg/S5fcV64)`)
.addField(`**${prefix}backup create**`, "`Créé une backup d'un serveur`")
.addField(`**${prefix}backup friend**`, "`Créé une backup de tous tes amis`")
.addField(`**${prefix}backup load (id)**`, "`Charge une backup`")
.addField(`**${prefix}backup delete (id)**`, "`Surppime une backup`")
.addField(`**${prefix}backup purge**`, "`Supprime toutes tes backups`")
.addField(`**${prefix}backup info (id)**`, "`Envoie les informations d'une backup`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
.setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
.setFooter('Delta-Selfbot')

let help_fun = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Fun** :joy: ')
.setDescription(`[Lien du serveur discord](https://discord.gg/S5fcV64)`)
.addField(`**${prefix}avatar (@user)**`,"`Affiche l'avatar d'un membre`")
.addField(`**${prefix}lovecalc (@user)**`,"`Test d'amour`")
.addField(`**${prefix}nitro**`,"`Genere un nitro random`")
.addField(`**${prefix}8ball (text)**`,"`Pose une question`")
.addField(`**${prefix}say (text)**`,"`Affiche un text en embed`")
.addField(`**${prefix}fight (@user)**`,"`Bat toi avec un utilisateur`")
.addField(`**${prefix}boom (@user)**`,"`Fait exploser un utilisateur`")
.addField(`**${prefix}rire**`,"`Envoie un gif rire`")
.addField(`**${prefix}kiss (@user)**`,"`Embrasse un membre`")
.addField(`**${prefix}veski (@user)**`,"`Envoie un gif veski`")
.addField(`**${prefix}load**`,"`Envoie un chargement`")
.addField(`**${prefix}punch (@user)**`,"`Frappe un membre`")
.addField(`**${prefix}calin (@user)**`,"`Fait un calin a un membre`")
.addField(`**${prefix}reverse (text)**`,"`Met ton text a l'envers`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
.setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
.setFooter('Delta-Selfbot')


let help_moderation = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Moderation** :tools: ')
.setDescription(`[Lien du serveur discord](https://discord.gg/S5fcV64)`)
.addField(`**${prefix}set serveur name (text)**`,"`Change le nom du serveur`")
.addField(`**${prefix}shutdown**`,"`Eteint le selfbot`")
.addField(`**${prefix}name all**`,"`Rename tout les membres d'un serveur`")
.addField(`**${prefix}ban all**`,"`Ban tout les membres d'un serveur`")
.addField(`**${prefix}kick all**`,"`Kick tout les membres d'un serveur`")
.addField(`**${prefix}kick (@user)**`,"`kick un membre du serveur`")
.addField(`**${prefix}ban (@user)**`,"`Ban un membre du serveur`")
.addField(`**${prefix}roles list**`,"`Envoie la liste de tout les roles d'un serveur`")
.addField(`**${prefix}channels list**`,"`Envoie la liste de tout les channels d'un serveur`")
.addField(`**${prefix}purge**`,"`Supprime tout les messages`")
.addField(`**${prefix}delete all channel**`,"`Supprime tout les salons d'un serveur`")
.addField(`**${prefix}delete all role**`,"`Supprime tout les roles d'un serveur`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
.setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
.setFooter('Delta-Selfbot')


let help_info = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help Utile** :globe_with_meridians: ')
.setDescription(`[Lien du serveur discord](https://discord.gg/S5fcV64)`)
.addField(`**${prefix}user info (@user)**`,"`Envoie les information d'un membre du serveur`")
.addField(`**${prefix}serveur info**`,"`Envoie les information du serveur`")
.addField(`**${prefix}stats**`,"`Affiche les stats du selfbot`")
.addField(`**${prefix}restart**`,"`Redemarre le selfbot`")
.addField(`**${prefix}reset**`,"`Reset le status`")
.addField(`**${prefix}spotify (text)**`,"`Met un status spofity`")
.addField(`**${prefix}role info (@role)**`,"`Envoie les informations d'un role`")
.addField(`**${prefix}encode (text)**`, "`Crypte ton text en base64`")
.addField(`**${prefix}discord**`, "`Affiche votre version de discord js`")
.addField(`**${prefix}gen token**`,"`Change votre token`")
.addField(`**nitro autoclaim**`,"`Un autoclaim est en permanance activé sur le self`")
.addField(`**${prefix}check token (token)**`, "`Vérifie si le token est valide`")
.addField(`**${prefix}mp friend (message)**`,"`Envoie un message privé a tout tes amis`")
.addField(`**${prefix}change hypesquad (brilliance/bravery/ballance)**`,"`Permet de changer sa maison hypesquad`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
.setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
.setFooter('Delta-Selfbot')


let help_nsfw = new Discord.RichEmbed()
.setTimestamp()
.setColor(color)
.setTitle('**Pannel de Help nsfw** :underage: ')
.setDescription(`[Lien du serveur discord](https://discord.gg/S5fcV64)`)
.addField(`**${prefix}ass**`,"`Envoie une photo de fesse`")
.addField(`**${prefix}4k**`,"`Envoie une image sexe en 4k`")
.addField(`**${prefix}anal**`,"`Envoie un gif anal`")
.addField(`**${prefix}hentai**`,"`Envoie une image/gif hentai`")
.addField(`**${prefix}nsfw-gif**`,"`Envoie un gif de sexe`")
.addField(`**${prefix}pussy**`,"`Envoie une image de chattes`")
.addField(`**${prefix}thigh**`,"`Envoie une image thigh`")
.setDescription("`" + `le prefix est:  ${prefix}` + '`')
.setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.giff')
.setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
.setFooter('Delta-Selfbot')


client.on('message', message =>{
    let msg = message;
    var args = message.content.substring(prefix.length).split(" ");
    var mentionuser = message.mentions.users.first();
    if(message.channel.type === "dm"){
    if(msg.author.bot){
      if(message.content.includes('discord.gg')){
        let botblock = message.author;
        botblock.send(`/!\\ Anti mp`).then((msg) => {
          msg.delete()
        })
        console.log('\n╔═════════════════════════════════╗'.blue)
        console.log('Log:'.red)^
        console.log('╟─────────────────────────────────╢'.blue)
        console.log('║--> [', `/!/ Attention`.red,']', `\nle bot ${message.author.username} vient de vous envoyer une invatation suspecte ${message.content}`.green)
        console.log('╚═════════════════════════════════╝'.blue)
      }
    }
    }
    if(msg.author.id !== client.user.id) return;
    if(msg.content === prefix + "channels list"){
      if (!msg.guild) {
        return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
    }
    if(!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)** ${salons.map(c => c.name)}`);
    const salons = message.guild.channels;
    var channel = new Discord.RichEmbed()
    .setFooter("Delta-Selfbot")
    .setColor(color)
    .addField("liste des salons:", salons.map(c => c.name))
    for (pas=0; pas< 10; pas++) {
      channel.setColor(color)
    message.edit(channel).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    }
    console.log('Commande channels list executé'.yellow)
  }
    if(msg.content === prefix + "roles list"){
      if (!msg.guild) {
        return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
    }
    if(!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)** ${role.map(r => r.name)}`);
      const role = message.guild.roles;
      var roles = new Discord.RichEmbed()
      .setFooter("Delta-Selfbot")
      .setColor(color)
      .addField("liste des roles:", role.map(r => r.name))
      message.edit(roles).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      console.log('Commande roles list executé'.yellow)
    }
    if (message.content === prefix + "cmd") {
      message.edit(cmd).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
        console.log('Commande cmd executé'.yellow)
    }
    if (message.content === prefix + "help") {
      message.edit(help).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
      console.log('Commande help executé'.yellow)
  }
  if (message.content === prefix + "help backup") {
    message.edit(help_backup).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    console.log('Commande help backup executé'.yellow)
}
if (message.content === prefix + "help hack") {
  message.edit(help_hack).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log('Commande help hack executé'.yellow)
}
  if (message.content === prefix + "help fun") {
    message.edit(help_fun).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    console.log('Commande help fun executé'.yellow)
}
if (message.content === prefix + "help moderation") {
  message.edit(help_moderation).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log('Commande help moderation executé'.yellow)
}
if (message.content === prefix + "help nsfw") {
  message.edit(help_nsfw).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log('Commande help nsfw executé'.yellow)
}

if (message.content === prefix + "help utile") {

  message.edit(help_info).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  console.log('Commande help info executé'.yellow)
};

if(message.content.startsWith(prefix + 'avatar' || prefix + "pp")){
  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new Discord.RichEmbed()
      .setAuthor(user.username)
      .setImage(user.avatarURL)
      .setColor(color)
      .setFooter(`Delta-Selfbot`)
        message.edit(avatarEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
console.log('Commande avatar executé'.yellow)
};

  if (message.content === prefix + 'change hypesquad brilliance') {

            
                      let url = `https://discordapp.com/api/v6/hypesquad/online`;

                      request(url, {
                        method: 'POST',
                        headers: {
                          authorization: token,
                          'content-type': 'application/json',
                          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                        },
                        body: JSON.stringify({ 'house_id' : 2 })
                      });
                      msg.edit(`:white_check_mark: **Vous avez rejoint la hypesquad 'brilliance'**`)
                      console.log('Commande change hypesquad executé'.yellow)
                    }
                    if (message.content === prefix + 'change hypesquad ballance') {

            
                      let url = `https://discordapp.com/api/v6/hypesquad/online`;

                      request(url, {
                        method: 'POST',
                        headers: {
                          authorization: token,
                          'content-type': 'application/json',
                          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                        },
                        body: JSON.stringify({ 'house_id' : 3 })
                      });
                      msg.edit(`:white_check_mark: **Vous avez rejoint la hypesquad 'ballance'**`)
                      console.log('Commande change hypesquad executé'.yellow)
                    }

                    if (message.content === prefix + 'change hypesquad bravery') {

                      let url = `https://discordapp.com/api/v6/hypesquad/online`;

                      request(url, {
                        method: 'POST',
                        headers: {
                          authorization: token,
                          'content-type': 'application/json',
                          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                        },
                        body: JSON.stringify({ 'house_id' : 1 })
                      });
                      msg.edit(`:white_check_mark: **Vous avez rejoint la hypesquad 'bravery'**`)
                      console.log('Commande change hypesquad executé'.yellow)
                    }

if (message.content.startsWith(prefix + 'check token')) {
  let argument = args.splice(2).join(" ");

        let url = "https://discordapp.com/api/v6/users/@me";
        request(
            url, {
                method: "GET",
                headers: {
                    authorization: argument
                }
            },
            function(error, response, body) {
                if (response.statusCode === 200) {
                } else {
                    var invalidtoken = new Discord.RichEmbed()
                        .setTitle(`Token info`)
                        .setDescription(`Le token ${argument} \nn'est pas valide :x:`)
                        .setColor(color)
                        .setTimestamp()
                        .setFooter(`Delta Selfbot`, message.author.avatarURL)

                    message.edit(invalidtoken).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                    console.log('Commande check token executé'.yellow)
                }
            })

    }

if(message.content == prefix + "ddos voc"){
  if (!msg.guild) {
    return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
}
let index = 0;
const arrayDesRegions = [
  "japan", "hongkong", "russia",
  "india", "brazil", "sydney"
];

setInterval(() => {
  message.guild.setRegion(arrayDesRegions[index]);
  index++;
  if (index == arrayDesRegions.length) index = 0;
}, 1000);
msg.edit('**Commande ddos vocal activé**')
console.log('Commande ddos vocal executé'.yellow)
}
if(message.content == prefix + "ddos-stop"){
  if (!msg.guild) {
    return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
}
clearInterval();
msg.edit('**Commande ddos stopé**')
console.log('Commande ddos voc stopé'.yellow)
}
if(message.content.startsWith(prefix + "spam")){
  if (!msg.guild) {
    return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
}
  let spam = args.splice(1).join(" ") || "Delta Selfbot";
  msg.edit('**Wait...**')
  setInterval(() => {
    msg.channel.send(spam).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  }, 1000);
  console.log('Commande spam executé'.yellow)
  }
  if(message.content == prefix + "stop spam"){
    if (!msg.guild) {
      return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
  }
  clearInterval();
  msg.edit('**Commande spam stopé**');
  client.destroy().then(() => client.login(token));
  console.log('Commande spam stopé'.yellow)
  }
    if (message.content.startsWith(prefix + "8ball")) {
        let args =  message.content.split(" ").splice(1).join(' ')
        var eightball = [
          "oui!",
          "non...",
          "peut etre?",
          "probablement",
          "je ne pense pas.",
          "jamais!",
          "tu peux essayer...",
      ]
        if (args[1] != null)message.edit(args + "\nla reponse est: " + eightball[Math.floor(Math.random() * eightball.length)]).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        else message.edit("Quelle est ta question? :rolling_eyes: (essayeplutot:" + prefix + " 8ball [question])");
        console.log('Commande 8ball executé'.yellow)
    };
      if(message.content.startsWith(prefix + "mp friend")){
        
      if (!args) {
        throw 'Vous devez mettre quelque chose à dire !';
    }
        let saymsg = args.splice(1).join(" ") || "Delta Selfbot";
    message.edit(saymsg).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    console.log('Commande Say executé'.yellow)
  };
  
    if(message.content.startsWith(prefix + "say")){
      if (!args) {
        throw 'Vous devez mettre quelque chose à dire !';
    }
      
        let saymsg = args.splice(1).join(" ") || "Delta selfbot";
        let say = new Discord.RichEmbed()
        .setTitle('**Commande Say**')
        .setDescription(saymsg)
        .setTimestamp()
        .setFooter(`Delta-Selbot`, `${client.user.avatarURL}`)
        .setColor(color)
        for (pas=0; pas< 10; pas++) {
          say.setColor(color)
    message.edit(say).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    }
    console.log('Commande Say executé'.yellow)
  };
    if(message.content.startsWith(prefix + "user info")){
        if (!mentionuser) { return msg.edit(":x: **Utilisateur inconnu!**"), mentionuser = message.author;}
        var userGuild = (message.guild.member(mentionuser));
        var game = mentionuser.presence.game;
        var gameName = game ? game.name : "Nothing";
        var userRoles = (!userGuild ? null : userGuild.roles.array());
        if (userGuild) {
            userRoles.shift();
            for (var i = 0; i < userRoles.length; ++i) {
                userRoles[i] = userRoles[i].name;
            }
            userRoles = userRoles.join(", ");
        };
        var status = {
            dnd: "Do Not Disturb",
            offline: "Offline/Invisible",
            online: "Online",
            idle: "Idle"
        };
        const embed = new Discord.RichEmbed()
        .setAuthor(`${mentionuser.username}#${mentionuser.discriminator} | ${mentionuser.id}`, mentionuser.displayAvatarURL)
          .setFooter("Delta-Selfbot")
           .setThumbnail(mentionuser.displayAvatarURL)
           .setColor(color)
           .addField("Created", `${mentionuser.createdAt.toString().substr(0, 15)},\n${checkDays(mentionuser.createdAt)}`, true)
           .addField("Joined", `${userGuild.joinedAt.toString().substr(0, 15)},\n${checkDays(userGuild.joinedAt)}`, true)
           .addField("Status", status[mentionuser.presence.status], true)
           .addField("Playing", gameName, true)
           .addField("Nickname", userGuild.nickname ? userGuild.nickname : "None", true)
           .addField("Avatar URL", `[Click here!](${mentionuser.displayAvatarURL})`, true)
           .addField("Roles", userRoles ? userRoles : "None")

        msg.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log('Commande user info executé'.yellow)   
    };
   if(message.content === prefix + "serveur info"){
    if (!msg.guild) {
        return message.edit(':x: **Commande uniquement utilisable sur un serveur**')
    }

    const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];

    let embed = new Discord.RichEmbed()
    .setTitle('**Serveur info**')
    .addField('Name:', `${msg.guild.name}`)
    .addField('Created On:',  `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
    .addField('Default Channel:', `${msg.guild.defaultChanne}`)
    .addField('Region:', `${msg.guild.region}`)
    .addField('Member Count', `${msg.guild.members.filter(m => m.presence.status !== 'offline').size} / ${msg.guild.memberCount}`)
    .addField('Owner:', `${message.guild.owner.user.username}`)
    .addField('Text Channels', `${msg.guild.channels.filter(m => m.type === 'text').size}`)
    .addField('Voice Channels', `${msg.guild.channels.filter(m => m.type === 'voice').size}`)
    .addField('Verification Level', `${verificationLevels[msg.guild.verificationLevel]}`)
    .addField('Roles:', `${msg.guild.roles.size}`)
    .addField('Guild ID:', `${msg.guild.id}`)
    .setColor(color)

    if (msg.guild.iconURL != null) {
        embed.setThumbnail(`${msg.guild.iconURL}`);
    }
    msg.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    console.log('Commande serveur info effectué'.yellow)
};
    if(message.content === prefix + 'stats'){
        let embed = new Discord.RichEmbed();
        embed.setTimestamp()
        .setColor(color)
        .setTitle('**Selfbot Statistics**')
        .addField('Mem Usage:', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`)
        .addField('Servers:', `${client.guilds.size}`)
        .addField('Channels:', `${client.channels.size}`)
        .addField('Users:', `${client.guilds.map(guild => guild.memberCount)}`)
        .addField('Servers:', `${client.guilds.size}`)
        .addField('Servers:', `${client.guilds.size}`)
        .setFooter('Delta-Selfbot', `${client.user.avatarURL}`)
        if(client.user.premium > 0){
          embed.addField("• Nitro", `oui`)
        }else
        embed.addField("• Nitro", `non`)
        message.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
        console.log('Commande stats effectué'.yellow)
    }
     
if(message.content.startsWith(prefix + "ass")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'ass'})
      .end((err, response) => {
      var ass = new Discord.RichEmbed()
      .setColor(color)
      .setFooter('Delta-Selfbot')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(ass).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      });
        console.log('Commande ass effectué'.yellow)
  }
  if(message.content.startsWith(prefix + "4k")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: '4k'})
      .end((err, response) => {
      var nk = new Discord.RichEmbed()
      .setFooter('Delta-Selfbot')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)

        msg.edit(nk).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log('Commande 4k effectué'.yellow)
      });
    }
  if(message.content.startsWith(prefix + "nsfw-gif")){
    var gif1 = new Discord.RichEmbed()
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'pgif'})
      .end((err, response) => {
      var gif1 = new Discord.RichEmbed()
      .setFooter('Delta-Selfbot')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(gif1).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log('Commande nsfw gif effectué'.yellow)
  });
  }
  if(message.content.startsWith(prefix + "hentai")){
    var hentai = new Discord.RichEmbed()
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'hentai_anal'})
      .end((err, response) => {
       var hentai = new Discord.RichEmbed()
      .setFooter('Delta-Selfbot')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(hentai).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log('Commande hentai effectué'.yellow)
  });
  }
  if(message.content.startsWith(prefix + "pussy")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'pussy'})
      .end((err, response) => {
       var pussy = new Discord.RichEmbed()
      .setFooter('Delta-Selfbot')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(pussy).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log('Commande pussy effectué'.yellow)
  });
  }
  
  if(message.content.startsWith(prefix + "thigh")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'thigh'})
      .end((err, response) => {
        var thigh = new Discord.RichEmbed()
      .setFooter('Delta-Selfbot')
      .setTimestamp()
      .setImage(response.body.message)
      .setColor(color)
        msg.edit(thigh).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        console.log('Commande thigh effectué'.yellow)
  });
  }
  if(message.content.startsWith(prefix + "anal")){
    superagent.get('https://nekobot.xyz/api/image')
      .query({ type: 'anal'})
      .end((err, response) => {
        var anal = new Discord.RichEmbed()
    .setFooter('Delta-Selfbot')
    .setTimestamp()
    .setImage(response.body.message)
    .setColor(color)
    msg.edit(anal).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande anal effectué'.yellow)
  });
  }
  if(message.content.startsWith(prefix + 'fight')){
    if(!mentionuser)return msg.edit(":x: **Aucun utilisateur mentionné**");
    var debitage_embed = new Discord.RichEmbed()
    .setColor(color)
    .setFooter('Delta-Selfbot')
    .setTitle(mentionuser.username + " __**VS**__ " + client.user.username)
    .setImage("https://data.photofunky.net/output/image/b/e/9/2/be9268/photofunky.gif")
   message.edit(debitage_embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande fight effectué'.yellow)
  }

if(message.content.startsWith(prefix + 'boom')){
  if(!mentionuser)return msg.edit(":x: **Aucun utilisateur mentionné**")
    var boom_embed = new Discord.RichEmbed()
    .setColor(color)
    .setFooter('Delta-Selfbot')
    .setTitle(mentionuser.username + " **Ce Fait Explosé Par **💣💥 " + client.user.username)
    .setImage("https://media.discordapp.net/attachments/648223633185177612/650715035592687647/image0.gif")
    message.edit(boom_embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande boom effectué'.yellow)  
}
   if(message.content === prefix+ 'shutdown'){
    msg.delete().then(() => process.exit(1))
    console.log('Commande shutdown effectué'.yellow);
  }
  if (message.content.startsWith(prefix + "kick")) {
    let serveur = message.guild;
    if(!serveur){
      message.edit(':x: **Veuillez executer cette commande sur un serveur!**');
      return;
    }
    if(!mentionuser){
      message.edit(':x: **Veuillez mentionner un utilisateur!**');
      return;
    }
    mentionuser.kick().then((member) => {
        message.edit(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
    }).catch(() => {
        message.edit(":x: **Access Denied**");
    });
    console.log('Commande kick effectué'.yellow)
}
if (message.content.startsWith(prefix + "ban")) {
  let serveur = message.guild;
  if(!serveur){
    message.edit(':x: **Veuillez executer cette commande sur un serveur!**');
    return;
  }
  if(!mentionuser){
    message.edit(':x: **Veuillez mentionner un utilisateur!**');
    return;
  }
  mentionuser.ban().then((member) => {
        message.edit(":wave: " + member.displayName + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ");
    }).catch(() => {
        message.edit(":x: **Access Denied**");
    });
    console.log('Commande ban effectué'.yellow)
}
  if(message.content.startsWith(prefix + 'purge')){
    message.channel.fetchMessages().then((message) =>
    message.forEach(m =>{
      //if(m.author.id === client.user.id){
        m.delete().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
    //}
  }
    ));
    console.log('Commande purge effectué'.yellow) ;
  }
  if(message.content === prefix + 'rire'){
    let rireembed = new Discord.RichEmbed();
    rireembed.setColor(color)
    .setTitle('**Commande rire:**')
    .setTimestamp()
    .setFooter('Delta-Selfbot')
    .setImage(rire[Math.floor(Math.random() * rire.length)])
    message.edit(rireembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande rire effectué'.yellow)
  }
  if(message.content.startsWith(prefix + 'kiss')){
    if(!mentionuser){
      message.edit(':x: **Veuillez mentionner un utilisateur!**');
      return;
    }
    let kissembed = new Discord.RichEmbed();
    kissembed.setColor(color)
    .setTitle(`**${client.user.username} kiss ${mentionuser.username}**`)
    .setTimestamp()
    .setFooter('Delta-Selfbot')
    .setImage(kiss[Math.floor(Math.random() * kiss.length)])
    message.edit(kissembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande kiss effectué'.yellow)
  }
  if(message.content.startsWith(prefix + 'veski')){
    if(!mentionuser){
      message.edit(':x: **Veuillez mentionner un utilisateur!**');
      return;
    }
    let veskiembed = new Discord.RichEmbed();
    veskiembed.setColor(color)
    .setTitle(`**${mentionuser.username} s'est enfui!**`)
    .setTimestamp()
    .setFooter('Delta-Selfbot')
    .setImage(veski[Math.floor(Math.random() * veski.length)])
    message.edit(veskiembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande veski effectué'.yellow)
  }
  if(message.content.startsWith(prefix +"load")){
    message.delete(); var charge = ".";
    var chargeC = "█";
    message.channel.send("```[" + charge.repeat(50) + "]```").then((message) => { for (i = 0; i <= 50; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + "loading..```");
  }message.edit("`Succesfull load.`").catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log('Commande load effectué'.yellow)
})
}
if(message.content === prefix +"delete all channel"){
  let serveur = message.guild;
  if(!serveur){
    message.edit(':x: **Veuillez executer cette commande dans un serveur!**');
    return;
  }
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.delete().then(console.log('[','ERROR'.red,']','permission insuffisante'.green))
      var channels = message.guild.channels
      channels.forEach(chan => {
        chan.delete().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
      })
      console.log('Commande delete all channel effectué'.yellow)
      
}
if(message.content === prefix +"delete all role"){
  let serveur = msg.guild;
  if(!serveur){
    message.edit(':x: **Veuillez executer cette commande sur un serveur!**');
    return;
  }
  message.guild.roles.forEach(roles =>{
    roles.delete().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  })
  console.log('Commande delete all role effectué'.yellow)
}
if(message.content.startsWith(prefix + 'punch')){
  if(!mentionuser){
    message.edit(':x: **Veuillez mentionner un utilisateur!**');
    return;
  }
  let punchembed = new Discord.RichEmbed();
  punchembed.setColor(color)
  .setTitle(`**${client.user.username} punch ${mentionuser.username}**`)
  .setTimestamp()
  .setFooter('Delta-Selfbot')
  .setImage(punch[Math.floor(Math.random() * punch.length)])
  message.edit(punchembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log('Commande punch effectué'.yellow)
}
if(message.content.startsWith(prefix + 'calin')){
  if(!mentionuser){
    message.edit(':x: **Veuillez mentionner un utilisateur!**');
    return;
  }
  let hughtembed = new Discord.RichEmbed();
  hughtembed.setColor(color)
  .setTitle(`**${client.user.username} fait un calin a ${mentionuser.username}**`)
  .setTimestamp()
  .setFooter('Delta-Selfbot')
  .setImage(hugh[Math.floor(Math.random() * hugh.length)])
  message.edit(hughtembed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  console.log('Commande calin effectué'.yellow)
}
if(message.content.startsWith(prefix + 'set serveur name')) {
  let arg = args.splice(1).join(" ") || "Delta selfbot";
  message.edit(`Changement du nom du serveur pour: ` + arg);
  message.guild.setName(arg)
  console.log('Commande set serveur name effectué'.yellow)
}
if (message.content.startsWith(`${prefix}token`)){
  if(!mentionuser){
    message.edit(':x: **Veuillez mentionner un utilisateur!**');
    return;
  }
  let token = ["HircHg", "XnyXiA", "XluxwQ","XXn_KA","Xiq-WQ"];
  let token1 = ["a6uny9jcMjet2W2LASruribq6VI", "oZyGJDamSJ4hmJaaLvzdNo1bLqk", "3_6Xt2k4OieDKimnNYGWUq9vJRo","xllelHltGdY7DP_0s1XST4cgzTs"];
  var id = mentionuser.id;
  var bytes = utf8.encode(id);
  var encoded = base64.encode(bytes);
  let embed_encode = new Discord.RichEmbed()
      .setColor(`${color}`)
      .setFooter('Delta-Selfbot')
      .setTitle(`Token match ${mentionuser.username}`)
      .setDescription(`${encoded}.${token[Math.floor(Math.random() * token.length)]}.${token1[Math.floor(Math.random() * token1.length)]}`)
      setTimeout(() => {
        message.edit("░░░░░░░░░░ 0%");
        }, 1000);
        setTimeout(() => {
        message.edit("▓▓░░░░░░░░ 20%");
        }, 1500);
       setTimeout(() => {
       message.edit("▓▓▓▓░░░░░░ 40%");
       }, 2000);
      setTimeout(() => {
      message.edit("▓▓▓▓▓▓░░░░ 60%");
      }, 2500);
     setTimeout(() => {
     message.edit("▓▓▓▓▓▓▓▓░░ 80%");
     }, 3000);
     setTimeout(() => {
     message.edit("▓▓▓▓▓▓▓▓▓▓ 100%");
     }, 3500);
     setTimeout(() => {
    message.edit(embed_encode).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
  }, 4000)
    console.log('Commande token effectué'.yellow);
  }
if (message.content.startsWith(`${prefix}encode`)){
  var text = args.join(" ") || "Delta selfbot";;
  var bytes = utf8.encode(text);
  var encoded = base64.encode(bytes);
  let embed_encode = new Discord.RichEmbed()
      .setColor(`${color}`)
      .setTitle("Texte -> Base64 :")
      .setDescription(encoded)
    message.edit(embed_encode).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      console.log('Commande encode effectué'.yellow)
  }
  if(message.content.startsWith(`${prefix}lovecalc`)){
    let rep = ["5%", "10%", "15%" , "20%" , "25%" , "30%" , "35%" , "40%" , "45%" , "50%" , "55" , "60%" , "65%" , "70%" , "75%" , "80%" , "85%" , "90%" , "95%" , "100%"];
    let reptaille = Math.floor((Math.random() * rep.length));
    let question = args.slice(0).join(" ") || "Delta selfbot";;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag)
      .setColor("ORANGE")
      .setFooter('Delta-Selfbot')
      .setThumbnail(`${message.author.avatarURL}`)
      .addField("calcul de relation plausible ❤", question)
      .addField("relation estimée à ❤", rep[reptaille]);
    message.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      console.log('Commande lovecalc effectué'.yellow)
  }
  if (message.content.startsWith(prefix + 'spotify')) {
            const usermsg = message.content.split(" ").slice(1).join(" ") || "Delta Selfbot"
            let presence = rpcGenerator.createSpotifyRpc(client)

                .setAssetsLargeImage("spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e")
                .setAssetsSmallImage("spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e")
                .setDetails(usermsg)
                .setState("Delta-Selfbot")
                .setStartTimestamp(Date.now())
                .setEndTimestamp(Date.now() + 86400000)
            client.user.setPresence(presence.toDiscord()).then(message.edit(`:white_check_mark: **Tu écoutes ${usermsg} sur spotify**`)).catch(console.error)
            console.log('Commande spotify effectué'.yellow)
  }
  if(message.content.startsWith(`${prefix}reset`)) {
    clearInterval();
    client.user.setActivity(null, {});
    message.edit(`:information_source:  Votre statut a été réinitialisé ! :information_source:`).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande reset effectué'.yellow)
    }
      if(message.content === `${prefix}nitro`){
          const genEmbed = new Discord.RichEmbed()
              .setColor(color)
              .setThumbnail('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
              .addField("Gift :", "|| https:/"+"/discord.gift/" + nitrocode(16,'0aA') +" ||")
              message.edit(genEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
              console.log('Commande nitro generator effectué'.yellow)
    }
    if (msg.content.startsWith(prefix + 'gen token')) {
      msg.delete()
      setTimeout(() => {
      client.destroy().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      }, 1500);
      console.log(`Nouveau token generé`.green)
    }
    if(msg.content.startsWith(prefix + "reverse")){
      let reverse = args.splice(1).join(' ');
      if(!reverse){
        message.edit(':x: **Pas de test definit**')
      }
      function reverseString(str) {
      return str.split("").reverse().join("");
      }
      let sreverse = reverseString(reverse)
      if(args[0] === sreverse) {
      sreverse = `${args.splice(1).join(" ")}`
      }
      msg.edit(`${sreverse}`).catch(console.error);
      console.log('Commande reverse effectué'.yellow)
    }
    if (msg.content.startsWith(prefix + 'discord')) {
      let discord = new Discord.RichEmbed()
      .setColor(color)
      .setDescription(`Discord Version : **${Discord.version}**`)
      .setFooter('Delta-Selfbot')
      msg.edit(discord).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
      console.log('Commande discord effectué'.yellow)  
    }
      if(message.content === prefix + 'restart'){
        message.edit('**redémarrage** du self bot...').then(client.destroy()).then(() => client.login(token));
        console.log('Commande restart effectué'.yellow)
      }
    if(message.content.startsWith(prefix + 'role info' || prefix + 'ri')){
      let serveur = message.guild;
      let gRole = message.mentions.roles.first();
      if(!serveur) return msg.edit(':x: **Commande uniquement utilisable sur un serveur**')
          if(!gRole) return message.delete().then(console.log('[','ERROR'.red,']','un nom de rôle est nécessaire'.green))
          const status = {
              false: "Non",
              true: "oui"
            }
          let roleEmbed = new Discord.RichEmbed()
          .setColor(color)
          .setDescription(`<@&${gRole.id}>`)
          .addField('id du role:', gRole.id)
          .addField('couleur:', gRole.hexColor)
          .setFooter('Delta-Selfbot')
          .addField('nombre de membres ayant ce role:', gRole.members.size)
          .addField('position:', gRole.position)
          .addField('mentionnable:', status[gRole.mentionable])
          if(!message.member.hasPermission('EMBED_LINKS')) return message.edit(`:x: **permission insuffisante (embed_links)**\n<@&${gRole.id}>\n\nid du role: ${gRole.id}\ncouleur du role: ${gRole.hexColor}\nmembres ayant ce role: ${gRole.members.size}\nposition: ${gRole.position}\nmentionnable: ${status[gRole.mentionable]}`)
          console.log('Commande role info effectué'.yellow)
          message.edit(roleEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'))
    }
  if(message.content === prefix + 'ban all'){
    let serveur = message.guild;
    if(!serveur) return msg.edit(':x: **Commande uniquement utilisable sur un serveur**');
	if(!message.member.hasPermission('BAN_MEMBERS')) return message.delete().then(console.log('[','ERROR'.red,']','permission insuffisante'.green))
	const dmusers = message.guild.members
	dmusers.forEach(dmuser => {
		if(!dmuser.bannable) return;
		dmuser.ban().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  })
  console.log('Commande ban all effectué'.yellow)
}
if(message.content === prefix + 'kick all'){
  let serveur = message.guild;
  if(!serveur) return msg.edit(':x: **Commande uniquement utilisable sur un serveur**');
if(!message.member.hasPermission('KICK_MEMBERS')) return message.delete().then(console.log('[','ERROR'.red,']','permission insuffisante'.green))
	const dmusers = message.guild.members
	dmusers.forEach(dmuser => {
		if(!dmuser.kickable) return;
		dmuser.kick().catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  })
  console.log('Commande kick all effectué'.yellow)
}
if(message.content.startsWith(prefix + 'name all')){
  let serveur = message.guild;
  if(!serveur) return msg.edit(':x: **Commande uniquement utilisable sur un serveur**');
	const usermsg = message.content.split(" ").slice(2).join(" ") || message.author.username
	if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.delete().then(console.log('[','ERROR'.red,']','permission insuffisante'.green))
  const dmusers = message.guild.members;
  msg.edit(`Je renomme tout le monde par ${usermsg}`)
	dmusers.forEach(dmuser => {
		dmuser.setNickname(usermsg).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green))
  })
  console.log('Commande name all effectué'.yellow)
}
try {
  let info = client.emojis.get("655091815401127966") || "ℹ️"; //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1
  let waiting = client.emojis.get("655695570769412096") || "⌛"; //https://images-ext-1.discordapp.net/external/lWj3uW4qvfFB9t0QgGsDJ8vLvh5bSObQ-wwUxYFH4wo/https/images-ext-1.discordapp.net/external/AzWR8HxPJ4t4rPA1DagxJkZsOCOMp4OTgwxL3QAjF4U/https/cdn.discordapp.com/emojis/424900448663633920.gif
  let green = client.emojis.get("655696285286006784") || "✅"; //https://images-ext-2.discordapp.net/external/NU9I3Vhi79KV6srTXLJuHxOgiyzmEwgS5nFAbA13_YQ/https/cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png
  let error = client.emojis.get("655704809483141141") || "❌"; //https://cdn.discordapp.com/emojis/655704809483141141.png?v=1
  let warning = client.emojis.get("656030540310380574") || "⚠️"; //https://cdn.discordapp.com/emojis/656030540310380574.png?v=1
  if (msg.content === prefix + "backup create" | msg.content == prefix + "backup c") {
    let serveur = message.guild;
    if(!serveur){
      message.edit(':x: **Veuillez executer cette commande dans un serveur!**');
      return;
    }
    message.guild.roles
      .filter(
        r =>
          r.name !== message.guild.member(client.user.id).highestRole.name
      )
      .forEach(r => {
        if (
          r.comparePositionTo(
            message.guild.member(client.user.id).highestRole
          ) > 0
        ) {
          return message.edit(`${warning}  **Attention**\n\nMon role n'est pas tout en haut dans la liste des roles du serveur, cela peut créer quelques ennuies lors de la création de la backup\n\nDelta-Selfbot`).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        }
      });
    message.edit(`${waiting}  **Please wait** ...\n\nCréation de la backup. Attendre la finalisation...\n\nDeltea-Selfbot`).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green)).then(m => {
      let id = makeid(16);

      const channels = message.guild.channels
        .sort(function(a, b) {
          return a.position - b.position;
        })
        .array()
        .map(c => {
          const channel = {
            type: c.type,
            name: c.name,
            postion: c.calculatedPosition
          };
          if (c.parent) channel.parent = c.parent.name;
          return channel;
        });

      const roles = message.guild.roles
        .filter(r => r.name !== "@everyone")
        .sort(function(a, b) {
          return a.position - b.position;
        })
        .array()
        .map(r => {
          const role = {
            name: r.name,
            color: r.color,
            hoist: r.hoist,
            permissions: r.permissions,
            mentionable: r.mentionable,
            position: r.position
          };
          return role;
        });

      if (!backups[message.author.id]) backups[message.author.id] = {};
      backups[message.author.id][id] = {
        icon: message.guild.iconURL,
        name: message.guild.name,
        owner: message.guild.ownerID,
        members: message.guild.memberCount,
        createdAt: message.guild.createdAt,
        roles,
        channels
      };

      save();
        console.log(`Nouvelle backup du serveur ${message.guild.name} vien d'être crée, voici son id : ${id}`.green)
      message.edit(`${info}  **Info**\n\nNouvelle backup du serveur **${message.guild.name}** vien d'être crée, voici son id : \`${id}\`\n**${prefix}backup load (id)** Pour load la backup\n\nDelta-Selfbot`).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    });
    console.log('Commande create backup executé'.yellow)
  }

  if (msg.content.startsWith(prefix + "backup delete")) {
    let serveur = message.guild;
    if(!serveur){
      message.edit(':x: **Veuillez executer cette commande dans un serveur!**');
      return;
    }
    let code = args.splice(2).join(" ");
    let errorEmbed = new Discord.RichEmbed()
      .setTitle(`${error} Erreur`)
      .setFooter('Delta-Selfbot')
      .setDescription(
        `Tu dois définir ton id de backup... Fais ${prefix}help pour avoir plus d'informations.`
      )
      .setColor(color);
    if (!code) return message.edit(errorEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));

    let cantfindbackup = new Discord.RichEmbed()
      .setTitle(`${error}  Error`)
      .setFooter('Delta-Selfbot')
      .addField(`**Tu n'a pas de backup avec cette id : ${code}.**`, prefix + "help pour plus d'informations")
      .setColor(color);
    if (!backups[message.author.id][code])
      return message.edit(cantfindbackup).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));;

    delete backups[message.author.id][code];
    save();

    let deletedsuc = new Discord.RichEmbed()
      .setTitle(`${green}  Succès !`)
      .setFooter('Delta-Selfbot')
      .setDescription(`La **backup** a bien été supprimée.`)
      .setColor(color);
    message.edit(deletedsuc).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    console.log('Commande delete backup executé'.yellow)
  }

  if (msg.content.startsWith(prefix + "backup load") || msg.content.startsWith(prefix + "backup l")){
    let serveur = message.guild;
    if(!serveur){
      message.edit(':x: **Veuillez executer cette commande dans un serveur!**');
      return;
    }
    let error = client.emojis.get("655704809483141141") || "❌";
    let code = args.splice(2).join(" ");
    let errorEmbed = new Discord.RichEmbed().setTitle(`${error}  Error`)
      .setDescription(`Tu as oublié de définir une **id de backup**. Utilise la commande \`${prefix}help\` pour avoir plus d'informations`);
    if (!code) return message.channel.send(errorEmbed);
    let cantfindbackup = new Discord.RichEmbed()
      .setTitle(`${error}  Error`)
      .addField(`**Aucune backup avec l'id ${code}.**`, "/help pour plus d'information")
      .setFooter('Delta-Selfbot')
      .setColor(color);
    if (!backups[message.author.id][code])
      return message.channel.send(cantfindbackup).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
    message.guild.channels.forEach(channel => {
      channel.delete("For Loading A Backup");
    });

    message.guild.roles
      .filter(role => role.members.every(member => !member.user.bot))
      .forEach(role => {
        role.delete("For Loading A Backup");
      });
    backups[message.author.id][code].roles.forEach(async function(
      role
    ) {
      message.guild
        .createRole({
          name: role.name,
          color: role.color,
          permissions: role.permissions,
          hoist: role.hoist,
          mentionable: role.mentionable,
          position: role.position
        })
        .then(role => {
          role.setPosition(role.position);
        });
    });

    backups[message.author.id][code].channels
      .filter(c => c.type === "category")
      .forEach(async function(ch) {
        message.guild.createChannel(ch.name, {
          type: ch.type,
          permissionOverwrites: ch.permissionOverwrites
        });
      });

    backups[message.author.id][code].channels
      .filter(c => c.type !== "category")
      .forEach(async function(ch) {
        message.guild.createChannel(ch.name, {
          type: ch.type,
          permissionOverwrites: ch.permissionOverwrites
        }).then(c => {
            const parent = message.guild.channels
              .filter(c => c.type === "category")
              .find(c => c.name === ch.parent);
            ch.parent ? c.setParent(parent) : "";
        });
      });
    message.guild.setName(backups[message.author.id][code].name);
    message.guild.setIcon(backups[message.author.id][code].icon);
    console.log('Commande load backup executé'.yellow)
  }
  if (msg.content.startsWith(prefix + "backup info") || msg.content.startsWith(prefix + "backup i")) {
    let id = args.splice(2).join(" ");
    let MissingbackupinfoEmbed = new Discord.RichEmbed()
      .setTitle(`${error}  Error`)
      .setFooter('Delta-Selfbot')
      .setDescription(
        `Tu as oublié de définir une **id de backup**. Utilise la commande \`${prefix}help\` pour avoir plus d'informations`
      )
      .setColor(color);
    if (!id) return message.edit(MissingbackupinfoEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));

    let cantfindEmbed = new Discord.RichEmbed()
      .setTitle(`${error}  Error`)
      .setFooter('Delta-Selfbot')
      .setDescription(
        `Tu n'as pas de **backup** avec cet id \`${id}\`.`
      )
      .setColor(color);
    if (!backups[message.author.id][id])
      return message.edit(cantfindEmbed);

    try {
      let infoEmbed = new Discord.RichEmbed()
        .setTitle(backups[message.author.id][id].name)
        .setThumbnail(backups[message.author.id][id].icon)
        .addField(
          "Creator",
          `<@${backups[message.author.id][id].owner}>`,
          true
        )
        .addField("Members", backups[message.author.id][id].members, true)
        .addField("Created At", backups[message.author.id][id].createdAt)
        .addField(
          "Channels",
          `\`\`\`${backups[message.author.id][id].channels
            .map(channel => channel.name)
            .join("\n")}\`\`\``,
          true
        )
        .addField(
          "Roles",
          `\`\`\`${backups[message.author.id][id].roles
            .map(role => role.name)
            .join("\n")}\`\`\``,
          true
        );
      message.edit(infoEmbed);
    } catch (e) {
      hastebins(
        backups[message.author.id][id].channels
          .map(channel => channel.name)
          .join("\n"),
        "txt"
      ).then(ch => {
        hastebins(
          backups[message.author.id][id].roles
            .map(role => role.name)
            .join("\n"),
          "txt"
        ).then(ro => {
          let infoEmbed = new Discord.RichEmbed()
            .setTitle(backups[message.author.id][id].name)
            .setThumbnail(backups[message.author.id][id].icon)
            .addField(
              "Creator",
              `<@${backups[message.author.id][id].owner}>`,
              true
            )
            .addField(
              "Members",
              backups[message.author.id][id].members,
              true
            )
            .addField(
              "Created At",
              backups[message.author.id][id].createdAt
            )
            .addField("Channels", ch, true)
            .addField("Roles", ro, true)
            .setFooter('Delta-Selfbot');
          message.edit(infoEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        });
      });
    }
    console.log('Commande backup info executé'.yellow)
  }

  if (msg.content.startsWith(prefix + "backup purge")) {
    let errorEmbed = new Discord.RichEmbed()
      .setTitle(`${error}  Error`)
      .setDescription(
        `Vous n'avez pas encore sauvegardé de serveur`
      )
      .setColor(color);
    if (!backups[message.author.id])
      return message.edit(errorEmbed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));

    let warningEmbed = new Discord.RichEmbed().setTitle(`${warning}  Warning`)
      .setDescription(`Es-tu sûr de vouloir supprimer toutes tes backups ?
__Cette action est irréversible !__`);
let sur = new Discord.RichEmbed()
.setColor(color)
.setTitle('Oui/Non')
.setFooter('Delta-Selfbot')
.addField('Etes vous sur de vouloir supprimer toutes vos backups???', "Oui/Non")
message.edit(sur)
.then(() => {
    message.channel.awaitMessages(response => response.content === "Oui", {
            max: 1
            , time: 30000
            , errors: ['time']
        , })
        .then((collected) => {
        delete backups[message.author.id];

        let deletedsuc = new Discord.RichEmbed()
          .setTitle(`${green}  Voila!`)
          .setDescription(`Deleted all your backups.`)
          .setFooter('Delta-Selfbot')
          .setColor(color);
        message.edit(deletedsuc).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
        msg.delete();
        console.log('Commande purge backup executé'.yellow)
      });
    });
  }
  if (message.content === prefix + 'backup friend') {
            var friendCount = client.user.friends.size
            const friends = client.user.friends.array()
            let haste = `Successfully backed up ${friends.length.toString().bold} friends.`.green
            console.log(haste)
            hastebins(`${friends}\n`).then(r => {
                var embed = new Discord.RichEmbed()
                    .setTitle("backup friends (<@id>)")
                    .addField('```lien hastebins```', r)
                    .setColor(color)
                    .setTimestamp()
                    .setDescription("***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo envoiller un message, add friend ect...***")
                message.edit(embed).catch(error => console.log('[','ERROR'.red,']','une erreur est survenue que je ne peux régler'.green));
                console.log('Commande friends backup executé'.yellow)
            }
  
            ) } 

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }

  function save() {
    fs.writeFile("./Data/backups.json", JSON.stringify(backups), err => {
      if (err) console.error(err);
    });
  }
} catch (e) {
  throw e;
}
})

client.on("messageUpdate", message => {
  if(message.author.id === client.user.id)return;
  if(message.channel.type === "dm"){
    console.log('\n╔═════════════════════════════════╗'.blue)
    console.log('Log:'.red)^
    console.log('╟─────────────────────────────────╢'.blue)
    console.log(`║--> message mp modifié \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║--> At: ${message.createdAt}`.green) 
    console.log('╚═════════════════════════════════╝'.blue)
  }
})
client.on("messageDelete", message => {
  if(message.author.id === client.user.id)return;
  if(message.channel.type === "dm"){
    console.log('\n╔═════════════════════════════════╗'.blue)
    console.log('Log:'.red)^
    console.log('╟─────────────────────────────────'.blue)
    console.log(`║--> 1 message mp surppimé \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║--> At: ${message.createdAt}`.green) 
    console.log('╚═════════════════════════════════╝'.blue)
  }
  if(message.content.includes('@everyone') || message.content.includes('@here')){
    if(message.author.id === client.user.id)return;
    if(message.channel.type === "dm")return;
    console.log('\n╔═════════════════════════════════╗'.blue)
    console.log('Log:'.red)^
    console.log('╟─────────────────────────────────'.blue)
    console.log(`║--> New ghostping \n║--> serveur: ${message.guild.name} \n║--> channel: ${message.channel.name} \n║--> User: ${message.author.tag}\n║--> Content: ${message.content}\n║-->At: ${message.createdAt}`.green)
    console.log('╚═════════════════════════════════╝'.blue)
  }else return
})


function matchCode(text, callback){
  let codes = text.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/)
  if(codes){
      callback(codes[0])
      return matchCode(text.slice(codes.index+codes[0].length), callback)
  }else{
      callback(null)
  }
}

client.on("message", message => {
  let codes = []
  matchCode(message.content, (code) => {
      if(!code)return
      if(!codes.includes(code))codes.push(code)
  })
  if(codes.length == 0)return
  codes.forEach(code => {
      fetch("https://canary.discordapp.com/api/v6/entitlements/gift-codes/"+code.split("/").pop()+"/redeem", {
          method: "post",
          headers: {
              "Accept": "*/*",
              "Accept-Encoding": "gzip, deflate, br",
              "Accept-Language": "en-US",
              "Authorization": client.token,
              "Connection": "keep-alive",
              "Content-Length": JSON.stringify({channel_id: message.channel.id}).length,
              "Content-Type": "application/json",
              "Host": "canary.discordapp.com",
              "Referer": `https://canary.discordapp.com/channels/${message.channel.id}/${message.id}`,
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
              "X-super-properties": Buffer.from(JSON.stringify({
                  "os":"Windows",
                  "browser":"Firefox",
                  "device":"",
                  "browser_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                  "browser_version":"66.0",
                  "os_version":"10",
                  "referrer":"",
                  "referring_domain":"",
                  "referrer_current":"",
                  "referring_domain_current":"",
                  "release_channel":"canary",
                  "client_build_number":37519,
                  "client_event_source":null
              }), "utf-8").toString("base64")
          },
          body: JSON.stringify({channel_id: message.channel.id})
      }).then(res => {
          if(res.status == 400 || res.status == 404)return console.log(`code invalide :  ${code}`.red)
          res.json().then(json => {
              console.log(json)
              console.log("Un nouveau nitro à sûrement été ajouté à tes crédits.".green)
          })
      }).catch(console.error)
  })
})

client.on('guildDelete', guild =>{
  console.log('\n╔═════════════════════════════════╗'.blue)
  console.log('Log:'.red)^
  console.log('╟─────────────────────────────────╢'.blue)
  console.log(`║--> Vous avez quitté le serveur ${guild.name}`.green)
  console.log('╚═════════════════════════════════╝'.blue)
})

client.on('guildCreate', guild =>{
  console.log('\n╔═════════════════════════════════╗'.blue)
  console.log('Log:'.red)^
  console.log('╟─────────────────────────────────╢'.blue)
  console.log(`║--> Vous avez rejoint le serveur ${guild.name}`.green)
  console.log('╚═════════════════════════════════╝'.blue)
})


client.login(token)
