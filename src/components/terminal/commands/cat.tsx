import { FILES } from '@/data/files';
import type { Command } from '@/types/terminal';

export const catCommand: Command = {
   name: 'cat',
   usage: 'cat <file>',
   description: 'Read a file',

   execute: (ctx, args) => {
      const filename = args?.[0];

      if (!filename) {
         ctx.print('Usage: cat <file>');
         return;
      }

      const render = FILES[filename];

      if (!render) {
         ctx.print(`cat: ${filename}: No such file or directory`);
         return;
      }

      ctx.print(render());
   },
};
