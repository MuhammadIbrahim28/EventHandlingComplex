import React, { useState } from "react";

function App() {
  const [name, setname] = useState();
  const [handingtext, sethandingtext] = useState();
  function onChangeHandle(event) {
    setname(event.target.value);
  }
  function setValue(event) {
    sethandingtext(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {handingtext}</h1>
      <from onSubmit={setValue}>
        <input
          type="text"
          placeholder="What's your name"
          onChange={onChangeHandle}
          value={name}
        />
        <button type="submit" onClick={setValue}>
          Submit
        </button>
      </from>
    </div>
  );
}

export default App;
