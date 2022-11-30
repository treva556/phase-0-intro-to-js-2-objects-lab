// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "14 south",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
    //   return employee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let result = Object.assign({}, employee);
    delete result[key];
    return result;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }