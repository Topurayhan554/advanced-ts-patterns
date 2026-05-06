// oop: instance iof type guard / type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} study kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} ghonta class ne`);
  }
}

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student;
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(8);
  } else {
    user.getSleep(12);
  }
};

const student1 = new Student("Mr. Student");

const teacher1 = new Teacher("Mr. Mamun");
const person1 = new Person("Mr. Person");
getUserInfo(person1);
