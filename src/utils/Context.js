import {createContext, useEffect, useState} from "react";
import {createCollectionsInIndexedDB, idb} from "../utils/IndexedDB"

export const CustomContext = createContext()

export const Context = (props) => {
  const [taskText, setTaskText] = useState('')
  const [allTodos, setAllTodos] = useState([])

  let today = new Date()
  let taskEditTime = today.toLocaleString()

  useEffect(() => {
    createCollectionsInIndexedDB()
    getAllData()
  }, [allTodos])

  const getAllData = () => {
    const dbPromise = idb.open('todoList', 1)

    dbPromise.onsuccess = () => {
      const db = dbPromise.result

      const tx = db.transaction('userData', 'readonly')

      const userData = tx.objectStore('userData')

      const allTasks = userData.getAll()

      allTasks.onsuccess = (query) => {
        setAllTodos(query.srcElement.result)
      }

      allTasks.onerror = (query) => {
        console.log('Error')
      }

      tx.oncomplete = () => {
        db.close()
      }
    }
  }

  const addTask = (event) => {
    const dbPromise = idb.open('todoList', 1)

    if (taskText) {
      dbPromise.onsuccess = () => {
        const db = dbPromise.result

        const tx = db.transaction('userData', 'readwrite')

        const userData = tx.objectStore('userData')

        const todoTasks = userData.put({
          id: allTodos?.length + 1,
          taskText,
          taskEditTime
        })
        todoTasks.onsuccess = () => {
          tx.oncomplete = () => {
            db.close()
          }
          getAllData()
          alert('info added')
        }
        todoTasks.onerror = (event) => {
          console.log(event)
        }
      }
    }
  }

  const value = {
    taskText,
    setTaskText,
    allTodos,
    setAllTodos,
    addTask,
    taskEditTime,
    // setTaskEditTime
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}