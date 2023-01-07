import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import shallow from 'zustand/shallow';

import POKEMON_DETAIL_QUERY from '@/constants/graphql/POKEMON_DETAIL_QUERY';
import getPokemonDetailData from '@/services/getPokemonData';
import useDialogStore from '@/store/Dialog';
import useSnackbarStore from '@/store/Snackbar';

const usePokemonDetail = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemonData, setPokemonData] = useState(null) as any;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // dialog store
  const { openDialog } = useDialogStore(state => ({
    openDialog: state.openDialog,
  }));

  // snackbar store
  const {
    openSnackbar,
    closeSnackbar,
    setSnackbarDescription,
    setSnackbarType,
  } = useSnackbarStore(
    state => ({
      openSnackbar: state.openSnackbar,
      closeSnackbar: state.closeSnackbar,
      setSnackbarDescription: state.setSnackbarDescription,
      setSnackbarType: state.setSnackbarType,
    }),
    shallow
  );

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

  const catchPokemon = () => {
    const chance = Math.random();
    if (chance > 0.5) {
      closeSnackbar();
      return openDialog();
    }
    openSnackbar();
    setSnackbarDescription('Pokemon flee...');
    return setSnackbarType('ERROR');
  };

  useEffect(() => {
    if (router.isReady) {
      getPokemonData();
    }
  }, [router.isReady]);

  return {
    isLoading,
    pokemonData: {
      name: pokemonData?.name,
      sprites: {
        front_default: pokemonData?.sprites?.front_default,
      },
    },
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
    catchPokemon,
  };
};

export default usePokemonDetail;
