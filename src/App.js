// App.js
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Blog from './pages/Blog';
import Enrollment from './pages/Enrollment';
import FAQs from './pages/FAQs';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Header />
          <Box flex="1">
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/courses" component={Courses} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/enrollment" component={Enrollment} />
                <Route path="/faqs" component={FAQs} />
              </Switch>
            </Layout>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;