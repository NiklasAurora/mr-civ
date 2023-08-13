import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

import { Command } from '../interfaces/Command';
import { Civ } from '../interfaces/Data';

const civs = require('./../../data/civilization.json');

export const roll: Command = {
	data: new SlashCommandBuilder().setName('roll').setDescription('Roll for a civilization'),
	run: async (interaction) => {
		await interaction.deferReply();

		const message = new EmbedBuilder();
		const civ = random();

		message.setTitle(civ.country + ' - ' + civ.leader);
		message.setFields(civ.uniques);
		message.setColor('#0099FF');
		message.setTimestamp(new Date());

		await interaction.editReply({ embeds: [message] });
	},
};

const random = (): Civ => {
	const keys = Object.keys(civs);
	const randomCiv: Civ = civs[keys[(keys.length * Math.random()) << 0]];

	return randomCiv;
};
