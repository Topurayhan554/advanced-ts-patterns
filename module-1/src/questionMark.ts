// ? : ternary operator
// ?? : nullish coalescing
//?. optional chining

const biyerJnnoEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log("You are eligible");
  //   } else {
  //     console.log("Not eligible");
  //   }

  const result = age >= 21 ? "You are eligible" : "You are Not eligible";
  console.log(result);
};

biyerJnnoEligible(20);

const userTheme = "Green";
const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest";

const resultWithNulish = isAuthenticated ?? "You are guest";

console.log({ resultWithTernary }, { resultWithNulish });

// option chining
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
