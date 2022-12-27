import Footer from '@/components/Footer';
import React, { ReactNode } from 'react';
import Div100vh from 'react-div-100vh';

interface IHome {
  children: ReactNode;
}

const Home = (props: IHome) => {
  return (
    <Div100vh className="relative flex flex-col bg-pokemon-bg">
      <div className="flex flex-col flex-1 items-center justify-center">{props.children}</div>
      <Footer />
    </Div100vh>
  );
};

export default Home;
