const sentence =
  "i want to count the number of f's in this sentence and F with a function";

// const countFs = (sentence) => {
//   let count = 0;
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i].toLocaleLowerCase() === "f") count++;
//   }
//   return count;
// };
//
// console.log(countFs(sentence)); // 6

const countCharacters = (sentence, character) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    // if (sentence[i].toLocaleLowerCase() === character.toLocaleLowerCase())
    if (sentence[i] === character) count++;
  }
  return count;
};

console.log(countCharacters(sentence, "f")); // 6
