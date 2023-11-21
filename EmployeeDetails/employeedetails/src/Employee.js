// Employee.js
import React from 'react';
import './Employee.css';

const Employee = ({ employee, onDelete }) => {
  const { name, position, salary } = employee;

  return (
    <div className="employee">
      <div className="employee-details">
        <p className="employee-name">{name}</p>
        <p className="employee-position">{position}</p>
        <p className="employee-salary">${salary}</p>
      </div>
      <button className="delete-button" onClick={() => onDelete(employee)}>
        Delete
      </button>
    </div>
  );
};

export default Employee;
