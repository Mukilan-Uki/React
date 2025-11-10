import { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
});

const ParentComponent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount1(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      
      <Button onClick={handleIncrement}>Increment Count 1</Button>
      
      <button onClick={() => setCount2(c => c + 1)}>
        Increment Count 2 (Parent re-render)
      </button>
    </div>
  );
};

export default ParentComponent;