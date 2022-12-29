import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Home from '@/layout/Home';

const Index = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="flex flex-col items-center gap-y-13">
        <div className="relative h-24 w-50 laptop:h-40 laptop:w-full">
          <Image
            alt="pokedex-logo"
            src="/assets/images/pokedex-logo.png"
            layout="fill"
          />
        </div>
        <div className="flex flex-row gap-x-4 text-xl">
          <div className="flex flex-col items-center gap-y-3 text-white">
            <Link passHref href="/pokedex">
              <button className="btn-menu hover-scale">
                <div className="relative h-20 w-20">
                  <Image
                    alt="pokeball-pixel"
                    src="/assets/images/pokeball-pixel.png"
                    layout="fill"
                  />
                </div>
              </button>
            </Link>
            <span>Pokedex</span>
          </div>
          <div className="flex flex-col items-center gap-y-3 text-white">
            <Link passHref href="/my-pokemon">
              <button
                className="btn-menu hover-scale"
                onClick={() => router.push('/')}
              >
                <div className="relative h-20 w-20">
                  <Image
                    alt="pokeball-pixel"
                    src="/assets/images/bag-pixel.png"
                    layout="fill"
                  />
                </div>
              </button>
            </Link>
            <span>My Pokemons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Index.getLayout = (page: ReactNode) => {
  return <Home>{page}</Home>;
};

export default Index;
