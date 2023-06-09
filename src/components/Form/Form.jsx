import { useState, useContext } from 'react';

import { ListContext } from '../../context/list.context';

import { HiOutlineBookmark } from 'react-icons/hi2';

export const Form = () => {
  const { addTask } = useContext(ListContext);
  const [task, setTask] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      value: task,
      checked: false,
      id: Date.now(),
    });
    setTask('');
  };

  return (
    <form className='todo' onSubmit={handleFormSubmit}>
      <div className='wrapper'>
        <input
          id='task'
          type='text'
          className='input'
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder='Enter Task'
        />
        <label htmlFor='task' className='label'>
          Enter Task
        </label>
      </div>
      <button className='btn' aria-label='submit' type='submit'>
        <HiOutlineBookmark />
      </button>
    </form>
  );
};
