{
  //
  //   - " ? " This bad boy will be called in different names based on the usages

  // 1. When "?" is used for making decision it is called ternary operator
  // 2. If a property is exist or not check by "?" is called optional chaining
  // 3. "?" it can be used as nullish Coalescing Operator

  const age: number = 15;
  // bangla niom
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  //   using ternary operator
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log(isAdult);

  //   - Nullish Coalescing Operator
  //   1. When Decision is made based on Null or Undefined Nullish is used
  //   2. If the value is n ull or undefined we will set a default value then we will use nullish

  const isAuthenticated = undefined;

  //   nullish
  const result1 = isAuthenticated ?? "Guest";

  //   difference with ternary
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      permanentAddress?: string;
      presentAddress: string;
    };
  };
  const user: User = {
    name: "Persian",
    address: {
      city: "CTG",
      road: "Rasta",
      presentAddress: "Prithibi",
    },
  };

  //   optional Chaining
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });
  //
}
