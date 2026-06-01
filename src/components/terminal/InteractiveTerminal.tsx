import { useModal } from '@/context/modal/ModalContext';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cursor from './Cursor';
import { Prompt } from './Prompt';

type CommandHandler = () => React.ReactNode;
type Props = { commands: Record<string, CommandHandler> };

export default function InteractiveTerminal({ commands }: Props) {
   const { closeModal } = useModal();
   const [history, setHistory] = useState<
      { command: string; output: React.ReactNode }[]
   >([]);
   const [input, setInput] = useState('');
   const [historyIndex, setHistoryIndex] = useState<number | null>(null);
   const [cursorOffset, setCursorOffset] = useState(0);

   const inputRef = useRef<HTMLInputElement>(null);
   const inputWrapRef = useRef<HTMLSpanElement>(null);
   const bottomRef = useRef<HTMLDivElement>(null);

   const makeInputFocus = useCallback(() => inputRef.current?.focus(), []);

   useEffect(() => {
      makeInputFocus();
   }, [makeInputFocus]);
   useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
   }, [history]);

   // Measure cursor position based on text width
   useEffect(() => {
      const input = inputRef.current;
      if (!input) return;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      ctx.font = getComputedStyle(input).font;
      const selStart = input.selectionStart ?? input.value.length;
      const textBefore = input.value.slice(0, selStart);
      setCursorOffset(ctx.measureText(textBefore).width);
   }, [input]);

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

      const firstWord = trimmed.split(/\s+/)[0];
      const handler = commands[trimmed];
      const output = handler ? handler() : `command not found: ${firstWord}`;

      setHistory((prev) => [...prev, { command: cmd, output }]);
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
         className="p-4 font-mono text-sm text-zinc-200 h-96 overflow-y-auto cursor-text"
         onClick={makeInputFocus}
      >
         {history.map((item, i) => (
            <div key={i} className="mb-3">
               <div>
                  <span className="text-green-400">
                     <Prompt />
                  </span>
                  <span className="ml-2">{item.command}</span>
               </div>
               <div className="ml-4 mt-1 text-zinc-300">{item.output}</div>
            </div>
         ))}

         <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400 mr-2">
               <Prompt />
            </span>
            <span
               ref={inputWrapRef}
               className="relative flex-1 flex items-center"
            >
               <Cursor offset={cursorOffset} />
               <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onKeyUp={() => {
                     const el = inputRef.current;
                     if (el)
                        setCursorOffset(
                           (() => {
                              const canvas = document.createElement('canvas');
                              const ctx = canvas.getContext('2d')!;
                              ctx.font = getComputedStyle(el).font;
                              return ctx.measureText(
                                 el.value.slice(
                                    0,
                                    el.selectionStart ?? el.value.length,
                                 ),
                              ).width;
                           })(),
                        );
                  }}
                  className="bg-transparent outline-none w-full text-zinc-100 caret-transparent"
                  autoComplete="off"
                  spellCheck={false}
               />
            </span>
         </form>

         <div ref={bottomRef} />
      </div>
   );
}
