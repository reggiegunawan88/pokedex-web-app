import { ReactNode } from 'react';

import MyPokemonEmptyState from '@/components/MyPokemon/MyPokemonEmptyState';
import MainLayout from '@/layout/MainLayout';

const MyPokemon = () => {
  return (
    <div className="flex w-full font-minecraft">
      <MyPokemonEmptyState />
    </div>
  );
};

MyPokemon.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPokemon;
