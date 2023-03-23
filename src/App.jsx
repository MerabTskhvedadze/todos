import { Form } from './components/Form';

function App() {
  const addTask = (task) => {
    console.log(task);
  };

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
