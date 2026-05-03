// keyof : type operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type myVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle2 = "ship";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 22,
  name: "topu",
  address: {
    city: "ctg",
  },
};

const myId = user["id"];
const myName = user["name"];
const address = user["address"];

const gerPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result = gerPropertyFromObj(user, "name");
// console.log(result);

const product = {
  brand: "HP",
};

const result2 = gerPropertyFromObj(product, "brand");
console.log(result2);
