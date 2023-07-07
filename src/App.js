
import './App.css';
import TodoList from './components/TodoList';
// import { Counter, Sample } from './components/Sample';
// import Sample from './components/Sample'; // if we import named function like above Counter & Sample we do not need to import default


function App() {
  return (
    <div className="App">
      <TodoList />



      {/* <div>
        <Sample />
        <Counter />
      </div> */}
    </div>
  );
}

export default App;
