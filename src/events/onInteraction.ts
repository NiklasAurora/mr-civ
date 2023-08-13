import { Interaction } from 'discord.js';

import { CommandList } from '../commands/_CommandList';
import { AutoCompleteCommand, Command } from '../interfaces/Command';

export const onInteraction = async (interaction: Interaction) => {
	if (interaction.isCommand()) {
		for (const Command of CommandList) {
			if (interaction.commandName === Command.data.name) {
				await (Command as Command).run(interaction);
				break;
			}
		}
	} else if (interaction.isAutocomplete()) {
		const command = CommandList.find((command) => {
			return command.data.name === interaction.commandName
		})

		if (!command) return;

		try {
			await (command as AutoCompleteCommand).autocomplete(interaction);
		} catch (error) {
			console.error(error);
		}
	}
};
