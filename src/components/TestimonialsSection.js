import React from 'react';
import { Box, Container, Heading, Text, Flex, Avatar, Icon, useColorModeValue, keyframes } from '@chakra-ui/react';
import { Quote, Star } from 'lucide-react';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Forex Trader',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Forex Academy transformed my trading skills. The courses are comprehensive and the instructors are top-notch.',
    rating: 5,
  },
  {
    name: 'Sarah Lee',
    role: 'Day Trader',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: "I have tried other forex courses, but none compare to the quality of education I received at Forex Academy.",
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Crypto Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: "The blend of forex and crypto knowledge here is unparalleled. It's exactly what I needed for modern trading.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
    const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
    );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const quoteColor = useColorModeValue('blue.400', 'blue.300');

  return (
    <Box py={16}>
      <Container maxW="1000px" py={10}>
        <Heading as="h2" size="xl" mb={10} textAlign="center" bgGradient={bgGradient} bgClip="text">
          What Our Students Say
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center" gap={8}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              maxW="md"
              w="full"
              bg={cardBg}
              boxShadow="xl"
              rounded="lg"
              p={6}
              textAlign="center"
              position="relative"
              zIndex={1}
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '2xl',
              }}
              animation={`${float} ${3 + index}s ease-in-out infinite`}
            >
              <Avatar
                size="xl"
                src={testimonial.avatar}
                alt={testimonial.name}
                mb={4}
                pos="relative"
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: 'green.300',
                  border: '2px solid white',
                  rounded: 'full',
                  pos: 'absolute',
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading as="h3" size="lg" fontWeight="bold" mb={2}>
                {testimonial.name}
              </Heading>
              <Text fontSize="md" color={textColor} fontWeight="medium" mb={4}>
                {testimonial.role}
              </Text>
              <Box position="relative" mb={4}>
                <Icon
                  as={Quote}
                  w={8}
                  h={8}
                  color={quoteColor}
                  position="absolute"
                  top="-20px"
                  left="-10px"
                  opacity={0.25}
                />
                <Text fontSize="md" fontStyle="italic" color={textColor}>
                  "{testimonial.text}"
                </Text>
              </Box>
              <Flex justify="center" mt={4}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} as={Star} w={4} h={4} color="yellow.400" />
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}