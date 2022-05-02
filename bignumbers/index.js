function add(a, b) {
  a = [...a].reverse();
  b = [...b].reverse();
  for (let i = 0; i < b.length; ++i) {
    if ((a[i] = ~~a[i] + ~~b[i]) > 9) {
      a[i] -= 10;
      b[i + 1] = ~~b[i + 1] + 1;
    }
  }

  return a.reverse().join("");
}
console.log(add("99999", "1"));
