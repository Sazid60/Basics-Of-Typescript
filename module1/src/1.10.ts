{
  //
  // union Types
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper"; //this is string literal Types
  //   type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "C+";
  //   };

  //   const user1: User = {
  //     name: "persian",
  //     gender: "male",
  //     bloodGroup: "O+",
  //   };

  //   intersection
  type FrontendDeveloper = {
    skill: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skill: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skill: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
