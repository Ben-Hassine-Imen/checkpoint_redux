  
import React, { useState } from 'react';
import { addtodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
import { toggleFilter} from '../redux/actions';
import { Button } from 'react-bootstrap';
function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    
    return (
        <div>
           <div style={{ display:"flex"}}>
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
            
          
       <Button variant="outline-success" onClick={()=>dispatch(toggleFilter(true))}>DONE</Button>
        <Button variant="outline-warning"onClick={()=>dispatch(toggleFilter(false))}>UNDONE</Button>
           </div>
        </div>
    )
}

export default TodoInput
