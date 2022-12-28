import React, { ReactNode } from 'react';

import MainLayout from '@/layout/MainLayout';

const Pokedex = () => {
  return <div>Pokedex</div>;
};

Pokedex.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Pokedex;
