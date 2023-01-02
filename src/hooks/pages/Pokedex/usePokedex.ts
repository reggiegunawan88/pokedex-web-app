import { useState, useEffect } from 'react';

import POKEMON_LIST_QUERY from '@/constants/graphql/pokemonListQuery';
import getPokemonList from '@/services/getPokemonList';

const usePokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAllPokemonData = () => {
    // data offset for pokemon Hoenn data
    const gqlVar = {
      limit: 20,
      offset: 251,
    };
    getPokemonList({ query: POKEMON_LIST_QUERY, variables: gqlVar })
      .then((data: any) => {
        setPokemonList(data?.data?.pokemons?.results);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getAllPokemonData();
  }, []);

  return {
    data: {
      pokemonList,
      isLoading,
    },
  };
};

export default usePokedex;
