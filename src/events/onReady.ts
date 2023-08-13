import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Client } from 'discord.js';
import { CommandList } from '../commands/_CommandList';

export const onReady = async (Bot: Client) => {
	const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN as string);

	const commandData = CommandList.map((command) => command.data.toJSON());

	if (process.env.NODE_ENV === 'production') {
		await rest.put(Routes.applicationCommands(Bot.user?.id || 'missing id'), { body: commandData });
	} else {
		await rest.put(
			Routes.applicationGuildCommands(Bot.user?.id || 'missing id', process.env.GUILD_ID as string),
			{ body: commandData },
		);
	}

	console.info('Discord ready!');
};
