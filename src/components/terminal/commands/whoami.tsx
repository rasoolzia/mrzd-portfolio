import { profile } from '@/data/portfolio';
import type { Command } from '@/types/terminal';

export const whoamiCommand: Command = {
   name: 'whoami',
   description: 'Who am I',

   execute: (ctx) => {
      ctx.print(
         <div>
            <div className="text-orange-300">{profile.name}</div>
            <div className="text-zinc-400 mt-1">{profile.goal}</div>
         </div>,
      );
   },
};
