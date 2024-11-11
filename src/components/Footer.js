// components/Footer.js
import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box as="footer" bg="gray.100" py={8}>
      <Flex maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="space-between">
        <Box mb={4}>
          <Text fontWeight="bold" mb={2}>Forex Academy</Text>
          <Text>Your journey to forex mastery starts here.</Text>
        </Box>
        <Box mb={4}>
          <Text fontWeight="bold" mb={2}>Quick Links</Text>
          <Link as={RouterLink} to="/courses" d="block">Courses</Link>
          <Link as={RouterLink} to="/about" d="block">About Us</Link>
          <Link as={RouterLink} to="/blog" d="block">Blog</Link>
          <Link as={RouterLink} to="/faqs" d="block">FAQs</Link>
        </Box>
        <Box mb={4}>
          <Text fontWeight="bold" mb={2}>Contact Us</Text>
          <Text>Email: info@forexacademy.com</Text>
          <Text>Phone: +1 (123) 456-7890</Text>
        </Box>
      </Flex>
      <Text textAlign="center" mt={4}>
        © {new Date().getFullYear()} Forex Academy. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;