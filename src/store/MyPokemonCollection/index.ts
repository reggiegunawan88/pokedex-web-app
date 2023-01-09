import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IPokemonCollection {
  pokemonCollection: Array<any>;
  storePokemon: (data: any) => void;
  updatePokemonCollection: (data: any) => void;
}

const useMyPokemonCollection = create<IPokemonCollection>()(
  persist(
    set => ({
      pokemonCollection: [],
      storePokemon: (data: any) =>
        set(state => ({
          pokemonCollection: [...state.pokemonCollection, data],
        })),
      updatePokemonCollection: (data: any) =>
        set(() => ({ pokemonCollection: data })),
    }),
    {
      name: 'myPokemon-storage',
    }
  )
);

export default useMyPokemonCollection;
