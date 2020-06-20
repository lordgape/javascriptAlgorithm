'use strict';


function priceCheck(products, productPrice, productSold, soldPrice) {



    let productPriceRegister = products.reduce((accumulator, currentElement, currentIndex) => {

        accumulator[currentElement] = productPrice[currentIndex];

        return accumulator;

    }, {});


    return productSold.filter((element,currentIndex) => {
        
       return productPriceRegister[element] != soldPrice[currentIndex];
    }).length;

    
}


let products = ["egg", "yam", "bean"];

let productPrice = [20.00, 30.00, 40.01];

let productSold = ["egg", "yam",];

let soldPrice = [20.10, 30.10];



console.log(`Calling Price check ${priceCheck(products, productPrice, productSold, soldPrice)}`);



function manipulateStudentRecord(obj, operation, prop, newValue) {

    if (operation == "delete" && Object.prototype.hasOwnProperty.call(obj, prop)) {
        delete obj[prop];
    }

    if (operation == "edit" && Object.prototype.hasOwnProperty.call(obj, prop)) {
        obj[prop] = newValue;
    }


    return obj;
}

let myObj = {

    hasOwnProperty: function (myprop) {
        return false;
    },
    name: "John",
    lastname: "Doe",
    city: "Florida",
    "": null
};

//console.log(`Manipulate Record ${JSON.stringify(manipulateStudentRecord(myObj,"delete","name","Seatle"))}`);
