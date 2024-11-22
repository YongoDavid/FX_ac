import React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Icon,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  BookOpen,
  Info,
  HelpCircle,
  Settings,
} from 'lucide-react';

export default function Header() {
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('white', 'gray.100');
  const hoverColor = useColorModeValue('teal.400', 'teal.300');

  return (
    <Box
      as="header"
      bg={bgColor}
      color={textColor}
      py={4}
      boxShadow="md"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      height="64px" // Set a fixed height for the header
    >
      <Flex maxW="1300px" mx="auto" alignItems="center" justifyContent="space-between" height="100%">
        <Flex direction="row" alignItems="center" gap={2}>
          <Box
            color="teal.400"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/></svg>
          </Box>
          <Link
            as={RouterLink}
            to="/"
            fontSize="2xl"
            fontWeight="bold"
            _hover={{
              textDecoration: 'none',
              color: hoverColor,
            }}
            transition="color 0.3s"
          >
            Noel
          </Link>
        </Flex>
        
        <Flex as="nav" direction="row" alignItems="center" gap={8}>
          {[
            { name: 'Courses', icon: BookOpen, link: '/courses' },
            { name: 'About', icon: Info, link: '/about' },
            { name: 'Tools', icon: Settings, link: '/tools' },
            { name: 'FAQs', icon: HelpCircle, link: '/faqs' },
          ].map((item) => (
            <Link
              key={item.name}
              as={RouterLink}
              to={item.link}
              fontSize="md"
              fontWeight="medium"
              _hover={{
                textDecoration: 'none',
                color: hoverColor,
              }}
              transition="color 0.3s"
            >
              <Flex align="center">
                <Icon as={item.icon} mr={2} />
                <Text>{item.name}</Text>
              </Flex>
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