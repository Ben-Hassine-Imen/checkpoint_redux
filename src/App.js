import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";



function App() {
 
  const todos = useSelector((state) => state.todoReducer);
  const filter = useSelector(state => state.filterReducer)

  return (
    <div className='container bg-white p-4 mt-5'>
   <TodoInput className="row m-4" />
   <TodoList  />

    </div>
  );
}

export default App;
