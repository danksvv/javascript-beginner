// count cows and chickens in the farm

const paddedZero = (num) => {
  return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
};

// const printCowsAndChickens = (cows, chickens) => {
//   console.log(`Cows: ${paddedZero(cows)} Chickens: ${paddedZero(chickens)}`);
// };

const printFarmInventory = (cows, chickens, pigs) => {
  console.log(
    ` Cows: ${paddedZero(cows)}\n Chickens: ${paddedZero(chickens)}\n Pigs: ${paddedZero(pigs)}`,
  );
};

// printCowsAndChickens(7, 11);
printFarmInventory(7, 11, 3);
