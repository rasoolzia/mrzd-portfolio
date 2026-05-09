import { useState } from 'react';
import Terminal from '../components/terminal/Terminal';

export default function Home() {
   const [showTerminal, setShowTerminal] = useState(true);

   return (
      <main className="min-h-screen p-6 md:p-10">
         {showTerminal ? (
            <Terminal setShowTerminal={setShowTerminal} />
         ) : (
            <button onClick={() => setShowTerminal(true)}>show terminal</button>
         )}
      </main>
   );
}
