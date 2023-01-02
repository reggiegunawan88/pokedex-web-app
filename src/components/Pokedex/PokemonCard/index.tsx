import React from 'react';

import Image from 'next/image';

interface IProps {
  data: any;
}

const PokemonCard = ({ data }: IProps) => {
  return (
    <div className="hover-scale m-2 flex cursor-pointer justify-center rounded bg-indigo-300 p-3">
      <div className="relative h-20 w-20">
        <Image
          alt="pokemon-img"
          src={data?.image}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
