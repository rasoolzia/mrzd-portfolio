import Portal from '@/components/common/Portal';
import Portfolio from '@/components/portfolio/Portfolio';
import Terminal from '@/components/terminal/Terminal';
import { ModalContext } from '@/context/ModalContext';
import type { NavAction } from '@/types/nav';
import { useCallback, useState } from 'react';

export default function Home() {
   const [activeModal, setActiveModal] = useState<NavAction | null>(null);

   const handleAction = useCallback(
      (action: NavAction) => setActiveModal(action),
      [],
   );
   const closeModal = useCallback(() => setActiveModal(null), []);

   return (
      <ModalContext.Provider value={{ closeModal }}>
         <main className="relative min-h-screen">
            <Portfolio onHandleAction={handleAction} />

            <Portal>
               {activeModal === 'terminal' && <Terminal />}
               {/* {activeModal === 'contact' && <ContactModal />} */}
            </Portal>
         </main>
      </ModalContext.Provider>
   );
}
