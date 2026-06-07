import { FILES } from '@/data/files';
import type { Command } from '@/types/terminal';

export const lsCommand: Command = {
   name: 'ls',
   usage: 'ls (dir)',
   description: 'Files list',
   aliases: ['dir'],

   execute: (ctx) => {
      ctx.print(
         <div className="flex flex-wrap gap-x-4 gap-y-1">
            {Object.keys(FILES).map((f) => (
               <span key={f} className="text-blue-400">
                  {f}
               </span>
            ))}
         </div>,
      );
   },
};
