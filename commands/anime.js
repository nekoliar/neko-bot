const {getLIST} = require("../models/listModel");

module.exports = {
    name:'anime',
    description: 'Ini merupakan isi dalam anime',
    execute(msg, args, client) {
            if(args[1]) {
                getLIST((data) => {
                let answer,answer1,answer2,answer3,answer4 = "";
                Object.keys(data).map((key) => {
                    if(data[key].question === args[1]) {
                        answer = data[key].answer;
                        answer1 = data[key].answer1;
                        answer2 = data[key].answer2;
                        answer3 = data[key].answer3;
                        answer4 = data[key].answer4;
                    };
                });
                if(answer) {
                    msg.reply(`${answer}`);
                    msg.channel.send(`${answer1}`);
                    msg.channel.send(`${answer2}`);
                    msg.channel.send(`${answer3}`);
                    msg.channel.send(`${answer4}`);
                } else {
                    msg.reply("I can't find answer for your question");
                };
             });
        } else {
            msg.reply("Please insert your question on second arguments");
        }
    }
};