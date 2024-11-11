// pages/About.js
import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack } from '@chakra-ui/react';

const teamMembers = [
  { name: 'John Smith', role: 'Founder & Lead Instructor', bio: 'John has over 15 years of experience in forex trading and has trained thousands of successful traders.' },
  { name: 'Jane Doe', role: 'Technical Analysis Expert', bio: 'Jane specializes in advanced chart patterns and has developed several proprietary trading strategies.' },
  { name: 'Mike Johnson', role: 'Risk Management Specialist', bio: 'Mike focuses on teaching traders how to protect their capital and manage risk effectively.' },
];

function About() {
  return (
    <Box>
      <Container maxW="1200px" py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          About Forex Academy
        </Heading>
        
        {/* Academy History */}
        <Box mb={16}>
          <Heading as="h2" size="xl" mb={4}>
            Our Story
          </Heading>
          <Text fontSize="lg" mb={4}>
            Forex Academy was founded in 2010 with a mission to provide high-quality, accessible forex education to traders around the world. What started as a small group of passionate traders has grown into a global community of forex enthusiasts.
          </Text>
          <Text fontSize="lg" mb={4}>
            Over the years, we've helped thousands of students achieve their trading goals, from beginners taking their first steps in the forex market to experienced traders refining their strategies.
          </Text>
          <Text fontSize="lg">
            Our commitment to excellence in education and our focus on practical, results-driven training has made Forex Academy a leader in the field of forex education.
          </Text>
        </Box>

        {/* Meet the Team */}
        <Box>
          <Heading as="h2" size="xl" mb={8}>
            Meet Our Team
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {teamMembers.map((member, index) => (
              <VStack key={index} align="start" spacing={4}>
                <Image 
                  src={`https://via.placeholder.com/300x300?text=${member.name}`} 
                  alt={member.name} 
                  borderRadius="full" 
                  boxSize="200px"
                />
                <Heading as="h3" size="lg">
                  {member.name}
                </Heading>
                <Text fontWeight="bold" color="blue.600">
                  {member.role}
                </Text>
                <Text>{member.bio}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

export default About;