import React, { useState } from "react";
import ToDoItemList from "./ToDoItemList";
import InputArea from "./InputArea";

function App() {

  const [list, addList] = useState([]);

  function addItem(userInput) {
    addList(userInput);
    addList([...list, userInput]);
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
      <InputArea  
        addItem = {addItem}
      />      
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
