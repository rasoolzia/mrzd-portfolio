import { getCommands } from '../../data/commands';
import { cn } from '../../lib/cn';
import InteractiveTerminal from './InteractiveTerminal';
import TerminalHeader from './TerminalHeader';

type Props = {
   className?: string;
   onClose?: () => void;
};

export default function Terminal({ className, onClose }: Props) {
   const commands = getCommands();

   return (
      <div
         className="fixed inset-0 z-10 flex items-center justify-center"
         style={{
            background: 'rgba(10, 14, 39, 0.85)',
            backdropFilter: 'blur(4px)',
         }}
         onClick={(e) => {
            if (e.target === e.currentTarget) onClose?.();
         }}
      >
         <div
            className={cn(
               'max-w-5xl mx-auto bg-black border border-zinc-800 rounded-md shadow-xl overflow-hidden',
               className,
            )}
         >
            <TerminalHeader onClose={onClose} />
            <InteractiveTerminal commands={commands} onClose={onClose} />
         </div>
      </div>
   );
}
