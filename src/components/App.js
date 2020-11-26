import React, { useState } from "react";
import "./../styles/App.css";
import Items from "./items";

function App() {
  const [list, setList] = useState([]);
  const [curritem, setCurritem] = useState({ id: 0, text: "" });

  const handleChange = (event) => {
    console.log("hc");
    let item = { id: curritem.id, text: event.target.value };
    setCurritem(item);
  };

  const addClick = () => {
    console.log("bc");

    let listCopy = [...list];
    listCopy.push(curritem);
    setList(listCopy);

    setCurritem({ id: curritem.id + 1, text: curritem.text });

    console.log(list);
  };

  const deleteClick = (id) => {
    let listCopy = list.filter((item) => item.id !== id);
    setList(listCopy);
  };

  return (
    <>
      <div id="main">
        //Do not alter main div //Please do not alter the functional component
        as tests depend on the type of component.
      </div>

      <input id="task" type="text" onChange={handleChange}></input>
      <button id="btn" onClick={addClick}>
        ADD
      </button>

      <Items list={list} onDelete={deleteClick} />
    </>
  );
}

export default App;
