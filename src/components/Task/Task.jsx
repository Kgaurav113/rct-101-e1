import React from "react";
import { Counter } from "../Counter";
import styles from "./task.module.css";


const Task = () => {
  const handledelete=(id)=>{

    

  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" placeholder="enetr task"/>
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter/>

      <button data-cy="task-remove-button" onClick={()=>handledelete()}>Remove</button>
    </li>
  );
};

export default Task;
