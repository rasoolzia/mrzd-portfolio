import type { NavAction } from '@/types/nav';
import { createContext, useContext } from 'react';

interface ModalContextType {
   activeModal: NavAction | null;
   openModal: (action: NavAction) => void;
   closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
   undefined,
);

export const useModal = () => {
   const context = useContext(ModalContext);
   if (!context)
      throw new Error('useModal must be used within a ModalProvider');
   return context;
};
