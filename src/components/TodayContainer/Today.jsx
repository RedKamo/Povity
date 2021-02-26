import React, { useState } from 'react';

//import { Link } from 'react-router-dom';

//import '../assets/styles/Today.scss';
import '../../assets/styles/Today.scss';
//import principal component (InputTask ), and Secondary component (TaskList).
import InputTask from './InputTask';
import TaskList from './TaskList';


const Today =()=>{

	const [list, setList] = useState([]);

	const handleAddItem = addItem =>{
		setList([...list, addItem])
	};

  return(
    <div className="container">
      <InputTask handleAddItem={handleAddItem} />
		  <TaskList list={list} setList={setList} />  
            {/* <h1>Today task input container</h1>
            <input type="text" placeholder="Add your task here... " /> */}
    </div>
    )
}

export default Today;