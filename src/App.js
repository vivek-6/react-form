import React, { useState } from "react";

const App = () => {

  let [inputValue, setValue] = useState(" ")

  const inputEvent = (event) => {
    
    inputValue = event.target.value    
  }

  const Submit = () => {
    setValue(inputValue)
  }
  return (
    <>
      <div className="Dcontainer">
        <h1 className="heading"> Hello, {inputValue}</h1>
        <input
          type="text"

          placeholder="Enter Your Name" onChange={inputEvent}
        />
        <button className="primary__btn" onClick={Submit}>Submit</button>
      </div>
    </>
  );
};

export default App;