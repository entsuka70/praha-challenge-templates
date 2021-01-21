// todo: ここに単体テストを書いてみましょう！

import { sumOfArray } from "../functions";
import { asyncSumOfArray } from "../functions";
import { asyncSumOfArraySometimesZero } from "../functions";

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

test('async sum array sometimes zero', () => {
  let number1:number = 1;
  const mockDatabase = jest.fn();
  mockDatabase.mockReturnValueOnce(2);

  let insertNumber: number = number1 + mockDatabase();

  return asyncSumOfArraySometimesZero([insertNumber]).then(data => {
    expect(data).toEqual(3);
  });
});