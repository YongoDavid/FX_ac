// pages/Enrollment.js
import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Input, Select, Button } from '@chakra-ui/react';

function Enrollment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    paymentMethod: '',
  });

//   const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: 'Enrollment Successful',
      description: "We've received your enrollment. Welcome to Forex Academy!",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    // Reset form
    setFormData({ name: '', email: '', course: '', paymentMethod: '' });
  };

  return (
    <Box>
      <Container maxW="1200px" py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          Enroll in a Course
        </Heading>
        
        <VStack as="form" onSubmit={handleSubmit} spacing={6} align="stretch">
          <VStack align="stretch">
            <Text>Name</Text>
            <Input 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required
            />
          </VStack>
          
          <VStack align="stretch">
            <Text>Email</Text>
            <Input 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />
          </VStack>
          
          <VStack align="stretch">
            <Text>Select Course</Text>
            <Select 
              name="course" 
              value={formData.course} 
              onChange={handleChange} 
              required
            >
              <option value="">Select a course</option>
              <option value="forex-fundamentals">Forex Fundamentals</option>
              <option value="technical-analysis">Technical Analysis Mastery</option>
              <option value="advanced-strategies">Advanced Trading Strategies</option>
            </Select>
          </VStack>
          
          <VStack align="stretch">
            <Text>Payment Method</Text>
            <Select 
              name="paymentMethod" 
              value={formData.paymentMethod} 
              onChange={handleChange} 
              required
            >
              <option value="">Select payment method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="crypto">Cryptocurrency</option>
            </Select>
          </VStack>
          
          <Button type="submit" colorScheme="blue" size="lg">
            Enroll Now
          </Button>
        </VStack>

        {/* Discounts & Promotions */}
        <Box mt={16} p={6} borderWidth={1} borderRadius="lg">
          <Heading as="h2" size="xl" mb={4}>
            Special Offers
          </Heading>
          <Text fontSize="lg" mb={4}>
            Enroll in multiple courses and get 20% off your total purchase!
          </Text>
          <Text fontSize="lg">
            Use code EARLYBIRD for an additional 10% discount on any course.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Enrollment; 