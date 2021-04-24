import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
   <TodoInput/>
   <TodoList/>

    </div>
  );
}

export default App;
