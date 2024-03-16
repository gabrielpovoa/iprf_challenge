// script.js
const readline = require('readline');
const IncomeTaxCalculator = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your salary: ', (salary) => {
  const calculator = new IncomeTaxCalculator(parseFloat(salary));
  const tax = calculator.calculate();

  console.log(`The calculated tax is: ${tax.toFixed(2)}`);

  rl.close();
});