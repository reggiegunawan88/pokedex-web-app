import PokemonCard from '@/components/Pokedex/PokemonCard';
import PokemonCardSkeleton from '@/components/Skeleton/Pokedex/PokemonCardSkeleton';
import useMyPokemonCollection from '@/store/MyPokemonCollection';

interface IProps {
  data: any;
}

const PokemonList = ({ data }: IProps) => {
  const { pokemonCollection } = useMyPokemonCollection(state => ({
    pokemonCollection: state.pokemonCollection,
  }));

  return (
    <div className="flex h-full flex-col rounded-lg p-3 shadow-lg laptop:gap-y-3 laptop:bg-white laptop:p-7">
      <div className="flex flex-row items-center justify-between gap-x-2">
        <hr className="w-full border-b-default border-pokedex" />
        <div className="flex flex-col whitespace-nowrap text-center font-minecraft font-bold text-pokedex">
          <span className="text-base laptop:text-2xl">Pokemon List</span>
          <span className="text-sm laptop:text-base">
            (Owned: {pokemonCollection.length})
          </span>
        </div>
        <hr className="w-full border-b-default border-pokedex" />
      </div>
      {/* pokemon card list */}
      <div className="flex overflow-auto whitespace-nowrap laptop:grid laptop:grid-cols-4">
        {!data?.isLoading
          ? data.pokemonList?.map((item: any) => (
              <PokemonCard key={item.id} data={item} />
            ))
          : [...new Array(5)].map((_item, idx) => (
              <PokemonCardSkeleton key={idx} />
            ))}
      </div>
    </div>
  );
};

export default PokemonList;
