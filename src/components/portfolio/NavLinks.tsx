interface NavLinksProps {
   onShowTerminal: () => void;
}

interface LinkItem {
   symbol: string;
   color: string;
   label: string;
   href: string;
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
      href: 'mailto:rasool.ziaaddini@gmail.com',
   },
] as const;

const baseLinkClasses =
   'text-sky-300 no-underline transition-colors duration-150 hover:text-white';

export default function NavLinks({ onShowTerminal }: NavLinksProps) {
   return (
      <nav className="leading-loose flex gap-2 flex-wrap">
         {LINKS.map(({ symbol, color, label, href, external }) => (
            <span key={label} className="inline-flex items-center gap-2">
               <span style={{ color }}>{symbol}</span>{' '}
               <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={baseLinkClasses}
               >
                  {label}
               </a>
            </span>
         ))}

         {/* Terminal button — same style as other links */}
         <span className="inline-flex items-center">
            <span style={{ color: '#44ff44' }}>{'>'}_</span>{' '}
            <button
               type="button"
               onClick={onShowTerminal}
               className={`${baseLinkClasses} cursor-pointer bg-transparent border-none p-0 font-inherit`}
            >
               terminal
            </button>
         </span>
      </nav>
   );
}
