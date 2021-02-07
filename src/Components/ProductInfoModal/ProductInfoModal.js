import React, { useState } from 'react';

import { Button, Modal, Image, Col, Row, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

import './style.css';

const ProductInfoModal = (props) => {

    const [selectedSize, setSelectedSize] = useState(-1);

    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    {props.product["shoe_name"]}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={12} md={4}>
                        <Image className="productImage" src={props.product["image_url"]} />
                    </Col>
                    <Col xs={12} md={8}>
                        <p>{props.product["description"]}</p>
                        <hr />
                        <h5>Add To Basket</h5>
                        <p>Pick A Size</p>
                        <ButtonToolbar>
                            <ButtonGroup className="mr-2">
                                {props.product["stock"].map((data, key) => {
                                    if (data[1] > 0) {
                                        
                                        return (
                                            <Button key={key} active={selectedSize===data[0]} variant="outline-secondary" onClick={() => setSelectedSize(data[0])} >{data[0]}</Button>
                                        );
                                    }
                                    else {
                                        return (
                                            <Button key={key} variant="outline-danger" disabled>{data[0]} (Out of Stock)</Button>
                                        );
                                    }
                                })}
                            </ButtonGroup>
                            <ButtonGroup className="mr-2">
                                <Button onClick={() => props.addToBasketButtonEventHandler(props.product["shoe_id"], selectedSize)}>Add To Basket</Button>
                            </ButtonGroup>

                        </ButtonToolbar>

                    </Col>

                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

};

export default ProductInfoModal;