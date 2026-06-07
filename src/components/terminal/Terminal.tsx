import { cn } from '@/lib/cn';
import type { CommandRegistry } from '@/types/terminal';
import { useMemo } from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import TerminalHeader from './TerminalHeader';
import { commandList } from './commands';

type Props = {
   className?: string;
};

export default function Terminal({ className }: Props) {
   const commandMap = useMemo(() => {
      const map: CommandRegistry = new Map();

      commandList.forEach((cmd) => {
         map.set(cmd.name, cmd);

         cmd.aliases?.forEach((alias) => {
            map.set(alias, cmd);
         });
      });

      return map;
   }, []);

   return (
      <div
         className={cn(
            'bg-[#1e1e1e] border border-zinc-700 rounded-lg shadow-2xl overflow-hidden',
            className,
         )}
      >
         <TerminalHeader />
         <InteractiveTerminal commands={commandMap} />
      </div>
   );
}
