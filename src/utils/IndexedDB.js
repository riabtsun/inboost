// let db;

import {useEffect} from "react";

export const idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
//
// let request = indexedDB.open('TaskManager', 1)
// request.onupgradeneeded = (e) => {
//   db = request.result
//   db.createObjectStore('tasks', {keyPath: 'id', autoIncrement: true});
//   if (!db.objectStoreNames.contains('books')) {
//     db.createObjectStore('books', {keyPath: 'id', autoIncrement: true});
//   }
// }

export const createCollectionsInIndexedDB = () => {
  if (!idb) {
    console.log('This browser doesnt support IndexedDB')
    return
  }
  // console.log(idb)

  const request = idb.open('todoList', 1)
  request.onerror = (event) => {
    console.log('Error occured with IndexedDB', event)
  }

  request.onupgradeneeded = (event) => {
    let db = request.result

    if (!db.objectStoreNames.contains('userData')) {
      db.createObjectStore('userData', {
        keyPath: 'id'
      })
    }
  }

  request.onsuccess = () => {
    // console.log('Database opened succesfully')
  }
}




