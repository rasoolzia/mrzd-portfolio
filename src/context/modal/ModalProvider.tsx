import type { NavAction } from '@/types/nav';
import { type ReactNode, useCallback, useState } from 'react';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
   const [activeModal, setActiveModal] = useState<NavAction | null>(null);

   const openModal = useCallback(
      (action: NavAction) => setActiveModal(action),
      [],
   );
   const closeModal = useCallback(() => setActiveModal(null), []);

   return (
      <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
         {children}
      </ModalContext.Provider>
   );
};
