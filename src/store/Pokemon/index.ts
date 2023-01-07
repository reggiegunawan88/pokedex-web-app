import create from 'zustand';

interface IPokemon {
  pokemon: any;
  pokemonThumbnail: any;
  setPokemonThumbnail: (data: unknown) => void;
}

const usePokemonStore = create<IPokemon>(set => ({
  pokemon: null,
  pokemonThumbnail: null,
  setPokemonThumbnail: (data: unknown) =>
    set(() => ({ pokemonThumbnail: data })),
}));

export default usePokemonStore;
