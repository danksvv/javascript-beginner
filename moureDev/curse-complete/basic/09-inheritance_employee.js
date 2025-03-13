/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  printInfo() {
    console.log(`ID: ${this.id}, Name: ${this.name}`);
  }

  printEmployees() {
    console.log("Employees:");
    this.employees.forEach((employee) => employee.printInfo());
  }
}

class Manager extends Employee {
  coordinate_projects() {
    console.log(`${this.name} is coordinating projects`);
  }
}

class ProjectManager extends Employee {
  constructor(id, name) {
    super(id, name);
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  coordinate_project() {
    console.log(`${this.name} is Project Manager of ${this.projects}`);
  }
}

class Programmer extends Employee {
  constructor(id, name, languages) {
    super(id, name);
    this.languages = languages;
  }

  code() {
    console.log(`${this.name} is coding in ${this.languages}`);
  }

  addEmployee() {
    console.log("Programmers can't have employees");
  }
}

(function () {
  const manager = new Manager(1, "Manager");
  const projectManager = new ProjectManager(2, "Project Manager");
  const projectManager2 = new ProjectManager(3, "Project Manager 2");
  const programmer = new Programmer(3, "Anna Redondo", [
    "JavaScript",
    "Python",
  ]);
  const programmer2 = new Programmer(4, "Javier Soller", ["Java", "C++"]);
  const programmer3 = new Programmer(5, "Theresa Petro", ["Ruby", "PHP"]);
  const programmer4 = new Programmer(6, "Sara Stiller", ["C#", "Go"]);

  manager.addEmployee(projectManager);
  manager.addEmployee(projectManager2);

  projectManager.addProject("Project 1");
  projectManager.addProject("Project 2");

  projectManager.addEmployee(programmer);
  projectManager.addEmployee(programmer2);

  projectManager2.addEmployee(programmer3);
  projectManager2.addEmployee(programmer4);

  manager.printEmployees();
  projectManager.printEmployees();

  programmer.addEmployee(manager);
  projectManager.coordinate_project();
})();
