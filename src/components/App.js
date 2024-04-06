import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleClick() {
    console.log(name);
    console.log(age);
  }

  function handleAge(event) {
    setAge(event.target.value);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>hello</h1>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="enter your age"
        value={age}
        onChange={handleAge}
      />
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
