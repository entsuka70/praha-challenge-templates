// todo: ここに単体テストを書いてみましょう！

import { sumOfArray } from "../functions";
import { asyncSumOfArray } from "../functions";

test('adds 1 + 1 + 1 to equal 3', () => {
  expect(sumOfArray([1,1,1])).toBe(3);
});

test('adds 0 + 3 to equal 3', () => {
  expect(sumOfArray([0,3])).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sumOfArray([1,2])).toBe(3);
});

test('async sum 1 + 1 + 1 to equal 3', () => {
  return asyncSumOfArray([-1,4]).then(data => {
    expect(data).toEqual(3);
  });
});

test('async sum 10 -7 to equal 3', () => {
  return asyncSumOfArray([10, -7]).then(data => {
    expect(data).toEqual(3);
  });
});

// FAIL
test('async sum null', () => {
  return asyncSumOfArray([]).then(data => {
    expect(data).toEqual(3);
  });
});

// FAIL
test('async sum string3 to equal 3', () => {
  return asyncSumOfArray(['3']).then(data => {
    expect(data).toEqual(3);
  });
});
