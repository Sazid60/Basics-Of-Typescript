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
