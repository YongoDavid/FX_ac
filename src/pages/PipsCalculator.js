import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  useColorModeValue,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { DollarSign, BarChart2, CreditCard } from 'lucide-react';

const currencyPairs = [
  { pair: 'EUR/USD', pipValue: 0.0001 },
  { pair: 'GBP/USD', pipValue: 0.0001 },
  { pair: 'USD/JPY', pipValue: 0.01 },
  { pair: 'AUD/USD', pipValue: 0.0001 },
];

export default function PipsCalculator() {
  const [lotSize, setLotSize] = useState(1);
  const [selectedPair, setSelectedPair] = useState(currencyPairs[0]);
  const [pipValue, setPipValue] = useState(0);
  const [accountBalance, setAccountBalance] = useState(10000);

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const statBg = useColorModeValue('teal.50', 'teal.900');

  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    calculatePipValue();
  }, [lotSize, selectedPair, accountBalance]);

  const calculatePipValue = () => {
    const calculatedPipValue = (lotSize * 100000 * selectedPair.pipValue).toFixed(2);
    setPipValue(Number(calculatedPipValue));
  };

  return (
    <Box minHeight="100vh" bg={bgColor} py={8} px={4}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} maxWidth="1300px" margin="auto">
        <GridItem>
          <VStack spacing={8} align="stretch">
            <Heading color={textColor} size={isMobile ? "lg" : "xl"} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Pips Calculator
            </Heading>
            <Box
              bg={cardBg}
              p={isMobile ? 4 : 8}
              borderRadius="xl"
              boxShadow="xl"
              border="1px solid"
              borderColor={borderColor}
            >
              <VStack spacing={isMobile ? 4 : 6}>
                <FormControl>
                  <FormLabel htmlFor="lotSize" fontSize={isMobile ? "sm" : "md"}>Lot Size</FormLabel>
                  <NumberInput
                    id="lotSize"
                    value={lotSize}
                    onChange={(valueString) => setLotSize(Number(valueString))}
                    min={0.01}
                    step={0.01}
                    precision={2}
                    size={isMobile ? "sm" : "md"}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="accountBalance" fontSize={isMobile ? "sm" : "md"}>Account Balance</FormLabel>
                  <NumberInput
                    id="accountBalance"
                    value={accountBalance}
                    onChange={(valueString) => setAccountBalance(Number(valueString))}
                    min={0}
                    size={isMobile ? "sm" : "md"}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="currencyPair" fontSize={isMobile ? "sm" : "md"}>Currency Pair</FormLabel>
                  <Select
                    id="currencyPair"
                    value={selectedPair.pair}
                    onChange={(e) => setSelectedPair(currencyPairs.find(pair => pair.pair === e.target.value) || currencyPairs[0])}
                    size={isMobile ? "sm" : "md"}
                  >
                    {currencyPairs.map((pair) => (
                      <option key={pair.pair} value={pair.pair}>
                        {pair.pair}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <Stat
                  p={4}
                  bg={statBg}
                  borderRadius="md"
                  borderWidth={1}
                  borderColor={borderColor}
                >
                  <StatLabel fontSize={isMobile ? "md" : "lg"}>Pip Value</StatLabel>
                  <StatNumber fontSize={isMobile ? "2xl" : "3xl"}>${pipValue}</StatNumber>
                  <StatHelpText fontSize={isMobile ? "xs" : "sm"}>
                    Per pip movement ({((pipValue / accountBalance) * 100).toFixed(4)}% of account)
                  </StatHelpText>
                </Stat>
              </VStack>
            </Box>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack spacing={8} align="stretch">
            <Heading color={textColor} size={isMobile ? "lg" : "xl"} textAlign="center" bgGradient={bgGradient} bgClip="text">
              How It Works
            </Heading>
            <Box
              bg={cardBg}
              p={isMobile ? 4 : 8}
              borderRadius="xl"
              boxShadow="md"
              border="1px solid"
              borderColor={borderColor}
            >
              <VStack spacing={isMobile ? 4 : 6} align="start">
                <Text fontSize={isMobile ? "md" : "lg"} fontWeight="bold" color={textColor}>
                  Follow these steps to calculate pip value:
                </Text>
                <Flex align="center">
                  <Icon as={CreditCard} mr={4} color="green.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>Enter your lot size</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={BarChart2} mr={4} color="blue.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>Select the currency pair you're trading</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={DollarSign} mr={4} color="red.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>View the calculated pip value</Text>
                </Flex>
                <Text fontSize={isMobile ? "sm" : "md"} color={textColor}>
                  The calculator will automatically compute the monetary value of a single pip based on your lot size and the selected currency pair. This helps you understand the potential profit or loss for each pip movement in your trade.
                </Text>
                <Text fontSize={isMobile ? "xs" : "sm"} fontStyle="italic" color={textColor}>
                  Note: Pip values may vary slightly depending on the current exchange rates. Always verify with your broker for the most accurate information.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

