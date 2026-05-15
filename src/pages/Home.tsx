import { useState } from 'react';
import Portfolio from '../components/portfolio/Portfolio';
import Terminal from '../components/terminal/Terminal';

export default function Home() {
   const [showTerminal, setShowTerminal] = useState(false);

   return (
      <main style={{ position: 'relative', minHeight: '100vh' }}>
         <Portfolio onHandleAction={() => setShowTerminal(true)} />

         {showTerminal && (
            <div
               style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 50,
                  background: 'rgba(10, 14, 39, 0.85)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}
               onClick={(e) => {
                  // close overlay when clicking the backdrop
                  if (e.target === e.currentTarget) setShowTerminal(false);
               }}
            >
               <Terminal setShowTerminal={setShowTerminal} />
            </div>
         )}
      </main>
   );
}
