import { useState, useEffect } from 'react';

import useMyPokemonCollection from '@/store/MyPokemonCollection';

const useMyPokemon = () => {
  const { pokemonCollection } = useMyPokemonCollection(state => ({
    pokemonCollection: state.pokemonCollection,
  }));
  const [myPokemonList, setMyPokemonList] = useState<Array<any>>([]);
  const [selectedNickname, setSelectedNickname] = useState<string>('');

  const setSelectedPokemon = (param: string) => {
    setSelectedNickname(param);
  };

  useEffect(() => {
    setMyPokemonList(pokemonCollection);
  }, [pokemonCollection]);

  return {
    myPokemonList,
    selectedNickname,
    setSelectedPokemon,
  };
};

export default useMyPokemon;
