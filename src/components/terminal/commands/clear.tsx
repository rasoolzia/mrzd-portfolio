import type { Command } from '@/types/terminal';

export const clearCommand: Command = {
   name: 'clear',
   description: 'Clear terminal',

   execute: (ctx) => {
      ctx.clear();
   },
};
