import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { EditForm } from './components/EditForm';

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...task, value: task.value } : t))
    );
    closeEditingMode();
  };

  const closeEditingMode = () => {
    setIsEditing(false);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditingMode={closeEditingMode}
        />
      )}
      <Form addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
