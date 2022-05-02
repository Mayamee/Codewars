function rgb(r, g, b) {
  return [r, g, b]
    .map((e) => {
      e = e > 255 ? 255 : e;
      e = e < 0 ? 0 : e;
      return e.toString(16).toUpperCase();
    })
    .map((e) => (e.length === 1 ? 0 + e : e))
    .join("");
}
console.log(rgb(20, -20, 20));
