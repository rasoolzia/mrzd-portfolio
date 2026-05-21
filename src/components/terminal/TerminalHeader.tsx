import { useModal } from '@/context/ModalContext';
import { memo } from 'react';

function TerminalHeader() {
   const { closeModal } = useModal();

   return (
      <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 border-b border-zinc-800">
         <span
            aria-hidden
            className="w-3 h-3 rounded-full bg-red-500"
            onClick={() => closeModal()}
         />
         <span aria-hidden className="w-3 h-3 rounded-full bg-yellow-400" />
         <span aria-hidden className="w-3 h-3 rounded-full bg-green-500" />
      </div>
   );
}

export default memo(TerminalHeader);
