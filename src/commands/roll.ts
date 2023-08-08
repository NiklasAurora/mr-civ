import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

import { Command } from '../interfaces/Command';
import { Civ } from '../interfaces/Data';

const civs = require('./../../data/civilization.json');

export const roll: Command = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll for a civilization, leave empty for full random')
		.addBooleanOption((option) => option.setName('lekmod').setDescription('Lekmod true/false'))
		.addIntegerOption((option) => option.setName('alternatives').setDescription('Roll three civs to choose from').setMinValue(2).setMaxValue(5))
		.addIntegerOption((option) =>
			option
				.setName('bots')
				.setDescription('Roll random civilization for X amount of bots')
				.setMinValue(1)
				.setMaxValue(12),
		),
	run: async (interaction) => {
		await interaction.deferReply();

		const message = new EmbedBuilder();

		if (interaction.options.get('lekmod')) {
			const userInput = interaction.options.get('lekmod');

			let civ = random();

			if (userInput) {
				if (userInput.value) {
					while (!civ.extended) {
						civ = random();
					}
				} else if (!userInput.value) {
					while (civ.extended) {
						civ = random();
					}
				}
			}

			message.setTitle(civ.country + ' - ' + civ.leader);
			message.setFields(civ.uniques);
			message.setColor('#0099FF');
			message.setTimestamp(new Date());
		} else if (interaction.options.get('bots')) {
			const userInput = interaction.options.get('bots');
			const bots: { name: string; value: string }[] = [];

			if (userInput && userInput.value) {
				const numberOfBots = userInput.value as number;

				for (let i = 0; i < numberOfBots; i++) {
					const civ = random();

					bots.push({
						name: civ.country + ' - ' + civ.leader,
						value: '---',
					});
				}

				message.setTitle('List of civilizations');
				message.setFields(bots);
				message.setColor('#0099FF');
				message.setTimestamp(new Date());
			}
		} else if (interaction.options.get('alternatives')) {
			const userInput = interaction.options.get('alternatives');
			const alternatives: { name: string, value: string }[] = [];

			if (userInput && userInput.value) {
				const numberOfAlternatives = userInput.value as number;

				for (let i = 0; i < numberOfAlternatives; i++) {
					const civ = random();
					
					alternatives.push({
						name: civ.country + ' - ' + civ.leader,
						value: '---',
					})
				}

				alternatives.push({
					name: 'Use the civ command to get more information about your civ',
					value: '---'
				})

				message.setTitle('List of alternatives');
				message.setFields(alternatives);
				message.setColor('#0099FF');
				message.setTimestamp(new Date());
			}
		}

		await interaction.editReply({ embeds: [message] });
	},
};

const random = (): Civ => {
	const keys = Object.keys(civs);
	const randomCiv: Civ = civs[keys[(keys.length * Math.random()) << 0]];

	return randomCiv;
};
