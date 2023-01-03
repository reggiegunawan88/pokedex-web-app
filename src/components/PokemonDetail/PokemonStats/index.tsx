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
      <div className="flex flex-col px-2 gap-y-2">
        {data?.stats?.map((el: any) => (
          <div key={el?.stat?.name} className="flex flex-row items-center">
            <span className="flex-1 capitalize font-bold">
              {el?.stat?.name}
            </span>
            <div className="flex-1 w-full h-2 bg-gray-300 rounded-full">
              <div
                style={{ width: `${el.base_stat / 2}%` }}
                className="h-2 bg-green-500 rounded-full"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
