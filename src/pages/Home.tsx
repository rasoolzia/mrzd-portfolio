import { useCallback, useState } from 'react';
import Portal from '@/components/common/Portal';
import Portfolio from '@/components/portfolio/Portfolio';
import Terminal from '@/components/terminal/Terminal';
import type { NavAction } from '@/types/nav';

export default function Home() {
   const [activeModal, setActiveModal] = useState<NavAction | null>(null);

   const handleAction = useCallback(
      (action: NavAction) => setActiveModal(action),
      [],
   );
   const handleClose = useCallback(() => setActiveModal(null), []);

   return (
      <main className="relative min-h-screen">
         <Portfolio onHandleAction={handleAction} />

         <Portal>
            {activeModal === 'terminal' && <Terminal onClose={handleClose} />}
            {/* {activeModal === 'contact' && <ContactModal onClose={handleClose} />} */}
         </Portal>
      </main>
   );
}
