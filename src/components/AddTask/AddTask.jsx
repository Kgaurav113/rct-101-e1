import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";


const AddTask = () => {
  const [Item, SetItem] = useState("");
  const [List, SetList] = useState([]);
  const ItemEvent = (event) => {
    SetItem(event.target.value);
  };
  const ListItem = (event) => {
    SetList((olditem) => {
      return [...olditem, Item];
    });
    SetItem("");
   
    
  };
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <h1>TodoList</h1>
      <input
        data-cy="add-task-input"
        type="text"
        value={Item}
        onChange={ItemEvent}
      />
      <button
        data-cy="add-task-button" onClick={ListItem}
      >
        Add task
      </button>
      <ol>
        {List.map((itemval)=>{
          return <li>{itemval} <Task/></li>
        })}
      </ol>
    </div>
  )
  }

export default AddTask;
