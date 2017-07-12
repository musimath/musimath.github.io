class GCD {
  static gcd(a, b) {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }
}

class Fraction {
  constructor(num, den) {
    this.num = num;
    this.den = den;
    this.reduce();
  }

  // Reduces fraction to its lowest common denominator.
  reduce() {
    const gcd = GCD.gcd(this.num, this.den);
    this.num /= gcd;
    this.den /= gcd;
  }

  str() {
    return `${this.num} / ${this.den}`;
  }
}

console.log(new Fraction(242, 302).str());