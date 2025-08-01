import React,{useState,useEffect} from "react";
import Airplane from "./Airplane";
function ListAirplane(){
    const [obj, setObj] = useState([])
    const [carga,setCarga] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.nasa.gov/techtransfer/patent/?engine&api_key=Pf4c9iTXNvCPKUjLzRtblk8bcBSPUguJmBs7Qtsu")
                const data = await response.json()
                setObj(data.results)
                setCarga(true)
            } catch (error) {
                console.error("ERROR EN EL FETCH DE DATOS")
            }
         }
        fetchData()
        },[])
    return (
        <div className="grid grid-cols-3 gap-4">
            {carga 
                ? obj.length != 0 
                    ? obj.map(o => {
                        return (
                            <Airplane key={o[0]} dataAirplane={o}/>
                            )
                        })
                    : "No hay datos"
                : "Cargando datos..."
            }
        </div>
    )
}

export default ListAirplane