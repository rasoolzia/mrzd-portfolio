import type { Dispatch, SetStateAction } from 'react';
import { getCommands } from '../../data/commands';
import { cn } from '../../lib/cn';
import InteractiveTerminal from './InteractiveTerminal';
import TerminalHeader from './TerminalHeader';

type Props = {
   className?: string;
   setShowTerminal?: Dispatch<SetStateAction<boolean>>;
};

export default function Terminal({ className, setShowTerminal }: Props) {
   const commands = getCommands();

   return (
      <div
         className={cn(
            'max-w-5xl mx-auto bg-black border border-zinc-800 rounded-md shadow-xl overflow-hidden',
            className,
         )}
      >
         <TerminalHeader setShowTerminal={setShowTerminal} />

         <InteractiveTerminal commands={commands} />
      </div>
   );
}
