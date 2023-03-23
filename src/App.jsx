import { useState } from 'react';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      <Form addTask={addTask} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
