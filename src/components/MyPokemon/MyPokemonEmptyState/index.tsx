import Link from 'next/link';

const MyPokemonEmptyState = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-3 font-minecraft">
      <span>You don&apos;t have any pokemon.</span>
      <Link passHref href="/pokedex">
        <button className="hover-scale rounded-full bg-red-400 py-3 px-9 text-lg font-bold text-white shadow-md">
          Find Pokemon
        </button>
      </Link>
    </div>
  );
};

export default MyPokemonEmptyState;
