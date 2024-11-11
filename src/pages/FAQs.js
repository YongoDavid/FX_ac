// pages/FAQs.js
import React from 'react';
import { Box, Container, Heading, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button } from '@chakra-ui/react';

const faqs = [
  {
    question: 'What experience do I need to start learning forex trading?',
    answer: 'No prior experience is necessary to start learning forex trading. Our courses are designed for beginners and gradually progress to more advanced topics.'
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Course duration varies depending on the complexity of the subject matter. Most of our courses range from 4 to 8 weeks, but you can learn at your own pace.'
  },
  {
    question: 'Do you offer any certifications?',
    answer: 'Yes, upon successful completion of a course, you will receive a certificate of completion from Forex Academy.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, PayPal, and various cryptocurrencies for course payments.'
  },
  {
    question: "'Can I get a refund if I'm not satisfied with a course?'",
    answer: "'We offer a 30-day money-back guarantee if you're not satisfied with your course purchase.'"
  }
];

function FAQs() {
  return (
    <Box>
      <Container maxW="1200px" py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          Frequently Asked Questions
        </Heading>
        
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight="bold">{faq.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize="md">{faq.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Live Chat Support */}
        <Box mt={16} textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Need More Help?
          </Heading>
          <Text fontSize="lg" mb={4}>
            Our support team is available to answer any questions you may have.
          </Text>
          <Button colorScheme="blue" size="lg">
            Start Live Chat
          </Button>
        </Box>

        {/* Contact Form */}
        <Box mt={16}>
          <Heading as="h2" size="xl" mb={8}>
            Contact Us
          </Heading>
          <VStack as="form" spacing={4} align="stretch">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" colorScheme="blue">
              Send Message
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

export default FAQs;