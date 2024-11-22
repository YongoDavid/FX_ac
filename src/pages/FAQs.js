import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Input,
  Textarea,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { HelpCircle, Send, ChevronDown, ChevronUp, Clock, Award, CreditCard, RefreshCcw } from 'lucide-react';

const faqs = [
  {
    question: 'What experience do I need to start learning forex trading?',
    answer: 'No prior experience is necessary to start learning forex trading. Our courses are designed for beginners and gradually progress to more advanced topics.',
    icon: HelpCircle,
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Course duration varies depending on the complexity of the subject matter. Most of our courses range from 4 to 8 weeks, but you can learn at your own pace.',
    icon: Clock,
  },
  {
    question: 'Do you offer any certifications?',
    answer: 'Yes, upon successful completion of a course, you will receive a certificate of completion from Noel Forex Academy.',
    icon: Award,
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Bank Transfer, and various cryptocurrencies for payments.',
    icon: CreditCard,
  },
  {
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer: "We offer a 30-day money-back guarantee if you're not satisfied with your course purchase.",
    icon: RefreshCcw,
  }
];

export default function FAQs() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('blue.500', 'blue.300');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const inputBg = useColorModeValue('white', 'gray.700');


  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  return (
    <Box bg={bgColor} minHeight="100vh">
      <Container maxW="1300px" py={16}>
        <VStack spacing={16} align="stretch">
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4} bgGradient={bgGradient} bgClip="text">
              Frequently Asked Questions
            </Heading>
            
            <Text fontSize="xl" color={textColor}>
              Get answers to common questions about our forex trading courses
            </Text>
          </Box>
        
          <Accordion allowMultiple>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} border="none" mb={4}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        bg={cardBg}
                        _hover={{ bg: hoverBg }}
                        borderRadius="md"
                        p={4}
                      >
                        <Flex flex="1" textAlign="left" alignItems="center">
                          <Icon as={faq.icon} mr={4} color={accentColor} />
                          <Text fontSize="lg" fontWeight="bold" color={headingColor}>{faq.question}</Text>
                        </Flex>
                        <AccordionIcon as={isExpanded ? ChevronUp : ChevronDown} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pt={2} px={4}>
                      <Text fontSize="md" color={textColor}>{faq.answer}</Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          <Box>
            <Heading as="h2" size="xl" mb={8} textAlign="center" bgGradient={bgGradient} bgClip="text">
              Contact Us
            </Heading>
            <Box
              bg={cardBg}
              borderRadius="lg"
              p={8}
              boxShadow="xl"
            >
              <VStack as="form" spacing={4} align="stretch">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  <Input placeholder="Name" bg={inputBg} />
                  <Input placeholder="Email" type="email" bg={inputBg} />
                </SimpleGrid>
                <Textarea placeholder="Your Message" bg={inputBg} />
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  leftIcon={<Icon as={Send} />}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}