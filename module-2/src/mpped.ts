// mapped types

const arrayOfNum: number[] = [1, 2, 3];
const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: T;
};

const area1: Area<{ height: string; width: string }> = {
  height: "40",
  width: "30",
};
