import { useEffect, useState } from "react"

 
 const useFetchCars = () => {
    const [data,setData] = useState(null)

    useEffect((url)=> {
        fetch(url)
        .then((res)=>{
             return res.json()
           
        })
        .then((data)=>{
              setData(data)
        })
    },[])

    return {data}
 }

 export default useFetchCars;