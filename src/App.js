import React from 'react';
import { Box } from '@chakra-ui/react';
import { Provider } from "./components/ui/provider"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses.js';
import About from './pages/About';
import Blog from './pages/Blog';
import Enrollment from './pages/Enrollment';
import FAQs from './pages/FAQs';

function App() {
  return (
    <Provider>
      <Router>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          <Header />
          <Box flex="1">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/courses" component={Courses} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/enrollment" component={Enrollment} />
              <Route path="/faqs" component={FAQs} />
            </Switch>
          </Box>
          <Footer />
        </Box>
      </Router>
    </Provider>
  );
}

export default App;