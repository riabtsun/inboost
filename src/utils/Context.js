import React, { createContext, useEffect, useState } from "react";
import { createCollectionsInIndexedDB, idb } from "./IndexedDB";

export const CustomContext = createContext();

export const Context = (props) => {
  const [taskText, setTaskText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [editTask, setEditTask] = useState(false);
  const [addNewTask, setAddNewTask] = useState(false);
  const [active, setActive] = useState();
  const [selectedUser, setSelectedUser] = useState({});
  const [db, setDb] = useState(null);
  const [disableButtons, setDisableButtons] = useState(true);

  let today = new Date();
  let taskEditTime = today.toLocaleString();
  let disabledTextField = true;

  const filterData = allTodos.filter((item) => {
    return item?.taskText?.toLowerCase()?.includes(searchValue?.toLowerCase());
  });

  useEffect(() => {
    createCollectionsInIndexedDB();
    getAllData();
    editCurrentTask();
  }, []);

  useEffect(() => {
    addTask();
    currentTask === undefined
      ? setDisableButtons(true)
      : setDisableButtons(false);
  }, [filterData]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setTaskText(newText);
    selectedUser.taskText = newText;
    if (db) {
      let transaction = db.transaction("userData", "readwrite");
      let objectStore = transaction.objectStore("userData");
      objectStore.put({
        id: currentTask?.id,
        taskText: newText,
        taskEditTime,
      });
    }
  };

  const getAllData = () => {
    const dbPromise = idb.open("todoList", 1);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("userData", "readonly");
      const userData = tx.objectStore("userData");

      const allTasks = userData.getAll();

      allTasks.onsuccess = (query) => {
        setAllTodos(query.srcElement.result);
      };

      allTasks.onerror = (event) => {
        console.log("Error!", event);
      };

      tx.oncomplete = () => {
        db.close();
      };
    };
  };

  const editCurrentTask = () => {
    const dbPromise = idb.open("todoList", 1);
    dbPromise.onerror = () => {
      console.error("Error");
    };
    dbPromise.onsuccess = (event) => {
      let db = event.target.result;
      setDb(db);
    };
  };

  const addTask = () => {
    if (addNewTask) {
      const dbPromise = idb.open("todoList", 1);

      dbPromise.onsuccess = () => {
        const db = dbPromise.result;
        const tx = db.transaction("userData", "readwrite");
        const userData = tx.objectStore("userData");

        const todoTasks = userData.put({
          id:
            allTodos.length > 0
              ? allTodos[allTodos?.length - 1].id + 1
              : allTodos?.length + 1,
          taskText: "",
          taskEditTime,
        });

        todoTasks.onsuccess = () => {
          tx.oncomplete = () => {
            db.close();
          };
          setTaskText("");
          setAddNewTask(false);
          getAllData();
        };
        todoTasks.onerror = (event) => {
          console.log(event);
        };
      };
    }
  };

  // let currentTask = allTodos.filter(item => {
  //   return item?.id === active ? item : ''
  // })[0]?.taskText
  let currentTask = allTodos.find((item) => item.id === active);

  const deleteTask = (key) => {
    const dbPromise = idb.open("todoList", 1);
    let answer = window.confirm("Are you sure you want to delete");
    if (answer) {
      dbPromise.onsuccess = () => {
        const db = dbPromise.result;
        let tx = db.transaction("userData", "readwrite");
        let userData = tx.objectStore("userData");

        const deleteUser = userData.delete(key);

        deleteUser.onsuccess = () => {
          tx.oncomplete = () => {
            db.close();
          };
          getAllData();
        };
      };
    }
  };

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
    filterData,
    setEditTask,
    addNewTask,
    setAddNewTask,
    selectedUser,
    setSelectedUser,
    handleTextChange,
    disabledTextField,
    editTask,
    disableButtons,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
