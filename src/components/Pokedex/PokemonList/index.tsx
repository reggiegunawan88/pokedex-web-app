import React from 'react';

import PokemonCard from '@/components/Pokedex/PokemonCard';

const PokemonList = () => {
  return (
    <div className="flex h-full flex-col gap-y-3 rounded-lg p-3 shadow-lg laptop:bg-white laptop:p-7">
      <div className="flex flex-row items-center justify-between gap-x-2">
        <hr className="w-full border-b-default border-pokedex" />
        <div className="flex flex-col whitespace-nowrap text-center">
          <span>Pokemon List</span>
          <span>(Caught: 0)</span>
        </div>
        <hr className="w-full border-b-default border-pokedex" />
      </div>
      {/* pokemon card list */}
      <div className="flex overflow-auto whitespace-nowrap laptop:grid laptop:grid-cols-4">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
};

export default PokemonList;
