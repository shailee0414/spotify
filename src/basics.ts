const firstNAme: string = 'SHIalee';

function func(a: number, b: number = 0): number {
  return a + b;
}

const format = (a: string, b: string | number): string => {
  return a + b;
};
const printFormat = (a: string, b: string | number): void => {
  console.log(a, b);
};

const promishFunction = (url: string): Promise<string> => {
  return Promise.resolve(`data from url ${url}`);
};

const introduction = (salutation: string, ...name: string[]): string => {
  return `${salutation}, ${name?.join(' ')}`;
};
//=====================HireOrder Function In Type Script======================

const printToFile = (text: string, callBack: (a: number) => void): void => {
  console.log(text);
  callBack(8);
};

// const arrayMutate = (
//   numbers: number[],
//   mutate: (num: number) => number,
// ): number[] => {
//   return numbers?.map(n => mutate(n * 10));
// };

type mutationType = (num: number) => number;
const arrayMutate = (numbers: number[], mutate: mutationType): number[] => {
  return numbers?.map(n => mutate(n * 10));
};

//return a function

const createAdder = (num1: number) => {
  return (num2: number) => num1 + num2;
};

//object interface
interface coordinate {
  a: number;
  b: number;
}

function parseCoordinates(ob: coordinate): coordinate {
  return {...ob};
}

let coord: coordinate = {
  a: 89,
  b: 89,
};
console.log(func(9, 9));
