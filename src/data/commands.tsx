import InfoGrid from '@/components/terminal/InfoGrid';
import type { CommandHandler } from '@/types/terminal';
import { FILES } from './files';
import { profile } from './portfolio';

export function getCommands(): Record<string, CommandHandler> {
   return {
      help: () => (
         <InfoGrid
            cols="130px 1fr"
            rows={[
               { label: 'whoami', value: 'Who am I' },
               { label: 'ls', value: 'List files' },
               { label: 'cat <file>', value: 'Read a file' },
               { label: 'clear', value: 'Clear terminal' },
               { label: 'exit', value: 'Exit terminal' },
            ]}
         />
      ),

      whoami: () => (
         <div>
            <div className="text-orange-300">{profile.name}</div>
            <div className="text-zinc-400 mt-1">{profile.goal}</div>
         </div>
      ),

      ls: () => (
         <div className="flex flex-wrap gap-x-4 gap-y-1">
            {Object.keys(FILES).map((f) => (
               <span key={f} className="text-blue-400">
                  {f}
               </span>
            ))}
         </div>
      ),

      cat: (args) => {
         const filename = args?.[0];
         if (!filename) return 'Usage: cat <file>';
         // accept both "about" and "about.txt"
         const key = filename.endsWith('.txt') ? filename : `${filename}.txt`;
         const render = FILES[key];
         if (!render) return `cat: ${filename}: No such file or directory`;
         return render();
      },

      clear: (_, callback) => {
         callback?.();
      },

      exit: (_, callback) => {
         callback?.();
      },
   };
}
