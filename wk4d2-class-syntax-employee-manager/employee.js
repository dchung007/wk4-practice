

class Employee {
  constructor(name, title, salary, manager) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.manager = manager;

    if (manager) manager.addEmployee(this);
  }
}

module.exports = Employee;
