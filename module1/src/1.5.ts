// Reference Type --> Object

//  this is implicit type
// const user = {
//   firstName: "Sazid",
//   middleName: "Abedin",
//   lastName: "Persian",
// };

// explicit  and optional type
const user: {
  // company: "Programming Hero"; // this programming hero will become a type
  //  this type can be made using read only as well
  readonly company: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero", // if we ant to write anything else except the defined literal types it will show type error
  firstName: "Sazid",
  lastName: "Persian",
  isMarried: true,
};

// we can access the properties form the object. If we define a object in one file and export we can access any property of the object in any other files like this

// user.company = "PH"; // cant change because it is made readonly
user.firstName;
user.isMarried;
user.lastName;
user.middleName;
