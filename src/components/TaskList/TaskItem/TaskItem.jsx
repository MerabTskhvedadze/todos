import { useState, useContext } from 'react';

import { ListContext } from '../../../context/list.context';

import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

import styles from './TaskItem.module.css';

export const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask, enterEditMode } = useContext(ListContext);

  const handleCheckboxChange = () => {
    toggleTask(task.id);
  };

  return (
    <li className={styles.task}>
      <div className={styles['task-group']}>
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={task.checked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.value}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles['task-group']}>
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};
