const jsonxml = require("jsontoxml");
const parseString = require("xml2js").parseString;
const { promisify } = require("util");

const promisfiedParseString = promisify(parseString);

module.exports = class Parser {
  static parseJSONBodyToXML(jsonArgument) {
    return jsonxml(jsonArgument, { html: true });
  }

  static async convertXMLToJSON(xmlMessage) {
    const options = { trim: true, explicitArray: false, explicitRoot: false };
    return promisfiedParseString(xmlMessage, options);
  }
};
