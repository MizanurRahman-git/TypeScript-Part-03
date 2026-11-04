class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

//   get baseSalary(): number {
//     return this._baseSalary;
//   }

  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be nagetive value");
    }
    this._baseSalary = newSalary;
  }

  describe() : string {
    return `${this.name} earns ${this.baseSalary}`
  }
}

class Manager extends Employee {
  constructor(name: string, _baseSalary: number, private _teamMemberCount: number) {
    super(name, _baseSalary);
  }

  get teamMemberCount(): number {
    return this.teamMemberCount
  }

  set teamMemberCount(members:number){
    this.teamMemberCount = members
  }

  describeWork():string {
    return `${this.name} manages ${this._teamMemberCount} peoples`
  }

  describeManager():string {
    return `${this.name} earns ${this._baseSalary}`
  }
}

const employee = new Employee("mizanur", 23000);
console.log(employee);
console.log(employee.describe());

const manager = new Manager("Rahman", 24000, 40);
console.log(manager);
console.log(manager.describeWork());
console.log(manager.describeManager());
