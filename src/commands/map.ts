import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

import { Command } from '../interfaces/Command';
import { Map } from '../interfaces/Data';

const maps: Map = require('./../../data/map.json');

export const map: Command = {
	data: new SlashCommandBuilder().setName('map').setDescription('Randomize a map configuration'),
	run: async (interaction) => {
		await interaction.deferReply();

		const message = new EmbedBuilder();
		message.setTitle('Map settings');
		message.setFields(getMapValues());
		message.setColor('#0099FF');
		message.setTimestamp(new Date());

		await interaction.editReply({ embeds: [message] });
	},
};

const getMapValues = (): { name: string; value: string; inline: boolean }[] => {
	const map: { name: string; value: string; inline: boolean }[] = [];

	map.push({
		name: 'Map Type',
		value: random(maps.types),
		inline: true,
	});
	map.push({
		name: 'Map Size',
		value: random(maps.size),
		inline: true,
	});
	map.push({
		name: 'Amount of City States',
		value: randomNumber(maps['cityStates'].min, maps['cityStates'].max),
		inline: true,
	});
	map.push({
		name: 'Game Pace',
		value: random(maps['gamePace']),
		inline: true,
	});
	map.push({
		name: 'World Age',
		value: random(maps['worldAge']),
		inline: true,
	});
	map.push({
		name: 'Temperature',
		value: random(maps.temperature),
		inline: true,
	});
	map.push({
		name: 'Rainfall',
		value: random(maps.rainfall),
		inline: true,
	});
	map.push({
		name: 'Sea Level',
		value: random(maps['seaLevel']),
		inline: true,
	});
	map.push({
		name: 'Natural Wonders',
		value: randomNumber(maps['naturalWonders'].min, maps['naturalWonders'].max),
		inline: true,
	});
	map.push({
		name: 'Grass Moisture',
		value: random(maps['grassMoisture']),
		inline: true,
	});
	map.push({
		name: 'Rivers',
		value: random(maps.rivers),
		inline: true,
	});
	map.push({
		name: 'Tundra',
		value: random(maps.tundra),
		inline: true,
	});
	map.push({
		name: 'Land Size X',
		value: randomNumber(maps['landSizeX'].min, maps['landSizeX'].max),
		inline: true,
	});
	map.push({
		name: 'Land Size Y',
		value: randomNumber(maps['landSizeY'].min, maps['landSizeY'].max),
		inline: true,
	});
	map.push({
		name: 'Resource Amount',
		value: randomNumber(maps['resourceAmount'].min, maps['resourceAmount'].max),
		inline: true,
	});
	map.push({
		name: 'Amount of Islands',
		value: randomNumber(maps.islands.min, maps.islands.max),
		inline: true,
	});
	map.push({
		name: 'Lakes',
		value: random(maps['lakes']),
		inline: true,
	});
	map.push({
		name: 'Raging Barbarians',
		value: Math.random() >= 0.5 ? 'True' : 'False',
		inline: true,
	});

	return map;
};

const random = (list: string[]) => {
	const randomItem = Math.floor(Math.random() * list.length);

	return list[randomItem];
};

const randomNumber = (min: number, max: number): string => {
	const randNumber = Math.floor(Math.random() * (max - min) + min);

	return randNumber.toString();
};
