"use strict";
const Formatter = require("./util/formatter");

const [ , ,userInput1, userInput2 ] = process.argv;

let payload = {
  "calc:Multiply": {
    "calc:intA": userInput1,
    "calc:intB": userInput2,
  },
};

const result = Formatter.convertJsonToSoapRequest(payload);

console.log(`Here is mmy result`, result);
