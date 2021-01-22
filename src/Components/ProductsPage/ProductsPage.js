import React from 'react';
import Header from '../Header/Header.js';
import './style.css';

import { Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard.js';


const ProductsPage = () => (
    <div className="productsContainer">
        <Header activeLink="/Golden-Shoe/products"></Header>

        

            <Container fluid>
            <div className="productsInner">
            <h1>Products</h1>
                <Row>
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />
                    <ProductCard productName="Name" price="45.00" quantity="3245" />

                </Row>
                </div>
            </Container>

           



        



    </div>
);

export default ProductsPage;