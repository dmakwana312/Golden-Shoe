import React, { useState } from 'react';
import './style.css';

import { Card, Col, Button } from 'react-bootstrap';

const ProductCard = (props) => {

    const capitaliseFirstLetter = (word) => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }

    const [showAddToBasketButton, setShoeAddToBasketButton] = useState(false);

    return (
        <Col md="3">
            <Card className="mb-3 box-shadow"
                onMouseEnter={e => {
                    setShoeAddToBasketButton(true);
                }}
                onMouseLeave={e => {
                    setShoeAddToBasketButton(false)
                }}>
                {showAddToBasketButton && <Button className="addToBasketButton" onClick={() => {props.addToBasketButtonEventHandler(props.shoe_id)}}>Add To Basket</Button>}
                <Card.Img className="productCardImage" variant="top" src={props.img_url} />

                <Card.Body>
                    <Card.Title className="text-left">{props.productName}</Card.Title>
                    <Card.Subtitle className="text-left mb-2 text-muted">{capitaliseFirstLetter(props.gender)}</Card.Subtitle>
                    <Card.Text className="text-left">
                        <span>£{props.price}</span>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;