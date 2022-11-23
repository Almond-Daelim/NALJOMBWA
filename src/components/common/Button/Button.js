import React from 'react';

const Button = props => {
  const { title, onPress } = props;

  return (
    <button
      onClick={onPress}
      className="bg-amber-300 hover:bg-amber-200 shadow-md text-black font-bold py-2 px-4 rounded-md dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:text-gray-300"
    >
      {title.split('\n').map((text, idx) => (
        <div key={idx}>
          {text}
          <br />
        </div>
      ))}
    </button>
  );
};

export default Button;
