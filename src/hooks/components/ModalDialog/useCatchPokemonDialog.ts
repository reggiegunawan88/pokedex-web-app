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
  const { storePokemon, myPokemon } = useMyPokemonCollection(state => ({
    storePokemon: state.storePokemon,
    myPokemon: state.myPokemon,
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
  const [nicknameExist, setNicknameExist] = useState<boolean>(false);

  const setPokemonNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
  };

  const savePokemon = () => {
    setNicknameExist(false);
    // check if nickname is exist
    const isNicknameExist = myPokemon.some((el: any) => {
      return el.nickname.toUpperCase() === nickname.toUpperCase();
    });

    // return error message if nickname is exist
    if (isNicknameExist) {
      return setNicknameExist(true);
    }

    // store pokemon if nickname is unique
    const pokemonData = {
      ...pokemon,
      nickname,
    };
    storePokemon(pokemonData);
    closeDialog();
    openSnackbar();
    setSnackbarDescription('Successfully caught pokemon!');
    return setSnackbarType('SUCCESS');
  };

  return { nicknameExist, setPokemonNickname, savePokemon };
};

export default useCatchPokemonDialog;
