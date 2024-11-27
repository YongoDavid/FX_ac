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
  Stack,
  useBreakpointValue,
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

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Container maxW="1300px" py={16}>
        <VStack spacing={isMobile ? 8 : 16} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size={isMobile ? "xl" : "2xl"} mb={4} bgGradient={bgGradient} bgClip="text">
              About Noel Reys Academy
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={textColor}>
              Empowering traders with knowledge and skills since 2022
            </Text>
          </Box>
          
          {/* Academy History */}
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center">
            <Box flex={1}>
              <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8} textAlign="center" bgGradient={bgGradient} bgClip="text">
                Our Story
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor} mb={4}>
                Noel Reys Academy was founded in 2022 with a mission to provide high-quality, accessible forex education to traders around the world. What started with just a passionate trader has grown into a large community of forex enthusiasts.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor} mb={4}>
                Over the years, we've helped hundreds of students achieve their trading goals, from beginners taking their first steps in the forex market to experienced traders refining their strategies.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
                Our commitment to excellence in education and our focus on practical, results-driven training has made Noel Reys Academy a leader in the field of forex education.
              </Text>
            </Box>
            <Box flex={1}>
              <Image
                src={tradingIMAGE}
                alt="Forex Trading Chart"
                borderRadius="lg"
                boxShadow="lg"
                width="100%"
                height={{ base: "200px", md: "400px" }}
                objectFit="cover"
              />
            </Box>
          </Stack>

          {/* Milestones */}
          <Box>
            <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Our Journey
            </Heading>
            {isMobile ? (
              <VStack spacing={6} align="stretch">
                {milestones.map((milestone, index) => (
                  <Box key={index} bg={cardBg} p={4} borderRadius="lg" boxShadow="md">
                    <Flex align="center">
                      <Icon as={History} boxSize={6} color="blue.500" mr={4} />
                      <VStack align="start" spacing={1}>
                        <Badge colorScheme="blue" fontSize="sm">
                          {milestone.year}
                        </Badge>
                        <Text fontWeight="bold" color={headingColor}>
                          {milestone.event}
                        </Text>
                      </VStack>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            ) : (
              <Flex justifyContent="space-between" alignItems="center" position="relative">
                {milestones.map((milestone, index) => (
                  <VStack key={index} align="center" zIndex={1}>
                    <Box p={2} borderRadius="full" mb={2}>
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
              </Flex>
            )}
          </Box>

          {/* Meet the Team */}
          <Box>
            <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8} textAlign="center" bgGradient={bgGradient} bgClip="text">
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
                      boxSize={{ base: "150px", md: "200px" }}
                    />
                    <Heading as="h3" size={{ base: "md", md: "lg" }} color={headingColor}>
                      {member.name}
                    </Heading>
                    <Text fontWeight="bold" color="blue.500">
                      {member.role}
                    </Text>
                    <Text color={textColor} textAlign="center" fontSize={{ base: "sm", md: "md" }}>{member.bio}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Why Choose Us */}
          <Box>
            <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={8} textAlign="center" bgGradient={bgGradient} bgClip="text">
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
                  <Icon as={feature.icon} boxSize={{ base: 8, md: 10 }} color="blue.500" />
                  <Heading as="h3" size={{ base: "sm", md: "md" }} color={headingColor}>
                    {feature.title}
                  </Heading>
                  <Text color={textColor} fontSize={{ base: "sm", md: "md" }}>{feature.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}