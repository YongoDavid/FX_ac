import React from 'react';
import { Box, VStack,useColorModeValue } from '@chakra-ui/react';
import LotSizeCalculator from './LotSizeCalculator';
import PipsCalculator from './PipsCalculator';

export default function Tools() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  // const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box minHeight="100vh" bg={bgColor} py={16} px={4}>
      <VStack spacing={16} align="stretch" maxWidth="1300px" margin="auto">
        {/* <Heading color={textColor} size="xl" textAlign="center">
          Forex Trading Calculators
        </Heading> */}
        <LotSizeCalculator />
        <PipsCalculator />
      </VStack>
    </Box>
  );
}