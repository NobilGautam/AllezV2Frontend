import React from 'react';

const AnimatedUnderline = ({text}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px', // Set your desired height for the underline
          backgroundColor: '#CA2D2E', // Set your desired color for the underline
          transformOrigin: 'bottom left',
          animation: 'underlineAnimation 2s infinite', // Animation properties
        }}
      />
      <span style={{ zIndex: 1 }}>
        {text}
      </span>
    </div>
  );
};

export default AnimatedUnderline;
