import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './Slice/todoSlice';

export default configureStore({
  reducer: {
    todos: todoSlice,
  }
});