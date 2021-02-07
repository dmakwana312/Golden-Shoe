import React from 'react';
import { Modal, Table, Image, Button } from 'react-bootstrap';
import { getAllProducts } from '../../data/productsActions';

import './style.css';

const getProduct = (shoe_id) => {
    return getAllProducts().filter(product => product["shoe_id"] === shoe_id)[0];
}

const ShoppingCartModal = (props) => {
    var total = 0;
    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => props.hide(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Shopping Cart
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="shoppingCart">
                    <Table className="table" responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Item</th>
                                <th>Size</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody >

                            {props.shoppingCart.length === 0 ?
                                <th className="noItemsMessage" colSpan="5">You have no items in your basket</th>
                            :
                                props.shoppingCart.map((data, key) => {
                                    var product = getProduct(data["shoe_id"]);
                                    total += (parseFloat(product["price"]));
                                    return (
                                        <tr key={key}>
                                            <td><i className="deleteButton fa fa-trash-o" onClick={() => props.deleteFromCartAction(data["shoe_id"], data["size"])}></i></td>
                                            <td><Image className="productImageShoppingCart" src={product["image_url"]} /></td>
                                            <td>{product["shoe_name"]}</td>
                                            <td>{data["size"]}</td>
                                            <td>{product["price"]}</td>
                                        </tr>
                                    );
                                })}
                            <tr>
                                <td></td>

                                <td></td>
                                <td></td>
                                <th>Total</th>
                                <th>£{total.toFixed(2)}</th>
                            </tr>

                        </tbody>
                    </Table>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.hide()}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default ShoppingCartModal;
