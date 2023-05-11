import React, {createContext, useEffect, useState} from "react";
import {createCollectionsInIndexedDB, idb} from "../utils/IndexedDB"

export const CustomContext = createContext()

export const Context = (props) => {
  const [taskText, setTaskText] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [allTodos, setAllTodos] = useState([])
  const [editTask, setEditTask] = useState(false)
  const [addNewTask, setAddNewTask] = useState(false)
  const [active, setActive] = useState()


  let today = new Date()
  let taskEditTime = today.toLocaleString()

  useEffect(() => {
    createCollectionsInIndexedDB()
    getAllData()
  }, [])

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
          id: allTodos.length > 0 ? allTodos[allTodos?.length - 1].id + 1 : allTodos?.length + 1,
          taskText,
          taskEditTime
        })

        todoTasks.onsuccess = () => {
          tx.oncomplete = () => {
            db.close()
          }
          getAllData()
        }
        todoTasks.onerror = (event) => {
          console.log(event)
        }
      }
    }
  }

  const deleteTask = (key) => {

    const dbPromise = idb.open('todoList', 1)
    dbPromise.onsuccess = () => {
      const db = dbPromise.result
      let tx = db.transaction("userData", 'readwrite')
      let userData = tx.objectStore('userData')

      const deleteUser = userData.delete(key)

      deleteUser.onsuccess = (query) => {
        tx.oncomplete = () => {
          db.close()
        }
        getAllData()
      }
    }
  }

  const filterData = allTodos.filter(item => {
    return item.taskText.toLowerCase().includes(searchValue.toLowerCase())
  })


  let currentTask = allTodos.filter(item => {
    return item?.id === active ? item : ''
  })[0]?.taskText

  const value = {
    taskText,
    setTaskText,
    allTodos,
    setAllTodos,
    addTask,
    taskEditTime,
    active,
    setActive,
    deleteTask,
    currentTask,
    searchValue,
    setSearchValue,
    filterData
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}