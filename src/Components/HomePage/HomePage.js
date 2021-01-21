import React from 'react';
import Header from '../Header/Header.js';
import './style.css';

import { Button } from 'react-bootstrap';

const HomePage = () => (
    <div className="homeContainer">
        <Header activeLink="#home"></Header>
        <div className="homeInner">
            <h1>Golden Shoe</h1>
            <h2>Visit Our Store To View Our Range</h2>
            <Button variant="primary">Visit Store</Button>
        </div>
        
    </div>
);

export default HomePage;