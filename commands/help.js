module.exports = {
    name: "help",
    description: "Help Menu",
    execute(message, args) {
        const help = {
            color: 0x0099ff,
            title: "Bot Information",
            url: '',
            author: {
                name: '',
                icon_url: '',
                url: '',
            },
            description: '',
            thumbnail: {
                url: '',
            },
            fields: [
                {
                    "name": ".help",
                    "value": "Shows this information"
                },
                {
                    "name": ".civ",
                    "value": "Gives you a random Civilization from the base game and LEKMOD."
                },
                {
                    "name": ".civ lekmod",
                    "value": "Gives you a random Civilization from the ones added by LEKMOD."
                },
                {
                    "name": ".civ base",
                    "value": "Gives you a random Civilization from the ones in the base game."
                },
                {
                    "name": ".civ <name-of-civ>",
                    "value": "Search for a Civilization."
                },
                {
                    "name": ".civ bots <amount>",
                    "value": "Gives you a list of random Civilizations for your bots."
                },
                {
                    "name": ".map",
                    "value": "Gives you a random LEKMOD map type.",
                },
                {
                    "name": ".map all",
                    "value": "Random rolls all parts of the map."
                },
                {
                    "name": ".strat",
                    "value": "Rolls random policies and ideology."
                },
                {
                    "name": ".strat policy",
                    "value": "Rolls random policies for you."
                },
                {
                    "name": ".strat ideology",
                    "value": "Rolls a random ideology for you."
                }
            ],
            image: {
                url: '',
            },
            timestamp: new Date(),
            footer: {
                text: '',
                icon_url: '',
            },
        };

        message.channel.send({ embed: help });
    },
};
