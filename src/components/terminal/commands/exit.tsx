import type { Command } from '@/types/terminal';

export const exitCommand: Command = {
   name: 'exit',
   description: 'Exit terminal',

   execute: (ctx) => {
      ctx.exit();
   },
};
