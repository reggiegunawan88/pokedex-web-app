interface IProps {
  data: {
    stats: any;
  };
}

const PokemonStats = ({ data }: IProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="w-full rounded bg-blue-100 px-2 py-1">
        <span className="font-bold text-blue-500">Stats</span>
      </div>
      <div className="flex flex-col gap-y-2 px-2">
        {data?.stats?.map((el: any) => (
          <div key={el?.stat?.name} className="flex flex-row items-center">
            <span className="flex-1 font-bold capitalize">
              {el?.stat?.name}
            </span>
            <div className="h-2 w-full flex-1 rounded-full bg-gray-300">
              <div
                style={{ width: `${el.base_stat / 2}%` }}
                className="h-2 rounded-full bg-green-500"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
