// In this exercise, we'll implement a simple declarative API for
// transforming objects according to a specification or schema.

// Here's an API response I received (or a SQL row, or...):
const input = {
  name: {
    first: "Alan",
    last: "Watts",
  },
  born: "1915-01-06",
  location: "London",
};

// My internal interface for this object is different, I need to
// transform it into a version that looks like this:
const output = {
  name: "Watts",
  born: new Date("1915-01-06"),
  location: {
    city: "London",
  },
};

// I don't want to write all the property assignments. I'll *describe*
// the changes I want, `transform()` will implement them:
const mapping = [
  // Map value of `input.name.last` to `output.name`
  {
    inputPath: ["name", "last"],
    outputPath: ["name"],
  },
  // Map value of `input.location` to `output.location.city`
  {
    inputPath: ["location"],
    outputPath: ["location", "city"],
  },
  // Map value of `input.born` to `output.born` as a `Date`
  {
    inputPath: ["born"],
    outputPath: ["born", (d) => new Date(d)],
  },
];

/**
 * Transform `obj` according to `mapping` and return result.
 *
 * @param {object} obj
 * @param {[object]} list of objects describing field mapping
 */
function transform(obj, mapping) {
  let out = {};

  // This is the type of assignment `transform()` should *replace*
  // Implement a routine that interprets `mapping` to populate `out`
  // according to `inputPath` and `outputPath`
  // out.name = obj.name.last;

  let allOutput = mapping.map((item) => item.outputPath);

  let allInput = mapping.map((item) => item.inputPath);

  for (let i = 0; i < allInput.length; i++) {
    let inputValue = allInput[i].reduce((acc, val) => {
      return acc[val];
    }, obj);

    let ref = {};
    let keyValue = allOutput[i].reduce((acc, val, index) => {
      if (typeof val === "function") {
        acc[allOutput[i][index - 1]] = val(inputValue);
      } else if (index > 0) {
        acc[allOutput[i][index - 1]] = { [val]: inputValue };
      } else {
        acc[val] = inputValue;
      }

      // console.log(acc);
      return acc;
    }, {});

    out = { ...out, ...keyValue };
  }

  return out;
}

console.log(transform(input, mapping));

// The exercise is complete when `npm test` passes!
// Switch to the "Shell" tab to run the test command.

module.exports = { input, output, mapping, transform };
