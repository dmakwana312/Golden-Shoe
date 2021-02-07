import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from '../Components/HomePage/HomePage';
import ComingSoonPage from '../Components/ComingSoonPage/ComingSoonPage';
import ProductsPage from '../Components/ProductsPage/ProductsPage';
import { addToCartAction, deleteFromCartAction } from '../redux/actions/cart_actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const mapStateToProps = ({ cart }) => {
    return {
        cart
    }
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        addToCartAction,
        deleteFromCartAction
    }, dispatch)
}

function App(props) {
    const { cart, addToCartAction, deleteFromCartAction } = props;

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/products">
                        <ProductsPage cart={cart} deleteFromCartAction={deleteFromCartAction} addToCartAction={addToCartAction} />
                    </Route>
                    <Route path="/myaccount">
                        <ComingSoonPage cart={cart} deleteFromCartAction={deleteFromCartAction} title="My Account" />
                    </Route>
                    <Route path="/about">
                        <ComingSoonPage cart={cart} deleteFromCartAction={deleteFromCartAction} title="About" />
                    </Route>
                    <Route path="/contact">
                        <ComingSoonPage cart={cart} deleteFromCartAction={deleteFromCartAction} title="Contact Us" />
                    </Route>
                    <Route path="/">
                        <HomePage cart={cart} deleteFromCartAction={deleteFromCartAction} />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default connect(mapStateToProps, mapActionsToProps)(App);
