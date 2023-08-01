import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

import { Command } from '../interfaces/Command';
import { Civ } from '../interfaces/Data';

const civs = require('./../../data/civilization.json');

export const civ: Command = {
	data: new SlashCommandBuilder()
		.setName('civ')
		.setDescription('Search for a civilization to see what they offer')
		.addStringOption((option) =>
			option.setName('name').setDescription('Civilization to search for').setRequired(true),
		),
	run: async (interaction) => {
		await interaction.deferReply();

		const userInput = interaction.options.get('name');

		if (!userInput) return;

		const civ: Civ = civs[(userInput.value as string).toLowerCase()];
		const message = new EmbedBuilder();

		if (civ) {
			message.setTitle(civ.country + ' - ' + civ.leader);
			message.setFields(civ.uniques);
			message.setColor('#0099FF');
			message.setTimestamp(new Date());
		} else {
			message.setTitle('Could not find civ');
			message.setDescription('Make sure to check your spelling');
			message.setColor('#D2042D');
			message.setTimestamp(new Date());
		}

		await interaction.editReply({ embeds: [message] });
	},
};
