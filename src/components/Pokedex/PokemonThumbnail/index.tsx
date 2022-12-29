import React from 'react';

import Image from 'next/image';

const PokemonThumbnail = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 laptop:gap-y-12">
      {/* pokemon detail information */}
      <div className="flex flex-col text-center">
        <span className="text-3xl">Pikachu</span>
        <span>#001</span>
      </div>

      {/* pokemon thumbnail img */}
      <div className="relative h-56 w-56">
        <Image
          alt="pokemon-thumbnail"
          src="/assets/images/pikachu.svg"
          layout="fill"
        />
      </div>

      {/* button detail */}
      <button className="hover-scale rounded-full bg-red-400 py-3 px-9">
        DETAILS
      </button>
    </div>
  );
};

export default PokemonThumbnail;
