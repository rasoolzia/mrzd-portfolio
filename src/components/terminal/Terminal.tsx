import { cn } from '../../lib/cn';

type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function Terminal({ children, className }: Props) {
   return (
      <div
         className={cn(
            'max-w-5xl mx-auto bg-black border border-zinc-800 rounded-md shadow-xl overflow-hidden',
            className,
         )}
      >
         {children}
      </div>
   );
}
