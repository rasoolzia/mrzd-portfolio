import { useMemo } from 'react';
import { getCommands } from '@/data/commands';
import { cn } from '@/lib/cn';
import InteractiveTerminal from './InteractiveTerminal';
import TerminalHeader from './TerminalHeader';

type Props = {
   className?: string;
};

export default function Terminal({ className }: Props) {
   const commands = useMemo(() => getCommands(), []);

   return (
      <div
         className="fixed inset-0 z-10 flex items-center justify-center bg-[rgba(10,14,39,0.85)] backdrop-blur-sm"
         // onClick={(e) =>
         //    e.target === e.currentTarget ? onClose?.() : undefined
         // }
      >
         <div
            className={cn(
               'w-full max-w-3xl mx-4 bg-[#1e1e1e] border border-zinc-700 rounded-lg shadow-2xl overflow-hidden',
               className,
            )}
         >
            <TerminalHeader />
            <InteractiveTerminal commands={commands} />
         </div>
      </div>
   );
}
