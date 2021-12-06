const test = (c = 9, rotationFactor = 3) => {
  if (/[A-Z]/.test(c)) {
    const reverseChar =
      ((c.charCodeAt(0) - "A".charCodeAt(0) + rotationFactor) % 26) +
      "A".charCodeAt(0);

    return String.fromCharCode(reverseChar);
  }

  if (/[a-z]/.test(c)) {
    const reverseChar =
      ((c.charCodeAt(0) - "a".charCodeAt(0) + rotationFactor) % 26) +
      "a".charCodeAt(0);

    return String.fromCharCode(reverseChar);
  }

  if (/[0-9]/.test(c)) {
    console.log("0-9");
    return (c + rotationFactor) % 10;
  }

  return c;
};

console.log(test());
