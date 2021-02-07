export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCartAction(shoe_id, size) {
    return {
        type: ADD_TO_CART,
        payload: { shoe_id, size }
    }
}

export function deleteFromCartAction(shoe_id, size) {
    return {
        type: REMOVE_FROM_CART,
        payload: { shoe_id, size }
    }
}