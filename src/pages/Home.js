import React from 'react';
import { Box, Button, Container, Heading, Text, SimpleGrid, Flex, useColorModeValue, keyframes } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronRight, BarChart2, BookOpen, Users, TrendingUp } from "lucide-react";
import fxChart from '../assets/fxChart1.jpg';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TradingVideosSection from '../components/TradingVideosSection';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

function Home() {
  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );
  const cardBg = useColorModeValue('white', 'gray.700');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.600');

  return (
    <Box>
      {/* Hero Section */}
      <Box
      bgGradient={bgGradient}
      color="white"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bg="gray.900"
    >
      <Container maxW="1300px" zIndex={1}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={10}
        >
          <Box flex={1} maxW={{ base: '100%', lg: '50%' }}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="bold"
              mb={6}
              // made this change 
              textAlign={{base: 'center' , md:'start'}}
              lineHeight="1.2"
              textShadow="2px 2px 4px rgba(0,0,0,0.4)"
            >
              Master Forex Trading with Noel Reys
            </Heading>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              mb={8}
              textShadow="1px 1px 2px rgba(0,0,0,0.2)"
              textAlign={{base: 'center' , md:'start'}}
            >
              Expert-led courses, real-time analysis, and a supportive community to guide your forex journey.
            </Text>
          <Button
            as={RouterLink}
            to="/enrollment"
            size={{ base: "md", md: "lg" }}
            height={{ base: "50px", md: "60px" }}
            px={{ base: 6, md: 8 }}
            fontSize={{ base: "lg", md: "xl" }}
            colorScheme="teal"
            rightIcon={<ChevronRight size={20} />}
              _hover={{
            transform: "translateY(-2px)",
            boxShadow: "xl",
            }}
            transition="all 0.3s"
            mx={{ base: "auto", md: 0 }}
            display={{ base: "flex", md: "inline-flex" }}
          >
          Start Your Forex Journey Here
          </Button>
          </Box>
          <Box
            flex={1}
            maxW={{ base: '100%', lg: '50%' }}
            position="relative"
          >
            <Box
              animation={`${float} 3s ease-in-out infinite`}
              transform="perspective(1000px) rotateY(-15deg)"
              transition="transform 0.3s"
              _hover={{ transform: 'perspective(1000px) rotateY(0deg)' }}
            >
              <img
                src={fxChart}
                alt="Forex Chart"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                }}
              />
            </Box>
            <Box
              position="absolute"
              top="-20px"
              left="-20px"
              bg="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              borderRadius="full"
              p={2}
              animation={`${pulse} 2s infinite`}
              display={{ base: "none", md: "block" }}
            >
              <TrendingUp size={40}  color="white" />
            </Box>
            <Box
              position="absolute"
              bottom="-20px"
              right="-20px"
              bg="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              borderRadius="full"
              p={2}
              animation={`${pulse} 2s infinite 1s`}
              display={{ base: "none", md: "block" }}
            >
               <TrendingUp size={40} color="white" />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        opacity={0.05}
        zIndex={0}
        display={{ base: "none", md: "block" }}
      >
        <Flex>
          <BarChart2 size={700} />
          <BarChart2 size={700} />
        </Flex>
      </Box>
    </Box>

      {/* Benefits Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.800')} py={16}>
        <Container maxW="1300px">
          {/* Overview Section */}
          <Container maxW="1200px" py={10}>
            <Heading as="h2" size="xl" mb={5} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Welcome to Noel reys Academy
            </Heading>
            <Text fontSize="lg" mb={8} textAlign="center">
              At this Forex Academy, we're committed to providing top-tier education in forex trading. Our mission is to empower traders of all levels with the knowledge, skills, and tools needed to succeed in the dynamic world of foreign exchange markets.
            </Text>
          </Container>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {[
              { title: 'Expert-Led Courses', description: 'Learn from industry professionals with years of trading experience.', icon: BookOpen },
              { title: 'Real-Time Analysis', description: 'Access up-to-date market insights and trading strategies.', icon: BarChart2 },
              { title: 'Community', description: 'Join a network of traders to share ideas and experiences.', icon: Users },
            ].map((benefit, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                borderRadius="lg"
                boxShadow="xl"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                  bg: cardHoverBg,
                }}
              >
                <Flex direction="column" align="center" textAlign="center">
                  <Box
                    as={benefit.icon}
                    size={25}
                    color="teal.500"
                    mb={4}
                  />
                  <Heading as="h3" size="md" mb={4}>
                    {benefit.title}
                  </Heading>
                  <Text>{benefit.description}</Text>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      {/* {Videos Section} */}
      <TradingVideosSection/>

      {/* Pricing Section */}
      <PricingSection/>

      {/* Testimonials Section */}
      <TestimonialsSection/>
    </Box>
  );
}

export default Home;