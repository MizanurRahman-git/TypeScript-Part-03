//TODO: Encapsulation: Protect a State and change it through methods.

//* Access Modifier

//? Public
//? Private
//? Protected

//? Readonly

class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonus():number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be nagetive value");
    }
    this._baseSalary = newSalary;
  }
}

const employee = new Employee("mizanur", 23000);
const employee2 = new Employee("Rahman", 24000);



console.log(employee.salaryWithBonus);
