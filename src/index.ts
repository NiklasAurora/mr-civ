import { Client } from 'discord.js';

import { IntentOptions } from './config/IntentOptions';
import { onInteraction } from './events/onInteraction';
import { onReady } from './events/onReady';
import { validateEnv } from './utils/validateEnv';

(async () => {
	if (!validateEnv()) {
		return;
	}

	const Bot = new Client({ intents: IntentOptions });

	Bot.on('ready', async () => await onReady(Bot));

	Bot.on('interactionCreate', async (interaction) => await onInteraction(interaction));

	await Bot.login(process.env.BOT_TOKEN);
})();
