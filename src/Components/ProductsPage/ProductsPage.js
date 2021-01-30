import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.js';
import './style.css';

import { Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard.js';

import Sidebar from '../Sidebar/Sidebar.js';

import 'font-awesome/css/font-awesome.min.css';
import * as DataHandler from '../../data/productsActions.js';


const ProductsPage = () => {

    var allProducts = DataHandler.getAllProducts();


    return (

        <div className="productsContainer">
            <Header activeLink="/Golden-Shoe/products"></Header>
            <Sidebar></Sidebar>

            <Container fluid>

                <div className="productsInner">
                    <h1>Products</h1>
                    <Row className="justify-content-md-center">

                        
                        {allProducts["shoes"].map((data, key) => {
                            return(
                                <ProductCard 
                                    key={key}
                                    productName={data.shoe_name}
                                    price={data.price}
                                    quantity={data.quantity}
                                    img_url={data.image_url}
                                    gender={data.gender}
                                ></ProductCard>
                            );
                        })}

                        

                    </Row>
                </div>
            </Container>
        </div>

    );
}

export default ProductsPage;