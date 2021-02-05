import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import './style.css';

import { Container, Row, Toast } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard.js';

import Sidebar from '../Sidebar/Sidebar.js';

import SortMenu from '../SortMenu/SortMenu.js';

import ProductInfoModal from '../ProductInfoModal/ProductInfoModal.js';

import 'font-awesome/css/font-awesome.min.css';
import * as DataHandler from '../../data/productsActions.js';


const ProductsPage = () => {

    
    const [allProducts] = useState(DataHandler.getAllProducts());
    const [productsToDisplay, setProductsToDisplay] = useState(allProducts);
    const [filtersToApply, setFiltersToApply] = useState({
        male: false,
        female: false,
        styleNames: []
    })
    const [allStyles] = useState(DataHandler.getStyles(productsToDisplay));
    const [modalShow, setModalShow] = useState(false);
    const [productInModal, setProductInModal] = useState(null);
    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        
    });

    const sortDropDownHandler = (direction) => {
        setProductsToDisplay([...DataHandler.sortDisplayOrderByPrice(productsToDisplay, direction)]);

    }

    const setFilters = (filter) => {

        var updatedFilters = filtersToApply;

        if (filter === "male" || filter === "female") {
            updatedFilters[filter] = !updatedFilters[filter];
        }
        else {
            if (updatedFilters["styleNames"].includes(filter)) {
                var index = updatedFilters["styleNames"].indexOf(filter);
                if (index !== -1) {
                    updatedFilters["styleNames"].splice(index, 1);
                }

            }
            else {
                updatedFilters["styleNames"].push(filter);
            }

        }

        setFiltersToApply(updatedFilters);
        applyFilters();


    }

    const applyFilters = () => {
        var products = [...allProducts];
        if (!(filtersToApply["male"] && filtersToApply["female"])) {
            if (filtersToApply["male"]) {
                products = products.filter(product => product["gender"] === "male");
            }
            if (filtersToApply["female"]) {
                products = products.filter(product => product["gender"] === "female");
            }
        }

        if (filtersToApply["styleNames"].length > 0) {
            products = products.filter(product => filtersToApply["styleNames"].includes(product["style_name"]));

        }

        setProductsToDisplay([...products]);

    }

    const viewProductInfo = (shoe_id) => {

        const product = productsToDisplay.filter(function (item) {
            return item["shoe_id"] === shoe_id;
        })

        setProductInModal(product[0]);

        setModalShow(true);

    }

    const addToBasket = (shoe_id, size) => {
        setModalShow(false);
        setShowToast(true);
    }

    return (

        <div className="productsContainer">
            <Header activeLink="/Golden-Shoe/products"></Header>
            <Sidebar styles={allStyles} filterFunction={setFilters}></Sidebar>

            <Container fluid>

                <div className="productsInner">
                    <h1>Products</h1>
                    <div className="justify-content-md-center">
                        <SortMenu selectHandler={sortDropDownHandler}></SortMenu>
                    </div>

                    <Row className="justify-content-md-center">

                        {productsToDisplay.map((data, key) => {
                            return (

                                <ProductCard
                                    key={key}
                                    shoe_id={data.shoe_id}
                                    productName={data.shoe_name}
                                    price={data.price}
                                    img_url={data.image_url}
                                    gender={data.gender}
                                    addToBasketButtonEventHandler={viewProductInfo}
                                ></ProductCard>
                            );
                        })}

                        {modalShow && <ProductInfoModal
                            product={productInModal}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            addToBasketButtonEventHandler={addToBasket}
                        />}
                        <Toast
                            className="addedToBasketToast"
                            onClose={() => setShowToast(false)}
                            show={showToast}
                            delay={5000}

                            autohide
                        >
                            <Toast.Header>
                                <strong className="mr-auto">Golden Shoe</strong>
                            </Toast.Header>
                            <Toast.Body>Item Added To Basket</Toast.Body>
                        </Toast>

                    </Row>
                </div>
            </Container>
        </div>

    );


}

export default ProductsPage;