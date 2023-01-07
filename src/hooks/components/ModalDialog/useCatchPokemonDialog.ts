import React, { useState } from 'react';

import useDialogStore from '@/store/Dialog';
import useMyPokemonCollection from '@/store/MyPokemonCollection';
import useSnackbarStore from '@/store/Snackbar';

interface IProps {
  pokemon: {
    name: string;
    nickname?: string;
    sprites: {
      front_default: string;
    };
  };
}

const useCatchPokemonDialog = ({ pokemon }: IProps) => {
  const { storePokemon } = useMyPokemonCollection(state => ({
    storePokemon: state.storePokemon,
  }));
  const { closeDialog } = useDialogStore(state => ({
    closeDialog: state.closeDialog,
  }));

  const { openSnackbar, setSnackbarDescription, setSnackbarType } =
    useSnackbarStore(state => ({
      openSnackbar: state.openSnackbar,
      setSnackbarDescription: state.setSnackbarDescription,
      setSnackbarType: state.setSnackbarType,
    }));
  const [nickname, setNickname] = useState<string>('');

  const setPokemonNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const savePokemon = () => {
    const pokemonData = {
      ...pokemon,
      nickname,
    };
    storePokemon(pokemonData);
    closeDialog();
    openSnackbar();
    setSnackbarDescription('Successfully caught pokemon!');
    setSnackbarType('SUCCESS');
  };

  return { setPokemonNickname, savePokemon };
};

export default useCatchPokemonDialog;
