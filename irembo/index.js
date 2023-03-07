const data = require("./events.json");

let allEvent = [];

const filterEventObject = (obj) => {
  if(obj.hasOwnProperty("events") && !(obj.events instanceof Array) ) {
    return filterEventObject(obj.events)
  }

  if(obj.hasOwnProperty("children")) {
   checkChildren(obj.children)
  }

  return false
}

checkChildren = (array) => {
  array.map((ele) =>  {
    if(ele.hasOwnProperty("events") && (ele.events instanceof Array)) {
      allEvent.push(...ele.events)
    } 

    if(ele.hasOwnProperty("children") ) {
      checkChildren(ele.children)
    } 

    return ele
  })
}

// nestedObject(data);
console.log(filterEventObject(data));
console.log(allEvent,allEvent.length);

