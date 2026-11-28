import type { NavAction } from '@/types/nav';
import { type ReactNode, useCallback, useEffect, useState } from 'react';

import { ModalContext } from './ModalContext';

const MODAL_HASHES: Record<NavAction, string> = {
   contact: '#contact',
   terminal: '#terminal',
};

const getModalFromHash = (): NavAction | null => {
   const hash = window.location.hash;

   if (hash === '#contact') return 'contact';
   if (hash === '#terminal') return 'terminal';

   return null;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
   const [activeModal, setActiveModal] = useState<NavAction | null>(
      getModalFromHash,
   );

   const openModal = useCallback((action: NavAction) => {
      const hash = MODAL_HASHES[action];

      if (window.location.hash === hash) {
         setActiveModal(action);
         return;
      }

      window.history.pushState({ modal: action }, '', hash);
      setActiveModal(action);
   }, []);

   const closeModal = useCallback(() => {
      if (window.history.state?.modal) {
         window.history.back();
         return;
      }

      window.history.replaceState(
         null,
         '',
         `${window.location.pathname}${window.location.search}`,
      );

      setActiveModal(null);
   }, []);

   useEffect(() => {
      const handlePopState = () => {
         setActiveModal(getModalFromHash());
      };

      const handleHashChange = () => {
         setActiveModal(getModalFromHash());
      };

      window.addEventListener('popstate', handlePopState);
      window.addEventListener('hashchange', handleHashChange);

      return () => {
         window.removeEventListener('popstate', handlePopState);
         window.removeEventListener('hashchange', handleHashChange);
      };
   }, []);

   return (
      <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
         {children}
      </ModalContext.Provider>
   );
};
