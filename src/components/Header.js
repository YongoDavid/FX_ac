import React from 'react';
import { Box, Flex, Link, Button, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


function Header() {
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('white', 'gray.100');

  return (
    <Box as="header" bg={bgColor} color={textColor} py={16} boxShadow="md">
      <Flex maxW="1400px" mx="auto" alignItems="center" justifyContent="space-between">
        <Flex direction="row" alignItems="center" gap={4}>
          <Box
            size={32}
            color="teal.400"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.1)' }} 
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-candlestick"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/></svg>
          </Box>
          <Link
            as={RouterLink}
            to="/"
            fontSize="2xl"
            fontWeight="bold"
            _hover={{
              textDecoration: 'none',
              color: 'teal.400',
            }}
            transition="color 0.3s"
          >
            Forex Academy
          </Link>
        </Flex>
        
        <Flex as="nav" direction="row" alignItems="center" gap={6}>
          {['Courses', 'About', 'Blog', 'FAQs'].map((item) => (
            <Link
              key={item}
              as={RouterLink}
              to={`/${item.toLowerCase()}`}
              fontSize="md"
              fontWeight="medium"
              _hover={{
                textDecoration: 'none',
                color: 'teal.400',
              }}
              transition="color 0.3s"
            >
              {item}
            </Link>
          ))}
          <Button
            as={RouterLink}
            to="/enrollment"
            colorScheme="teal"
            variant="outline"
            _hover={{
              bg: 'teal.500',
              color: 'white',
            }}
            transition="all 0.3s"
          >
            Enroll Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;