import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Button, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { Play, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const videos = [
  {
    title: 'Understanding Support and Resistance',
    duration: '15:30',
    views: '10K',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    url: 'https://www.youtube.com/watch?v=example1',
  },
  {
    title: 'Mastering Support and Resistance Levels',
    duration: '12:45',
    views: '8.5K',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    url: 'https://www.youtube.com/watch?v=example2',
  },
  {
    title: 'Drawing Trend Lines Like a Pro',
    duration: '18:20',
    views: '15K',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    url: 'https://www.youtube.com/watch?v=example3',
  },
  {
    title: 'Advanced Trend Line Techniques',
    duration: '20:15',
    views: '12K',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    url: 'https://www.youtube.com/watch?v=example4',
  },
  {
    title: 'Combining Trend Lines with Indicators',
    duration: '16:40',
    views: '9.8K',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    url: 'https://www.youtube.com/watch?v=example5',
  },
  {
    title: 'Support and Resistance in Ranging Markets',
    duration: '14:55',
    views: '11K',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    url: 'https://www.youtube.com/watch?v=example6',
  },
];

export default function TradingVideosSection() {
    const bgGradient = useColorModeValue(
      'linear(to-r, teal.500, blue.500)',
      'linear(to-r, teal.200, blue.200)',
    );

    const cardBg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box py={16} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="1300px">
        <Heading as="h2" size="xl" mb={2} textAlign="center" bgGradient={bgGradient} bgClip="text">
          Free Trading Videos
        </Heading>
        
        <Text fontSize="lg" textAlign="center" mb={8} color={textColor}>
          Enhance your trading skills with our expert-led video tutorials
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {videos.map((video, index) => (
            <Box
              key={index}
              bg={cardBg}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl',
              }}
            >
              <Box position="relative">
                <Box
                  bgImage={`url(${video.image})`}
                  bgSize="cover"
                  bgPosition="center"
                  h="200px"
                >
                  <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0,0,0,0.4)"
                    transition="all 0.3s"
                    opacity="0"
                    _groupHover={{ opacity: 1 }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon as={Play} w={16} h={16} color="white" />
                  </Flex>
                </Box>
                <Flex
                  position="absolute"
                  bottom="2"
                  right="2"
                  bg="rgba(0,0,0,0.6)"
                  color="white"
                  px={2}
                  py={1}
                  borderRadius="md"
                  fontSize="sm"
                  alignItems="center"
                >
                  <Icon as={Clock} w={4} h={4} mr={1} />
                  {video.duration}
                </Flex>
              </Box>
              <Box p={4}>
                <Heading as="h3" size="md" mb={2} noOfLines={2}>
                  {video.title}
                </Heading>
                <Flex justifyContent="space-between" alignItems="center" mb={4}>
                  <Flex alignItems="center">
                    <Icon as={TrendingUp} w={4} h={4} mr={1} color="green.500" />
                    <Text fontSize="sm" color={textColor}>
                      {video.views} views
                    </Text>
                  </Flex>
                </Flex>
                <Button
                  as={Link}
                  to={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="blue"
                  size="sm"
                  width="full"
                  leftIcon={<Play size={16} />}
                >
                  Watch Now
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}