import { ReactNode } from 'react';

import Div100vh from 'react-div-100vh';

import Header from '@/components/Header';

type IMainProps = {
  children: ReactNode;
};

const MainLayout = (props: IMainProps) => {
  return (
    <Div100vh className="text-minecraft relative flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-auto bg-blue-100">
        {props.children}
      </div>
    </Div100vh>
  );
};

export default MainLayout;
