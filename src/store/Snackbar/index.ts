import create from 'zustand';

interface ISnackbarState {
  isOpen: boolean;
  description: string;
  openSnackbar: () => void;
  closeSnackbar: () => void;
  setSnackbarDescription: (value: string) => void;
}

const useSnackbarStore = create<ISnackbarState>(set => ({
  isOpen: false,
  description: '',
  openSnackbar: () => set(() => ({ isOpen: true })),
  closeSnackbar: () => set(() => ({ isOpen: false })),
  setSnackbarDescription: value => set(() => ({ description: value })),
}));

export default useSnackbarStore;
