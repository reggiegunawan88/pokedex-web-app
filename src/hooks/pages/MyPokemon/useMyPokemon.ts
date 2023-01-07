import { useState, useEffect } from 'react';

import useMyPokemonCollection from '@/store/MyPokemonCollection';

const useMyPokemon = () => {
  const { myPokemon } = useMyPokemonCollection(state => ({
    myPokemon: state.myPokemon,
  }));
  const [myPokemonList, setMyPokemonList] = useState<Array<any>>([]);

  useEffect(() => {
    setMyPokemonList(myPokemon);
  }, []);

  return {
    myPokemonList,
  };
};

export default useMyPokemon;
