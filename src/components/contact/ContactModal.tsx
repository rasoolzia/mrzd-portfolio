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
            'w-full max-w-4xl overflow-hidden rounded-lg border border-zinc-700 bg-[#1e1e1e] shadow-2xl',
            className,
         )}
      >
         {/* Header */}
         <ContactModalHeader />

         <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2">
            {/* Contact Methods */}
            <ContactMethods />

            {/* Contact Form */}
            <ContactForm />
         </div>
      </div>
   );
}
