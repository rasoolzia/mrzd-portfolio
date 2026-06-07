import { catCommand } from './cat';
import { clearCommand } from './clear';
import { exitCommand } from './exit';
import { helpCommand } from './help';
import { lsCommand } from './ls';
import { whoamiCommand } from './whoami';

export const commandList = [
   whoamiCommand,
   helpCommand,
   lsCommand,
   catCommand,
   clearCommand,
   exitCommand,
];
