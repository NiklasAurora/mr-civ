import { Command } from '../interfaces/Command';
import { civ } from './civ';
import { roll } from './roll';
import { map } from './map';

export const CommandList: Command[] = [civ, roll, map];
