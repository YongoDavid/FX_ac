import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Input,
  Select,
  Button,
  useToast,
  SimpleGrid,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Flex,
  Icon,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { User, Mail, BookOpen, CreditCard, AlertCircle } from 'lucide-react';

function Enrollment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    paymentMethod: '',
  });

  const toast = useToast();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: 'Enrollment Successful',
      description: "We've received your enrollment. Welcome to Forex Academy!",
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
    setFormData({ name: '', email: '', course: '', paymentMethod: '' });
  };

  return (
    <Box bg={bgColor} minHeight="100vh" py={16}>
      <Container maxW="1200px">
        <VStack spacing={12} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" color={headingColor} mb={4}>
              Enroll for Mentorship
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Take the first step towards mastering forex trading
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg={cardBg}
              p={8}
              borderRadius="lg"
              boxShadow="xl"
            >
              <VStack spacing={6} align="stretch">
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={User} color="gray.300" />
                    </InputLeftElement>
                    <Input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Enter your name"
                    />
                  </InputGroup>
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={Mail} color="gray.300" />
                    </InputLeftElement>
                    <Input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Enter your email"
                    />
                  </InputGroup>
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Select Course</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      {/* <Icon as={BookOpen} color="gray.300" /> */}
                    </InputLeftElement>
                    <Select 
                      name="course" 
                      value={formData.course} 
                      onChange={handleChange} 
                      placeholder="Select a plan"
                    >
                      <option value="Monthly">Monthly Plan</option>
                      <option value="3 Months">3 Months Plan</option>
                      <option value="6 Months">6 Months Plan</option>
                      <option value="Yearly">Yearly Plan</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Payment Method</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      {/* <Icon as={CreditCard} color="gray.300" /> */}
                    </InputLeftElement>
                    <Select 
                      name="paymentMethod" 
                      value={formData.paymentMethod} 
                      onChange={handleChange} 
                      placeholder="Select payment method"
                    >
                      <option value="credit-card">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="crypto">Cryptocurrency</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                
                <Button type="submit" colorScheme="blue" size="lg">
                  Enroll Now
                </Button>
              </VStack>
            </Box>

            <Box>
              <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md" mb={6}>
                <Flex align="center" mb={4}>
                  <Icon as={AlertCircle} color="blue.500" mr={2} />
                  <Heading as="h2" size="md" color={headingColor}>
                    Why Choose Us
                  </Heading>
                </Flex>
                <VStack align="start" spacing={3}>
                  <Text color={textColor}>✓ Expert-led live trading sessions</Text>
                  <Text color={textColor}>✓ Comprehensive course materials</Text>
                  <Text color={textColor}>✓ 24/7 community support</Text>
                  <Text color={textColor}>✓ Regular market analysis updates</Text>
                </VStack>
              </Box>

              <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
                <Flex align="center" mb={4}>
                  <Icon as={AlertCircle} color="green.500" mr={2} />
                  <Heading as="h2" size="md" color={headingColor}>
                    Special Offers
                  </Heading>
                </Flex>
                <VStack align="start" spacing={4}>
                  <Flex align="center">
                    <Badge colorScheme="green" fontSize="0.8em" mr={2}>
                      20% OFF
                    </Badge>
                    <Text color={textColor}>Enroll in multiple courses</Text>
                  </Flex>
                  <Flex align="center">
                    <Badge colorScheme="purple" fontSize="0.8em" mr={2}>
                      10% OFF
                    </Badge>
                    <Text color={textColor}>Use code EARLYBIRD</Text>
                  </Flex>
                </VStack>
              </Box>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

export default Enrollment;