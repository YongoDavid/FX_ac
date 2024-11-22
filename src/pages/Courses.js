import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Input,
  Select,
  Button,
  Text,
  Image,
  Badge,
  VStack,
  HStack,
  useColorModeValue,
  Icon,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Search, Clock, DollarSign, User, BookOpen, Filter, X } from 'lucide-react';

const courses = [
  { id: 1, title: 'Forex Fundamentals', level: 'Beginner', duration: '4 weeks', price: 'Free', instructor: 'Noel Reys' },
  { id: 2, title: 'Technical Analysis Mastery', level: 'Intermediate', duration: '6 weeks', price: 'Free', instructor: 'Noel Reys' },
  { id: 3, title: 'Trading Strategies', level: 'Advanced', duration: '8 weeks', price: 'Free', instructor: 'Noel Reys' },
  { id: 4, title: 'Trading Concepts', level: 'Intermediate', duration: '5 weeks',price: 'Free', instructor: 'Noel Reys' },
  { id: 5, title: 'Risk Management in Forex', level: 'Beginner', duration: '3 weeks', price: 'Free', instructor: 'Noel Reys' },
  { id: 6, title: 'Trading Psychology', level: 'Beginner', duration: '4 weeks', price: 'Free', instructor: 'Noel Reys' },
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('');

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterLevel === '' || course.level === filterLevel)
  );

  const cardBg = useColorModeValue('white', 'gray.800');
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.800', 'white');
  

  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Container maxW="1200px" py={16}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" mb={1} textAlign="center" bgGradient={bgGradient} bgClip="text">
            Explore Our Forex Courses
          </Heading>
          
          {/* Search and Filter */}
          <Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={Search} color="gray.300" />
                </InputLeftElement>
                <Input 
                  placeholder="Search courses" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
              <Select 
                placeholder="Filter by level" 
                value={filterLevel} 
                onChange={(e) => setFilterLevel(e.target.value)}
                icon={<Icon as={Filter} />}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </Select>
              <Button 
                leftIcon={<Icon as={X} />}
                onClick={() => { setSearchTerm(''); setFilterLevel(''); }}
                colorScheme="blue"
              >
                Clear Filters
              </Button>
            </SimpleGrid>
          </Box>

          {/* Course Listings */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredCourses.map(course => (
              <Box 
                key={course.id} 
                borderRadius="lg" 
                overflow="hidden" 
                bg={cardBg}
                boxShadow="md"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
              >
                <Image 
                  src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(course.title)}`} 
                  alt={course.title} 
                  height="200px" 
                  width="100%" 
                  objectFit="cover" 
                />
                <Box p={6}>
                  <Badge colorScheme="blue" mb={2}>{course.level}</Badge>
                  <Heading as="h3" size="md" mb={2} color={headingColor}>
                    {course.title}
                  </Heading>
                  <VStack align="stretch" spacing={2} mb={4}>
                    <HStack>
                      <Icon as={User} color="blue.500" />
                      <Text color={textColor}>{course.instructor}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={Clock} color="blue.500" />
                      <Text color={textColor}>{course.duration}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={DollarSign} color="blue.500" />
                      <Text color={textColor}>{course.price}</Text>
                    </HStack>
                  </VStack>
                  <Button colorScheme="blue" width="full" leftIcon={<Icon as={BookOpen} />}>
                   Download Now
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}