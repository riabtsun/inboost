import {createContext, useState} from "react";

export const CustomContext = createContext()

export const Context = (props) => {
  const [title, setTitle] = useState([])

  const value = {title, setTitle}

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}