import React from 'react';
 
export const Task = ({ task, groupTogleHandler }) => {
  return (
    <li>
      {task.text}
      <input type="checkbox" onClick={(event)=>{groupTogleHandler(event, task)}}/>
    </li>
  ); 
};