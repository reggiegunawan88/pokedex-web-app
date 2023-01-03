const MyPokemonEmptyState = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-3">
      <span>You don&apos;t have any pokemon.</span>
      <button className="hover-scale rounded-full bg-red-400 py-3 px-9 text-lg font-bold text-white shadow-md">
        Find Pokemon
      </button>
    </div>
  );
};

export default MyPokemonEmptyState;
