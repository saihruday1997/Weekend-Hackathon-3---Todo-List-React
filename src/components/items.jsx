import React, { useState } from "react";
import "./../styles/App.css";

function Items(props) {
  let itemList = props.list;
  let deleteFun = props.onDelete;

  return (
    <>
      {itemList.map((item) => (
        <div className="list" key={item.id}>
          {item.text}
          <button onClick={console.log("edit")}>EDIT</button>
          <button onClick={() => deleteFun(item.id)}>DELETE</button>
        </div>
      ))}
    </>
  );
}

export default Items;
