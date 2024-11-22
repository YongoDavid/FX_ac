import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Icon,
  useColorModeValue,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { History, Users, Target, Award } from 'lucide-react';
import tradingIMAGE from '../assets/tradingIMAGE.jpg';

const teamMembers = [
  { name: 'Noel Reys', role: 'Founder & Lead Instructor', bio: 'Noel has over 5 years of experience in forex trading and has trained hundreds of successful traders.' },
  { name: 'Noel Reys', role: 'Technical Analysis Expert', bio: 'Noel specializes in advanced chart patterns and has developed several trading strategies.' },
  { name: 'Noel Reys', role: 'Risk Management Specialist', bio: 'Noel focuses on teaching traders how to protect their capital and manage risk effectively.' },
];

const milestones = [
  { year: 2022, event: 'Noel Reys Academy founded' },
  { year: 2023, event: 'Launched advanced technical analysis course' },
  { year: 2024, event: 'Reached 1000+ students milestone' },
];

export default function About() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');

  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Container maxW="1200px" py={16}>
        <VStack spacing={16} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4} textAlign="center" bgGradient={bgGradient} bgClip="text">
              About Noel Reys Academy
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Empowering traders with knowledge and skills since 2022
            </Text>
          </Box>
          
          {/* Academy History */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Heading as="h2" size="xl" mb={4} bgGradient={bgGradient} bgClip="text">
                Our Story
              </Heading>
              <Text fontSize="lg" color={textColor} mb={4}>
                Noel Reys Academy was founded in 2022 with a mission to provide high-quality, accessible forex education to traders around the world. What started with just a passionate trader has grown into a large community of forex enthusiasts.
              </Text>
              <Text fontSize="lg" color={textColor} mb={4}>
                Over the years, we've helped hundreds of students achieve their trading goals, from beginners taking their first steps in the forex market to experienced traders refining their strategies.
              </Text>
              <Text fontSize="lg" color={textColor}>
                Our commitment to excellence in education and our focus on practical, results-driven training has made Noel Reys Academy a leader in the field of forex education.
              </Text>
            </Box>
            <Image
              src={tradingIMAGE}
              alt="Forex Trading Chart"
              borderRadius="lg"
              boxShadow="lg"
              width="600%"
              height="400"
              objectFit="cover"
            />
          </SimpleGrid>

          {/* Milestones */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Our Journey
            </Heading>
            <Flex justifyContent="space-between" alignItems="center" position="relative">
              {milestones.map((milestone, index) => (
                <VStack key={index} align="center" zIndex={1}>
                  <Box
                    // bg={cardBg}
                    p={2}
                    borderRadius="full"
                    // boxShadow="md"
                    mb={2}
                  >
                    <Icon as={History} boxSize={8} color="blue.500" />
                  </Box>
                  <Badge colorScheme="blue" fontSize="md" mb={2}>
                    {milestone.year}
                  </Badge>
                  <Text fontWeight="bold" textAlign="center" color={headingColor}>
                    {milestone.event}
                  </Text>
                </VStack>
              ))}
              {/* <Box
                position="absolute"
                height="2px"
                bg="blue.500"
                left="10%"
                right="10%"
                top="22px"
                zIndex={0}
              /> */}
            </Flex>
          </Box>

          {/* Meet the Team */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Meet Our Team
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {teamMembers.map((member, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
                >
                  <VStack align="center" spacing={4}>
                    <Image
                      src={`https://via.placeholder.com/300x300?text=${member.name}`} 
                      alt={member.name} 
                      borderRadius="full" 
                      boxSize="200px"
                    />
                    <Heading as="h3" size="lg" color={headingColor}>
                      {member.name}
                    </Heading>
                    <Text fontWeight="bold" color="blue.500">
                      {member.role}
                    </Text>
                    <Text color={textColor} textAlign="center">{member.bio}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Why Choose Us */}
          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Why Choose Noel Reys Academy
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                { icon: Users, title: 'Expert Instructors', description: 'Learn from experienced traders who have a proven track record in the forex market.' },
                { icon: Target, title: 'Practical Approach', description: 'Our courses focus on real-world trading scenarios and actionable strategies.' },
                { icon: Award, title: 'Proven Results', description: 'Join hundreds of successful traders who have transformed their trading with our education.' },
              ].map((feature, index) => (
                <VStack
                  key={index}
                  bg={cardBg}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  spacing={4}
                  align="start"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
                >
                  <Icon as={feature.icon} boxSize={10} color="blue.500" />
                  <Heading as="h3" size="md" color={headingColor}>
                    {feature.title}
                  </Heading>
                  <Text color={textColor}>{feature.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}