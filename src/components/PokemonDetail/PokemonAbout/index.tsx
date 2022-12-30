import React from 'react';

const PokemonAbout = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="w-full rounded bg-blue-100 px-2 py-1">
        <span className="font-bold text-blue-500">About</span>
      </div>
      <div className="flex flex-row px-2">
        <div className="flex flex-1 flex-col gap-y-1">
          <span>Pokemon ID</span>
          <span>Weight</span>
          <span>Height</span>
          <span>Abilities</span>
        </div>

        <div className="flex flex-1 flex-col gap-y-1">
          <span>#001</span>
          <span>7m</span>
          <span>70 lbs</span>
          <span className="text-black w-fit rounded-full bg-gray-200 px-2 font-bold capitalize laptop:text-sm">
            overgrow
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonAbout;
