import React from 'react';

import Image from 'next/image';

const PokemonCard = () => {
  return (
    <div className="hover-scale m-2 flex cursor-pointer justify-center rounded bg-green-300 p-3">
      <div className="relative h-18 w-18 ">
        <Image
          alt="pokemon-img"
          src="/assets/images/pikachu.svg"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
