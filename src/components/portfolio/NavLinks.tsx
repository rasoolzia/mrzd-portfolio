interface NavLinksProps {
   onHandleAction: () => void;
}

interface LinkItem {
   symbol: string;
   color: string;
   label: string;
   href?: string;
   action?: 'terminal' | 'contact';
   external?: boolean;
}

const LINKS: LinkItem[] = [
   { symbol: '△', color: '#ff4444', label: 'playbook', href: '#playbook' },
   { symbol: '○', color: '#ff8844', label: 'projects', href: '#projects' },
   { symbol: '□', color: '#ffdd44', label: 'games', href: '#games' },
   { symbol: '◇', color: '#44ff44', label: 'tools', href: '#tools' },
   { symbol: '◿', color: '#ffdd44', label: 'cv', href: '#cv' },
   {
      symbol: '+',
      color: '#ff4444',
      label: 'github',
      href: 'https://github.com/rasoolzia',
      external: true,
   },
   {
      symbol: '☆',
      color: '#44ddff',
      label: 'linkedin',
      href: 'https://linkedin.com/in/rasoolzia',
      external: true,
   },
   {
      symbol: '▱',
      color: '#ff8844',
      label: 'contact',
      action: 'terminal',
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

export default function NavLinks({ onHandleAction }: NavLinksProps) {
   return (
      <nav className="leading-loose flex gap-4 flex-wrap">
         {LINKS.map(({ symbol, color, label, href, action, external }) => (
            <span key={label} className="inline-flex items-center gap-2">
               <span style={{ color }}>{symbol}</span>

               {action ? (
                  <button
                     type="button"
                     onClick={onHandleAction}
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
