import { cn } from '@/lib/cn';
import { Loader2, type LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   loading?: boolean;
   prependIcon?: LucideIcon;
   appendIcon?: LucideIcon;
   loadingIcon?: LucideIcon;
   loadingText?: string;
}

export default function Button({
   loading,
   children,
   className,
   prependIcon: PrependIcon,
   appendIcon: AppendIcon,
   loadingIcon: LoadingIcon = Loader2,
   loadingText,
   ...props
}: ButtonProps) {
   return (
      <button
         {...props}
         disabled={loading || props.disabled}
         className={cn(
            'inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:bg-gray-500 disabled:cursor-not-allowed',
            className,
         )}
      >
         {loading ? (
            <>
               <LoadingIcon size={16} className="animate-spin" />
               {loadingText ?? children}
            </>
         ) : (
            <>
               {PrependIcon && <PrependIcon size={16} />}
               {children}
               {AppendIcon && <AppendIcon size={16} />}
            </>
         )}
      </button>
   );
}
