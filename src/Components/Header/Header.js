import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import {
    Link
} from "react-router-dom";

const Header = ({ activeLink }) => (
    <>
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/Golden-Shoe" href="/Golden-Shoe">Golden Shoes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" activeKey={activeLink}>
                    <Nav.Link as={Link} to="/" href="/Golden-Shoe">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products" href="/Golden-Shoe/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/myaccount" href="/Golden-Shoe/myaccount">My Account</Nav.Link>
                    <Nav.Link as={Link} to="/about" href="/Golden-Shoe/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact" href="/Golden-Shoe/contact">Contact</Nav.Link>
                    
                </Nav>
                <Nav>
                    <Nav.Link href="#">Shopping Cart</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </>
);

export default Header;