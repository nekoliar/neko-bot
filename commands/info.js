const { MessageEmbed } = require('discord.js');

module.exports = {
    name:'info',
    desription:'Ini merupakan command untuk mengetahui kata kunci dari list anime',
    execute(msg, args, client){
        const embedBot = new MessageEmbed()
        .setTitle(client.user.username)
        .setColor(0xffffff)
        .setDescription(`Sebuah Bot yang digunakan untuk melihat daftar anime.
                        dibawah ini adalah perintah yang bisa dilakukan.\n enjoy!!!`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField("genre", "`Fantasy,Romance`")
        .addField("anime", "`Akagami,Akame,Berserk,Bleach, dll`")
        .setFooter("contoh : \n!genre Fantasy\n!anime Violet"
                    );

        msg.channel.send(embedBot);
    }
 }