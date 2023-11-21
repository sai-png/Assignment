// EmployeeManagementSystem.js
import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import './EmployeeManagementSystem.css';

const EmployeeManagementSystem = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: Date.now() }]);
  };

  const deleteEmployee = (employeeToDelete) => {
    const updatedEmployees = employees.filter((employee) => employee !== employeeToDelete);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="employee-management-system">
      <h1>Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} onDelete={deleteEmployee} />
    </div>
  );
};

export default EmployeeManagementSystem;
