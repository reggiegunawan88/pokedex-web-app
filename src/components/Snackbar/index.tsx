import Image from 'next/image';

import useSnackbar from '@/hooks/components/Snackbar/useSnackbar';

const Snackbar = () => {
  const { isOpen, description, closeSnackbar, renderSnackbarBackground } =
    useSnackbar();

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
          <span className="font-sans font-bold">{description}</span>
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
