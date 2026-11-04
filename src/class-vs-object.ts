class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee = new Employee("mizanur", 23000);
const employee2 = new Employee("Rahman", 24000);
const employee3 = new Employee("Hridoy", 25000);

console.log(employee);
console.log(employee2);
console.log(employee3);

console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);
console.log(employee3 instanceof Employee);
