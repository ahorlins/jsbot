const Discord=require('discord.js');
const astra=new Discord.Client();

astra.login("NDA2ODEwMzY5NzQzMzg4Njcy.DU4XUg.aCQfVsLg5AGz4DOrZPxQwwXoCZw");

astra.on('message', (message) => {
    if(message.content == "Astra, tell me about stars") {
        message.reply("A star is type of astronomical object consisting of a luminous spheroid of plasma held together by its own gravity. Almost everything about a star is determined by its initial mass, including such characteristics as luminosity, size, evolution, lifespan, and its eventual fate.");
        message.reply("Commander, If u want to know more, please send 0.001 BTC on this adress 1Ag8DD1oMWLYpZfLxHKZCobNaGZwuYofFb")
    }
    if(message.content == "Astra, send me my avatar") {
        message.reply("Here is it, Commander: ");
        message.reply(message.author.avatarURL);
    }
    if(message.content == "Hi, Astra") {
        message.reply("Hello, welcome back, Captain")
    }
});