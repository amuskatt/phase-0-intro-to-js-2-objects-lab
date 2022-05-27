const employee = {
    name: "Adam",
    streetAddress: "123 Street"
};
function updateEmployeeWithKeyAndValue (object, key, value) {
   const employees = {...employee};
   employees[key] = "Sam", 
   employees[key] = "11 Broadway";
    return employees;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;

}