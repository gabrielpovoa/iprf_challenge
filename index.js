// index.js
class IncomeTaxCalculator {
    constructor(salary) {
      this.salary = salary;
    }
  
    calculate() {
      if (this.salary <= 2259.2) {
        return 0;
      } else if (this.salary <= 2826.65) {
        return (this.salary * 0.075) - 169.44;
      } else if (this.salary <= 3751.05) {
        return (this.salary * 0.15) - 381.44;
      } else if (this.salary <= 4664.68) {
        return (this.salary * 0.225) - 662.77;
      } else {
        return (this.salary * 0.275) - 896;
      }
    }
  }
  
  module.exports = IncomeTaxCalculator;