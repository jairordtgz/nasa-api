import React, {useEffect, useState} from "react"
import ListAirplane from "./components/ListAirplane"
function App() {

  return (
    <div className="bg-[#14213d] text-white"> 
      <h1 className="text-center p-10 text-5xl text-[#ffb703] font-bold"> API de la NASA </h1>
      <ListAirplane/>
    </div>
  )
}

export default App
