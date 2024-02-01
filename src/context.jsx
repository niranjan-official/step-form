import { useState, createContext, useContext } from "react";

export const ResponseContext = createContext();

export default function ResponseProvider({children}) {
    const [result, setResult] = useState([
      {
        0:"",
        1:"",
        2:""
      },
      {
        0:"",
        1:'',
        2:'',
      },
      {
        0:'',
        1:"",
        2:""
      }
    ]);
  
    return (
      <ResponseContext.Provider value={{result,setResult}}>
        {children}
      </ResponseContext.Provider>
    );
  }
