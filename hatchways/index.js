const str1 = "abab";
const str2 = "bdbd";
// true. a -> b, b -> d

const str3 = "abab";
const str4 = "cdce";
// false. a -> c, b -> d, b -/> e

const str5 = "ccb";
const str6 = "aaa";
// false. c -> a, b -/> a

const isomorphic = (str1, str2) => {
  let mapper = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (mapper[str1.charAt(i)] && mapper[str1.charAt(i)] !== str2.charAt(i)) {
      return false;
    }

    if (
      !mapper[str1.charAt(i)] &&
      Object.values(mapper).includes(str2.charAt(i))
    ) {
      return false;
    }

    mapper[str1.charAt(i)] = str2.charAt(i);
  }

  return true;
};

console.log(isomorphic("abab", "bdbd"));
