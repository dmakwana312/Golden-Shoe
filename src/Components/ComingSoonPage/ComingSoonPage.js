import React from 'react';
import Header from '../Header/Header';
import './style.css';

const ComingSoonPage = (props) => (
    <div className="comingSoonContainer">
        <Header shoppingCart={props.cart} deleteFromCartAction={props.deleteFromCartAction} ></Header>
        <div className="comingSoonInner">
            <h1>{props.title}</h1>
            <h2>Coming Soon</h2>
        </div>
        
    </div>
);

export default ComingSoonPage;