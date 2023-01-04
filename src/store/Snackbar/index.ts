import create from 'zustand';

interface ISnackbarState {
  isOpen: boolean;
  description: string;
  type: string;
  openSnackbar: () => void;
  closeSnackbar: () => void;
  setSnackbarDescription: (value: string) => void;
  setSnackbarType: (value: string) => void;
}

const useSnackbarStore = create<ISnackbarState>(set => ({
  isOpen: false,
  description: '',
  type: '',
  openSnackbar: () => set(() => ({ isOpen: true })),
  closeSnackbar: () => set(() => ({ isOpen: false })),
  setSnackbarDescription: value => set(() => ({ description: value })),
  setSnackbarType: value => set(() => ({ type: value })),
}));

export default useSnackbarStore;
