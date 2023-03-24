import { useState, useEffect, useContext } from 'react';
import { ListContext } from '../../context/list.context';

import { CheckIcon } from '@heroicons/react/24/solid';

export const EditForm = () => {
  const { editedTask, updateTask, closeEditingMode } = useContext(ListContext);

  const [updatedTask, setUpdatedTask] = useState(editedTask.value);

  useEffect(() => {
    const closeModalOnESC = (e) => e.key === 'Escape' && closeEditingMode();
    window.addEventListener('keydown', closeModalOnESC);
    return () => window.removeEventListener('keydown', closeModalOnESC);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, value: updatedTask });
  };

  return (
    <div
      role='dialog'
      area-aria-labelledby='editTask'
      onClick={(e) => e.target === e.currentTarget && closeEditingMode()}
    >
      <form className='todo' onSubmit={handleFormSubmit}>
        <div className='wrapper'>
          <input
            id='eidtTask'
            type='text'
            className='input'
            value={updatedTask}
            onInput={(e) => setUpdatedTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Update Task'
          />
          <label htmlFor='editTask' className='label'>
            Update Task
          </label>
        </div>
        <button
          className='btn'
          aria-label={`Confirm edited task to now read ${updatedTask}`}
          type='submit'
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};
