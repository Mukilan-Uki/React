import { useRef } from 'react';

function UseRef() {
  const inputRef = useRef(null);

  const handleFocusButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocusButtonClick}>
        Focus the input field
      </button>
    </div>
  );
}

export default UseRef;