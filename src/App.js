import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import VanillaNav from './components/VanillaNav/VanillaNav';
import Covid from './components/Covid19/Covid';
import ScrollToTop from 'react-router-scroll-top';
import Footer from './components/Footer/Footer';
import './style/style.css';
import Reviews from './pages/Reviews/Reviews';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop>
          <Covid />
          {/* <Info /> */}
          <VanillaNav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/reviews' component={Reviews} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
