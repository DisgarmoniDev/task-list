import './styles/AddFormTask.scss'


import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { InputFile } from './InputFile';


const AddFormTask = ({taskTitle,handleTaskTitle,taskDescription,handleTaskDescription,handleSubmit,dateCompletion,setDateCompletion,urlFile, setUrlFile,loadingComplete, setLoadingComplete}) => {

  


  return (
    <div className="newTask">
      <label className="newTask__field">
        Введите заголовок
        <input className='newTask__field-inp' value={taskTitle} onChange={(e) => handleTaskTitle(e.target.value)} />
      </label>
      <label className="newTask__field">
        Введите описание задачи
        <textarea className='newTask__field-area' autoCorrect='on' value={taskDescription} onChange={(e) => handleTaskDescription(e.target.value)} ></textarea>
      </label>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Дата завершения"
          value={dateCompletion}
          onChange={(newValue) => {
            setDateCompletion(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      
      <InputFile
        urlFile={urlFile}
        setUrlFile={setUrlFile}
        loadingComplete={loadingComplete}
        setLoadingComplete={setLoadingComplete}
      />
      <button className="newTask__btn" onClick={handleSubmit}> Добавить задачу </button>
      
      
    </div>
  ) 
}

export default AddFormTask