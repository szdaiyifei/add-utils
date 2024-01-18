class MathOperator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  showResult() {
    console.log(`Result: ${this.result}`);
  }


}

const math = new MathOperator();
math.add(2, 3);
math.showResult(); // Output: Result: 5