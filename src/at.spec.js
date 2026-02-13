import {fibonacci}  from './homework.js'
describe('Calculator unit tests', ()=>{
test('Положительное число', () => {
  expect(fibonacci(2)).toBe(1);
});
test('Отрицательное число', () => {
  expect(fibonacci(-4)).toBe(-3);
});
test('Текст', () => {
  expect(fibonacci(-1)).toBe('Номер не может быть отрицательным');
});
test('Проверка на 0', () => {
  expect(fibonacci(0)).toBe(0);
});
test('Проверка на неверное число', () => {
  expect(fibonacci(99999999999)).toBe(1);
});
})