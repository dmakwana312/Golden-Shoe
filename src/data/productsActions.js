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

export function filterByGender(products, gender){
    return (products.filter((shoe) => shoe.gender === {gender}));
}

export function getStyles(products){
        
    var styles = [];

    for (var i = 0; i < products.length; i++) {
        if(!styles.includes(products[i]["style_name"])){
            styles.push(products[i]["style_name"]);
        }
    }
    return styles.sort();
     

}