// pages/Courses.js
import React, { useState } from 'react';
import { Box, Container, Heading, SimpleGrid, Input, Select, Button, Text, Image, Badge, VStack } from '@chakra-ui/react';

const courses = [
  { id: 1, title: 'Forex Fundamentals', level: 'Beginner', duration: '4 weeks', price: 199, instructor: 'John Smith' },
  { id: 2, title: 'Technical Analysis Mastery', level: 'Intermediate', duration: '6 weeks', price: 299, instructor: 'Jane Doe' },
  { id: 3, title: 'Advanced Trading Strategies', level: 'Advanced', duration: '8 weeks', price: 399, instructor: 'Mike Johnson' },
  // Add more courses as needed
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('');

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterLevel === '' || course.level === filterLevel)
  );

  return (
    <Box>
      <Container maxW="1200px" py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          Courses
        </Heading>
        
        {/* Search and Filter */}
        <Box mb={8}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <Input 
              placeholder="Search courses" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select 
              placeholder="Filter by level" 
              value={filterLevel} 
              onChange={(e) => setFilterLevel(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Select>
            <Button onClick={() => { setSearchTerm(''); setFilterLevel(''); }}>
              Clear Filters
            </Button>
          </SimpleGrid>
        </Box>

        {/* Course Listings */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredCourses.map(course => (
            <Box key={course.id} borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={`https://via.placeholder.com/300x200?text=${course.title}`} alt={course.title} />
              <Box p={6}>
                <Badge colorScheme="blue" mb={2}>{course.level}</Badge>
                <Heading as="h3" size="lg" mb={2}>
                  {course.title}
                </Heading>
                <Text mb={4}>Instructor: {course.instructor}</Text>
                <Text mb={4}>Duration: {course.duration}</Text>
                <Text mb={4}>Price: ${course.price}</Text>
                <Button colorScheme="blue">Enroll Now</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Learning Paths */}
      <Box bg="gray.100" py={16}>
        <Container maxW="1200px">
          <Heading as="h2" size="xl" mb={8}>
            Learning Paths / Road Map
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
              <VStack key={level} bg="white" p={6} borderRadius="md" boxShadow="md" align="stretch">
                <Heading as="h3" size="lg" mb={4}>
                  {level} Path
                </Heading>
                <Text mb={4}>
                  {level === 'Beginner' ? 'Start your forex journey here.' :
                   level === 'Intermediate' ? 'Enhance your trading skills.' :
                   'Master advanced forex strategies.'}
                </Text>
                <Button colorScheme="blue" mt="auto">View Path</Button>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Demo Lessons */}
      {/* <Container maxW="1200px" py={16}>
        <Heading as="h2" size="xl" mb={8}>
          Free Demo Lessons
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {['Introduction to Forex', 'Basic Chart Analysis'].map(lesson => (
            <Box key={lesson} borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={`https://via.placeholder.com/300x200?text=${lesson}`} alt={lesson} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={4}>
                  {lesson}
                </Heading>
                <Button colorScheme="blue">Watch Free Lesson</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container> */}
    </Box>
  );
}

export default Courses;