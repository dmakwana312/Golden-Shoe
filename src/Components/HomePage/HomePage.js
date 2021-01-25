import React from 'react';
import Header from '../Header/Header.js';
import './style.css';

import { Button } from 'react-bootstrap';

import {
    Link
} from "react-router-dom";

const HomePage = () => (
    <div className="homeContainer">
        <Header activeLink="/Golden-Shoe"></Header>
        <div className="homeInner">
            <h1>Golden Shoe</h1>
            <h2>Visit Our Store To View Our Range</h2>
            <Button variant="primary" as={Link} to="Golden-Shoe/products" href="Golden-Shoe/products">Visit Store</Button>
        </div>
        
    </div>
);

export default HomePage;