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
  useBreakpointValue,
} from '@chakra-ui/react';
import { User, Mail, AlertCircle} from 'lucide-react';

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

  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  const isMobile = useBreakpointValue({ base: true, md: false });

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
    <Box bg={bgColor} minHeight="100vh">
      <Container maxW="1300px" py={16}>
        <VStack spacing={isMobile ? 8 : 16} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size={isMobile ? "xl" : "2xl"} mb={4} bgGradient={bgGradient} bgClip="text">
              Enroll for Mentorship
            </Heading>
            <Text fontSize={isMobile ? "lg" : "xl"} color={textColor}>
              Take the first step towards mastering forex trading
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={isMobile ? 6 : 10}>
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg={cardBg}
              p={isMobile ? 6 : 8}
              borderRadius="lg"
              boxShadow="xl"
            >
              <VStack spacing={isMobile ? 4 : 6} align="stretch">
                <FormControl isRequired>
                  <FormLabel fontSize={isMobile ? "sm" : "md"}>Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={User} color="gray.300" boxSize={isMobile ? 4 : 5} />
                    </InputLeftElement>
                    <Input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Enter your name"
                      size={isMobile ? "sm" : "md"}
                    />
                  </InputGroup>
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel fontSize={isMobile ? "sm" : "md"}>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={Mail} color="gray.300" boxSize={isMobile ? 4 : 5} />
                    </InputLeftElement>
                    <Input 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Enter your email"
                      size={isMobile ? "sm" : "md"}
                    />
                  </InputGroup>
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel fontSize={isMobile ? "sm" : "md"}>Select Course</FormLabel>
                  <InputGroup>
                    <Select 
                      name="course" 
                      value={formData.course} 
                      onChange={handleChange} 
                      placeholder="Select a plan"
                      size={isMobile ? "sm" : "md"}
                    >
                      <option value="Monthly">Monthly Plan ($99)</option>
                      <option value="3 Months">3 Months Plan ($249)</option>
                      <option value="6 Months">6 Months Plan ($449)</option>
                      <option value="Yearly">Yearly Plan ($799)</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel fontSize={isMobile ? "sm" : "md"}>Payment Method</FormLabel>
                  <InputGroup>
                    <Select 
                      name="paymentMethod" 
                      value={formData.paymentMethod} 
                      onChange={handleChange} 
                      placeholder="Select payment method"
                      size={isMobile ? "sm" : "md"}
                    >
                      <option value="credit-card">Credit Card</option>
                      <option value="paypal">Bank Transfer</option>
                      <option value="crypto">Cryptocurrency</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                
                <Button type="submit" colorScheme="blue" size={isMobile ? "md" : "lg"} w="full">
                  Enroll Now
                </Button>
              </VStack>
            </Box>

            <Box>
              <Box bg={cardBg} p={isMobile ? 4 : 6} borderRadius="lg" boxShadow="md" mb={6}>
                <Flex align="center" mb={isMobile ? 2 : 4}>
                  <Icon as={AlertCircle} color="blue.500" mr={2} boxSize={isMobile ? 5 : 6} />
                  <Heading as="h2" size={isMobile ? "sm" : "md"} color={headingColor}>
                    Why Choose Us
                  </Heading>
                </Flex>
                <VStack align="start" spacing={isMobile ? 2 : 3}>
                  <Text color={textColor} fontSize={isMobile ? "sm" : "md"}>✓ Expert-led live trading sessions</Text>
                  <Text color={textColor} fontSize={isMobile ? "sm" : "md"}>✓ Comprehensive course materials</Text>
                  <Text color={textColor} fontSize={isMobile ? "sm" : "md"}>✓ 24/7 community support</Text>
                  <Text color={textColor} fontSize={isMobile ? "sm" : "md"}>✓ Regular market analysis updates</Text>
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

