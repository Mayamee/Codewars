multiplicationTable = function (size) {
  const cols = [];
  for (let i = 1; i < size + 1; i++) {
    let rows = [];
    for (let j = 1; j < size + 1; j++) {
      rows.push(i * j);
    }
    cols.push(rows);
  }
  return cols;
};

console.log(multiplicationTable(1));
