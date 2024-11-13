// pages/Blog.js
import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Button, VStack, HStack, Image } from '@chakra-ui/react';

const articles = [
  { title: 'Understanding Forex Market Trends', date: '2023-05-15', excerpt: 'Learn how to identify and analyze key market trends in forex trading.' },
  { title: 'Top 5 Risk Management Strategies', date: '2023-05-10', excerpt: 'Discover essential risk management techniques to protect your forex investments.' },
  { title: 'The Impact of Economic Indicators on Forex', date: '2023-05-05', excerpt: 'Explore how economic indicators influence currency pair movements.' },
];

const webinars = [
  { title: 'Advanced Candlestick Patterns', date: '2023-06-01', time: '2:00 PM EST' },
  { title: 'Mastering Fibonacci Retracements', date: '2023-06-15', time: '3:00 PM EST' },
];

function Blog() {
  return (
    <Box>
      <Container maxW="1200px" py={16}>
        <Heading as="h1" size="2xl" mb={8}>
          Blog & Resources
        </Heading>
        
        {/* Educational Articles */}
        <Box mb={16}>
          <Heading as="h2" size="xl" mb={8}>
            Latest Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {articles.map((article, index) => (
              <Box key={index} borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={`https://via.placeholder.com/300x200?text=Article+${index + 1}`} alt={article.title} />
                <Box p={6}>
                  <Text fontSize="sm" color="gray.500" mb={2}>{article.date}</Text>
                  <Heading as="h3" size="lg" mb={2}>
                    {article.title}
                  </Heading>
                  <Text mb={4}>{article.excerpt}</Text>
                  <Button colorScheme="blue">Read More</Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Webinars & Events */}
        <Box mb={16}>
          <Heading as="h2" size="xl" mb={8}>
            Upcoming Webinars
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {webinars.map((webinar, index) => (
              <Box key={index} borderWidth={1} borderRadius="lg" overflow="hidden" p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {webinar.title}
                </Heading>
                <Text mb={4}>Date: {webinar.date} at {webinar.time}</Text>
                <Button colorScheme="blue">Register Now</Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Ebooks */}
        <Box mb={16}>
          <Heading as="h2" size="xl" mb={8}>
            Free Ebooks
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {['Forex Trading Basics', 'Technical Analysis Guide', 'Psychology of Trading'].map((book, index) => (
              <VStack key={index} borderWidth={1} borderRadius="lg" overflow="hidden" p={6} align="stretch">
                <Image src={`https://via.placeholder.com/200x300?text=Ebook+${index + 1}`} alt={book} />
                <Heading as="h3" size="md" mb={2}>
                  {book}
                </Heading>
                <Button colorScheme="blue">Download</Button>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        {/* Forex Glossary
        <Box>
          <Heading as="h2" size="xl" mb={8}>
            Forex Glossary
          </Heading>
          <Text fontSize="lg" mb={4}>
            New to forex trading? Our comprehensive glossary explains key terms and concepts to help you navigate the world of foreign exchange.
          </Text>
          <Button colorScheme="blue">View Glossary</Button>
        </Box> */}
      </Container>
    </Box>
  );
}

export default Blog;