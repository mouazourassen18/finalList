import React, { useState } from "react";

function App() {
  // this is state property for input
  const [List, setW] = useState("");
  // now , we create a state property for an array  not holding anything yet

  const [items, setItem] = useState([]);

  function update(event) {
    const add = event.target.value;
    setW(add);
  }
  function addIt() {
    setItem((prev) => {
      return [...prev, List];
    });

    setW("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={update} type="text" value={List} />

        <button onClick={addIt}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* here , we need to run through the array and assign  each list with 
        an item  */}
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
