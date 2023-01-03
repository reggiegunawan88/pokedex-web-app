import Image from 'next/image';
import Link from 'next/link';

import usePokemonStore from '@/store/Pokemon';

const PokemonThumbnail = () => {
  const { pokemonThumbnail } = usePokemonStore(state => ({
    pokemonThumbnail: state.pokemonThumbnail,
  }));

  return (
    <div className="flex flex-col items-center gap-y-5 laptop:gap-y-12 font-minecraft">
      {/* pokemon detail information */}
      <div className="flex flex-col text-center">
        <span className="text-3xl uppercase">{pokemonThumbnail?.name}</span>
        <span>#{pokemonThumbnail?.id}</span>
      </div>

      {/* pokemon thumbnail img */}
      <div className="relative h-56 w-56">
        <Image
          alt="pokemon-thumbnail"
          src={pokemonThumbnail?.image}
          layout="fill"
        />
      </div>

      {/* button detail */}
      <Link passHref href={`/pokedex/${pokemonThumbnail?.name}`}>
        <button className="hover-scale rounded-full bg-red-400 py-3 px-9 text-white">
          DETAILS
        </button>
      </Link>
    </div>
  );
};

export default PokemonThumbnail;
