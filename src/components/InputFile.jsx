import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useState } from "react"
import { storage } from "../firebase"

import './styles/inputFile.scss'

export const InputFile = ({setUrlFile,loadingComplete, setLoadingComplete}) => {

  const [progress, setProgress] = useState(0)

  /**
   * При отправки формы отлючаем стандартное поведение, в переменную file мы передаём полученный файл и вызываем функцию загрузки файла на сервер, после чего сообщаем пользователю что загрузка файла завершина
   * @param {*} e 
   */
  const formHandle = (e) => {
    e.preventDefault()
    const file=e.target[0].files[0]
    uploadFile(file)

    setTimeout(() => {
      setProgress(0)
      setLoadingComplete('Загрузка завершена')
    }, 1000)
  }

  /**
   * Функция загрузки файла на сервер, storageRef-указывает куда загружать файл, uploadTask- выполняет загрузку файла, prog- показывает прогресс загрузки файла, setUrlFile - получает url загруженного файла 
   * @param {*} file 
   * @returns если получили не файл то происходит пустой рендер, иначе выполняется загрузка на сервер
   */
  const uploadFile = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/file/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot)=> {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
      setProgress(prog)
      }, 
      (err) =>console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then(url => setUrlFile(url))
      }
    )
  }

  return (
    <div className="uploadFile">
      <form onSubmit={formHandle}>
        <label className="castomFile">
          <input className="castomFile-input" type="file"/>
        </label>
        
        <button type="submit">Загрузить</button>
      </form>
      <hr />
      <h3 className={`${(progress<=0)? 'uploadProgress' : 'visible'}`}>Загружен на {progress} %</h3>
      <h3 className={`${(loadingComplete.length<=0)? 'uploadProgress' : 'visible'}`}>{loadingComplete}</h3>
    </div>
  )
}
