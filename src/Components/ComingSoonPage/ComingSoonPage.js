import React from 'react';
import Header from '../Header/Header.js';
import './style.css';

const ComingSoonPage = ({ title }) => (
    <div className="comingSoonContainer">
        <Header></Header>
        <div className="comingSoonInner">
            <h1>{title}</h1>
            <h2>Coming Soon</h2>
        </div>
        
    </div>
);

export default ComingSoonPage;