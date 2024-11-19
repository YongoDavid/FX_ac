import React from 'react';
import { Box, Flex, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

function Footer() {
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('gray.100', 'gray.300');

  return (
    <Box as="footer" bg={bgColor} color={textColor} py={12}>
      <Flex maxW="1200px" mx="auto" flexWrap="wrap" justifyContent="space-between">
        <VStack align="start" mb={8} spacing={3}>
          <Text fontWeight="bold" fontSize="xl">Forex Academy</Text>
          <Text>Your journey to forex mastery starts here.</Text>
        </VStack>
        <VStack align="start" mb={8} spacing={3}>
          <Text fontWeight="bold" fontSize="lg">Quick Links</Text>
          {['Courses', 'About Us', 'Blog', 'FAQs'].map((item) => (
            <Link
              key={item}
              as={RouterLink}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              _hover={{
                color: 'teal.400',
                textDecoration: 'none',
              }}
              transition="color 0.3s"
            >
              {item}
            </Link>
          ))}
        </VStack>
        <VStack align="start" mb={8} spacing={3}>
          <Text fontWeight="bold" fontSize="lg">Contact Us</Text>
          <Text>Email: info@forexacademy.com</Text>
          <Text>Phone: +234 (123) 456-7890</Text>
          <Flex mt={2} align="center" gap={4}>
            <Link href="/" isExternal>
              <Box
                as={Instagram}
                size={24}
                color="teal.400"
                _hover={{ color: 'teal.300' }}
                transition="color 0.3s"
              />
            </Link>
            <Link href="https://www.youtube.com/@noelreys" isExternal>
              <Box
                as={Youtube}
                size={28}
                color="teal.400"
                _hover={{ color: 'teal.300' }}
                transition="color 0.3s"
              />
            </Link>
          </Flex>
        </VStack>
      </Flex>
      <Text textAlign="center" mt={8} fontSize="sm" color="gray.500">
        © {new Date().getFullYear()} Forex Academy. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;