import React, { ReactNode } from 'react';

import PokemonList from '@/components/Pokedex/PokemonList';
import PokemonThumbnail from '@/components/Pokedex/PokemonThumbnail';
import PokemonThumbnailSkeleton from '@/components/Skeleton/Pokedex/PokemonThumbnailSkeleton';
import usePokedex from '@/hooks/pages/Pokedex/usePokedex';
import MainLayout from '@/layout/MainLayout';

const Pokedex = () => {
  const { data } = usePokedex();

  return (
    <div className="flex w-full flex-col-reverse overflow-auto laptop:flex-row">
      <div className="flex-1 laptop:p-13">
        <PokemonList data={data} />
      </div>
      <div className="flex-1 self-center py-3 laptop:py-13">
        {data.isLoading ? <PokemonThumbnailSkeleton /> : <PokemonThumbnail />}
      </div>
    </div>
  );
};

Pokedex.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Pokedex;
