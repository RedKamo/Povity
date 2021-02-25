import React, { useState } from 'react';

import { Link } from 'react-router-dom';

//import '../assets/styles/Today.scss';
import '../../assets/styles/Today.scss';
//import principal component (InputTask ), and Secondary component (TaskList).
import InputTask from './InputTask';
import TaskList from './TaskList';


const Today =()=>{

	const [taskList, setTaskList] = useState([]);

	const handleAddItem = addItem =>{
		setTaskList([...taskList, addItem])
	};

    return(
        <div className="container">
          <InputTask handleAddItem={handleAddItem} />
					<TaskList taskList={taskList} setTaskList={setTaskList} />  
            {/* <h1>Today task input container</h1>
            <input type="text" placeholder="Add your task here... " /> */}
        </div>
    )
}

export default Today;