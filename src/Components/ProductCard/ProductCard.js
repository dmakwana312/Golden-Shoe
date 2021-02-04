import React from 'react';
import './style.css';

import { Card, Col } from 'react-bootstrap';

const ProductCard = ({ productName, price, img_url, gender }) => {

    const capitaliseFirstLetter = (word) => {
        return(word.charAt(0).toUpperCase() + word.slice(1));
    }
    
    return (
    <Col md="3">
        <Card className="mb-3 box-shadow">
            <Card.Img className="productCardImage" variant="top" src={img_url} />

            <Card.Body >
                <Card.Title className="text-left">{productName}</Card.Title>
                <Card.Subtitle className="text-left mb-2 text-muted">{capitaliseFirstLetter(gender)}</Card.Subtitle>
                <Card.Text className="text-left">
                    <span>£{price}</span> 
                </Card.Text>

            </Card.Body>
        </Card>
    </Col>
    );
};

export default ProductCard;