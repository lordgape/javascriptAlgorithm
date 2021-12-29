const fetch = require("node-fetch");

const url = "https://inventory.zoho.com/api/v1/bills?organization_id=10234695";
// const url = "https://jsonplaceholder.typicode.com/todos/1";

const search = async (url) => {
  let response;
  try {
    response = await fetch(url);
    console.log("HURRAY",await response.json());
    console.log(`I got here`);
  } catch (error) {
    console.log(`ERROR - ${JSON.stringify(error)}`);
    // const jsonBody = await response.json();
    // console.log("jsonBody", jsonBody);
  }
};

search(url);
