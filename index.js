class Person {
  constructor(full_name, money, sleep_mood, health_Rate) {
    this.full_name = full_name;
    this.money = money;
    this.health_Rate = health_Rate;
    this.sleep_mood = sleep_mood;
    this._health_Rate
  }

  getHealth_Rate() {
    return this._health_Rate
  }

  setHealth_Rate(value) {
    this._health_Rate = value
    if (0 < value < 100) this._health_Rate
  }
  Sleep(hours) {
    if (hours == 7) {
      this.sleep_mood = 'happy';
      return this.sleep_mood
    }
    else if (hours > 7) {
      this.sleep_mood = 'lazy';
      return this.sleep_mood
    }
    else if (hours < 7) {
      this.sleep_mood = 'tired';
      return this.sleep_mood
    }
  }
  Eat(meals) {
    if (meals == 3) {
      this.health_Rate = '100% health rate';
      return this.health_Rate
    }
    else if (meals == 2) {
      this.health_Rate = '75% health rate';
      return this.health_Rate
    }
    else if (meals == 1) {
      this.health_Rate = '50% health rate';
      return this.health_Rate
    }
  }
  buy(items) {
    if (items == 1) {
      this.money = 'decrees Money 10 LE';
      return this.money
    }
    for (items == 1; items > 1; items++) {
      this.money = ("Decrease money by " + items * 10 + "LE for buying" + items + "items");
      return this.money;

    }

  }
}
class Employee extends Person {

  constructor(full_name, money, sleep_mood, health_Rate, id, email, workMood, salary, isManager) {
    super(full_name, money, sleep_mood, health_Rate);
    this.id = id;
    this.email = email;
    this.workMood = workMood;
    this.salary = salary;
    this.isManager = isManager;
    this._salary
  }

  getsalary() {
    return this._salary
  }

  setsalary(value) {
    this._salary = value
    if (value < 1000) this._salary = 1000
  }


  Work(hours) {
    if (hours == 8) {
      this.workMood = 'happy';
      return this.workMood
    }
    else if (hours < 8) {
      this.workMood = 'lazy';
      return this.workMood
    }
    else if (hours > 8) {
      this.workMood = 'tired';
      return this.workMood
    }

  }
}


class Office {

  constructor(name) {
    this.name = name;
    this.employees = []
  }
  getAllEmployees() {
    alert(JSON.stringify(this.employees));
    console.table(this.employees)
    return this.employees;

  }
  getEmployee(id) {

     return this.employees.find(obj => obj.id === id);


  }
  hire() {
    var employee = new Employee();
    employee.id = prompt("enter your id");
    employee.full_name = prompt("enter full-name");
    employee.email = prompt("enter your email");
    employee.Eat(prompt("enter no. your meals"));
    employee.Sleep(Number(prompt("enter the hours you sleep")));
    employee.Work(prompt("enter the hours you work"));
    employee.setsalary(Number(prompt("enter the salary")));
    employee.buy(prompt("enter the number of items you bought"))
    this.employees.push(employee);
    return this.employees;
  }
  fire() {
    var id = Number(prompt("Please enter the employee id to remove : "));
    var removeIndex = this.employees.map(function (item) { return item.id; }).indexOf(id);
    this.employees.splice(removeIndex, 1);

  }
}

var office = new Office();

var stopp = true;

do {
  var input = prompt(`Choose what do you want to search about
      (For adding new employee enter “add”
      If manager press “mngr”  
      if normal employee press “nrml”
     
      “q” to quit)`);

  if (input == "add") {
    office.hire();

  }
  else if (input == "mngr") {
    var val = prompt(" if you want to fire employee press “fire” or “list” to get all")
    if (val == "fire")
      office.fire();
    else if ("list") {
      office.getAllEmployees();
    } else {
      alert("error input")
    }

  }
  else if (input == "nrml") {
    id = prompt("enter the id")
    var result = office.getEmployee(id);
    delete result._salary;
    alert(JSON.stringify(result))
  }
  else if (input == "q") {
    stopp = false;
  }
  

} while (stopp)















































