const Employee = require(`./employee`);


class Manager extends Employee {
  constructor(name, title, salary, boss) {
    super(name, title, salary, boss);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }
}




let annie = new Manager('Annie', 100000, 'Director')
let alvy = new Employee('Alvy', 75000, 'Analyst', annie)

console.log(annie)



module.exports = Manager;
