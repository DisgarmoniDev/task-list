import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name:'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        taskTitle: action.payload.taskTitle,
        taskDescription: action.payload.taskDescription,
        dateCompletion: action.payload.dateEnd,
        urlFile: action.payload.urlFile,
        completed: false
      }) 
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },

    toggleTodo(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
      toggledTodo.completed = !toggledTodo.completed
    }
  }
})

export const {addTodo,removeTodo,toggleTodo} = todoSlice.actions
export default todoSlice.reducer