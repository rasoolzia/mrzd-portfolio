import PixelRocket from '../svg/PixelRocket';
import NavLinks from './NavLinks';
import ParallaxScene from './ParallaxScene';
import RainbowDivider from './RainbowDivider';

interface PortfolioProps {
   onShowTerminal: () => void;
}

export default function Portfolio({ onShowTerminal }: PortfolioProps) {
   return (
      <div
         style={{
            display: 'flex',
            minHeight: '100vh',
            background: '#0a0e27',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#8892b0',
            overflow: 'hidden',
         }}
      >
         {/* Left — content */}
         <div
            style={{
               flex: 1,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               padding: '3rem',
               zIndex: 10,
               position: 'relative',
            }}
         >
            <div style={{ maxWidth: 600 }}>
               <PixelRocket />

               <h1
                  style={{
                     background:
                        'linear-gradient(90deg, #ff4444 0%, #ff8844 16.66%, #ffdd44 33.33%, #44ff44 50%, #44ddff 66.66%, #4444ff 83.33%, #ff44ff 100%)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text',
                     fontSize: '3rem',
                     fontWeight: 700,
                     marginBottom: '1.5rem',
                     lineHeight: 1.2,
                  }}
               >
                  Your Name
               </h1>

               <p
                  style={{
                     fontSize: '1rem',
                     lineHeight: 1.8,
                     marginBottom: '1.5rem',
                     color: '#64b5f6',
                  }}
               >
                  Hi, I'm Your Name — a senior React developer and full-stack
                  engineer. I build modern web applications with cutting-edge
                  technologies, focusing on performance, scalability, and
                  delightful user experiences.
               </p>

               <RainbowDivider />

               <NavLinks onShowTerminal={onShowTerminal} />
            </div>
         </div>

         {/* Right — parallax scene */}
         <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <ParallaxScene />
         </div>
      </div>
   );
}
