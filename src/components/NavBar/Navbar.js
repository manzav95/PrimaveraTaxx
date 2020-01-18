import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";
import Info from "../InfoHeader/InfoHeader";

class NavBarr extends Component {
  render() {
    return (
      <div>
        <Info />
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="success"
          variant="dark"
          id="nav-bar"
        >
          <Navbar.Brand href="#home">
            <h2>Primavera Taxx</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" id="nav-links">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <NavDropdown title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Employer Identification Number (EIN)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Get Your Tax Record
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  IRS Withholding Calculator
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Pay California
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Pay IRS</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">New Clients</Nav.Link>
              <Nav.Link href="#pricing">Returning Clients</Nav.Link>
              <Nav.Link href="#pricing">Reviews</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <h4>
            <a
              href="https://login.atomanager.com/ATOM_PRI/WebInfo.aspx"
              target="_blank"
            >
              Login
            </a>{" "}
            | <a href="">Sign Up</a>
          </h4>
        </Navbar>
      </div>
    );
  }
}

export default NavBarr;
