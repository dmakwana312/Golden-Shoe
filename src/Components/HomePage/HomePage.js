import React from 'react';
import Header from '../Header/Header';
import './style.css';

import { Button } from 'react-bootstrap';

import {
    Link
} from "react-router-dom";

const HomePage = (props) => (
    <div className="homeContainer">
        <Header shoppingCart={props.cart} deleteFromCartAction={props.deleteFromCartAction} activeLink="/Golden-Shoe"></Header>
        <div className="homeInner">
            <h1>Golden Shoe</h1>
            <h2>Visit Our Store To View Our Range</h2>
            <Button variant="primary" as={Link} to="/products" href="/products">Visit Store</Button>
        </div>

    </div>
);

export default HomePage;