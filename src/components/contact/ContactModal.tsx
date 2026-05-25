import { cn } from '@/lib/cn';
import ContactForm from './ContactForm';
import ContactMethods from './ContactMethods';
import ContactModalHeader from './ContactModalHeader';

type Props = {
   className?: string;
};

export default function ContactModal({ className }: Props) {
   return (
      <div
         className={cn(
            'flex flex-col w-full h-full max-h-inherit rounded-lg border border-zinc-700 bg-[#1e1e1e] overflow-hidden',
            className,
         )}
      >
         {/* Header */}
         <ContactModalHeader />

         {/* Body (Scrolls) */}
         <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Methods */}
            <ContactMethods />

            {/* Contact Form */}
            <ContactForm />
         </div>
      </div>
   );
}
