let anything: any;
anything = "Topu";

const kgToGMConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `converted output is : ${Number(value) * 1000}`;
  }
};

const result1 = kgToGMConverter(2);
const result2 = kgToGMConverter("2 kg");
console.log(result1, result2);
