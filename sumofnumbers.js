// eslint-disable-next-line no-unused-vars
const testNums = [1, 2, 3, 4, 5];

function sumFor(numArr) {
  let counter = 0;
  for (let i = 0; i < numArr.length; i++) {
    counter += numArr[i];
  }
  return counter;
}

function sumWhile(numArr) {
  let counter = 0;
  let i = 0;
  while (i < numArr.length) {
    counter += numArr[i];
    i++;
  }
  return counter;
}

function sumRecursion(numArr, index = 0) {
  if (index === numArr.length) {
    return 0;
  }
  return numArr[index] + sumRecursion(numArr, index + 1);
}
function sumTheSimpleWay(numArr) {
  return _.reduce(numArr, (sum, num) => sum + num, 0);
}

console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));
