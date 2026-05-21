import { useModal } from '@/context/ModalContext';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cursor from './Cursor';

type CommandHandler = () => React.ReactNode;

type Props = {
   commands: Record<string, CommandHandler>;
};

export default function InteractiveTerminal({ commands }: Props) {
   const { closeModal } = useModal();

   const [history, setHistory] = useState<
      { command: string; output: React.ReactNode }[]
   >([]);

   const [input, setInput] = useState('');
   const [historyIndex, setHistoryIndex] = useState<number | null>(null);

   const inputRef = useRef<HTMLInputElement>(null);
   const bottomRef = useRef<HTMLDivElement>(null);

   const makeInputFocus = useCallback(() => {
      inputRef.current?.focus();
   }, []);

   useEffect(() => {
      makeInputFocus();
   }, [makeInputFocus]);

   useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [history]);

   function runCommand(cmd: string) {
      const trimmed = cmd.trim();

      if (trimmed === 'clear') {
         setHistory([]);
         return;
      }

      if (trimmed === 'exit') {
         closeModal();
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
         className="p-4 font-mono text-sm text-zinc-200 h-96 overflow-y-auto"
         onClick={makeInputFocus}
      >
         {history.map((item, i) => (
            <div key={i} className="mb-3">
               <div>
                  <span className="text-green-400">$ </span>
                  {item.command}
               </div>
               <div className="ml-4 mt-1 text-zinc-300">{item.output}</div>
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
               className="bg-transparent outline-none flex-1 text-zinc-100 caret-transparent"
               autoComplete="off"
               spellCheck={false}
            />
         </form>

         <div ref={bottomRef} />
      </div>
   );
}
