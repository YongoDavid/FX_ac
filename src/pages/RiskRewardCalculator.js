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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Grid,
  GridItem,
  Progress,
  useBreakpointValue,
} from '@chakra-ui/react';
import { TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';

export default function RiskRewardCalculator() {
  const [entryPrice, setEntryPrice] = useState(100);
  const [stopLoss, setStopLoss] = useState(95);
  const [takeProfit, setTakeProfit] = useState(110);
  const [ratio, setRatio] = useState(0);

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
    calculateRiskReward();
  }, [entryPrice, stopLoss, takeProfit]);

  const calculateRiskReward = () => {
    const risk = Math.abs(entryPrice - stopLoss);
    const reward = Math.abs(takeProfit - entryPrice);
    const calculatedRatio = reward / risk;
    setRatio(Number(calculatedRatio.toFixed(2)));
  };

  const getRatioColor = (ratio) => {
    if (ratio >= 2) return "green.500";
    if (ratio >= 1) return "yellow.500";
    return "red.500";
  };

  const getRatioText = (ratio) => {
    if (ratio >= 2) return "Excellent";
    if (ratio >= 1) return "Good";
    return "Poor";
  };

  return (
    <Box minHeight="100vh" bg={bgColor} py={isMobile ? 8 : 12} px={4}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8} maxWidth="1200px" margin="auto">
        <GridItem>
          <VStack spacing={isMobile ? 6 : 8} align="stretch">
            <Heading color={textColor} size={isMobile ? "lg" : "xl"} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Risk/Reward Ratio Calculator
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
                  <FormLabel htmlFor="entryPrice" fontSize={isMobile ? "sm" : "md"}>Entry Price</FormLabel>
                  <NumberInput
                    id="entryPrice"
                    value={entryPrice}
                    onChange={(valueString) => setEntryPrice(Number(valueString))}
                    min={0}
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
                  <FormLabel htmlFor="stopLoss" fontSize={isMobile ? "sm" : "md"}>Stop Loss</FormLabel>
                  <NumberInput
                    id="stopLoss"
                    value={stopLoss}
                    onChange={(valueString) => setStopLoss(Number(valueString))}
                    min={0}
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
                  <FormLabel htmlFor="takeProfit" fontSize={isMobile ? "sm" : "md"}>Take Profit</FormLabel>
                  <NumberInput
                    id="takeProfit"
                    value={takeProfit}
                    onChange={(valueString) => setTakeProfit(Number(valueString))}
                    min={0}
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

                <Stat
                  p={4}
                  bg={statBg}
                  borderRadius="md"
                  borderWidth={1}
                  borderColor={borderColor}
                >
                  <StatLabel fontSize={isMobile ? "md" : "lg"}>Risk/Reward Ratio</StatLabel>
                  <StatNumber fontSize={isMobile ? "2xl" : "3xl"}>1:{ratio}</StatNumber>
                  <StatHelpText color={getRatioColor(ratio)} fontSize={isMobile ? "xs" : "sm"}>
                    {getRatioText(ratio)}
                  </StatHelpText>
                  <Progress
                    value={ratio * 50}
                    max={100}
                    colorScheme={getRatioColor(ratio).split('.')[0]}
                    borderRadius="full"
                    height={isMobile ? "6px" : "8px"}
                    mt={2}
                  />
                </Stat>
              </VStack>
            </Box>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack spacing={isMobile ? 6 : 8} align="stretch">
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
                  Follow these steps to calculate your risk/reward ratio:
                </Text>
                <Flex align="center">
                  <Icon as={BarChart2} mr={4} color="purple.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>Enter your entry price</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={TrendingDown} mr={4} color="red.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>Set your stop loss price</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={TrendingUp} mr={4} color="green.500" boxSize={isMobile ? 5 : 6} />
                  <Text fontSize={isMobile ? "sm" : "md"}>Define your take profit price</Text>
                </Flex>
                <Text fontSize={isMobile ? "sm" : "md"} color={textColor}>
                  The calculator will automatically compute the risk/reward ratio based on these parameters. A higher ratio indicates a more favorable trade setup.
                </Text>
                <Text fontSize={isMobile ? "xs" : "sm"} fontStyle="italic" color={textColor}>
                  Tip: Aim for a risk/reward ratio of at least 1:2 for better long-term profitability.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

