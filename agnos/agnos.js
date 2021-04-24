const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsPDF = require("jspdf").jsPDF;
const fetch = require("node-fetch");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const convertToPDF = async (jsonString) => {
  const doc = new jsPDF();

  doc.text(jsonString, 10, 10);
  doc.save("mypdf.pdf");
};

app.get("/", async (req, resp) => {
  let httpResponse = await fetch("https://en.wikipedia.org/wiki/Node.js");
  let jsonString = await httpResponse.text();

  await convertToPDF(jsonString);

  resp.json({ code: "Success", msg: "File successfully created" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});