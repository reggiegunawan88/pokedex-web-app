import { ReactNode } from 'react';
import MainLayout from '@/layout/MainLayout';

const MyPokemon = () => {
  return (
    <div className='flex w-full'>
      <span>You don't have any pokemon.</span>
    </div>
  )
};

MyPokemon.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MyPokemon;
