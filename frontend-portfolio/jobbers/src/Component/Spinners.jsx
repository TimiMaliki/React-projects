import React from 'react'
import ClipLoader  from 'react-spinners/ClipLoader'

const override = {
  display : "block",
  margin : "100px auto"
 }

const Spinners = ({loading}) => {
  return (
        <ClipLoader 
         color="green"
         cssOverride={override}
         loading={loading}
         size={150}
        />
  )
}

export default Spinners;