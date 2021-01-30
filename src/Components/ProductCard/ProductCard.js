import React from 'react';
import './style.css';

import { Card, Col } from 'react-bootstrap';

const ProductCard = ({ productName, price, quantity, img_url }) => (



    <Col md="3">
        <Card className="mb-3 box-shadow">
            <Card.Img className="productCardImage" variant="top" src={img_url} />

            <Card.Body >
                <Card.Title className="text-left">{productName}</Card.Title>
                <Card.Text>
                    {quantity > 0 ?
                    <span className="productPrice">£{price}</span> :
                    <span className="productOutOfStock">Out of Stock</span>}
                </Card.Text>

            </Card.Body>
        </Card>
    </Col>

);

export default ProductCard;