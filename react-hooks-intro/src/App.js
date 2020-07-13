import React, { useState, Fragment } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
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
          isOn ? 'https://icon.now.sh/highlight/fd0'
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
    </>
  );
};

export default App;
