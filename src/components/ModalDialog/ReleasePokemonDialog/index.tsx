import useReleasePokemonDialog from '@/hooks/components/ModalDialog/useReleasePokemonDialog';

interface IProps {
  pokemonNickname: string;
}

const ReleasePokemonDialog = ({ pokemonNickname }: IProps) => {
  const { releaseSelectedPokemon, closeDialog } = useReleasePokemonDialog({
    nickname: pokemonNickname,
  });

  return (
    <div className="mx-4 flex flex-col rounded-lg bg-white px-4 py-9 text-center">
      <span className="font-sans text-xl font-bold">
        Are you sure you want to release {pokemonNickname} permanently?
      </span>
      <div className="flex flex-col gap-y-2">
        <button
          className="mt-5 w-full rounded-full bg-red-400 py-3"
          onClick={releaseSelectedPokemon}
        >
          <span className="font-minecraft text-lg font-semibold uppercase text-white">
            Release
          </span>
        </button>
        <button
          className="w-full rounded-full border-default border-red-400 py-3 text-red-400"
          onClick={closeDialog}
        >
          <span className="font-minecraft text-lg font-semibold uppercase">
            Cancel
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReleasePokemonDialog;
