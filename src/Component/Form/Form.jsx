import React from 'react'
import { NavLink } from 'react-router-dom'

function Form({hideMOdal}) {
  return (
   <>
   <h1>form</h1>
  <NavLink to={`/payment`}>
  <button onChange={hideMOdal}>next</button>
    </NavLink> 
   
   </>
  )
}

export default Form
