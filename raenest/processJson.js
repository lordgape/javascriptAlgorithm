const { json } = require("body-parser");
const fs = require("fs");
const results = [];

const dayjs = require("dayjs");
const duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

const rawData = require("./raw.json");

const process = () => {
  console.log(`Total property to process ${rawData.length}`);
  rawData.map((data) => {
    const mydate = dayjs(data["Date created"]);
    const difference = dayjs.duration(mydate.diff(dayjs()));

    // Get the absolute value because of we looking at month over two month ago
    if (Math.abs(difference.asMonths()) >= 2) {
    //   console.log(JSON.stringify(data));
      delete data["Date created"];
      results.push(data);
    }
  });
  console.log(`Total property after process ${rawData.length}`);
  createDoc();
};

const createDoc = () => {
  const writeStream = fs.createWriteStream(
    "/home/chesvic/Documents/javascript-projects/quick/raenest/account.json"
  );

  writeStream.write(JSON.stringify(results));
};

process();
