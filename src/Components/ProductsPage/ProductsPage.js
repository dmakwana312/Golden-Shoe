import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import './style.css';

import { Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard.js';

import Sidebar from '../Sidebar/Sidebar.js';

import SortMenu from '../SortMenu/SortMenu.js';

import 'font-awesome/css/font-awesome.min.css';
import * as DataHandler from '../../data/productsActions.js';


const ProductsPage = () => {

    useEffect(() => {

    }, []);
    const [allProducts, setAllProducts] = useState(DataHandler.getAllProducts());
    const [productsToDisplay, setProductsToDisplay] = useState(allProducts);
    const [filtersToApply, setFiltersToApply] = useState({
        male: false,
        female: false,
        styleNames: []
    })
    const [allStyles, setAllStyles] = useState(DataHandler.getStyles(productsToDisplay));


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