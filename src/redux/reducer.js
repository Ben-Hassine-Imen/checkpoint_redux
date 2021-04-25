import { ADD_TODO , DELETE_TODO , UPDATE_TODO,TOGGLE_FILTER,TOGGLE_TASK } from "./actions"
import { todos } from "./states";

export let reducer =(state=todos,action)=>{
    let newTodos;

    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }

            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

    }
    return state;
}

const filterReducer = (state=null,action)=>{
    switch (action.type) {
        case TOGGLE_FILTER:
            return action.payload
          
    
        default:
            return state
    }
}


export default filterReducer



export const todoReducer=(state=todos,action)=>{
    switch (action.type) {
        case ADD_TODO:
            return [...state,action.payload]
            case DELETE_TODO:
                return state.filter(el=>el.id!==action.payload)   
            case TOGGLE_TASK:
                return state.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}:el)
    case  UPDATE_TODO:
        return state.map(el=>el.id===action.payload.id? action.payload:el)
        default:
            return state
    }
}

