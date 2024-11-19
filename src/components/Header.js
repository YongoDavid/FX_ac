// components/Header.js
import React from 'react';
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <Box as="header" bg="gray.900" color="white" py={4}>
      <Flex maxW="1200px" mx="auto" alignItems="center" justifyContent="space-between">
        <div className="flex items-center space-x-2">
          <Flex direction="row" alignItems="center" gap={4}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-candlestick"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/></svg>
            <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold">
              Forex Academy
            </Link>
          </Flex>
        </div>
        
        <Flex as="nav" direction="row" alignItems="center" gap={3} >
          <Link as={RouterLink} to="/courses" mr={4}>Courses</Link>
          <Link as={RouterLink} to="/about" mr={4}>About</Link>
          <Link as={RouterLink} to="/blog" mr={4}>Blog</Link>
          <Link as={RouterLink} to="/faqs" mr={4}>FAQs</Link>
          <Button as={RouterLink} to="/enrollment" colorScheme="teal" variant="outline">
            Enroll Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;


