import Portal from '@/components/common/Portal';
import Portfolio from '@/components/portfolio/Portfolio';
import Terminal from '@/components/terminal/Terminal';
import { useModal } from '@/context/modal/ModalContext';
import { ModalProvider } from '@/context/modal/ModalProvider';

export default function Home() {
   return (
      <ModalProvider>
         <HomeContent />
      </ModalProvider>
   );
}

function HomeContent() {
   const { activeModal } = useModal();

   return (
      <main className="relative min-h-screen">
         <Portfolio />

         {activeModal && (
            <Portal>
               {activeModal === 'terminal' && <Terminal />}
               {/* {activeModal === 'contact' && <ContactModal />} */}
            </Portal>
         )}
      </main>
   );
}
