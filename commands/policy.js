const policies = require("./../data/policy.json");

const random = (list) => {
    let randomItem = Math.floor(Math.random() * list.length);

    return list[randomItem];
};

const shuffle = (array) => {
    var currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
};

const randomize = (args) => {
    let data;

    if (args[0] == "policy") {
        data = [
            {
                name: "Starting Policy Tree",
                value: shuffle(policies.starting),
                inline: true
            },
            {
                name: "Mid/Late Policy Trees",
                value: shuffle(policies.rest),
                inline: true
            },
        ];
    }

    if (args[0] == "ideology") {
        data = [
            {
                name: "Ideology",
                value: random(policies.ideology),
                inline: true
            }
        ];
    }

    if (Object.keys(args).length == 0) {
        data = [
            {
                name: "Starting Policy Tree",
                value: shuffle(policies.starting),
                inline: true
            },
            {
                name: "Mid/Late Policy Trees",
                value: shuffle(policies.rest),
                inline: true
            },
            {
                name: "Ideology",
                value: random(policies.ideology),
                inline: true
            }
        ];
    }

    return data;
};

const preparePrint = (strat) => {
    const output = {
        color: 0x0099ff,
        title: "Social Policy",
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
        fields: strat,
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
    name: "strat",
    description: "Random policies",
    execute(message, args) {
        let strat = randomize(args);
        let randomStrat = preparePrint(strat);

        message.channel.send({ embed: randomStrat });
    },
};
