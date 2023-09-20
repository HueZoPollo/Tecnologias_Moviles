import { useState } from "react";
import { handleShowError } from "../helpers/showError";
export const useTasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(0);

  const handleAddTask = () => {
    if (inputValue === "") {
      return handleShowError("Debe ingresar una tarea");
    }

    const exist = tasks.some(
      (task) => task.task.toLowerCase() === inputValue.toLowerCase()
    );

    if (exist) {
      setInputValue("");
      return handleShowError("La tarea ya existe");
    }

    setTasks([
      ...tasks,
      {
        id: new Date().toISOString(),
        task: inputValue,
        created:
          new Date().toISOString().substring(0, 10) +
          " " +
          new Date().toISOString().substring(11, 19),
        updated: "",
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleCompleteTask = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

  const handleEditTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    setInputValue(task.task);
    setIsEditing(true);
    setId(id);
  };

  const handleEditComplete = () => {
    if (inputValue === "") {
      return handleShowError("Debe ingresar una tarea");
    }

    const exist = tasks.some(
      (task) => task.task.toLowerCase() === inputValue.toLowerCase()
    );

    if (exist) {
      setInputValue("");
      setIsEditing(false);
      return handleShowError("La tarea ya existe");
    }

    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            task: inputValue,
            updated:
              new Date().toISOString().substring(0, 10) +
              " " +
              new Date().toISOString().substring(11, 19),
          }
        : task
    );
    setTasks(newTasks);
    setInputValue("");
    setIsEditing(false);
  };

  return{
    inputValue,
    setInputValue,
    tasks,
    setTasks,
    isEditing,
    setIsEditing,
    handleAddTask,
    handleDeleteTask,
    handleCompleteTask,
    handleEditTask,
    handleEditComplete
  }
}