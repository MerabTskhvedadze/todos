import { TaskItem } from './TaskItem';

import styles from './TaskList.module.css';

export const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};