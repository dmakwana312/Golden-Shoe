import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart_actions'

const shoppingCart = JSON.parse(localStorage.getItem("cart"));

const INITIALSTATE = (shoppingCart === null ? [] : shoppingCart);

export default function cartReducer(state = INITIALSTATE, action = {}) {

    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload;
            const cart = state;

            return addToCart(cart, product);

        }
        case REMOVE_FROM_CART: {
            const product = action.payload;
            const cart = state;
            return removeFromCart(cart, product)
        }
        default: {
            return state;
        }
    }
}

const addToCart = (cart, product) => {
    var updatedCart = [...cart];
    updatedCart.push(product);
    updatePersistantStore(updatedCart);
    return updatedCart;
}

const removeFromCart = (cart, product) => {
    var updatedCart = [...cart];

    var indexToRemove = -1;
    for (var i = 0; i < updatedCart.length; i++) {
        if (updatedCart[i]["shoe_id"] === product["shoe_id"] && updatedCart[i]["size"] === product["size"]) {
            indexToRemove = i;
            break;
        }
    }

    if (indexToRemove !== -1) {
        updatedCart.splice(indexToRemove, 1);
        updatePersistantStore(updatedCart);
        return updatedCart;
    }

    return cart;
}

const updatePersistantStore = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}