import shallow from 'zustand/shallow';

import useSnackbarStore from '@/store/Snackbar';

const useSnackbar = () => {
  const { isOpen, description, type, closeSnackbar } = useSnackbarStore(
    state => ({
      isOpen: state.isOpen,
      description: state.description,
      type: state.type,
      closeSnackbar: state.closeSnackbar,
    }),
    shallow
  );

  const renderSnackbarBackground = () => {
    switch (type) {
      case 'SUCCESS':
        return '#34D399';
      case 'ERROR':
        return '#F87171';
      default:
        return '#0000';
    }
  };

  return {
    isOpen,
    description,
    closeSnackbar,
    renderSnackbarBackground,
  };
};

export default useSnackbar;
