import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
//import '../assets/styles/Today.scss';
import '../../assets/styles/InputTask.scss';

const InputTask =(props)=>{

	const [taskDescription, setTaskDescription]= useState('');

	const { handleAddItem } = props;

	//creating the handle event for input
	const handleSubmit = e =>{
		e.preventDefault();
		console.log('====================================');
		console.log('taskdescription');
		console.log('====================================');

		//creating handle additem
		handleAddItem({
		done: false,
		id: (+new Date()).toString(),
		taskDescription
		});
		
		setTaskDescription("");
	}

  return(
    <div className="task" onSubmit={handleSubmit}>
			<input type="text"
			 className="text"
			value={taskDescription}
			onChange={e => setTaskDescription(e.target.value)}
			id="" placeholder="add a task..." />
			<button 
				disabled={ setTaskDescription ? "" : "disabled"}>
				<FaPlus /> Add
			</button>
    </div>
  )
}

export default InputTask;