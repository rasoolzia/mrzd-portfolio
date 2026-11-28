import { useModal } from '@/context/modal/ModalContext';
import { contact } from '@/data/portfolio';
import { getHref } from '@/helper/getHref';
import type { LinkItem } from '@/types/nav';

const LINKS: LinkItem[] = [
   { symbol: '◿', color: '#ffdd44', label: 'resume', href: getHref('cv') },
   {
      symbol: '△',
      color: '#ff4444',
      label: 'handbook',
      href: getHref('interview'),
   },
   {
      symbol: '○',
      color: '#ff8844',
      label: 'projects',
      href: getHref('demo'),
   },
   { symbol: '◇', color: '#44ff44', label: 'tool', href: getHref('tool') },
   { symbol: '□', color: '#ffdd44', label: 'api', href: getHref('api') },
   {
      symbol: '+',
      color: '#ff4444',
      label: 'github',
      href: contact.github,
      external: true,
   },
   {
      symbol: '☆',
      color: '#44ddff',
      label: 'linkedin',
      href: contact.linkedin,
      external: true,
   },
   {
      symbol: '▱',
      color: '#ff8844',
      label: 'contact',
      action: 'contact',
   },
   {
      symbol: '>',
      color: '#44ff44',
      label: 'terminal',
      action: 'terminal',
   },
];

const baseLinkClasses =
   'text-sky-300 no-underline transition-colors duration-150 hover:text-white';

export default function NavLinks() {
   const { openModal } = useModal();

   return (
      <nav className="leading-loose flex gap-y-4 gap-x-3 flex-wrap">
         {LINKS.map(({ symbol, color, label, href, action, external }) => (
            <span key={label} className="inline-flex items-center gap-1.5">
               <span style={{ color }}>{symbol}</span>

               {action ? (
                  <button
                     type="button"
                     onClick={() => openModal(action)}
                     className={`${baseLinkClasses} cursor-pointer bg-transparent border-none p-0 font-inherit`}
                  >
                     {label}
                  </button>
               ) : (
                  <a
                     href={href}
                     target={external ? '_blank' : undefined}
                     rel={external ? 'noopener noreferrer' : undefined}
                     className={baseLinkClasses}
                  >
                     {label}
                  </a>
               )}
            </span>
         ))}
      </nav>
   );
}
