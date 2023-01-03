import create from 'zustand';

interface IPokemon {
  pokemon: any;
  pokemonThumbnail: any;
  setPokemonThumbnail: (data: any) => void;
}

const usePokemonStore = create<IPokemon>(set => ({
  pokemon: null,
  pokemonThumbnail: null,
  setPokemonThumbnail: (data: any) => set(() => ({ pokemonThumbnail: data })),
}));

export default usePokemonStore;
