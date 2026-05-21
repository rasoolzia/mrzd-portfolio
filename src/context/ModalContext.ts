import { createContext, useContext } from 'react';

interface ModalContextValue {
   closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

// export const ModalProvider = ({ children }: { children: ReactNode }) => {

// };

export function useModal() {
   const ctx = useContext(ModalContext);
   if (!ctx)
      throw new Error('useModal must be used within ModalContext.Provider');
   return ctx;
}
