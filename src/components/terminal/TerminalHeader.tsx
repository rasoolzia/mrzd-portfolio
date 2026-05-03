export default function TerminalHeader() {
   return (
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex gap-2">
         <span className="w-3 h-3 rounded-full bg-red-500"></span>
         <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
         <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
   );
}
