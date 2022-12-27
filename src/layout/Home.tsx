import React, { ReactNode } from 'react';

import Div100vh from 'react-div-100vh';

import Footer from '@/components/Footer';

interface IHome {
  children: ReactNode;
}

const Home = (props: IHome) => {
  return (
    <Div100vh className="relative flex flex-col bg-pokemon-bg">
      <div className="flex flex-1 flex-col items-center justify-center">
        {props.children}
      </div>
      <Footer />
    </Div100vh>
  );
};

export default Home;
