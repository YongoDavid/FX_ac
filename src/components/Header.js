// components/Header.js
import React from 'react';
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { BarChart2} from "lucide-react";

function Header() {
  return (
    <Box as="header" bg="blue.600" color="white" py={4}>
      <Flex maxW="1200px" mx="auto" alignItems="center" justifyContent="space-between">
        <div className="flex items-center space-x-2">
          <BarChart2 className="h-8 w-8 text-blue-600" />
          <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold">
          Forex Academy
        </Link>
        </div>
        
        <Flex as="nav">
          <Link as={RouterLink} to="/courses" mr={4}>Courses</Link>
          <Link as={RouterLink} to="/about" mr={4}>About</Link>
          <Link as={RouterLink} to="/blog" mr={4}>Blog</Link>
          <Link as={RouterLink} to="/faqs" mr={4}>FAQs</Link>
          <Button as={RouterLink} to="/enrollment" colorScheme="teal">
            Enroll Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;


