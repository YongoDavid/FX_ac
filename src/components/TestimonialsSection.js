import React, { useRef, useState, useEffect } from 'react';
import { Box, Container, Heading, Text, Flex, Icon, useColorModeValue, keyframes, IconButton } from '@chakra-ui/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const testimonials = [
  {
    name: 'Alex',
    role: 'Student',
    text: 'This program transformed my trading skills. The courses are comprehensive and the instructors are top-notch.',
    rating: 5,
  },
  {
    name: 'Sarah',
    role: 'Student',
    text: "I have tried other forex courses, but none compare to the quality of education I received at Noel reys Academy.",
    rating: 5,
  },
  {
    name: 'Michael',
    role: 'Student',
    text: " The forex knowledge here is unparalleled. It's exactly what I needed for modern trading.",
    rating: 5,
  },
  {
    name: 'Johnson',
    role: 'Student',
    text: 'These courses opened up a whole new world of possibilities for me. Highly recommended!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)',
  );

  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const quoteColor = useColorModeValue('blue.400', 'blue.300');

  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = 30; // Faster animation (30 seconds)

      const styleSheet = document.styleSheets[0];
      const keyframesRule = `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${scrollWidth / 2}px); }
        }
      `;
      styleSheet.insertRule(keyframesRule, styleSheet.cssRules.length);

      scrollContainer.style.animation = `slide ${animationDuration}s linear infinite`;

      return () => {
        styleSheet.deleteRule(styleSheet.cssRules.length - 1);
      };
    }
  }, []);

  return (
    <Box py={10} bg={bgColor} overflow="hidden">
      <Container maxW="1300px" py={10}>
        <Heading as="h2" size="xl" mb={10} textAlign="center" bgGradient={bgGradient} bgClip="text">
          What Our Students Say
        </Heading>
        <Box position="relative" height="400px">
          <Flex
            ref={scrollRef}
            position="absolute"
            width="200%"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Box
                key={index}
                minW="300px"
                maxW="300px"
                w="full"
                mx={4}
                bg={cardBg}
                boxShadow="xl"
                rounded="lg"
                p={6}
                textAlign="center"
              >
                <Heading as="h3" size="md" fontWeight="bold" mb={2}>
                  {testimonial.name}
                </Heading>
                <Text fontSize="sm" color={textColor} fontWeight="medium" mb={4}>
                  {testimonial.role}
                </Text>
                <Box position="relative" mb={4}>
                  <Icon
                    as={Quote}
                    w={6}
                    h={6}
                    color={quoteColor}
                    position="absolute"
                    top="-15px"
                    left="-5px"
                    opacity={0.25}
                  />
                  <Text fontSize="sm" fontStyle="italic" color={textColor}>
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
        </Box>
      </Container>
    </Box>
  );
}

