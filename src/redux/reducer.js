import { ADD_TODO , DELETE_TODO , UPDATE_TODO,TOGGLE_FILTER,TOGGLE_TASK } from "./actions"
import { todoReducer } from './states';

export let reducer = (state = todoReducer, action) => {
    let newTodos;
    switch (action.type) {
      case ADD_TODO:
        return { ...state, todos: [...state.todos, action.payload] };
  
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id != action.payload),
        };
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((el) =>
            el.id === action.payload.id ? action.payload : el
          ),
        };
  
      case TOGGLE_TASK:
        return {
          ...state,
          todos: state.todos.map((el) =>
            el.id === action.payload ? { ...el, isDone: !el.isDone } : el
          ),
        };
  
        case  TOGGLE_FILTER:
            return{
                ...state,
                filter:action.payload
            }
  
      default:
        return state;
    }
  };