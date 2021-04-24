  
import React, { useState } from 'react';
import { addtodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
           <div className="row m-4">
<input   
                value={name}
                onChange={(e)=>setName(e.target.value)} type="text" className="col form-control"/>
<button  
                onClick={()=>{
                       dispatch(  addtodo({
                        id: uuid(),
                        name: name,
                        isDone: false,

                    }));
                        setName('');
                    }} className="btn btn-primary">Addtask</button>



           </div>
        </div>
    )
}

export default TodoInput
