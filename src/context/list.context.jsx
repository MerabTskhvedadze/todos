import { useState, createContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const ListContext = createContext({
  tasks: [],
  setTasks: () => {},
  editedTask: null,
  setEditedTask: () => {},
  isEditing: false,
  setIsEditing: () => {},
  addTask: () => {},
  toggleTask: () => {},
  updateTask: () => {},
  closeEditingMode: () => {},
  deleteTask: () => {},
  enterEditMode: () => {},
});

export const ListProvider = ({ children }) => {
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

  const values = {
    tasks,
    setTasks,
    editedTask,
    setEditedTask,
    isEditing,
    setIsEditing,
    addTask,
    toggleTask,
    updateTask,
    closeEditingMode,
    deleteTask,
    enterEditMode,
  };

  return <ListContext.Provider value={values}>{children}</ListContext.Provider>;
};
