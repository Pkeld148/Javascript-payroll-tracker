// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let employeeInfo = {
    firstName: "",
    lastName: "",
    salary: 0,
  };

  getInfo();

  function getInfo() {
    let employeeInfo = {
      firstName: "",
      lastName: "",
      salary: 0,
    };
    employeeInfo.firstName = prompt("First Name?");
    employeeInfo.lastName = prompt("Last Name?");
    employeeInfo.salary = prompt("Salary?");
    let addMore = confirm("Would you like to add more employees?");

    if (addMore) {
      employeesArray.push(employeeInfo);
      getInfo();
    } else {
      employeesArray.push(employeeInfo);
    }
  }
  console.log(employeesArray);
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let salaryTotal = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    salaryTotal += +employeesArray[i].salary;
  }
  let salaryAverage = salaryTotal / employeesArray.length;
  console.log("AVERAGE SALARY: ", salaryAverage);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  console.log("GETTING RANDOM EMPLOYEE INFO:");
  let randomNumber = Math.floor(Math.random() * employeesArray.length);
  console.log("First Name: ", employeesArray[randomNumber].firstName);
  console.log("Last Name: ", employeesArray[randomNumber].lastName);
  console.log("Salary: ", employeesArray[randomNumber].salary);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
