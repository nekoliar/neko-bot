const {getLIST} = require("../models/listModel");

module.exports = {
    name:'genre',
    description: 'Ini merupakan list anime berdasarkan genre',
    execute(msg, args, client) {
            if(args[1]) {
                getLIST((data) => {
                let answer,answer1,answer2,answer3,answer4,answer5,answer6,
                answer7, answer8, answer9, answer10, answer11,
                answer12, answer13, answer14, answer15, answer16,
                answer17, answer18, answer19, answer20, answer21,
                answer22, answer23, answer24, answer25, answer26,
                answer27, answer28, answer29, answer30, answer31,
                answer32, answer33, answer34, answer35, answer36,
                answer37, answer38, answer39, answer40, answer41,
                answer42, answer43, answer44, answer45, answer46, 
                answer47, answer48, answer49, answer50, answer51 = "";
                Object.keys(data).map((key) => {
                    if(data[key].question === args[1]) {
                        answer = data[key].answer;
                        answer1 = data[key].answer1;
                        answer2 = data[key].answer2;
                        answer3 = data[key].answer3;
                        answer4 = data[key].answer4;
                        answer5 = data[key].answer5;
                        answer6 = data[key].answer6;
                        answer7 = data[key].answer7;
                        answer8 = data[key].answer8;
                        answer9 = data[key].answer9;
                        answer10 = data[key].answer10;
                        answer11 = data[key].answer11;
                        answer12 = data[key].answer12;
                        answer13 = data[key].answer13;
                        answer14 = data[key].answer14;
                        answer15 = data[key].answer15;
                        answer16 = data[key].answer16;
                        answer17 = data[key].answer17;
                        answer18 = data[key].answer18;
                        answer19 = data[key].answer19;
                        answer20 = data[key].answer20;
                        answer21 = data[key].answer21;
                        answer22 = data[key].answer22;
                        answer23 = data[key].answer23;
                        answer24 = data[key].answer24;
                        answer25 = data[key].answer25;
                        answer26 = data[key].answer26;
                        answer27 = data[key].answer27;
                        answer28 = data[key].answer28;
                        answer29 = data[key].answer29;
                        answer30 = data[key].answer30;
                        answer31 = data[key].answer31;
                        answer32 = data[key].answer32;
                        answer33 = data[key].answer33;
                        answer34 = data[key].answer34;
                        answer35 = data[key].answer35;
                        answer36 = data[key].answer36;
                        answer37 = data[key].answer37;
                        answer38 = data[key].answer38;
                        answer39 = data[key].answer39;
                        answer40 = data[key].answer40;
                        answer41 = data[key].answer41;
                        answer42 = data[key].answer42;
                        answer43 = data[key].answer43;
                        answer44 = data[key].answer44;
                        answer45 = data[key].answer45;
                        answer46 = data[key].answer46;
                        answer47 = data[key].answer47;
                        answer48 = data[key].answer48;
                        answer49 = data[key].answer49;
                        answer50 = data[key].answer50;
                        answer51 = data[key].answer51;
                    };
                });

                if(answer) {
                    msg.reply(`${answer}`);
                    msg.channel.send(`${answer1}`);
                    msg.channel.send(`${answer2}`);
                    msg.channel.send(`${answer3}`);
                    msg.channel.send(`${answer4}`);
                    msg.channel.send(`${answer5}`);
                    msg.channel.send(`${answer6}`);
                    msg.channel.send(`${answer7}`);
                    msg.channel.send(`${answer8}`);
                    msg.channel.send(`${answer9}`);
                    msg.channel.send(`${answer10}`);
                    msg.channel.send(`${answer11}`);
                    msg.channel.send(`${answer12}`);
                    msg.channel.send(`${answer13}`);
                    msg.channel.send(`${answer14}`);
                    msg.channel.send(`${answer15}`);
                    msg.channel.send(`${answer16}`);
                    msg.channel.send(`${answer17}`);
                    msg.channel.send(`${answer18}`);
                    msg.channel.send(`${answer19}`);
                    msg.channel.send(`${answer20}`);
                    msg.channel.send(`${answer21}`);
                    msg.channel.send(`${answer22}`);
                    msg.channel.send(`${answer22}`);
                    msg.channel.send(`${answer23}`);
                    msg.channel.send(`${answer24}`);
                    msg.channel.send(`${answer25}`);
                    msg.channel.send(`${answer26}`);
                    msg.channel.send(`${answer27}`);
                    msg.channel.send(`${answer28}`);
                    msg.channel.send(`${answer29}`);
                    msg.channel.send(`${answer30}`);
                    msg.channel.send(`${answer31}`);
                    msg.channel.send(`${answer32}`);
                    msg.channel.send(`${answer33}`);
                    msg.channel.send(`${answer34}`);
                    msg.channel.send(`${answer35}`);
                    msg.channel.send(`${answer36}`);
                    msg.channel.send(`${answer37}`);
                    msg.channel.send(`${answer38}`);
                    msg.channel.send(`${answer39}`);
                    msg.channel.send(`${answer40}`);
                    msg.channel.send(`${answer41}`);
                    msg.channel.send(`${answer42}`);
                    msg.channel.send(`${answer43}`);
                    msg.channel.send(`${answer44}`);
                    msg.channel.send(`${answer45}`);
                    msg.channel.send(`${answer46}`);
                    msg.channel.send(`${answer47}`);
                    msg.channel.send(`${answer48}`);
                    msg.channel.send(`${answer49}`);
                    msg.channel.send(`${answer50}`);
                    msg.channel.send(`${answer51}`);

                } else {
                    msg.reply("I can't find answer for your question");
                };
             });
        } else {
            msg.reply("Please insert your question on second arguments");
        }
    }
};
