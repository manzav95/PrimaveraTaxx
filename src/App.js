import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import VanillaNav from "./components/VanillaNav/VanillaNav";
import Info from "./components/InfoHeader/InfoHeader";
import ScrollToTop from "react-router-scroll-top";
import Footer from "./components/Footer/Footer";
import SideNav from "./components/SideNav/SideNav";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          {/* <SideNav /> */}
          <Info />
          <VanillaNav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
