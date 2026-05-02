type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "Male" | "Female";
  contactNum: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "Male",
  contactNum: "01744406554",
  address: {
    division: "Rangpur",
    city: "Dinajpur",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "Female",
  contactNum: "01888888",
  address: {
    division: "Rangpur",
    city: "Dinajpur",
  },
};

// function

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;
