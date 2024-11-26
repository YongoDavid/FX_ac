import React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Icon,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Info, HelpCircle, Settings, Menu } from 'lucide-react';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('white', 'gray.100');
  const hoverColor = useColorModeValue('teal.400', 'teal.300');

  const menuItems = [
    { name: 'Courses', icon: BookOpen, link: '/courses' },
    { name: 'About', icon: Info, link: '/about' },
    { name: 'Tools', icon: Settings, link: '/tools' },
    { name: 'FAQs', icon: HelpCircle, link: '/faqs' },
  ];

  return (
    <Box
      as="header"
      bg={bgColor}
      color={textColor}
      py={{ base: 2, md: 4 }}
      px={{ base: 4, md: 6 }}
      boxShadow="md"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      height={{ base: "56px", md: "64px" }}
    >
      <Flex maxW="1300px" mx="auto" alignItems="center" justifyContent="space-between" height="100%">
        <Flex direction="row" alignItems="center" gap={2}>
          <Box
            color="teal.400"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.1)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/></svg>
          </Box>
          <Link
            as={RouterLink}
            to="/"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            _hover={{
              textDecoration: 'none',
              color: hoverColor,
            }}
            transition="color 0.3s"
          >
            Noel Reys
          </Link>
        </Flex>
        
        <Flex as="nav" direction="row" alignItems="center" gap={8} display={{ base: 'none', md: 'flex' }}>
          {menuItems.map((item) => (
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
            size={{ base: "sm", md: "md" }}
            _hover={{
              bg: 'teal.500',
              color: 'white',
            }}
            transition="all 0.3s"
          >
            Enroll Now
          </Button>
        </Flex>

        <IconButton
          aria-label="Open menu"
          icon={<Icon as={Menu} boxSize={5} />}
          variant="ghost"
          color={textColor}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          size="md"
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose} motionPreset="slideInRight">
          <DrawerOverlay />
          <DrawerContent bg={bgColor} color={textColor}>
            <DrawerCloseButton />
            <DrawerHeader fontSize="lg">Menu</DrawerHeader>
            <DrawerBody>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VStack spacing={4} align="stretch">
                  {menuItems.map((item) => (
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
                      onClick={onClose}
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
                    size="md"
                    _hover={{
                      bg: 'teal.500',
                      color: 'white',
                    }}
                    transition="all 0.3s"
                    onClick={onClose}
                  >
                    Enroll Now
                  </Button>
                </VStack>
              </motion.div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}

