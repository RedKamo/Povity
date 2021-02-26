import React from 'react';
//import styles
import '../../assets/styles/TaskList.scss';

//import '../assets/styles/Today.scss';
import CheckTask from './CheckTask';

const TaskList = props => {
  
  const { list, setList}= props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;

    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  const check = list.map(item => (
    <CheckTask key={item.id} data={item} onChange={onChangeStatus} />
  ));


  return(
    <div className="todo">
      {list.length ? check : <h2 className="todo__title">Right now you dont have any task</h2>}
      {list.length ? (
      
          <button className="list_button" onClick={onClickRemoveItem}>
            Delete my task
          </button>
        
      ) : null
    }
    </div>
  )
}

export default TaskList;