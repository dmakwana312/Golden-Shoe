import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ activeLink }) => (
    <>
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">Golden Shoes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" activeKey={activeLink}
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#products">Products</Nav.Link>
                    <Nav.Link href="#myAccount">My Account</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    
                </Nav>
                <Nav>
                    <Nav.Link href="#">Shopping Cart</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </>
);

export default Header;