import { NameApiService } from "./nameApiService";
import { DatabaseMock } from "./util";

export const sumOfArray = (numbers: number[]): number => {
    if (Array.isArray(numbers) && numbers.length > 0) {
        numbers.map(value => {
            if (typeof value !== 'number') {
                throw new Error('Error : Exception !!');
            }
        });
        return numbers.reduce((a: number, b: number): number => a + b);
    } else {
        throw new Error('Error : Exception !!');
    }
};

export const asyncSumOfArray = (numbers: number[]): Promise<number> => {
    return new Promise((resolve): void => {
        resolve(sumOfArray(numbers));
    });
};

export const asyncSumOfArraySometimesZero = (
    numbers: number[],
    instance: any
): Promise<number> => {
    return new Promise((resolve): void => {
        try {
            const database = new instance;
            database.save();
            resolve(sumOfArray(numbers));
        } catch (error) {
            resolve(0);
        }
    });
};

export const getFirstNameThrowIfLong = async (
  maxNameLength: number,
  instance: any
): Promise<string> => {
  const nameApiSerivce = new instance;
  const firstName = await nameApiSerivce.getFirstName();

  if (firstName.length > maxNameLength) {
    throw new Error("first_name too long");
  }
  return firstName;
};
