import { cn } from '@/lib/cn';

type Props = {
   className?: string;
};

export default function ContactModal({ className }: Props) {
   return (
      <div
         className={cn(
            'w-full max-w-4xl overflow-hidden rounded-lg border border-zinc-700 bg-[#1e1e1e] shadow-2xl',
            className,
         )}
      >
         {/* Header */}
         <div className="border-b border-zinc-700 px-6 py-5">
            <h2 className="text-2xl font-semibold text-white">Contact Me</h2>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
               Interested in collaboration, freelance work, frontend
               architecture, or building scalable web applications? Reach out
               through any of the channels below.
            </p>
         </div>

         <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2">
            contact info
         </div>
      </div>
   );
}
