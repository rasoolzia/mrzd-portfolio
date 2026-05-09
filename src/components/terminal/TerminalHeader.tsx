import type { Dispatch, SetStateAction } from 'react';

type Props = {
   setShowTerminal?: Dispatch<SetStateAction<boolean>>;
};

export default function TerminalHeader({ setShowTerminal }: Props) {
   return (
      <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 border-b border-zinc-800">
         <span
            aria-hidden
            className="w-3 h-3 rounded-full bg-red-500"
            onClick={() => setShowTerminal?.(false)}
         />
         <span aria-hidden className="w-3 h-3 rounded-full bg-yellow-400" />
         <span aria-hidden className="w-3 h-3 rounded-full bg-green-500" />
      </div>
   );
}
