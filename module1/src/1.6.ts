// Functions are the building Blocks
// There are two types of functions in js
//   1. Normal Function
//   2. Arrow Function

//  Normal Function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(2, 3);

//  arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method
// when a function is written inside an object it is called method

const poorUser = {
  name: "Sazid",
  balance: 0,
  // inside object arrow function do not work since we have to use "this" so we are using anonyms normal function
  addBalance(balance: number): string {
    return `My new Balance Is ${this.balance + balance} `;
  },
};

// callback Function
const arr: number[] = [1, 2, 3, 4];

const newArray: number[] = arr.map((elem: number): number => elem * elem);
