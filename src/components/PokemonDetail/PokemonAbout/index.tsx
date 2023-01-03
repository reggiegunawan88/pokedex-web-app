interface IProps {
  data: {
    id: string;
    weight: string;
    height: string;
    abilities: any;
  };
}

const PokemonAbout = ({ data }: IProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="w-full rounded bg-blue-100 px-2 py-1">
        <span className="font-bold text-blue-500">About</span>
      </div>
      <div className="flex flex-row px-2">
        <div className="flex flex-1 flex-col gap-y-1 font-bold">
          <span>ID</span>
          <span>Weight</span>
          <span>Height</span>
          <span>Abilities</span>
        </div>

        <div className="flex flex-1 flex-col gap-y-1">
          <span>#{data?.id}</span>
          <span>{data?.height} m</span>
          <span>{data?.weight} lbs</span>
          {data?.abilities?.map((el: any) => (
            <span
              key={el?.ability?.name}
              className="text-black w-fit rounded-full bg-gray-200 px-2 text-xs font-bold capitalize laptop:text-sm"
            >
              {el?.ability?.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonAbout;
