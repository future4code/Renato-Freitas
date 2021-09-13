let counter = 0;
export const houseRobberRecursive = (input: number[]): number => {
  function stealFromHouse(index: number) {
    if (index >= input.length) {
      counter++;
      return 0;
    }
    return Math.max(input[index] + stealFromHouse(index + 2), stealFromHouse(index + 1));
  }
  return stealFromHouse(0);
}

console.log(houseRobberRecursive([3, 1, 2, 5, 4, 2]));
console.log(houseRobberRecursive([1, 2, 3, 1]));
console.log(houseRobberRecursive([2, 7, 9, 3, 1]));
console.log(houseRobberRecursive([2, 3, 6, 12, 3, 9, 11, 4]));



let results = {};
let array = [];

for (let i = 0; i <= 20; i++) {
  houseRobberRecursive(array);
  results[i] = counter;
  counter = 0;
  array.push(i);
}


//console.log(results);


