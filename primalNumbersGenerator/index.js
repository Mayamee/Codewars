class Primes {
  static *stream() {
    for (let i = 2; true; i++) {
      if (this.isPrime(i)) {
        yield i;
      }
    }
  }
  static isPrime(n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i == 0) return false;
    }
    return true;
  }
}
console.time("primes");
for (const prime of Primes.stream()) {
  console.log(prime);
}
console.timeEnd("primes");
