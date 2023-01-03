import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-between bg-pokedex px-6 py-4 font-minecraft text-white">
      <button
        className="flex flex-row items-center gap-x-3"
        onClick={() => router.back()}
      >
        <div className="relative h-4 w-4">
          <Image
            alt="arrow-left"
            src="/assets/icons/arrow-left.svg"
            layout="fill"
          />
        </div>
        <span className="hidden laptop:block">Back</span>
      </button>
      <Link passHref href="/pokedex">
        <button
          className="relative h-9 w-24 laptop:h-12 laptop:w-40"
          onClick={() => router.push('/pokedex')}
        >
          <Image
            alt="pokedex-logo"
            src="/assets/images/pokedex-logo.png"
            layout="fill"
          />
        </button>
      </Link>
      <Link passHref href="/my-pokemon">
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
