import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import POKEMON_DETAIL_QUERY from '@/constants/graphql/pokemonDetailQuery';
import getPokemonDetailData from '@/services/getPokemonData';

const usePokemonDetail = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemonData, setPokemonData] = useState(null) as any;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPokemonData = () => {
    const gqlVar = {
      name,
    };
    getPokemonDetailData({
      query: POKEMON_DETAIL_QUERY,
      variables: gqlVar,
    })
      .then(data => {
        setPokemonData(data?.data?.pokemon);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (router.isReady) {
      getPokemonData();
    }
  }, [router.isReady]);

  return {
    isLoading,
    pokemonInfo: {
      name: pokemonData?.name,
      types: pokemonData?.types,
      sprites: pokemonData?.sprites,
    },
    pokemonAbout: {
      id: pokemonData?.id,
      weight: pokemonData?.weight,
      height: pokemonData?.height,
      abilities: pokemonData?.abilities,
    },
    pokemonStats: {
      stats: pokemonData?.stats,
    },
  };
};

export default usePokemonDetail;
