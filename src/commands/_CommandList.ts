import { AutoCompleteCommand, Command } from '../interfaces/Command';
import { civ } from './civ';
import { roll } from './roll';
import { map } from './map';
import { bots } from './bots';

export const CommandList: (Command | AutoCompleteCommand)[] = [civ, roll, map, bots];
