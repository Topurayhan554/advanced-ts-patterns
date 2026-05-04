// conditional type: je type condition ar opr nirvor kore

type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

type Hasbike = CheckVehicle<"bike">;
