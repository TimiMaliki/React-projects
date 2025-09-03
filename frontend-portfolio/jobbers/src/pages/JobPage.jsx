import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobPage = () => {
    const {id} = useParams()
    const [job , setJob] = useState([])
    const [loading,setLoading] = useState(true)

        useEffect(() => {
            fetch(
              `https://api.adzuna.com/v1/api/jobs/ca/search/1?app_${id}=a6ea1c5f&app_key=7dceb6f8e6af569397fd77c31848e4b7`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setJob(job.results);
                setLoading(false);
              })
              .catch((err) => {
                console.error(err)
               setLoading(false)
              });
    },[])

  return (
   
    <div className='mt-24 text-center'>
    {loading ? "Loading..." : <h2 className=''>{job.title}</h2>}
     </div>
   
  )
}

export default JobPage