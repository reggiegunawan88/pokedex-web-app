import Image from 'next/image';

interface IProps {
  data: {
    name: string
    types: any
    sprites: any
  }
}

const PokemonInfo = ({ data }: IProps) => {
  return (
    <div className="flex flex-row laptop:flex-col laptop:gap-y-11">
      <div className="flex flex-1 flex-col justify-center gap-y-1 laptop:items-center laptop:gap-y-3">
        <span className="text-2xl font-bold uppercase">{data?.name}</span>
        <div className="flex flex-row gap-x-3">
          {data?.types?.map((element: any) => (
            <span
              key={element?.type.name}
              className={`rounded-full bg-pokedex px-2 py-1 text-xs capitalize text-white`}
            >
              {element?.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="relative h-31 w-31 laptop:h-40 laptop:w-40">
          <Image
            alt="pokemon-img"
            src={data?.sprites?.front_default}
            layout="fill"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
