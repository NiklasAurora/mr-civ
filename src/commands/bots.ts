import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder } from 'discord.js';

import { Command } from '../interfaces/Command';
import { Civ } from '../interfaces/Data';

const civs = require('./../../data/civilization.json');

export const bots: Command = {
    data: new SlashCommandBuilder()
        .setName('bots')
        .setDescription('Roll civs for X amount of bots')
        .addIntegerOption((option) => option.setName('amount').setDescription('Amount of bots').setMinValue(1).setMaxValue(12).setRequired(true)),
    run: async(interaction) => {
        await interaction.deferReply();

        const userInput = interaction.options.get('amount')
        
        if (!userInput) return;

        const message = new EmbedBuilder();

        if (userInput.value) {
			const bots: { name: string; value: string }[] = [];

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

        await interaction.editReply({ embeds: [message] });
    }
}

const random = (): Civ => {
	const keys = Object.keys(civs);
	const randomCiv: Civ = civs[keys[(keys.length * Math.random()) << 0]];

	return randomCiv;
};