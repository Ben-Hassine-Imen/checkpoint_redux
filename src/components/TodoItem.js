import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { deletetodo, updatetodo,toggleTask } from '../redux/actions';

function TodoItem({todo}) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
   
    const handleClick = () => {
        dispatch(toggleTask(todo.id));
      };
  
    return (
        <div className="container">
            <div className="row m-1">
                                             

            
                <div className="col">
                    
                    {editable ?
                        <input   className="form-control"
                       
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4 style={{ background: todo.isDone ? "#00FF00" : "none"}}>{todo.name}</h4>}
                </div>
                <button  className="btn btn-primary m-2" onClick={handleClick}>
            {todo.isDone ? "Done" : "Undone"}</button>
  
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updatetodo({
                            ...todo,
                            name: name
                        }))
                        if(editable) {
                         setName(todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                

                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deletetodo(todo.id))}
                >Delete</button>
    
            </div>
        </div>
    )
}

export default TodoItem
