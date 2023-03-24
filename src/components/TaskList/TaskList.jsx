import { useContext } from 'react';

import { TaskItem } from './TaskItem';
import { ListContext } from '../../context/list.context';

import styles from './TaskList.module.css';

export const TaskList = () => {
  const { tasks } = useContext(ListContext);

  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
    </ul>
  );
};
