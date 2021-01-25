import React from 'react';
import Header from '../Header/Header.js';
import './style.css';

import { Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard.js';

import Sidebar from '../Sidebar/Sidebar.js';

import 'font-awesome/css/font-awesome.min.css';

const ProductsPage = () => {

    return (

        <div className="productsContainer">
            <Header activeLink="/Golden-Shoe/products"></Header>
            <Sidebar></Sidebar>

            <Container fluid>

                <div className="productsInner">
                    <h1>Products</h1>
                    <Row className = "justify-content-md-center">
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
}

export default ProductsPage;