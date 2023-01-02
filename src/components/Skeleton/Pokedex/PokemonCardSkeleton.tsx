import React from 'react';

const PokemonCardSkeleton = () => {
  return (
    <div className="m-2 flex animate-pulse justify-center rounded bg-gray-300 p-3">
      <div className="h-18 w-18"></div>
    </div>
  );
};

export default PokemonCardSkeleton;
