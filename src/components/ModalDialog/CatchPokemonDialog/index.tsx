import React from 'react';

import useCatchPokemonDialog from '@/hooks/components/ModalDialog/useCatchPokemonDialog';

interface IProps {
  pokemon: {
    name: string;
    nickname?: string;
    sprites: {
      front_default: string;
    };
  };
}

const CatchPokemonDialog = ({ pokemon }: IProps) => {
  const { savePokemon, setPokemonNickname } = useCatchPokemonDialog({
    pokemon,
  });
  return (
    <div className="mx-4 flex flex-col rounded-lg bg-white px-4 py-9 text-center">
      <span className="font-sans text-xl font-bold">
        Nice Catch! <br /> Give nickname to your new Pokemon.
      </span>
      <div className="mt-6 flex flex-col text-center">
        <input
          className="h-10 w-full border-default border-gray-300 p-3 outline-none"
          placeholder="Pokemon nickname"
          onChange={setPokemonNickname}
        />
        {/* <span
              className={`mt-3 font-sans text-sm font-bold text-red-400 ${
                catchStatus === false ? 'visible' : 'hidden'
              }`}
            > */}
        {/* <span className={`mt-3 font-sans text-sm font-bold text-red-400`}>
              You have to give different nickname for the Pokemon.
            </span> */}
      </div>
      <button
        className="mt-5 w-full rounded-full bg-red-400 py-3"
        onClick={savePokemon}
      >
        <span className="font-minecraft text-lg font-semibold text-white">
          SAVE
        </span>
      </button>
    </div>
  );
};

export default CatchPokemonDialog;
