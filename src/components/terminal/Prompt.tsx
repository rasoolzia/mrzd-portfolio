type PromptProps = {
   user?: string;
   host?: string;
   cwd?: string;
};

export function Prompt({
   user = 'guest',
   host = 'local',
   cwd = '~',
}: PromptProps) {
   return (
      <span className="whitespace-nowrap">
         <span className="text-green-400">{user}</span>
         <span className="text-zinc-400">@</span>
         <span className="text-green-400">{host}</span>
         <span className="text-zinc-400">:</span>
         <span className="text-blue-400">{cwd}</span>
         <span className="text-zinc-200"> $</span>
      </span>
   );
}
