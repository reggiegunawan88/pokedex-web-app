import React from 'react';

import Image from 'next/image';

import usePokemonStore from '@/store/Pokemon';

interface IProps {
  data: any;
}

const PokemonCard = ({ data }: IProps) => {
  const { setPokemonThumbnail } = usePokemonStore(state => ({
    setPokemonThumbnail: state.setPokemonThumbnail,
  }));

  return (
    <div
      className="hover-scale m-2 flex cursor-pointer justify-center rounded bg-indigo-300 p-3"
      onClick={() => setPokemonThumbnail(data)}
    >
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
