import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 mt-28 bg-white md:px-6 md:py-8 dark:bg-slate-900 shadow-inner">
      <div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright &copy; {new Date().getFullYear()} Team - Almond
        </span>
      </div>
    </footer>
  );
};

export default Footer;
