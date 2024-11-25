import React from 'react';
import { Box, Container, SimpleGrid, VStack, Heading, Text, Link, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

function Footer() {
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('gray.100', 'gray.300');
  const headingColor = useColorModeValue('white', 'gray.100');
  const iconColor = useColorModeValue('teal.400', 'teal.300');

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/forexacademy' },
    { icon: Youtube, href: 'https://www.youtube.com/@noelreys' },
    { icon: Twitter, href: 'https://twitter.com/forexacademy' },
    { icon: Facebook, href: 'https://facebook.com/forexacademy' },
  ];

  const quickLinks = ['Courses', 'About', 'Tools', 'FAQs', 'Terms of Service', 'Privacy Policy'];

  return (
    <Box as="footer" bg={bgColor} color={textColor} py={16}>
      <Container maxW="1300px">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={8}>
          <VStack align="start" spacing={4}>
            <Heading as="h4" size="md" color={headingColor}>Forex Academy</Heading>
            <Text>Your journey to forex mastery starts here.</Text>
            <Flex mt={4}>
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} isExternal mr={3}>
                  <Icon
                    as={social.icon}
                    boxSize={6}
                    color={iconColor}
                    _hover={{ color: 'teal.300', transform: 'scale(1.1)' }}
                    transition="all 0.3s"
                  />
                </Link>
              ))}
            </Flex>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading as="h4" size="md" color={headingColor}>Quick Links</Heading>
            {quickLinks.map((item) => (
              <Link
                key={item}
                as={RouterLink}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                _hover={{
                  color: 'teal.400',
                  textDecoration: 'none',
                  transform: 'translateX(5px)',
                }}
                transition="all 0.3s"
                display="flex"
                alignItems="center"
              >
                <Icon as={ArrowRight} mr={2} boxSize={4} />
                {item}
              </Link>
            ))}
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading as="h4" size="md" color={headingColor}>Contact Us</Heading>
            <Flex align="center">
              <Icon as={Mail} mr={2} color={iconColor} />
              <Text>info@forexacademy.com</Text>
            </Flex>
            <Flex align="center">
              <Icon as={Phone} mr={2} color={iconColor} />
              <Text>+234 (123) 456-7890</Text>
            </Flex>
            <Flex align="center">
              <Icon as={MapPin} mr={2} color={iconColor} />
              <Text>123 Trading Street, Forex City Nigeria</Text>
            </Flex>
          </VStack>

        </SimpleGrid>

        <Box borderTopWidth={1} borderColor="gray.700" pt={8}>
          <Text textAlign="center" fontSize="sm">
            © {new Date().getFullYear()} Forex Academy. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;