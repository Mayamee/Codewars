function Event() {
  this.store = [];
}

Event.prototype.subscribe = function (fnc) {
  if (!this.store.includes(fnc)) {
    this.store.push(fnc);
  }
};
Event.prototype.emit = function (...args) {
  for (const func of this.store) {
    func(...args);
  }
};
Event.prototype.unsubscribe = function (fnc) {
  this.store = this.store.filter((e) => e !== fnc);
};

const _event = new Event();

function logger(...args) {
  args.forEach((e) => console.log(e));
}

function summator(...args) {
  console.log(args.reduce((acc, cur) => acc + cur, 0));
}
_event.subscribe(logger);
_event.subscribe(logger);
_event.subscribe(summator);
console.log(_event.store);
_event.unsubscribe(summator);
console.log(_event.store);

// _event.emit(1, 2, 3);
