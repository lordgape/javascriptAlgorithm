const countries = [
  { country: "Aruba", prop1: "v1" },

  { country: "Aruba", size: "small" },

  { country: "Canada", prop1: "v1" },

  {
    country: "Aruba",
    fruit1: "orange",
    fruit2: "pear",
    fruit3: "apple",
    fruit4: "banana",
  },

  { country: "Germany", color: "white", shape: "square" },

  { country: "Canada", prop2: "v2", prop3: "v3", propN: "vn" },

  { country: "Germany", size: "big" },
];

// expected result

//[

// { country: "Canada", prop1: “v1”, prop2: “v2”, prop3: “v3”, propN: “vn” },

// { country: "Germany", color: "white”, shape: “square”, size: "big"  },

// { country: "Aruba", fruit1: "orange”, fruit2: “pear”, fruit3: “apple”, fruit4: “banana”, size: "small”, prop1: “v1”}

//];

const countryprop = countries.reduce((acc, cur) => {
  if (cur.country in acc) {
    const storeValue = acc[cur.country];
    acc[cur.country] = { ...cur, ...storeValue };
  } else {
    const { country, ...rest } = cur;
    acc[cur.country] = rest;
  }

  return acc;
}, {});

console.log(countryprop);
