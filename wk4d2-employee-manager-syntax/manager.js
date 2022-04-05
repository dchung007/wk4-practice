const Employee = require(`./employee`);

class Manager extends Employee {
  constructor(name, salary, title, manager = null) {
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }

  _totalSubSalary() {
    let sum = 0;
    for (let employee of this.employees) {
      if (employee instanceof Manager) {
        sum = sum + employee.salary + employee._totalSubSalary();
      } else {
        sum += employee.salary;
      }
    }
    return sum;
  }
}




module.exports = Manager;
