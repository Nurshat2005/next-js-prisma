'use client';

import ReduxProviders from '@/providers/ReduxProviders/ReduxProviders';
import { FC, ReactNode } from 'react';

interface ILayoutClient {
  children: ReactNode;
}

const LayoutClient: FC<ILayoutClient> = ({ children }) => {
  return <ReduxProviders>{children}</ReduxProviders>;
};

export default LayoutClient;