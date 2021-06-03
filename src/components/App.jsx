import React, { useState } from "react";
import ToDoItemList from "./ToDoItemList";
function App() {

  const [userInput, setInputText] = useState("");
  const [list, addList] = useState([]);

  function handleChange(event) {
    const newVal = event.target.value;
    setInputText(newVal);
  }

  function addItem() {
    addList(userInput);
    addList([...list, userInput]);
    setInputText("")
  }

  function deleteItem(id){
    addList(prevList => {
      return prevList.filter((item,index)=>{
        return index !==id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={userInput} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((listItem,index) => (
            <ToDoItemList
             key = {index}
             id = {index}
             item = {listItem} 
             onChecked = {deleteItem}/>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default App;
