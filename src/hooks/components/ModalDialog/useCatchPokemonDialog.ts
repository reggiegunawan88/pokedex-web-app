import React, { useState } from 'react';

import useMyPokemonCollection from '@/store/MyPokemonCollection';

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
  };

  return { setPokemonNickname, savePokemon };
};

export default useCatchPokemonDialog;
