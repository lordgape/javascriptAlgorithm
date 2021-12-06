const rotationCipher = (word, rotationFactor) => {
  const cipher = [];
  for (const char of word) {
    cipher.push(reverseCharacter(char, rotationFactor));
  }
  return cipher.join("");
};

const reverseCharacter = (c, rotationFactor) => {
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
    return ((c - 1 + rotationFactor) % 10) + 1;
  }

  return c;
};

// input = Zebra-493?
// rotationFactor = 3
// output = Cheud-726?

console.log(rotationCipher("All-convoYs-9-be:Alert1.", 4));
