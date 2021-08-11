const civs = require("./../data/civilization.json");

const randomize = (args) => {
    let civ = random();

    if (args[0] == "lekmod") {
        while (civ.extended == false) {
            civ = random();
        }
    }

    if (args[0] == "base") {
        while (civ.extended) {
            civ = random();
        }
    }

    if (args[0] == "bots") {
        civ = [];

        for (let i = 0; i < args[1]; i++) {
            let temp = random();

            civ.push({
                name: temp.leader + " - " + temp.country,
                value: '---'
            });
        }
    }

    if (args[0] != "base" && args[0] != "lekmod" && args[0] != "bots" && Object.keys(args).length !== 0) {
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

const singleCivPrint = (civ) => {
    const output = {
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

    return output;
};

const multipleCivPrint = (listOfCivs) => {
    const output = {
        color: 0x0099ff,
        title: "List of Civs",
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
        fields: listOfCivs,
        image: {
            url: '',
        },
        timestamp: new Date(),
        footer: {
            text: '',
            icon_url: '',
        },
    };

    return output;
};

module.exports = {
    name: "civ",
    description: "Random civilization",
    execute(message, args) {
        let civ = randomize(args);
        let randomCivilization;

        if (Array.isArray(civ)) {
            randomCivilization = multipleCivPrint(civ);
        } else if (!Array.isArray(civ)) {
            randomCivilization = singleCivPrint(civ);
        }

        message.channel.send({ embed: randomCivilization });
    },
};
