import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/fxsignals-logo.png'; // Adjust the path if needed

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo aligned to the left */}
        <Navbar.Brand as={Link} to="/">
          <img 
            src={logo} 
            alt="FXSignals Logo" 
            style={{ width: '100px', height: 'auto' }} // Adjust the size of the logo
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links aligned to the right */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {/* Dropdown Menu */}
            <NavDropdown title="Market Outlook" id="market-outlook-dropdown">
              <NavDropdown.Item as={Link} to="/forex">Forex Market</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/stocks">Stock Market</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/outlook/crypto">Cryptocurrency</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/outlook/commodities">Commodities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/outlook/economy">Global Economy</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
