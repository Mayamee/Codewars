function sortArray(array) {
  let even = [];
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }
  even = even.sort((a, b) => b - a);
  odd = odd.sort((a, b) => a - b);
  return array.map((e) => (e % 2 === 0 ? even.shift() : odd.shift()));
}
console.log(sortArrayEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
