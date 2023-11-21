// ThemeToggler.js
import React from 'react';
import { useTheme } from './ThemeContext';
import './ThemeToggler.css'; // Import your CSS file for styling

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-toggler ${theme}`}>
      <button onClick={toggleTheme}>Click here to change theme</button>
    </div>
  );
};

export default ThemeToggler;
