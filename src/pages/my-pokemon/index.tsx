import { ReactNode } from 'react';

import dynamic from 'next/dynamic';

import MyPokemonCard from '@/components/MyPokemon/MyPokemonCard';
import useMyPokemon from '@/hooks/pages/MyPokemon/useMyPokemon';
import MainLayout from '@/layout/MainLayout';

const MyPokemonEmptyState = dynamic(
  () => import('@/components/MyPokemon/MyPokemonEmptyState')
);
const ModalDialog = dynamic(() => import('@/components/ModalDialog'));
const ReleasePokemonDialog = dynamic(
  () => import('@/components/ModalDialog/ReleasePokemonDialog')
);

const MyPokemon = () => {
  const { myPokemonList, selectedNickname, setSelectedPokemon } =
    useMyPokemon();

  if (myPokemonList.length === 0) {
    return <MyPokemonEmptyState />;
  }

  return (
    <>
      <div className="flex w-full justify-center px-4 py-5 font-minecraft">
        <div className="flex flex-col items-center gap-y-5">
          <span className="text-lg laptop:text-2xl">
            Owned pokemon: {myPokemonList.length}
          </span>
          <div className="grid grid-cols-3 gap-3 pb-5 laptop:grid-cols-5">
            {myPokemonList?.map(el => (
              <MyPokemonCard
                key={el.nickname}
                data={el}
                selectPokemon={setSelectedPokemon}
              />
            ))}
          </div>
        </div>
      </div>
      <ModalDialog>
        <ReleasePokemonDialog pokemonNickname={selectedNickname} />
      </ModalDialog>
    </>
  );
};

MyPokemon.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPokemon;
