import React from "react";
import "./App.css";
import NavBarr from "./components/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./components/InfoHeader/InfoHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import VanillaNav from "./components/VanillaNav/VanillaNav";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBarr /> */}
        <VanillaNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
