import Image from 'next/image';

import useSnackbarStore from '@/store/Snackbar';

const Snackbar = () => {
  const { isOpen, description, type, closeSnackbar } = useSnackbarStore(
    state => ({
      isOpen: state.isOpen,
      description: state.description,
      type: state.type,
      closeSnackbar: state.closeSnackbar,
    })
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

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } slide fixed z-50 flex w-full justify-center p-3`}
    >
      <div
        className="max-w-md rounded-lg"
        style={{ backgroundColor: renderSnackbarBackground() }}
      >
        <div className="flex flex-row items-center gap-x-4 px-6 py-3 text-white">
          <span className="font-sans font-bold capitalize">{description}</span>
          <button className="relative h-4 w-4" onClick={closeSnackbar}>
            <Image
              alt="close-icon"
              src="/assets/icons/cross-icon.svg"
              layout="fill"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
