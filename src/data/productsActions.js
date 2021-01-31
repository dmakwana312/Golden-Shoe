export function getAllProducts(){
    var products = require('./products.json');
    return products["shoes"];
}

export function sortDisplayOrderByPrice(products, direction){

    if(direction==="ascending"){
        products.sort((a, b) => a.price - b.price);
    }
    else if(direction==="descending"){
        products.sort((a, b) => b.price - a.price);
    }

    return products;

}