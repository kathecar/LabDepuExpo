const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('La division entre los dos numeros',() =>{
  expect(calculator.divide(10, 0)).toBe(0);
});

test('La division entre los dos numeros',() =>{
  expect(calculator.divide(10,2)).toBe(5);
});

test('La division entre los numeros',() =>{
  expect(calculator.divide(10,2,5)).toBe(1);
});

test('La mutiplicación  entre los  numeros',() =>{
  expect(calculator.multiply(10,2,3)).toBe(60);
});
test('La mutiplicación entre los dos numeros',() =>{
  expect(calculator.multiply(10,2)).toBe(20);
});