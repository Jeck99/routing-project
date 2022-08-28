import { createContext, useState } from "react";

export const textContext = createContext();

export default function TextProvider({children}) {
  const [text, setText] = useState("some words");

  return(
   <textContext.Provider value={{ text, setText }}>
    {children}
  </textContext.Provider>);
}
