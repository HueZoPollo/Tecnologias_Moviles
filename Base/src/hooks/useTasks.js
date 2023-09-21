import { useState } from "react";
import { handleShowError } from "../helpers/showError";
export const useTasks = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const isValid = () => {
    if (inputValue === "") {
      return handleShowError("Debe ingresar una tarea");
    }

    if (inputValue.length > 10) {
      return handleShowError("La tarea no puede tener mas de 10 caracteres");
    }

    const exist = tasks.some(
      (task) => task.task.toLowerCase() === inputValue.toLowerCase()
    );

    if (exist) {
      setInputValue("");
      isEditing && setIsEditing(false);
      return handleShowError("La tarea ya existe");
    }

    return true;
  }

  const handleAddTask = () => {
    if (!isValid()) return;

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
    if (!isValid()) return;

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
    handleEditComplete,
    modalVisible,
    setModalVisible,
    currentTask,
    setCurrentTask,
  }
}