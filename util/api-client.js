const axios = require("axios").default;

module.exports = class ApiClient {
  static async post(
    url,
    body,
    requestHeaders = {
    }
  ) {
    try {
      console.log(`Making remote call`);

      let { status, headers, data } = await axios.post(
        url,
        body,
        requestHeaders
      );

      console.log(`Got here`);

      console.log(
        `POST: STATUS ${status} - HEADERS ${JSON.stringify(
          headers
        )} - DATA ${JSON.stringify(data)}`
      );

      return data;
    } catch (error) {
      throw new Error(`GET: ${url} - ERROR ${JSON.stringify(error)}`);
    }
  }
  static async get(url) {
    try {
      let { status, headers, data } = await axios.get(url);

      console.log(
        ` STATUS ${status} - HEADERS ${JSON.stringify(
          headers
        )} - DATA ${JSON.stringify(data)}`
      );

      return data;
    } catch (error) {
      throw new Error(`GET: ${url} - ERROR ${JSON.stringify(error)}`);
    }
  }
};
