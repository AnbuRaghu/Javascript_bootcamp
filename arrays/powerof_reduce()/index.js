const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numbers);

// to return a doubled array we have to give an empty array as default param and we have to push that using acc.push() at the end we have return the accumulator..this is the exact operazion we can do in map()