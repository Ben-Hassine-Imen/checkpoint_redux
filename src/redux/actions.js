export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_FILTER="TOGGLE_FILTER";
export const TOGGLE_TASK="TOGGLE_TASK";


export  const  toggleTask  =  ( idTodo ) => {
    return {
        type: TOGGLE_TASK ,
        payload : idTodo
    }
}
export const toggleFilter= (filter)=>{
    return{
        type:TOGGLE_FILTER,
        payload:filter
    }
}


export function addtodo(todo){
return{
    type:ADD_TODO,
    payload:todo,
}
}
export function deletetodo(todoId){
    return{
        type:DELETE_TODO,
        payload:todoId,
    }
    
    }
    export function updatetodo(todo){
        return{
            type:UPDATE_TODO,
            payload:todo,
        }
        
        }
     
        