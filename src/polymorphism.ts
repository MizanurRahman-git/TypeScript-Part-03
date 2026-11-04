class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be nagetive value");
    }
    this._baseSalary = newSalary;
  }

  calculatePay(taxRate: number) {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

class Manager extends Employee {
  override calculatePay() {
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }

  calculatePay(taxRate:number):number {
    return this.baseSalary + 3000 - this.baseSalary * taxRate
  }
}

const employee = new Employee("Mizanur", 90000);
const manager = new Manager("Rahman", 100000);
const developer = new Developer("Hridoy", 20000, "Front-end");

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.01));
