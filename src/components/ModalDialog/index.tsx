import { ReactNode } from 'react';

import shallow from 'zustand/shallow';

import useDialogStore from '@/store/Dialog';

interface IModalDialog {
  children: ReactNode;
}

const ModalDialog = ({ children }: IModalDialog) => {
  const { isOpen } = useDialogStore(
    state => ({
      isOpen: state.isOpen,
      closeDialog: state.closeDialog,
    }),
    shallow
  );

  return (
    <div className={`fade-in ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 z-50 bg-gray-500 opacity-75 content-none"></div>
      <div className="fade-in fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

export default ModalDialog;
