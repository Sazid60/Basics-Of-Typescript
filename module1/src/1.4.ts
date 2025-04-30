//  Basic Data Types

//  String
let firstName: string = "Sazid";

//  Typescript is smart . Even If We Have not gave any type it will infer the data type from our value.
//  This is called typescript implicit data types

let lastName: string = "Sazid";
// we can also tell the data type explicitly

// Number
let roll: number = 123;

// Boolean

let isAdmin: boolean = true;

//  undefined

let x: undefined = undefined;

// Null

let y: null = null;

//  any Type

// If we do not declare and do not assign any value the typescript will infer as any type
//  We can keep any type of data ts will not mind
let d;
d = "Sazid";
d = true;

// Basically we should not use any type, if wer use this we will not get the facilities of ts

let p: number;

// p = "123"

//  Non-PRIMITIVE
// _________________________________________________________

// let friends = ["rachel", "monica"];
// Here as well ts will infer that its an array
// We can explicitly define the types

let friends: string[] = ["rachel", "monica"];
// friends.push(2);

let eligibleRoleList: number[] = [1, 2, 3, 4, 5];

//  Tuple

// Tuple type (Tuple can in pairs like 2,3,4 or any numbers of pairs)
// Tuple is also a special kind o9f array in which orders are  maintained of type of values

let coordinates: [number, number] = [1, 2];

// let ageName = [50, "Mr.Sazid"];
// if we want we can chang the value by grabbing the index and add another value in the array as well
// ageName[0] = "Mr.Sazid";
// this is not right

let ageName: [number, string, boolean] = [50, "Mr.Sazid", true];

// ageName[0] = "Mr.Sazid";

//  now we cant
