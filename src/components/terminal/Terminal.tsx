import { getCommands } from '../../data/commands';
import { cn } from '../../lib/cn';
import InteractiveTerminal from './InteractiveTerminal';
import TerminalHeader from './TerminalHeader';

type Props = {
   className?: string;
};

export default function Terminal({ className }: Props) {
   const commands = getCommands();

   return (
      <div
         className={cn(
            'max-w-5xl mx-auto bg-black border border-zinc-800 rounded-md shadow-xl overflow-hidden',
            className,
         )}
      >
         <TerminalHeader />

         <InteractiveTerminal commands={commands} />
      </div>
   );
}
