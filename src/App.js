import {useState} from 'react'
import {useDispatch} from 'react-redux'

import AddFormTask from './components/AddFormTask'
import TodoList from './components/TodoList'
import { addTodo } from './store/Slice/todoSlice'

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

import './styles/App.scss'




function App() {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [dateCompletion, setDateCompletion] = useState(null)

  const [urlFile, setUrlFile] = useState('')
  const [loadingComplete, setLoadingComplete] = useState('')

  const dispatch = useDispatch()


  /**
   * Функция при отправки данных пользователем, вызывает диспетчера событий и отправляет actions в метод addTodo после чего очищает заполненные поля ввода 
   */
  const addTask= () => {
    const dateEnd = (dateCompletion == null)? dayjs().format('DD/MM/YYYY').toString() : dateCompletion.format('DD/MM/YYYY').toString()

    dispatch(addTodo({taskTitle,taskDescription,dateEnd,urlFile}))
    setTaskTitle('')
    setTaskDescription('')
    setDateCompletion(null)
    setLoadingComplete('')
    document.querySelector('input[type=file]').value = ''
  }

  
 
  
  return (
    <div className="App">
      <AddFormTask
        taskDescription={taskDescription}
        taskTitle={taskTitle}
        handleTaskTitle={setTaskTitle}
        handleTaskDescription={setTaskDescription}
        handleSubmit={addTask}
        dateCompletion={dateCompletion}
        setDateCompletion={setDateCompletion}
        urlFile={urlFile}
        setUrlFile={setUrlFile}
        loadingComplete={loadingComplete}
        setLoadingComplete={setLoadingComplete}
      />
      <TodoList />
    </div>
  );
}

export default App;