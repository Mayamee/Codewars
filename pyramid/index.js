function pyramid(n) {
  const col = [];
  for (let i = 1; i < n + 1; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(1);
    }
    col.push(row);
  }
  return col;
}
console.log(pyramid(3));
function pyramid1(n) {
  return Array(n)
    .fill()
    .map((e, i) => Array(i + 1).fill(1));
}
console.log(pyramid1(3));
