import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Button,
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

  useEffect(() => {
    calculateLotSize();
  }, [accountBalance, riskPercentage, stopLoss]);

  const calculateLotSize = () => {
    const riskAmount = (accountBalance * riskPercentage) / 100;
    const calculatedLotSize = riskAmount / stopLoss;
    setLotSize(Number(calculatedLotSize.toFixed(2)));
  };

  return (
    <Box minHeight="100vh" bg={bgColor} py={16} px={4}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} maxWidth="1200px" margin="auto">
        <GridItem>
          <VStack spacing={8} align="stretch">
            <Heading color={textColor} size="xl" textAlign="center">
              Lot Size Calculator
            </Heading>
            <Box
              bg={cardBg}
              p={8}
              borderRadius="xl"
              boxShadow="xl"
              border="1px solid"
              borderColor={borderColor}
            >
              <VStack spacing={6}>
                <FormControl>
                  <FormLabel htmlFor="accountBalance">Account Balance</FormLabel>
                  <NumberInput
                    id="accountBalance"
                    value={accountBalance}
                    onChange={(valueString) => setAccountBalance(Number(valueString))}
                    min={0}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="riskPercentage">Risk Percentage</FormLabel>
                  <Flex>
                    <NumberInput
                      id="riskPercentage"
                      value={riskPercentage}
                      onChange={(valueString) => setRiskPercentage(Number(valueString))}
                      min={0}
                      max={100}
                      step={0.1}
                      maxW="100px"
                      mr={4}
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
                      <SliderThumb fontSize="sm" boxSize="32px" children={riskPercentage} />
                    </Slider>
                  </Flex>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="stopLoss">Stop Loss (in pips)</FormLabel>
                  <NumberInput
                    id="stopLoss"
                    value={stopLoss}
                    onChange={(valueString) => setStopLoss(Number(valueString))}
                    min={1}
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
                  <StatLabel fontSize="lg">Recommended Lot Size</StatLabel>
                  <StatNumber fontSize="3xl">{lotSize}</StatNumber>
                  <StatHelpText>Based on your inputs</StatHelpText>
                </Stat>
              </VStack>
            </Box>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack spacing={8} align="stretch">
            <Heading color={textColor} size="xl" textAlign="center">
              How It Works
            </Heading>
            <Box
              bg={cardBg}
              p={8}
              borderRadius="xl"
              boxShadow="md"
              border="1px solid"
              borderColor={borderColor}
            >
              <VStack spacing={6} align="start">
                <Text fontSize="lg" fontWeight="bold" color={textColor}>
                  Follow these steps to calculate your lot size:
                </Text>
                <Flex align="center">
                  <Icon as={DollarSign} mr={4} color="green.500" boxSize={6} />
                  <Text>Enter your account balance</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={Percent} mr={4} color="blue.500" boxSize={6} />
                  <Text>Set your risk percentage (usually 1-2% of your account)</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={TrendingDown} mr={4} color="red.500" boxSize={6} />
                  <Text>Define your stop loss in pips</Text>
                </Flex>
                <Text fontSize="md" color={textColor}>
                  The calculator will automatically compute the recommended lot size based on these parameters. This helps you manage risk and determine the appropriate position size for your trades.
                </Text>
                <Text fontSize="sm" fontStyle="italic" color={textColor}>
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