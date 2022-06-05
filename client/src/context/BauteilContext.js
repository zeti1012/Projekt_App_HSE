import React, { createContext, useState } from 'react'

export const BauteilContext = createContext();

export const BauteilContextProvider = (props) =>{
  const [bauteil,setBauteil] = useState([]);
  const [historie, setHistorie] = useState([]);


  return(
    <BauteilContext.Provider value={{bauteil: bauteil, setBauteil, historie, setHistorie}}>
      {props.children}
    </BauteilContext.Provider>

  )
}

