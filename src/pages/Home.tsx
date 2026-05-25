import Modal from '@/components/common/Modal';
import ContactModal from '@/components/contact/ContactModal';
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
   const { activeModal, closeModal } = useModal();

   return (
      <main className="relative min-h-screen">
         <Portfolio />

         <Modal
            open={activeModal === 'terminal'}
            onClose={closeModal}
            closeOnOutsideClick={false}
         >
            <Terminal />
         </Modal>

         <Modal open={activeModal === 'contact'} onClose={closeModal}>
            <ContactModal />
         </Modal>
      </main>
   );
}
