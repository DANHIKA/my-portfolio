import React from 'react';

const Placeholder = ({ height, width, text }) => {
  const defaultText = `${height} x ${width}`;
  const displayText = text || defaultText;

  return (
    <div
      style={{
        height: height,
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
      }}
    >
      {displayText}
    </div>
  );
};

export default Placeholder;
