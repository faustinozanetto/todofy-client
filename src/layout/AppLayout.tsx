import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';

interface IAppLayout {
  children: ReactNode;
}

export const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box my={8}>{children}</Box>
      <Footer />
    </>
  );
};
