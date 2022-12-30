import React, { ReactNode } from 'react';

import PokemonAbout from '@/components/PokemonDetail/PokemonAbout';
import PokemonInfo from '@/components/PokemonDetail/PokemonInfo';
import MainLayout from '@/layout/MainLayout';
import Image from 'next/image';

const PokemonDetail = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full max-w-md p-4 laptop:mx-auto">
      <div className="rounded-lg bg-white px-4 py-11 shadow-lg overflow-auto">
        <div className="flex flex-col gap-y-4 laptop:flex-row laptop:gap-x-4">
          <div className="laptop:flex-1">
            <PokemonInfo />
          </div>
          <div className="flex flex-1 flex-col gap-y-4 overflow-auto">
            <PokemonAbout />
            <PokemonAbout />
            <PokemonAbout />
          </div>
        </div>
      </div>
      <button className='flex flex-col gap-y-1 items-center hover-scale'>
        <div className='relative h-10 w-10'>
        <Image alt='pokeball-logo' src='/assets/images/pokeball-pixel.png' layout='fill' />
        </div>
        <span className="text-red-500 uppercase">Catch</span>
      </button>
    </div>
  );
};

PokemonDetail.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default PokemonDetail;
