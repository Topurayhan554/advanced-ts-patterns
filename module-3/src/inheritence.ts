class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumay`);
  }
}

class Student extends Parent {}

const student1 = new Student("Mr Faki Baz", 16, "Bangladesh");
student1.getSleep(15);

class Teacher extends Parent {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass() {
    console.log(`{this.name} eto ghonta class ne`);
  }
}

const teacher1 = new Teacher(
  "Mr. Smart Teacher",
  25,
  "Bangladesh",
  "Senior Teacher",
);

teacher1.takeClass();
