import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IPokemonCollection {
  myPokemon: Array<any>;
  storePokemon: (data: any) => void;
}

const useMyPokemonCollection = create<IPokemonCollection>()(
  persist(
    set => ({
      myPokemon: [],
      storePokemon: (data: any) =>
        set(state => ({ myPokemon: [...state.myPokemon, data] })),
    }),
    {
      name: 'myPokemon-storage',
    }
  )
);

export default useMyPokemonCollection;
