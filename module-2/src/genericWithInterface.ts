interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandCharaWatch {
  heartRate: string;
  stopWatch: boolean;
}

const poorDeveloper: Developer<
  BrandCharaWatch,
  { brand: "Yamaha"; engineCapacity: "200cc" }
> = {
  name: "Mr. Poor",
  salary: 20000,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
};
interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 50000,
  device: {
    brand: "Hp",
    model: "X21",
    releasedYear: "2020",
  },
  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: null,
};
