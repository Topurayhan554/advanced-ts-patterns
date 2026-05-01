// array, object
// ts - tuple

let bazarList: string[] = ["Eggs, Milk, Sugar"];

let mixedArray: (string | number)[] = ["Eggs", 12, "Milk", 2, "Sugar", 5];
mixedArray.push("Mango");
mixedArray.push(10);
mixedArray.push(true);

let coordinates: [number, number] = [20, 30, 40];
let couple: [string, string] = ["husband", "wife"];

// reference type - object

const user: {
  readonly organization: "Programming-Hero"; // access modifier
  // value => type literal type
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming-Hero",
  firstName: "Topu",
  lastName: "han",
  isMarried: true,
};

user.firstName = "Ray";
console.log(user.firstName);
