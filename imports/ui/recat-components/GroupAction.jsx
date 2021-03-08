import React, { useState } from 'react';
import Button from './Button';
import { Task } from './Task';
import TextInput from './TextInput';

const InitialFormValue = {
    groupName: '',
    groupNamePlaceHolder: 'Group Name',
    valid: false,
    groupList: []
}

function GroupAction(props) {
    const { nonGroupTasks, groupTaskHandler } = props;
    const [ grouping, setGrouping ] = useState(false);
    const [ formValue, setFormValue] = useState(InitialFormValue);

    eventHandler = (event)=> {
        const {type, target: {name,value}} = event;
        switch(type){
            case 'change':
                const isValid = (value && (formValue.groupList.length > 1)) ? true : false;
                setFormValue({...formValue, [name]: value, valid: isValid});
                break;
            case 'click':
                actionHandler(name,formValue)
                break;
        }
    }

    actionHandler = (eventName, value)=> {
        switch(eventName) {
          case 'create':
            setGrouping(true);
            break; 
          case 'save':
            groupTaskHandler(formValue.groupList, formValue.groupName)
            setFormValue(InitialFormValue);
            setGrouping(false);
            break;
          case 'cancel':
            setFormValue(InitialFormValue);
            setGrouping(false);
            break;
        }
    }

    groupTogleHandler = (event,value)=>{
        const { _id } = value;
        const {target: {checked}} = event;
        const groupList = checked ? [...formValue.groupList, _id] : formValue.groupList.filter(taskId=> taskId !== _id);
        const isValid = formValue.groupName && groupList.length > 1 ? true : false;
        setFormValue({...formValue, valid: isValid, groupList: groupList});
    }

    return (
        <div className="d-f-c-s-s w-100">
            <div>
                <Button name="create" onClick={eventHandler} caption="Create A Group" disable={grouping}/>
                { grouping ? 
                    <TextInput 
                        name="groupName" 
                        onChange={eventHandler} 
                        value={formValue.groupName} 
                        placeholder={formValue.groupNamePlaceHolder}/> : 
                        null 
                }
            </div>
            { grouping ?
                <div className="w-100">
                    <h5>Pick Tasks To Group</h5>
                    <ul>
                    { nonGroupTasks.map(task => <Task key={ task._id } task={ task } groupTogleHandler={groupTogleHandler}/>) }
                    </ul>
                    <div className="m-t-10">
                        <Button name="save" onClick={eventHandler} caption="Save" disable={!formValue.valid}/> 
                        <Button name="cancel" onClick={eventHandler} caption="Cancel" disable={false}/> 
                    </div>
                </div> :
                null
            }
        </div>
    );
}

export default GroupAction;