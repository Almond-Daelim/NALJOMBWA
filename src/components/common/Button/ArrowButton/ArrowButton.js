import React from 'react';

const ArrowButton = props => {
  const { onPress, direction } = props;

  return <button onClick={onPress}>{direction === 'left' ? '◀' : '▶'}</button>;
};

export default ArrowButton;
