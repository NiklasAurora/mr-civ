const civs = require("./../data/civilization.json");

const randomize = (args) => {
    let civ = random();

    if (args == "lekmod") {
        while (civ.extended == false) {
            civ = random();
        }
    }

    if (args == "base") {
        while (civ.extended) {
            civ = random();
        }
    }

    if (args != "base" && args != "lekmod") {
        let search = args[0].toLowerCase();

        civ = civs[search];
    }

    return civ;
};

const random = () => {
    let keys = Object.keys(civs);
    let randomCiv = civs[keys[keys.length * Math.random() << 0]];

    return randomCiv;
};

module.exports = {
    name: "civ",
    description: "Random civilization",
    execute(message, args) {
        let civ = randomize(args);

        const randomCivilization = {
            color: 0x0099ff,
            title: civ.leader + " - " + civ.country,
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
            fields: civ.uniques,
            image: {
                url: '',
            },
            timestamp: new Date(),
            footer: {
                text: '',
                icon_url: '',
            },
        };

        message.channel.send({ embed: randomCivilization });
    },
};
