const CTX = { name: "SomeCTX" };
const boundArr = (arr, ctx) => arr.map((elem) => elem.bind(ctx));
function f1() {
  console.log(this.name);
}
function f2() {
  console.log(this.name);
}
const arr = [f1, f2];
console.log(boundArr(arr, CTX));
arr.forEach((e) => {
  e();
});
