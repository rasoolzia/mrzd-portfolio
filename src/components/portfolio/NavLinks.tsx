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
   { symbol: '△', color: '#ff4444', label: 'about', href: '#about' },
   { symbol: '○', color: '#ff8844', label: 'projects', href: '#projects' },
   { symbol: '□', color: '#ffdd44', label: 'skills', href: '#skills' },
   { symbol: '◇', color: '#44ff44', label: 'experience', href: '#experience' },
   { symbol: '◿', color: '#ffdd44', label: 'blog', href: '#blog' },
   {
      symbol: '+',
      color: '#ff4444',
      label: 'github',
      href: 'https://github.com/yourusername',
      external: true,
   },
   {
      symbol: '☆',
      color: '#44ddff',
      label: 'linkedin',
      href: 'https://linkedin.com/in/yourusername',
      external: true,
   },
   {
      symbol: '▱',
      color: '#ff8844',
      label: 'contact',
      href: 'mailto:your@email.com',
   },
] as const;

export default function NavLinks({ onShowTerminal }: NavLinksProps) {
   return (
      <div className="leading-loose">
         {LINKS.map(({ symbol, color, label, href, external }) => (
            <span key={label}>
               <span style={{ color }}>{symbol}</span>{' '}
               <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  style={{
                     color: '#64b5f6',
                     textDecoration: 'none',
                     marginRight: '0.75rem',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) =>
                     (e.currentTarget.style.color = '#64b5f6')
                  }
               >
                  {label}
               </a>
            </span>
         ))}

         {/* Terminal button — same style as other links */}
         <span>
            <span style={{ color: '#44ff44' }}>{'>'}_</span>{' '}
            <button
               onClick={onShowTerminal}
               style={{
                  background: 'none',
                  border: 'none',
                  color: '#64b5f6',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  padding: 0,
                  marginRight: '0.75rem',
               }}
               onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
               onMouseLeave={(e) => (e.currentTarget.style.color = '#64b5f6')}
            >
               terminal
            </button>
         </span>
      </div>
   );
}
