import React from 'react';

const PokemonThumbnailSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 laptop:gap-y-12">
      {/* pokemon detail information */}
      <div className="flex flex-col gap-y-2 text-center">
        <div className="h-10 w-31 animate-pulse rounded bg-gray-300"></div>
        <div className="h-6 w-31 animate-pulse rounded bg-gray-300"></div>
      </div>

      {/* pokemon thumbnail img */}
      <div className="relative h-56 w-56 animate-pulse rounded bg-gray-300"></div>

      {/* button detail */}
      <div className="h-12 w-33 rounded bg-gray-300"></div>
    </div>
  );
};

export default PokemonThumbnailSkeleton;
