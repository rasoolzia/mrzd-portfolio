import { contact } from '@/data/portfolio';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const CONTACT_ITEMS = [
   {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
   },
   {
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, '')}`,
      icon: Phone,
   },
   {
      label: 'Telegram',
      value: contact.telegram.replace('https://t.me/', '@'),
      href: contact.telegram,
      icon: Send,
   },
   {
      label: 'GitHub',
      value: contact.github.replace('https://', ''),
      href: contact.github,
      icon: Github,
   },
   {
      label: 'LinkedIn',
      value: contact.linkedin.replace('https://', ''),
      href: contact.linkedin,
      icon: Linkedin,
   },
   {
      label: 'Location',
      value: contact.location,
      icon: MapPin,
   },
];

export default function ContactMethods() {
   return (
      <div>
         <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-300">
            Contact Channels
         </h3>

         <div className="space-y-3">
            {CONTACT_ITEMS.map((item) => {
               const Icon = item.icon;

               const isStatic = !item.href;

               const content = (
                  <>
                     <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800">
                        <Icon size={18} className="text-zinc-300" />
                     </div>

                     <div className="min-w-0">
                        <p className="text-sm text-zinc-400">{item.label}</p>

                        <p className="break-all text-sm text-white">
                           {item.value}
                        </p>
                     </div>
                  </>
               );

               if (isStatic) {
                  return (
                     <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-3"
                     >
                        {content}
                     </div>
                  );
               }

               return (
                  <a
                     key={item.label}
                     href={item.href}
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-center gap-4 rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-3 transition hover:border-zinc-500 hover:bg-zinc-800/60"
                  >
                     {content}
                  </a>
               );
            })}
         </div>
      </div>
   );
}
