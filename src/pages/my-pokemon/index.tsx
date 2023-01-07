import { ReactNode } from 'react';

import MyPokemonCard from '@/components/MyPokemon/MyPokemonCard';
import MyPokemonEmptyState from '@/components/MyPokemon/MyPokemonEmptyState';
import MainLayout from '@/layout/MainLayout';
import useMyPokemonCollection from '@/store/MyPokemonCollection';

const MyPokemon = () => {
  const { myPokemon } = useMyPokemonCollection(state => ({
    myPokemon: state.myPokemon,
  }));

  return (
    <div className="flex w-full justify-center px-4 py-5 font-minecraft">
      <div className="flex flex-col items-center gap-y-5">
        {myPokemon.length ? (
          <>
            <span className="text-lg laptop:text-2xl">
              Owned pokemon: {myPokemon.length}
            </span>
            <div className="grid grid-cols-3 gap-3 pb-5 laptop:grid-cols-5">
              {myPokemon?.map(el => (
                <MyPokemonCard key={el.nickname} data={el} />
              ))}
            </div>
          </>
        ) : (
          <MyPokemonEmptyState />
        )}
      </div>
    </div>
  );
};

MyPokemon.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPokemon;
