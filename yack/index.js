function curried(...args) {
  console.log("INVOKED");
  if (args.length >= func.length) {
    return func.apply(this, args);
  } else {
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  }
}

function yack(func, ...args0) {
  if (args0.length >= 3) {
    return func(args0);
  }
  if (func.state !== undefined) {
    func.state.args.push(...args0);
  } else {
    func.state = {
      args: [...args0],
    };
  }
  return curried;
}
function add(a, b, c) {
  return a + b + c;
}
let a = 1,
  b = 2,
  c = 3;

const curryPartial = yack;
console.log(curryPartial(curryPartial(curryPartial(add, a), b), c, b));
//!!!!!! NOT WORKING
