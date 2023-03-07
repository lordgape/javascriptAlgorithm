const { json } = require("body-parser");
const csv = require("csv-parser");
const fs = require("fs");
const results = [];

const dayjs = require("dayjs");
const duration = require("dayjs/plugin/duration");
dayjs.extend(duration);
let count = 0

const process = () => {
  fs.createReadStream("/home/chesvic/Documents/javascript-projects/quick/raenest/account.csv")
    .pipe(csv())
    .on("data", (data) => {
      const mydate = dayjs(data.created_at);
      const difference = dayjs.duration(mydate.diff(dayjs()));
      count++;

      // Get the absolute value because of we looking at month over two month ago
      if (Math.abs(difference.asMonths()) >= 2) {
        console.log(JSON.stringify(data));
        delete data.created_at;
        results.push(data);
      }
    })
    .on("end", () => {
      console.log(count,results.length);

      const writeStream = fs.createWriteStream(
        "/home/chesvic/Documents/javascript-projects/quick/raenest/account.json"
      );

      writeStream.write(JSON.stringify(results));

      // [
      //   { NAME: 'Daffy Duck', AGE: '24' },
      //   { NAME: 'Bugs Bunny', AGE: '22' }
      // ]
    });
};

process();
