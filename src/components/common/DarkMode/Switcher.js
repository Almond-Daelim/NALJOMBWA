import React, { useState } from 'react';
import DarkMode from './DarkMode';

const Switcher = () => {
  const [colorTheme, setTheme] = DarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? false : true,
  );

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <button
      type="button"
      class="text-black bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:text-white"
      onClick={toggleDarkMode}
    >
      {colorTheme === 'light' ? (
        <span class="font-bold">LIGHT</span>
      ) : (
        <span class="font-bold">DARK</span>
      )}
    </button>
  );
};

export default Switcher;
