import React, { useState } from "react";
import "./../styles/App.css";

function Items(props) {
  let itemList = props.list;
  let deleteFun = props.onDelete;
  let saveFun = props.onSave;
  const [editstate, setEditstate] = useState(false);
  const [curritem, setCurritem] = useState({ id: 0, text: "" });

  const editFn = (id, text) => {
    setEditstate(true);
    setCurritem({ id: id, text: text });
  };

  const textEdit = (event) => {
    setCurritem({ id: curritem.id, text: event.target.value });
  };

  return (
    <>
      {itemList.map((item, index) => (
        <div key={item.id}>
          <li className="list">
            {editstate ? (
              <>
                <input
                  id="editTask"
                  type="text"
                  defaultValue={item.text}
                  onChange={textEdit}
                />
                <button
                  id="saveTask"
                  onClick={() => {
                    setEditstate(false);
                    saveFun(curritem);
                  }}
                >
                  SAVE
                </button>
              </>
            ) : (
              item.text
            )}
          </li>
          <button onClick={() => editFn(item.id, item.text)}>EDIT</button>
          <button onClick={() => deleteFun(item.id)}>DELETE</button>
        </div>
      ))}
    </>
  );
}

export default Items;
