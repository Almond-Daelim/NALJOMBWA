import React from 'react';


const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright &copy; {new Date().getFullYear()} Team - Almond
        </span>
      </div>
    </footer>
  );
};

export default Footer;

const Footer =()=>{
    return(
        <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Copyright &copy; {new Date().getFullYear()} Team - Almond
                </span>
            </div>
        </footer>
    );
};

export default Footer;

