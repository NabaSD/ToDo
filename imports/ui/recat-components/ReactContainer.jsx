import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Tasks  } from '../../api/tasks.js';
import GroupAction from './GroupAction.jsx';
 
const ReactContainer = () => {
  const nonGroupTasks = useTracker(() => Tasks.find({ groupName: {$not:{$size: 0} }}, { sort: { createdAt: -1 } }).fetch());
  groupTaskHandler = (taskList, groupName)=> {
    Meteor.call('tasks.setGroup', taskList, groupName);
  }
  return (
    <div className="d-f-r-b-c m-20">
      <GroupAction 
        nonGroupTasks={nonGroupTasks}
        groupTaskHandler={groupTaskHandler}
      />
    </div>
  );
};
export default ReactContainer;