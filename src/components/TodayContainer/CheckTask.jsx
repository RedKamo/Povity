import React, { Fragment } from 'react';

//import '../assets/styles/Today.scss';
import '../../assets/styles/CheckTask.scss';


const CheckTask = props => {
  
  const {
    onChange,
    data: { id, description, done }
  } = props;

  return(
    <div className="checklist">
      <label className="checklist__new"/>
        <input
          className="checklist__state"
          name={id}
          type= "checkbox"
          defaultChecked={done}
          onChange={onChange} />
      
      <div className="todo_text">{description}</div>

    </div>
    
  )
}

export default CheckTask;


    {/* <Fragment>
      <label className=" todo_new"/>
      <input
        className="todo_state"
        name={id}
        type= "checkbox"
        defaultChecked={done}
        onChange={onChange} />

        <div className="todo_text">{description}</div>
    </Fragment> */}