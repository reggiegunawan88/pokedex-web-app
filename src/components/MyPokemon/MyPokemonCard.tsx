import Image from 'next/image';

interface IProps {
  data: any;
}

const MyPokemonCard = ({ data }: IProps) => {
  return (
    <div className="hover-scale relative flex cursor-pointer flex-col rounded border-default border-pokedex bg-white">
      <div className="relative my-1 mx-4 h-20 w-20 self-center laptop:my-4 laptop:mx-6 laptop:h-40 laptop:w-40">
        <Image
          alt="my-pokemon-img"
          src={data?.sprites?.front_default}
          layout="fill"
          priority
          objectFit="cover"
        />
      </div>
      <button className="absolute right-1 top-1">
        <div className="relative h-3 w-3 laptop:h-6 laptop:w-6">
          <Image
            alt="close-icon"
            src="/assets/icons/close-icon.svg"
            layout="fill"
          />
        </div>
      </button>
      <div className="flex justify-center bg-pokedex py-1 px-3">
        <span className="font-minecraft text-sm text-yellow-100 laptop:text-lg">
          {data?.nickname}
        </span>
      </div>
    </div>
  );
};

export default MyPokemonCard;
