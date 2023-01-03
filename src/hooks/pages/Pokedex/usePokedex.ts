import { useState, useEffect } from 'react';

import POKEMON_LIST_QUERY from '@/constants/graphql/pokemonListQuery';
import getPokemonList from '@/services/getPokemonList';
import usePokemonStore from '@/store/Pokemon';

const usePokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setPokemonThumbnail } = usePokemonStore(state => ({
    setPokemonThumbnail: state.setPokemonThumbnail,
  }));

  const getAllPokemonData = () => {
    // data offset for pokemon Hoenn data
    const gqlVar = {
      limit: 20,
      offset: 251,
    };
    getPokemonList({ query: POKEMON_LIST_QUERY, variables: gqlVar })
      .then((data: any) => {
        const pokemonDataList = data?.data?.pokemons?.results;
        setPokemonList(pokemonDataList);
        setPokemonThumbnail(pokemonDataList[0]); // set first idx data as the default pokemon thumbnail
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
