const Parser = require("./parser");

module.exports = class Formater {
  static convertJsonToSoapRequest(jsonArguments) {
    let soapBody = Parser.parseJSONBodyToXML(jsonArguments);

    return `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:calc="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
            ${soapBody}
        </soapenv:Body>
        </soapenv:Envelope> `;
  }
};
