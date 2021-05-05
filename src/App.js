import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector,useDispatch } from "react-redux";

import { Button , ButtonGroup } from 'react-bootstrap';
import { toggleFilter } from './redux/actions';

function App() {
  const todos= useSelector(state => state.todos)
  const filter= useSelector(state => state.filter)
  const dispatch = useDispatch()

  return (
    <div className='container bg-white p-4 mt-5'>
   <TodoInput className="row m-4" />
   <ButtonGroup aria-label="Basic example">
  <Button onClick={()=>dispatch(toggleFilter(null))} variant="secondary">All</Button>
  <Button onClick={()=>dispatch(toggleFilter(true))} variant="secondary">Done</Button>
  <Button onClick={()=>dispatch(toggleFilter(false))} variant="secondary">Undone</Button>
</ButtonGroup>
   <TodoList  todos={filter===null? todos:todos.filter(el=>el.isDone===filter)}/>

    </div>
  );
}

export default App;
