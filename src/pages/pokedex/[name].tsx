import React, { ReactNode } from 'react';

import Image from 'next/image';

import PokemonAbout from '@/components/PokemonDetail/PokemonAbout';
import PokemonInfo from '@/components/PokemonDetail/PokemonInfo';
import PokemonDetailSkeleton from '@/components/Skeleton/PokemonDetail/PokemonDetailSkeleton';
import usePokemonDetail from '@/hooks/pages/PokemonDetail/usePokemonDetail';
import MainLayout from '@/layout/MainLayout';
import PokemonStats from '@/components/PokemonDetail/PokemonStats';

const PokemonDetail = () => {
  const { pokemonInfo, pokemonAbout, pokemonStats, isLoading } = usePokemonDetail();

  if (isLoading) {
    return <PokemonDetailSkeleton />;
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-y-4 p-4 laptop:mx-auto">
      <div className="overflow-auto rounded-lg bg-white px-4 py-11 shadow-lg">
        <div className="flex flex-col gap-y-4 laptop:flex-row laptop:gap-x-4">
          <div className="laptop:flex-1">
            <PokemonInfo data={pokemonInfo} />
          </div>
          <div className="flex flex-1 flex-col gap-y-4 overflow-auto">
            <PokemonAbout data={pokemonAbout} />
          </div>
          <div className="flex flex-1 flex-col gap-y-4 overflow-auto">
            <PokemonStats data={pokemonStats} />
          </div>
        </div>
      </div>
      <button className="hover-scale flex w-fit flex-col items-center gap-y-1 self-center">
        <div className="relative h-10 w-10">
          <Image
            alt="pokeball-logo"
            src="/assets/images/pokeball-pixel.png"
            layout="fill"
          />
        </div>
        <span className="uppercase text-red-500">Catch</span>
      </button>
    </div>
  );
};

PokemonDetail.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default PokemonDetail;
