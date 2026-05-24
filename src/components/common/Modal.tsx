import { cn } from '@/lib/cn';
import { useEffect, type ReactNode } from 'react';
import Portal from './Portal';

type Props = {
   children: ReactNode;
   open: boolean;
   onClose?: () => void;
   closeOnOutsideClick?: boolean;
   closeOnEscape?: boolean;
   overlayClassName?: string;
   contentClassName?: string;
};

export default function Modal({
   children,
   open,
   onClose,
   closeOnOutsideClick = true,
   closeOnEscape = true,
   overlayClassName,
   contentClassName,
}: Props) {
   useEffect(() => {
      if (!open || !closeOnEscape) return;

      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === 'Escape') {
            onClose?.();
         }
      };

      window.addEventListener('keydown', handleEscape);

      return () => {
         window.removeEventListener('keydown', handleEscape);
      };
   }, [open, closeOnEscape, onClose]);

   useEffect(() => {
      if (!open) return;

      document.body.style.overflow = 'hidden';

      return () => {
         document.body.style.overflow = '';
      };
   }, [open]);

   if (!open) return null;

   return (
      <Portal>
         <div
            className={cn(
               'fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,14,39,0.85)] backdrop-blur-sm',
               overlayClassName,
            )}
            onClick={(e) => {
               if (closeOnOutsideClick && e.target === e.currentTarget) {
                  onClose?.();
               }
            }}
         >
            <div className={cn('w-full max-w-3xl mx-4', contentClassName)}>
               {children}
            </div>
         </div>
      </Portal>
   );
}
