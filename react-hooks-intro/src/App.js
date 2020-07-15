import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `You've clicked ${count} times`;
    window.addEventListener('mouseover', handleMouseMove);

    return () => {
      window.removeEventListener('mouseover', handleMouseMove);
    };
  }, [count]);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>
        hola! I was clicked {count} times
      </button>

      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          height: '50px',
          width: '50px',
          background: isOn ? 'yellow' : 'grey',
        }}
        onClick={toggleLight}
        alt="flashlight"
      />
      <h2>Mouse position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />
    </>
  );
};

export default App;
