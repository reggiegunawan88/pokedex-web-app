import { ReactNode } from 'react';

import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';

/* modules for _app.tsx layout */
declare module 'next' {
  // eslint-disable-next-line no-shadow
  export type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module 'next/app' {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  export type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}

export { NextComponentType };
