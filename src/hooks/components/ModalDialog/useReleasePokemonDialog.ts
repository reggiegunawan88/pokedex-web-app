import useDialogStore from '@/store/Dialog';
import useMyPokemonCollection from '@/store/MyPokemonCollection';

interface IProps {
  nickname: string;
}

const useReleasePokemonDialog = ({ nickname }: IProps) => {
  const { pokemonCollection, updatePokemonCollection } = useMyPokemonCollection(
    state => ({
      pokemonCollection: state.pokemonCollection,
      updatePokemonCollection: state.updatePokemonCollection,
    })
  );
  const { closeDialog } = useDialogStore(state => ({
    closeDialog: state.closeDialog,
  }));

  const releaseSelectedPokemon = async () => {
    // clone arr
    const currentPokemonCollection = pokemonCollection;
    // filter data based on nickname
    const newPokemonList = await currentPokemonCollection.filter(
      (item: any) => item.nickname !== nickname
    );
    // store new updated pokemon collection
    updatePokemonCollection(newPokemonList);
    closeDialog();
  };

  return {
    releaseSelectedPokemon,
    closeDialog,
  };
};

export default useReleasePokemonDialog;
