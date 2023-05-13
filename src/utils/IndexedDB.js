export const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

export const createCollectionsInIndexedDB = () => {
  if (!idb) {
    console.log("This browser doesnt support IndexedDB");
    return;
  }

  const request = idb.open("todoList", 1);
  request.onerror = (event) => {
    console.log("Error occured with IndexedDB", event);
  };

  request.onupgradeneeded = () => {
    let db = request.result;

    if (!db.objectStoreNames.contains("userData")) {
      db.createObjectStore("userData", {
        keyPath: "id",
      });
    }
  };

  request.onsuccess = () => {
    console.log("Database opened successfully");
  };
};
