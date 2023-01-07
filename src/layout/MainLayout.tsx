import { ReactNode } from 'react';

import dynamic from 'next/dynamic';
import Div100vh from 'react-div-100vh';

import Header from '@/components/Header';

const Snackbar = dynamic(() => import('@/components/Snackbar'));

type IMainProps = {
  children: ReactNode;
};

const MainLayout = (props: IMainProps) => {
  // const router = useRouter();
  return (
    <Div100vh className="text-minecraft relative flex flex-col">
      <Header />
      {/* <PageTransition location={router.pathname}> */}
      <div className="flex flex-1 overflow-auto bg-blue-100">
        {props.children}
        <Snackbar />
      </div>
      {/* </PageTransition> */}
    </Div100vh>
  );
};

export default MainLayout;
