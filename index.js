const employee = {
    name : "Glory",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value)  {
   let employ = {...employee}
   employ[key] = value
   return employ
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value
   return employee
}

function deleteFromEmployeeByKey(employee, key) {
   let newEmployee = {...employee}
   delete newEmployee[key]
   return newEmployee
} 

function destructivelyDeleteFromEmployeeByKey(employee,key) {
   delete employee[key]
   return employee
}
