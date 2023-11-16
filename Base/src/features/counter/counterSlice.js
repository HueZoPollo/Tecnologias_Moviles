import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  isEditing: false,
  id: null,
  inputValue: "",
};

export const counterSlice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todo = [
        ...state.todo,
        {
          id: new Date().toISOString(),
          task: action.payload,
          created:
            new Date().toISOString().substring(0, 10) +
            " " +
            new Date().toISOString().substring(11, 19),
          updated: "",
          isCompleted: false,
        },
      ];
      state.inputValue = "";
    },
    deleteTask: (state, action) => {
      state.todo = state.todo.filter((task) => task.id !== action.payload);
    },
    completeTask: (state, action) => {
      state.todo = state.todo.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    },
    editTask: (state, action) => {
      state.isEditing = true;
      state.id = action.payload;
      const task = state.todo.find((task) => task.id === action.payload);
      state.inputValue = task.task;
    },
    editComplete: (state) => {
      state.todo = state.todo.map((task) =>
        task.id === state.id
          ? {
              ...task,
              task: state.inputValue,
              updated:
                new Date().toISOString().substring(0, 10) +
                " " +
                new Date().toISOString().substring(11, 19),
            }
          : task
      );
      state.isEditing = false;
      state.id = null;
      state.inputValue = "";
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    cancelEdit: (state) => {
      state.isEditing = false;
      state.id = null;
      state.inputValue = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTask,
  completeTask,
  deleteTask,
  editComplete,
  editTask,
  setInputValue,
  cancelEdit,
} = counterSlice.actions;

export default counterSlice.reducer;
