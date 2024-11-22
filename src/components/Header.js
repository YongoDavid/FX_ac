import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  BookOpen,
  Info,
  Settings,
  HelpCircle,
  ChevronDown,
  Calculator,
  BarChart2,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const bgColor = useColorModeValue('gray.900', 'gray.800');
  const textColor = useColorModeValue('white', 'gray.100');
  const hoverColor = useColorModeValue('teal.400', 'teal.300');
  const dropdownBg = useColorModeValue('gray.800', 'gray.900');

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
            Forex Academy
          </Link>
        </Flex>
        
        <Flex as="nav" direction="row" alignItems="center" gap={8}>
          {[
            { name: 'Courses', icon: BookOpen, link: '/courses' },
            { name: 'About', icon: Info, link: '/about' },
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
          <Menu
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
          >
            <MenuButton
              as={Button}
              rightIcon={<ChevronDown />}
              variant="ghost"
              _hover={{
                bg: 'transparent',
                color: hoverColor,
              }}
              _active={{
                bg: 'transparent',
              }}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Flex align="center">
                <Icon as={Settings} mr={2} />
                <Text>Tools</Text>
              </Flex>
            </MenuButton>
            <MenuList
              bg={dropdownBg}
              borderColor="gray.700"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {[
                { name: 'Lot Size Calculator', icon: Calculator, link: '/tools/lot-size-calculator' },
                { name: 'Pips Calculator', icon: BarChart2, link: '/tools/pips-calculator' },
                { name: 'Position Size Calculator', icon: DollarSign, link: '/tools/position-size-calculator' },
                { name: 'Risk Reward Calculator', icon: TrendingUp, link: '/tools/risk-reward-calculator' },
              ].map((tool) => (
                <MenuItem
                  key={tool.name}
                  as={RouterLink}
                  to={tool.link}
                  _hover={{
                    bg: 'gray.700',
                    color: hoverColor,
                  }}
                >
                  <Icon as={tool.icon} mr={2} />
                  {tool.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
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