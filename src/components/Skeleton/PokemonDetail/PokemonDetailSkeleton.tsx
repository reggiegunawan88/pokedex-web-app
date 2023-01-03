const PokemonDetailSkeleton = () => {
  return (
    <div className="flex w-full max-w-md flex-col justify-center gap-y-4 p-4 laptop:mx-auto">
      {/* detail skeleton */}
      <div className="h-full rounded bg-gray-300 shadow-lg"></div>
      {/* button skeleton */}
      <div className="flex flex-col items-center gap-y-1">
        <div className="h-10 w-10 animate-pulse rounded bg-gray-300"></div>
        <div className="h-5 w-20 animate-pulse rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default PokemonDetailSkeleton;
