import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from '@discordjs/builders';
import { AutocompleteInteraction, CommandInteraction } from 'discord.js';

export interface Command {
	data:
		| Omit<SlashCommandBuilder, 'addSubcommandGroup' | 'addSubcommand'>
		| SlashCommandSubcommandsOnlyBuilder;
	run: (interaction: CommandInteraction) => Promise<void>;
}

export interface AutoCompleteCommand extends Command {
	autocomplete: (interaction: AutocompleteInteraction) => Promise<void>;
}