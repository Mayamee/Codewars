function Event() {}
(() => {
  const store = [];
  Event.prototype.subscribe = function (...fncs) {
    fncs = fncs.filter(
      (e) => Object.prototype.toString.call(e) === "[object Function]"
    );
    store.push(...fncs);
  };

  Event.prototype.unsubscribe = function (...fncs) {
    fncs.forEach((fnc) => {
      const index = store.lastIndexOf(fnc);
      store.splice(index, index == -1 ? 0 : 1);
    });
  };

  Event.prototype.emit = function (...args) {
    // const outSideCTX = this;
    for (const fnc of store) {
      fnc(...args);
    }
  };
})();

// TODO https://ru.stackoverflow.com/questions/516479/javascript-%D0%BF%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5
// https://www.codewars.com/kata/52d4678038644497e900007c/train/javascript
const e = new _Event();

function l(arr) {
  arr.push("l");
}
function o(arr) {
  arr.push("o");

  // console.log("o this: ", this);
}
function f1(arr) {
  arr.push("f1");
}
function f2(arr) {
  arr.push("f2");
}
function f3(arr) {
  arr.push("f3");
}
function f4(arr) {
  arr.push("f4");
}
function f5(arr) {
  arr.push("f5");
}
let bucket = [];
console.log("Subscribe f1-f5");
e.subscribe(f3, f1, f2, f3);
console.log("Emit");
e.emit(bucket);
console.log(bucket);
console.log("Unsubscribe f2 f3 f3");
e.unsubscribe(f2, f3, f3);
bucket = [];
console.log("Emit");
e.emit(bucket);
console.log(bucket);
