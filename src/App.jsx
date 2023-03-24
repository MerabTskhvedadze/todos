import { useState, useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { EditForm } from './components/EditForm';

import { ListContext } from './context/list.context';

function App() {
  const { tasks, isEditing } = useContext(ListContext);

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && <EditForm />}
      <Form />
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
