{
  //  we will learn spread Operator
  // we will learn rest Operator
  //  We will Learn Destructuring
  const poorUser = {
    name: "Sazid",
  };

  // Spread Operator

  const bros1: string[] = ["Sazid", "Pazid", "Mazid", "Dazid"];
  const bros2: string[] = ["Tonmoy", "Monmoy", "Chonmoy", "Donmoy"];

  //   bros1.push(bros2)
  // this is not right method since it will end up in a messed array
  //   output : ["Sazid", "Pazid", "Mazid", "Dazid", ["Tonmoy", "Monmoy", "Chonmoy", "Donmoy"]];
  // this is wrong since we want to push the values only so we have to use spread operator
  bros1.push(...bros2);

  const mentor1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentor2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentor1,
    ...mentor2,
  };

  // Rest Operator

  //   const greetFriends = (friend1 :string,  friend2:string, friend3:string) =>{
  //       console.log(`Hi  ${friend1} ${friend2} ${friend3}`)
  //   }

  //   greetFriends('abul', 'kabul', 'babul')
  // here is a problem if friend increases we haver to declare parameters manually, this is not right, here rest operator comes with a solution

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi ${friend}`));
  };

  greetFriends("abul", "kabul", "babul");
}
