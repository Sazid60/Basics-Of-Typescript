{
  //

  //   nullable type

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There Is Nothing To Search");
    }
  };

  searchName(null);
  //

  //   Unknown Type
  //  its like we do not know the type for now but we will know in future. in this case we will use "Unknown Type"

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The Speed Is ${convertedSpeed}`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      console.log(result);
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The Speed Is ${convertedSpeed}`);
    } else {
      console.log(`Wrong Input`);
    }
  };

  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond(`1000 kmh^-1`);
  getSpeedInMeterPerSecond(null);

  // never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("Mshkil Se Error Ho Gaya ");
}
