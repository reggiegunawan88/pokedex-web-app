import { ReactNode } from 'react';

import MyPokemonCard from '@/components/MyPokemon/MyPokemonCard';
import MainLayout from '@/layout/MainLayout';

const MyPokemon = () => {
  const data = false;
  return (
    <div className="flex w-full justify-center px-4 py-5 font-minecraft">
      <div className="flex flex-col items-center gap-y-5">
        <span className="text-lg laptop:text-2xl">Owned pokemon: 0</span>
        <div className="grid grid-cols-3 gap-3 pb-5 laptop:grid-cols-5">
          <MyPokemonCard />
          <MyPokemonCard />
          <MyPokemonCard />
        </div>
      </div>
    </div>
  );
};

MyPokemon.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPokemon;
