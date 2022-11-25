import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import './styles/todoList.scss'


const TodoList = () => {

  /**
   * получаем из store наш массив todos
   */
  const todos = useSelector(state => state.todos.todos)

  return (
    <ul className="taskList">
      {
        todos.map((todo) =>
          <TodoItem
            key={todo.id}
            {...todo}
          />
        )
      }
    </ul>
  )
}

export default TodoList