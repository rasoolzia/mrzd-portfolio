import { useCallback, useEffect, useRef, useState } from 'react';
import Cursor from './Cursor';

type CommandHandler = () => React.ReactNode;

type Props = {
   commands: Record<string, CommandHandler>;
   onClose?: () => void;
};

export default function InteractiveTerminal({ commands, onClose }: Props) {
   const [history, setHistory] = useState<
      { command: string; output: React.ReactNode }[]
   >([]);

   const [input, setInput] = useState('');
   const [historyIndex, setHistoryIndex] = useState<number | null>(null);

   const inputRef = useRef<HTMLInputElement>(null);

   const makeInputFocus = useCallback(() => {
      inputRef.current?.focus();
   }, []);

   useEffect(() => {
      makeInputFocus();
   }, [makeInputFocus]);

   function runCommand(cmd: string) {
      const trimmed = cmd.trim();

      if (trimmed === 'clear') {
         setHistory([]);
         return;
      }

      if (trimmed === 'exit') {
         onClose?.();
         return;
      }

      const handler = commands[trimmed];

      const output = handler ? handler() : `command not found: ${trimmed}`;

      setHistory((prev) => [...prev, { command: trimmed, output }]);
   }

   function handleSubmit(e: React.FormEvent) {
      e.preventDefault();

      if (!input.trim()) return;

      runCommand(input);
      setHistoryIndex(null);
      setInput('');
   }

   function handleKeyDown(e: React.KeyboardEvent) {
      if (e.key === 'ArrowUp') {
         e.preventDefault();

         const newIndex =
            historyIndex === null
               ? history.length - 1
               : Math.max(0, historyIndex - 1);

         setHistoryIndex(newIndex);
         setInput(history[newIndex]?.command ?? '');
      }

      if (e.key === 'ArrowDown') {
         e.preventDefault();

         if (historyIndex === null) return;

         const newIndex = historyIndex + 1;

         if (newIndex >= history.length) {
            setHistoryIndex(null);
            setInput('');
         } else {
            setHistoryIndex(newIndex);
            setInput(history[newIndex].command);
         }
      }
   }

   return (
      <div
         className="p-6 text-sm min-h-96 max-h-96 overflow-auto"
         onClick={makeInputFocus}
      >
         {history.map((item, i) => (
            <div key={i} className="mb-4">
               <div>
                  <span className="text-green-400">$ </span>
                  {item.command}
               </div>

               <div className="ml-5 mt-1">{item.output}</div>
            </div>
         ))}

         <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400 mr-2">$</span>
            {!input && <Cursor />}

            <input
               ref={inputRef}
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={handleKeyDown}
               className="bg-transparent outline-none flex-1"
               autoComplete="off"
            />
         </form>
      </div>
   );
}
