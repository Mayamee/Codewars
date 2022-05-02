function createPhoneNumber(numbers) {
  return `(${numbers.splice(0, 3).join("")}) ${numbers
    .splice(0, 3)
    .join("")}-${numbers.splice(0, 4).join("")}`;
}
const t1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const t2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const t3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(t1));
console.log(createPhoneNumber(t2));
console.log(createPhoneNumber(t3));
