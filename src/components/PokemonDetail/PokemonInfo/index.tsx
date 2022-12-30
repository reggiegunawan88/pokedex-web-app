import Image from 'next/image';

const PokemonInfo = () => {
  return (
    <div className="flex flex-row laptop:flex-col laptop:gap-y-11">
      <div className="flex flex-1 flex-col justify-center gap-y-1 laptop:items-center laptop:gap-y-3">
        <span className="text-2xl font-bold">Pikachu</span>
        <div className="flex flex-row gap-x-3">
          <span className="rounded-full bg-pokedex px-2 py-1 text-xs font-bold text-white">
            GRASS
          </span>
          <span className="rounded-full bg-pokedex px-2 py-1 text-xs font-bold text-white">
            POISON
          </span>
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="relative h-31 w-31 laptop:h-40 laptop:w-40">
          <Image
            alt="pokemon-img"
            src="/assets/images/pikachu.svg"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
