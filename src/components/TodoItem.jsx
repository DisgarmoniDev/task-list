import { useDispatch } from "react-redux"
import { removeTodo, toggleTodo } from "../store/Slice/todoSlice"

import dayjs from 'dayjs'

import './styles/todoItem.scss'

const TodoItem=({id,taskTitle,taskDescription,completed,dateCompletion,urlFile}) => {
  const dispatch = useDispatch()

  /**
   * получаем сегоднешнюю дату, для сравнения с датой завершения задачи
   */
  const toDayDate = dayjs().format('DD/MM/YYYY').toString()

  return (
    <li>
      <div className="taskItem">
        <input 
          type="checkbox"
          checked={completed}
          onChange={()=> dispatch(toggleTodo({id}))}
        />
        <div className="taskItem__description">
          <span className="taskItem__description-title">{taskTitle}</span>
          <span className="taskItem__description-text">{taskDescription}</span>
        </div>
        <div className="taskItem__dateCompletion">
          <span className="taskItem__dateCompletion-title">Дата завершения задачи:</span>
          <span className={`taskItem__dateCompletion-date ${(toDayDate<=dateCompletion)? '' : 'timeIsUp'}`}>{dateCompletion}</span>
        </div>

        <a className="taskItem__file" href={urlFile}><img className={`${(urlFile.length <=0)? 'linkFile' : ''}`} src="img/file.png" alt="файл" /></a>
        
        <span className="taskItem__remove" onClick={()=>dispatch(removeTodo({id}))}> &times; </span>
      </div>
    </li>
  )
}

export default TodoItem