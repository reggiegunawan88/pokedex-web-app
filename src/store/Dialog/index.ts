import create from 'zustand';

interface IDialog {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const useDialogStore = create<IDialog>(set => ({
  isOpen: false,
  openDialog: () => set(() => ({ isOpen: true })),
  closeDialog: () => set(() => ({ isOpen: false })),
}));

export default useDialogStore;
