// components/Footer.js
import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Instagram , Youtube  } from 'lucide-react';

function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="white" py={8}>
      <Flex maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="space-between">
        <Box mb={4}>
          <Text fontWeight="bold" mb={2}>Forex Academy</Text>
          <Text>Your journey to forex mastery starts here.</Text>
        </Box>
        <Box mb={4}>
          <Flex direction="column" gap={1}>
            <Text fontWeight="bold" mb={2}>Quick Links</Text>
            <Link as={RouterLink} to="/courses" d="block">Courses</Link>
            <Link as={RouterLink} to="/about" d="block">About Us</Link>
            <Link as={RouterLink} to="/blog" d="block">Blog</Link>
            <Link as={RouterLink} to="/faqs" d="block">FAQs</Link>
          </Flex>
        </Box>
        <Box mb={4}>
          <Text fontWeight="bold" mb={2}>Contact Us</Text>
          <Text>Email: info@forexacademy.com</Text>
          <Text>Phone: +234 (123) 456-7890</Text>
          <Flex mt={2} align="center" gap={3}>
            <a href="/"><Instagram/></a>
            <a href="https://www.youtube.com/@noelreys"><Youtube size={28}/></a>
          </Flex>
        </Box>  
      </Flex>
      <Text textAlign="center" mt={4}>
        © {new Date().getFullYear()} Forex Academy. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;