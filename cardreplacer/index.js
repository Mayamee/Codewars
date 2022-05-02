function maskify(cc) {
  return cc
    .split("")
    .map((e, i) => (i > cc.length - 5 ? e : "#"))
    .join("");
}
const t1 = "4556364607935616";
const t2 = "1";
const t3 = "11111";
console.log(maskify(t1));
console.log(maskify(t2));
console.log(maskify(t3));
