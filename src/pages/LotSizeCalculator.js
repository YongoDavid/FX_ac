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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { DollarSign, Percent, TrendingDown } from 'lucide-react';

export default function LotSizeCalculator() {
  const [accountBalance, setAccountBalance] = useState(10000);
  const [riskPercentage, setRiskPercentage] = useState(1);
  const [stopLoss, setStopLoss] = useState(50);
  const [lotSize, setLotSize] = useState(0);

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
    calculateLotSize();
  }, [accountBalance, riskPercentage, stopLoss]);

  const calculateLotSize = () => {
    const riskAmount = (accountBalance * riskPercentage) / 100;
    const calculatedLotSize = riskAmount / stopLoss;
    setLotSize(Number(calculatedLotSize.toFixed(2)));
  };

  return (
    <Box minHeight="100vh" bg={bgColor} py={8} px={4}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} maxWidth="1300px" margin="auto">
        <GridItem>
          <VStack spacing={8} align="stretch">
            <Heading color={textColor} size={isMobile ? "lg" : "xl"} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Lot Size Calculator
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
                  <FormLabel htmlFor="riskPercentage" fontSize={isMobile ? "sm" : "md"}>Risk Percentage</FormLabel>
                  <Flex direction={isMobile ? "column" : "row"}>
                    <NumberInput
                      id="riskPercentage"
                      value={riskPercentage}
                      onChange={(valueString) => setRiskPercentage(Number(valueString))}
                      min={0}
                      max={100}
                      step={0.1}
                      maxW={isMobile ? "100%" : "100px"}
                      mr={isMobile ? 0 : 4}
                      mb={isMobile ? 2 : 0}
                      size={isMobile ? "sm" : "md"}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Slider
                      flex="1"
                      value={riskPercentage}
                      onChange={(v) => setRiskPercentage(v)}
                      min={0}
                      max={10}
                      step={0.1}
                    >
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb fontSize="sm" boxSize={isMobile ? "24px" : "32px"} children={riskPercentage} />
                    </Slider>
                  </Flex>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="stopLoss" fontSize={isMobile ? "sm" : "md"}>Stop Loss (in pips)</FormLabel>
                  <NumberInput
                    id="stopLoss"
                    value={stopLoss}
                    onChange={(valueString) => setStopLoss(Number(valueString))}
                    min={1}
                    size={isMobile ? "sm" : "md"}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <Stat
                  p={4}
                  bg={statBg}
                  borderRadius="md"
                  borderWidth={1}
                  borderColor={borderColor}
                >
                  <StatLabel fontSize={isMobile ? "md" : "lg"}>Recommended Lot Size</StatLabel>
                  <StatNumber fontSize={isMobile ? "2xl" : "3xl"}>{lotSize}</StatNumber>
                  <StatHelpText fontSize={isMobile ? "xs" : "sm"}>Based on your inputs</StatHelpText>
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
                  Follow these steps to calculate your lot size:
                </Text>
                <Flex align="center">
                  <Icon as={DollarSign} mr={4} color="green.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>Enter your account balance</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={Percent} mr={4} color="blue.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>Set your risk percentage (usually 1-2% of your account)</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={TrendingDown} mr={4} color="red.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>Define your stop loss in pips</Text>
                </Flex>
                <Text fontSize={isMobile ? "sm" : "md"} color={textColor}>
                  The calculator will automatically compute the recommended lot size based on these parameters. This helps you manage risk and determine the appropriate position size for your trades.
                </Text>
                <Text fontSize={isMobile ? "xs" : "sm"} fontStyle="italic" color={textColor}>
                  Remember: Always use proper risk management in your trading strategy.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

