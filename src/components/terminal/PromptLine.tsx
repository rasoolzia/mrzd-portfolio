type Props = {
   command: string;
};

export default function PromptLine({ command }: Props) {
   return (
      <div className="my-2">
         <span className="text-green-400">$ </span>
         <span className="text-cyan-300">{command}</span>
      </div>
   );
}
