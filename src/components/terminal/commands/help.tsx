import type { Command } from '@/types/terminal';
import { commandList } from '.';
import InfoGrid from '../InfoGrid';

export const helpCommand: Command = {
   name: 'help',
   description: 'List available commands',

   execute: (ctx) => {
      ctx.print(
         <InfoGrid
            cols="130px 1fr"
            rows={commandList.map((cmd) => ({
               label: cmd.usage ?? cmd.name,
               value: cmd.description ?? '',
            }))}
         />,
      );
   },
};
