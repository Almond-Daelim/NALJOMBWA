import React from 'react';

const Button = props => {
  const { title, onPress } = props;

  return (
    <button
      onClick={onPress}
      class="bg-amber-300 hover:bg-amber-200 shadow-md text-black font-bold py-2 px-4 rounded-md "
    >
      {title.split('\n').map(text => (
        <>
          {text}
          <br />
        </>
      ))}
    </button>
  );
};

export default Button;
