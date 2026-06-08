type PromptProps = {
   user?: string;
   host?: string;
   cwd?: string;
   command?: string;
};

export default function CommandLine({
   user = 'guest',
   host = 'local',
   cwd = '~',
   command,
}: PromptProps) {
   return (
      <>
         <span className="whitespace-nowrap">
            <span className="text-green-400">{user}</span>
            <span className="text-zinc-400">@</span>
            <span className="text-green-400">{host}</span>
            <span className="text-zinc-400">:</span>
            <span className="text-blue-400">{cwd}</span>
            <span className="text-zinc-200 mx-2">$</span>
         </span>
         {command && <span>{command}</span>}
      </>
   );
}
