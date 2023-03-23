import { useState } from 'react';

import { CheckIcon } from '@heroicons/react/24/solid';

export const EditForm = ({ editedTask, updateTask }) => {
  const [updatedTask, setUpdatedTask] = useState(editedTask.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // updateTask();
  };

  return (
    <div
      role='dialog'
      area-aria-labelledby='editTask'
      // onClick={() => {}}
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
