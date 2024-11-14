// pages/Home.js
import React from 'react';
import { Box, Button, Container, Heading, Text, SimpleGrid , Flex} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronRight, BarChart2, BookOpen, Users, } from "lucide-react"

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="1200px">
          <Heading as="h1" size="2xl" mb={4}>
            Master Forex Trading with Forex Academy
          </Heading>
          <Text fontSize="xl" mb={8}>
            Expert-led courses, real-time analysis, and a supportive community to guide your forex journey.
          </Text>
          <Button as={RouterLink} to="/enrollment" size="lg" colorScheme="teal" justifyContent="center">
            Start Your Journey
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Container>
      </Box>

      {/* Overview Section */}
      <Container maxW="1200px" py={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Welcome to Forex Academy
        </Heading>
        <Text fontSize="lg" mb={8}>
          At Forex Academy, we're committed to providing top-tier education in forex trading. Our mission is to empower traders of all levels with the knowledge, skills, and tools needed to succeed in the dynamic world of foreign exchange markets.
        </Text>
      </Container>

      {/* Benefits Section */}
      <Box bg="gray.100" py={16}>
        <Container maxW="1200px">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Why Choose Forex Academy?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {[
              { title: 'Expert-Led Courses', description: 'Learn from industry professionals with years of trading experience.' },
              { title: 'Real-Time Analysis', description: 'Access up-to-date market insights and trading strategies.' },
              { title: 'Community', description: 'Join a network of traders to share ideas and experiences.' },
            ].map((benefit, index) => (
              <Box key={index} bg="white" p={6} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="md" mb={4}>
                  <Flex gap="2" direction="row" justify="start" align="center">
                    {index === 0 && <BookOpen className="h-6 w-6 mr-2" /> }
                    {index === 1 && <BarChart2 className="h-6 w-6 mr-2" /> }
                    {index === 2 && <Users className="h-6 w-6  mr-2" /> }
                    {benefit.title}
                  </Flex>
                </Heading>
                <Text>{benefit.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxW="1200px" py={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Student Testimonials
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {[
            { name: 'John Doe', text: 'Forex Academy transformed my trading skills. The courses are comprehensive and the instructors are top-notch.' },
            { name: 'Jane Smith', text: "'I've tried other forex courses, but none compare to the quality of education I received at Forex Academy.'" },
          ].map((testimonial, index) => (
            <Box key={index} p={6} borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontStyle="italic" mb={4}>
                "{testimonial.text}"
              </Text>
              <Text fontWeight="bold">- {testimonial.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box bg="blue.600" color="white" py={16}>
        <Container maxW="1200px" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Start Your Forex Journey?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Join Forex Academy today and take the first step towards mastering forex trading.
          </Text>
          <Button as={RouterLink} to="/enrollment" size="lg" colorScheme="teal">
            Enroll Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;