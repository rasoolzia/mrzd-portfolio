import InteractiveTerminal from '../components/terminal/InteractiveTerminal';
import Terminal from '../components/terminal/Terminal';
import TerminalHeader from '../components/terminal/TerminalHeader';

import { getCommands } from '../data/commands';

export default function Home() {
   const commands = getCommands();

   return (
      <main className="min-h-screen p-6 md:p-10">
         <Terminal>
            <TerminalHeader />

            <InteractiveTerminal commands={commands} />
         </Terminal>
      </main>
   );
}
