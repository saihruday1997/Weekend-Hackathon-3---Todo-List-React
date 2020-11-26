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

    if (curritem.text === "") {
      return;
    }

    let listCopy = [...list];
    listCopy.push(curritem);
    setList(listCopy);

    setCurritem({ id: curritem.id + 1, text: "" });

    console.log(list);
  };

  const deleteClick = (id) => {
    let listCopy = list.filter((item) => item.id !== id);
    setList(listCopy);
  };

  const saveClick = (item) => {
    if (item.text === "") {
      return;
    }

    let listCopy = [...list];
    for (let i = 0; i < listCopy.length; i++) {
      if (listCopy[i].id === item.id) {
        listCopy[i].text = item.text;
      }
      setList(listCopy);
    }
  };

  return (
    <>
      <div id="main">
        //Do not alter main div //Please do not alter the functional component
        as tests depend on the type of component.
      </div>

      <input
        id="task"
        type="text"
        onChange={handleChange}
        value={curritem.text}
      />
      <button id="btn" onClick={addClick}>
        ADD
      </button>

      <Items list={[...list]} onDelete={deleteClick} onSave={saveClick} />
    </>
  );
}

export default App;
