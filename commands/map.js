const maps = require("./../data/map.json");

const random = (list) => {
    let randomItem = Math.floor(Math.random() * list.length);

    return list[randomItem];
};

const randomNumber = (min, max) => {
    let randNumber = Math.floor(Math.random() * (max-min) + min);

    return randNumber;
};

const randomize = (args) => {
    let map;

    if (args[0] !== "all") {
        map = [
            {
                name: "Map Type",
                value: random(maps.types),
                inline: true
            },
            {
                name: "World Age",
                value: random(maps["world-age"]),
                inline: true
            },
            {
                name: "Temperature",
                value: random(maps.temperature),
                inline: true
            },
            {
                name: "Rainfall",
                value: random(maps.rainfall),
                inline: true
            },
            {
                name: "Natural Wonders",
                value: randomNumber(maps["natural-wonders"].min, maps["natural-wonders"].max),
                inline: true
            },
            {
                name: "Grass Moisture",
                value: random(maps["grass-moisture"]),
                inline: true
            },
            {
                name: "Rivers",
                value: random(maps.rivers),
                inline: true
            },
            {
                name: "Tundra",
                value: random(maps.tundra),
                inline: true
            },
            {
                name: "Land Size X",
                value: randomNumber(maps["land-size-x"].min, maps["land-size-x"].max),
                inline: true
            },
            {
                name: "Land Size Y",
                value: randomNumber(maps["land-size-y"].min, maps["land-size-y"].max),
                inline: true
            },
            {
                name: "Resource Amount",
                value: randomNumber(maps["resource-amount"].min, maps["resource-amount"].max),
                inline: true
            },
            {
                name: "Lakes",
                value: random(maps["lakes"]),
                inline: true
            },
            {
                name: "Raging Barbarians",
                value: Math.random() >= 0.5 ? "True" : "False",
            }
        ];
    }

    if (args[0] == "all") {
        map = [
            {
                name: "Map Type",
                value: random(maps.types),
                inline: true
            },
            {
                name: "Map Size",
                value: random(maps.size),
                inline: true
            },
            {
                name: "Amount of City States",
                value: randomNumber(maps["city-states"].min, maps["city-states"].max),
                inline: true
            },
            {
                name: "Game Pace",
                value: random(maps["game-pace"]),
                inline: true
            },
            {
                name: "Starting Era",
                value: random(maps["starting-era"]),
                inline: true
            },
            {
                name: "World Age",
                value: random(maps["world-age"]),
                inline: true
            },
            {
                name: "Temperature",
                value: random(maps.temperature),
                inline: true
            },
            {
                name: "Rainfall",
                value: random(maps.rainfall),
                inline: true
            },
            {
                name: "Sea Level",
                value: random(maps["sea-level"]),
                inline: true
            },
            {
                name: "Natural Wonders",
                value: randomNumber(maps["natural-wonders"].min, maps["natural-wonders"].max),
                inline: true
            },
            {
                name: "Grass Moisture",
                value: random(maps["grass-moisture"]),
                inline: true
            },
            {
                name: "Rivers",
                value: random(maps.rivers),
                inline: true
            },
            {
                name: "Tundra",
                value: random(maps.tundra),
                inline: true
            },
            {
                name: "Land Size X",
                value: randomNumber(maps["land-size-x"].min, maps["land-size-x"].max),
                inline: true
            },
            {
                name: "Land Size Y",
                value: randomNumber(maps["land-size-y"].min, maps["land-size-y"].max),
                inline: true
            },
            {
                name: "Resource Amount",
                value: randomNumber(maps["resource-amount"].min, maps["resource-amount"].max),
                inline: true
            },
            {
                name: "Amount of Islands",
                value: randomNumber(maps.islands.min, maps.islands.max),
                inline: true
            },
            {
                name: "Lakes",
                value: random(maps["lakes"]),
                inline: true
            },
            {
                name: "Raging Barbarians",
                value: Math.random() >= 0.5 ? "True" : "False",
            }
        ];
    }

    return map;
};

const preparePrint = (map) => {
    const output = {
        color: 0x0099ff,
        title: "Map Information",
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
        fields: map,
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
    name: "map",
    description: "Random Map",
    execute(message, args) {
        let map = randomize(args);
        let randomMap = preparePrint(map);

        message.channel.send({ embed: randomMap });
    }
};
