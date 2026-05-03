// dynamically generalize

type GenericArray<value> = Array<value>;

// const friends: string[] = ["Mr.X", "Mr.Y", "Mr.z"];
const friends: GenericArray<string> = ["Mr.X", "Mr.Y", "Mr.z"];

// const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

// object

type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 24,
  },
];
