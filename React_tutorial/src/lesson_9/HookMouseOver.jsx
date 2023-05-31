import React, { useState, useEffect } from 'react';

const HookMouseOver = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mouseover', logMousePosition);

    return () => {
      console.log('Component unmounted');
      window.removeEventListener('mouseover', logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouseOver;