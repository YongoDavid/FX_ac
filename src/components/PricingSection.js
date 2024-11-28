import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';

const PricingCard = ({ name, price, duration, description, features, isRecommended, isMobile }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue(isRecommended ? 'blue.500' : 'gray.200', isRecommended ? 'blue.500' : 'gray.600')

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      borderColor={borderColor}
      p={isMobile ? 4 : 6}
      backgroundColor={bgColor}
      boxShadow={isRecommended ? 'lg' : 'base'}
      position="relative"
      transition="transform 0.3s"
      _hover={{ transform: 'translateY(-5px)', borderColor: 'blue.500' }}
      width={isMobile ? "100%" : "auto"}
    >
      {isRecommended && (
        <Text
          position="absolute"
          top="-3"
          right="-3"
          bg="blue.500"
          color="white"
          fontSize="sm"
          fontWeight="bold"
          px={3}
          py={1}
          borderRadius="full"
        >
          Recommended
        </Text>
      )}
      <VStack spacing={3} align="stretch">
        <Heading as="h3" size={isMobile ? "md" : "lg"}>
          {name}
        </Heading>
        <Text fontSize={isMobile ? "xs" : "sm"} color="gray.500">
          {description}
        </Text>
        <Flex align="baseline" mt={2}>
          <Text fontSize={isMobile ? "4xl" : "5xl"} fontWeight="bold">
            ${price}
          </Text>
          <Text fontSize={isMobile ? "lg" : "xl"} fontWeight="medium" color="gray.500">
            /{duration}
          </Text>
        </Flex>
        <List spacing={3} mt={6} mb={6}>
          {features.map((feature, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <Icon as={Check} color="green.500" mr={2} />
              <Text fontSize={isMobile ? "sm" : "md"}>{feature}</Text>
            </ListItem>
          ))}
        </List>
        <Button
          as={RouterLink}
          to="/enrollment"
          colorScheme={isRecommended ? 'blue' : 'blue'}
          size={isMobile ? "md" : "lg"}
          w="full"
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  )
}

export default function PricingSection() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  const isMobile = useBreakpointValue({ base: true, md: false })
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0)

  const plans = [
    {
      name: "Monthly",
      price: 99,
      duration: "month",
      description: "Perfect for short-term learners",
      features: [
        "Daily market analysis",
        "Basic trading strategies",
        "Weekly group coaching sessions",
        "Access to community forum",
      ],
      isRecommended: false,
    },
    {
      name: "3 Months",
      price: 249,
      duration: "3 months",
      description: "Ideal for committed beginners",
      features: [
        "Everything in Monthly plan",
        "Advanced trading techniques",
        "1 personal coaching session/month",
        "Risk management workshop",
      ],
      isRecommended: true,
    },
    {
      name: "6 Months",
      price: 449,
      duration: "6 months",
      description: "Best for serious traders",
      features: [
        "Everything in 3 Months plan",
        "Expert-level trading strategies",
        "2 personal coaching sessions/month",
        "Access to proprietary trading tools",
      ],
      isRecommended: false,
    },
    {
      name: "Yearly",
      price: 799,
      duration: "year",
      description: "For professional development",
      features: [
        "Everything in 6 Months plan",
        "Unlimited personal coaching",
        "Exclusive mastermind group access",
        "Annual trading retreat invitation",
      ],
      isRecommended: false,
    },
  ]

  const handlePrevPlan = () => {
    setCurrentPlanIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : plans.length - 1))
  }

  const handleNextPlan = () => {
    setCurrentPlanIndex((prevIndex) => (prevIndex < plans.length - 1 ? prevIndex + 1 : 0))
  }

  return (
    <Box py={16} bg={bgColor}>
      <Container maxW="1300px">
        <VStack as="section" textAlign="center" mb={10}>
          <Heading as="h2" size="xl" mb={1} textAlign="center" bgGradient={bgGradient} bgClip="text">
            Mentorship Plans
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Choose a plan that fits your trading journey
          </Text>
        </VStack>
        {isMobile ? (
          <Box>
            <PricingCard {...plans[currentPlanIndex]} isMobile={true} />
            <Flex justifyContent="center" alignItems="center"x mt={4}>
              <IconButton
                icon={<ChevronLeft />}
                onClick={handlePrevPlan}
                aria-label="Previous plan"
                variant="ghost"
              />
              <Text fontWeight="bold" mx={4}>
                {currentPlanIndex + 1} of {plans.length}
              </Text>
              <IconButton
                icon={<ChevronRight />}
                onClick={handleNextPlan}
                aria-label="Next plan"
                variant="ghost"
              />
            </Flex>
          </Box>
        ) : (
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 6, lg: 10 }}
            justify="center"
            align="stretch"
          >
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} isMobile={false} />
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  )
}

