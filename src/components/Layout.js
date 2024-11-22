import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Header />
      <Box as="main" pt="30px"> {/* Add padding-top equal to the header height */}
        {children}
      </Box>
    </Box>
  );
}