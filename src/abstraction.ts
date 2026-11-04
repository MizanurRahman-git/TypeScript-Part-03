//TODO: Abstraction:-> Every Employee must define how their pay is calculator

abstract class Employee {
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

  abstract calculatorPay():number
}


class Manager extends Employee {
    calculatorPay(){
        return this.baseSalary
    }
}

class Developer extends Employee {
    calculatorPay(){
        return this.baseSalary
    }
}



const manager = new Manager("Mizanur", 55000)
const developer = new Developer("Rahman", 45000)


console.log(manager.calculatorPay());
console.log(developer.calculatorPay());
