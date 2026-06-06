import { useModal } from '@/context/modal/ModalContext';
import { FILE_NAMES } from '@/data/files';
import type { CommandHandler } from '@/types/terminal';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cursor from './Cursor';
import { Prompt } from './Prompt';

type HistoryEntry = {
   id: string;
   command: string;
   output: React.ReactNode;
};

type Props = {
   commands: Record<string, CommandHandler>;
};

export default function InteractiveTerminal({ commands }: Props) {
   const { closeModal } = useModal();

   const [history, setHistory] = useState<HistoryEntry[]>([]);
   const [input, setInput] = useState('');
   const [historyIndex, setHistoryIndex] = useState<number | null>(null);
   const [cursorOffset, setCursorOffset] = useState(0);

   const inputRef = useRef<HTMLInputElement>(null);
   const bottomRef = useRef<HTMLDivElement>(null);

   const charWidthRef = useRef(0);

   const commandHistoryRef = useRef<string[]>([]);

   useEffect(() => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      const input = inputRef.current;

      if (input) {
         ctx.font = getComputedStyle(input).font;
         charWidthRef.current = ctx.measureText('M').width;
      }
   }, []);

   const makeInputFocus = useCallback(() => {
      inputRef.current?.focus();
   }, []);

   const updateCursorPosition = useCallback(() => {
      const el = inputRef.current;

      if (!el) return;

      const pos = el.selectionStart ?? el.value.length;

      setCursorOffset(charWidthRef.current * pos);
   }, []);

   useEffect(() => {
      makeInputFocus();
   }, [makeInputFocus]);

   useEffect(() => {
      bottomRef.current?.scrollIntoView({
         behavior: 'smooth',
      });
   }, [history]);

   useEffect(() => {
      updateCursorPosition();
   }, [input, updateCursorPosition]);

   function runCommand(cmd: string) {
      if (cmd === 'clear') {
         //TODO move this to commands
         setHistory([]);
         return;
      }

      if (cmd === 'exit') {
         //TODO move this to commands
         closeModal();
         return;
      }

      //ignore duplicate commands
      const last =
         commandHistoryRef.current[commandHistoryRef.current.length - 1];
      if (last !== cmd) {
         commandHistoryRef.current.push(cmd);
      }

      const [commandName, ...args] = cmd.split(/\s+/);

      const handler = commands[commandName];

      const output = handler
         ? handler(args)
         : `bash: ${commandName}: command not found`;

      setHistory((prev) => [
         ...prev,
         {
            id: crypto.randomUUID(),
            command: cmd,
            output,
         },
      ]);
   }

   function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      const trimmed = input.trim();

      if (!trimmed) return;

      runCommand(trimmed);

      setInput('');
      setHistoryIndex(null);
   }

   function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      const commandHistory = commandHistoryRef.current;

      if (e.ctrlKey && e.key.toLowerCase() === 'l') {
         e.preventDefault();
         setHistory([]);
         return;
      }

      if (e.ctrlKey && e.key.toLowerCase() === 'c') {
         e.preventDefault();

         setHistory((prev) => [
            ...prev,
            {
               id: crypto.randomUUID(),
               command: input,
               output: '^C',
            },
         ]);

         setInput('');
         setHistoryIndex(null);

         return;
      }

      if (e.key === 'Tab') {
         e.preventDefault();
         const trimmed = input.trim();
         const parts = trimmed.split(/\s+/);

         if (parts[0] === 'cat' && parts.length <= 2) {
            const prefix = parts[1] ?? '';
            const matches = FILE_NAMES.filter((f) => f.startsWith(prefix));
            if (matches.length === 1) setInput(`cat ${matches[0]}`);
         } else if (parts.length === 1) {
            const matches = Object.keys(commands).filter((cmd) =>
               cmd.startsWith(trimmed),
            );
            if (matches.length === 1) setInput(matches[0]);
         }

         return;
      }

      if (e.key === 'ArrowUp') {
         e.preventDefault();

         if (!commandHistory.length) return;

         const nextIndex =
            historyIndex === null
               ? commandHistory.length - 1
               : Math.max(0, historyIndex - 1);

         setHistoryIndex(nextIndex);
         setInput(commandHistory[nextIndex] ?? '');

         return;
      }

      if (e.key === 'ArrowDown') {
         e.preventDefault();

         if (historyIndex === null) return;

         const nextIndex = historyIndex + 1;

         if (nextIndex >= commandHistory.length) {
            setHistoryIndex(null);
            setInput('');
         } else {
            setHistoryIndex(nextIndex);
            setInput(commandHistory[nextIndex]);
         }

         return;
      }

      if (e.key === 'Home' || e.key === 'End') {
         requestAnimationFrame(updateCursorPosition);
      }
   }

   return (
      <div
         className="h-96 overflow-y-auto cursor-text p-4 font-mono text-sm text-zinc-200"
         onClick={makeInputFocus}
      >
         {history.map((item) => (
            <div key={item.id} className="mb-3">
               <div>
                  <span className="text-green-400">
                     <Prompt />
                  </span>

                  <span className="ml-2">{item.command}</span>
               </div>

               <div className="mt-1 ml-4 text-zinc-300">{item.output}</div>
            </div>
         ))}

         <form onSubmit={handleSubmit} className="flex items-center">
            <span className="mr-2 text-green-400">
               <Prompt />
            </span>

            <span className="relative flex flex-1 items-center">
               <Cursor offset={cursorOffset} />

               <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onSelect={updateCursorPosition}
                  onClick={updateCursorPosition}
                  className="w-full bg-transparent text-zinc-100 outline-none caret-transparent"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder={history.length > 0 ? undefined : 'help'}
               />
            </span>
         </form>

         <div ref={bottomRef} />
      </div>
   );
}
