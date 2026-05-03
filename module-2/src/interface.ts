type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

// const user1: UserWithRole = {
//   name: "Mr.X",
//   age: 100,
//   role: "admin",
// };

// const user2: IUser = {
//   name: "Mr.Y",
//   age: 102,
// };

// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}
const add: IAdd = (num1, num2) => num1 + num2;
