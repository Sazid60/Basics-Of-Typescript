{
  // Destructuring Details

  //  Object Destructuring
  const user = {
    id: 123,
    name: {
      firstName: "Shah",
      middleName: "Nawaz",
      lastName: "Sazid",
    },
    contactNo: "0170000000000",
    address: "Uganda",
  };

  const {
    id,
    name: { middleName },
  } = user;
  // while doing it if any spelling error it will say that this do not exist in type
  // we can use alias as well
  const {
    name: { middleName: midName },
    contactNo: PhoneNumber,
  } = user;
  // here we can not declare types while destructuring like this  const {name: { middleName: string }} = user; since ts can smartly detect the middleName should be which type

  // Array Destructuring

  const myFriends = ["chandler", "joey", "ross", "kosh", "singara", "bulbuli"];

  const [a, b, c, d, e, f] = myFriends; // output : "chandler", "joey", "ross", "kosh", "singara", "bulbuli"
  const [, , , , , besFriend] = myFriends; // output : "bulbuli"
  const [, , , , ganduFriend] = myFriends; // output : "singara"
  const [, , , , ...ganduFriends] = myFriends; // output : ["singara","bulbuli"]
  const [, , kharapBondu, ...rest] = myFriends; // output : kharapBondu = "ross" rest = ["kosh", "singara", "bulbuli"]
}
