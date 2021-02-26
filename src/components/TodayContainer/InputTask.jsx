import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
//import '../assets/styles/Today.scss';
import '../../assets/styles/InputTask.scss';

const InputTask =(props)=>{

	const [description, setDescription]= useState('');

	const { handleAddItem } = props;

	//creating the handle event for input
	const handleSubmit = e =>{
		e.preventDefault();
		/* console.log('====================================');
		console.log('taskdescription');
		console.log('===================================='); */

		//creating handle additem
		handleAddItem({
		done: false,
		id: (+new Date()).toString(),
		description
		});
		
		setDescription("");
	}

  return(
	<form onSubmit={handleSubmit}>
		<div className="task">
        <div className="task__input">
          <input type="text"
			    className="text"
			    value={description}
			    onChange={e => setDescription(e.target.value)}
			    id="" placeholder="add a task..." />
        </div>

			<button className="button red"
				disabled={ description ? "" : "disabled"}>
				Add
			</button>
    </div>
	  </form>
  )
}

export default InputTask;