import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-pokedex px-6 py-4 text-white">
      <button className="flex flex-row items-center gap-x-3">
        <div className="relative h-4 w-4">
          <Image
            alt="arrow-left"
            src="/assets/icons/arrow-left.svg"
            layout="fill"
          />
        </div>
        <span className="hidden laptop:block">Back</span>
      </button>
      <Link passHref href="/pokedex" className="cursor-pointer">
        <button className="relative h-9 w-24 laptop:h-12 laptop:w-40">
          <Image
            alt="pokedex-logo"
            src="/assets/images/pokedex-logo.png"
            layout="fill"
          />
        </button>
      </Link>
      <Link passHref href="/my-pokemon" className="cursor-pointer">
        <button className="flex flex-row items-center gap-x-3">
          <div className="relative h-6 w-6">
            <Image
              alt="pokeball-logo"
              src="/assets/images/pokeball-pixel.png"
              layout="fill"
            />
          </div>
          <span className="hidden laptop:block">My Pokemon</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
