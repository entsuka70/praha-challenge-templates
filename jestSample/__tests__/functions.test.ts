// todo: ここに単体テストを書いてみましょう！

import { sumOfArray } from "../functions";
import { asyncSumOfArray } from "../functions";
import { DatabaseMock } from "../util/index";
import { asyncSumOfArraySometimesZero } from "../functions";
import { doesNotMatch } from "assert";

describe('Test sumOfArray', () => {
    test('adds 1 + 1 + 1 to equal 3', () => {
        expect(sumOfArray([1, 1, 1])).toBe(3);
    });

    test('adds 0 + 3 to equal 3', () => {
        expect(sumOfArray([0, 3])).toBe(3);
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(sumOfArray([1, 2])).toBe(3);
    });

    test('adds empty array', () => {
        expect(() => sumOfArray([])).toThrow('Error : Exception !!');
    });

    test('adds String array', () => {
        expect(() => sumOfArray(['1', 'Yes Error'])).toThrow('Error : Exception !!');
    });
});

describe('Test asyncSumOfArray', () => {
    test('async sum 1 + 1 + 1 to equal 3', () => {
        return asyncSumOfArray([-1, 4]).then(data => {
            expect(data).toEqual(3);
        });
    });

    test('async sum 10 -7 to equal 3', () => {
        return asyncSumOfArray([10, -7]).then(data => {
            expect(data).toEqual(3);
        });
    });
});

describe('Test asyncSumOfArraySometimesZero', () => {
    jest.mock('../util/index');
    const database = jest.mock('../util/index');

    test('async sum of array', () => {
        const dbIns = new DatabaseMock;
        dbIns.save();
        // const myDatabaseMockSum = database.fn();
        // myDatabaseMockSum.mockImplementation(() => {
        //     return {
        //         save: (() => {
        //         })
        //     }
        // });
        // return expect(asyncSumOfArraySometimesZero([1,2,3], myDatabaseMockSum)).resolves.toEqual(6);
        return expect(asyncSumOfArraySometimesZero([1,2,3])).resolves.toEqual(6);
    });
    test('async sum of array to zero', () => {
        const dbIns = new DatabaseMock;
        dbIns.save();
        // const myDatabaseMockZero = database.fn();
        // myDatabaseMockZero.mockImplementation(() => {
        //     return {
        //         save: (() => {
        //                 throw new Error ("fail!");
        //         })
        //     }
        // });
        // return expect(asyncSumOfArraySometimesZero([1,2], myDatabaseMockZero)).resolves.toBe(0);
        return expect(asyncSumOfArraySometimesZero([1,2])).resolves.toBe(0);
    });
});