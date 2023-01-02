import React, { ReactNode } from 'react';

import PokemonList from '@/components/Pokedex/PokemonList';
import PokemonThumbnail from '@/components/Pokedex/PokemonThumbnail';
import MainLayout from '@/layout/MainLayout';

const Pokedex = () => {
  return (
    <div className="flex w-full flex-col-reverse overflow-auto laptop:flex-row">
      <div className="flex-1 laptop:p-13">
        <PokemonList />
      </div>
      <div className="flex-1 self-center py-3 laptop:py-13">
        <PokemonThumbnail />
      </div>
    </div>
  );
};

Pokedex.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Pokedex;
