import { getCommands } from '@/data/commands';
import { cn } from '@/lib/cn';
import { useMemo } from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import TerminalHeader from './TerminalHeader';

type Props = {
   className?: string;
};

export default function Terminal({ className }: Props) {
   const commands = useMemo(() => getCommands(), []);

   return (
      <div
         className={cn(
            'bg-[#1e1e1e] border border-zinc-700 rounded-lg shadow-2xl overflow-hidden',
            className,
         )}
      >
         <TerminalHeader />
         <InteractiveTerminal commands={commands} />
      </div>
   );
}
