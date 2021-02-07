import React, { useState } from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import ShoppingCartModal from '../ShoppingCartModal/ShoppingCartModal';
import './style.css';

import {
    Link
} from "react-router-dom";

const Header = (props) => {

    const [showShoppingCartModal, setShowShoppingCartModal] = useState(false)

    return (
        <div>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/" href="/">Golden Shoes</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" activeKey={props.activeLink}>
                        <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products" href="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/myaccount" href="/myaccount">My Account</Nav.Link>
                        <Nav.Link as={Link} to="/about" href="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" href="/contact">Contact</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => setShowShoppingCartModal(true)}>Shopping Cart<span className="itemsInBasket" ><Badge pill variant="secondary">{props.shoppingCart.length}</Badge></span></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar >

            {showShoppingCartModal && <ShoppingCartModal
                show={showShoppingCartModal}
                hide={() => setShowShoppingCartModal(false)}
                shoppingCart={props.shoppingCart}
                deleteFromCartAction={props.deleteFromCartAction}
            />}

        </div>

    );

}

export default Header;