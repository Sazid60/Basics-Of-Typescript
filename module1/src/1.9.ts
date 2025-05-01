{
  //
  // type alisa
  // const student1: {
  //   name: string;
  //   age: number;
  //   gender: string;
  //   contactNo: string;
  //   address: string;
  // } = {
  //   name: "Sazid",
  //   age: 50,
  //   gender: "male",
  //   contactNo: "01999999999999",
  //   address: "Dhaka",
  // };

  // const student2: {
  //   name: string;
  //   age: number;
  //   gender: string;
  //   address: string;
  // } = {
  //   name: "Bazid",
  //   age: 69,
  //   gender: "female",
  //   address: "Dhaka",
  // };

  // Defining types multiple times is a hassle so here comes the type alias with the solution
  // we will define types in one place and use it in different places
  // using type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Bazid",
    age: 69,
    gender: "female",
    address: "Dhaka",
  };

  const studen2: Student = {
    name: "Sazid",
    age: 50,
    gender: "male",
    contactNo: "01999999999999",
    address: "Dhaka",
  };

  // we can create variety of type alias

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Sazid";
  const isAdmin: IsAdmin = true;

  //  type alias in Function

  // without type alias
  const add = (num1: number, num2: number): number => num1 + num2;

  //  with type alias
  type Add = (num1: number, num2: number) => number;

  const add1: Add = (num1, num2) => num1 + num2;

  //
}
