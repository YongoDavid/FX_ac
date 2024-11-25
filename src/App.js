import React, { useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch, useLocation  } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Tools from './pages/Tools';
import Enrollment from './pages/Enrollment';
import FAQs from './pages/FAQs';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <ScrollToTop/>
          <Header />
          <Box flex="1">
            <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/courses" component={Courses} />
                  <Route path="/about" component={About} />
                  <Route path="/tools" component={Tools} />
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