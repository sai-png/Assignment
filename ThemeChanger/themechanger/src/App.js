// App.js
import React from 'react';
import ThemeToggler from './ThemeToggler';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        {/* Your other components */}
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
};

export default App;
