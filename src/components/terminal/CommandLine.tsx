type Props = {
   command: string;
   children?: React.ReactNode;
};

export default function CommandLine({ command, children }: Props) {
   return (
      <div className="my-4">
         <div>
            <span className="text-green-400">$ </span>
            <span className="text-cyan-300">{command}</span>
         </div>

         {children && <div className="mt-2 ml-5">{children}</div>}
      </div>
   );
}
