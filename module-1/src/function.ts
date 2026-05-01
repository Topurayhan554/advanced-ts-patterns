// Function
// arrow function, normal function

function add(number1: number, number2: number): number {
  return number1 + number2;
}

const add2 = (num1: number, num2: number): number => num1 + num2;
// console.log(add2(2, 3));
add(2, 2);

// object => function

const poorUser = {
  name: "Topu",
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};

poorUser.addBalance(1000);

const arr: number[] = [1, 2, 3, 4];
const sqrArray = arr.map((elem: number): number => elem * elem);
