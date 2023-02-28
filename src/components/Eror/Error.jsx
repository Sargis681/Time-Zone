import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Error.css"

function Error() {
  const navigate = useNavigate()
  return (
    <>
      <div className='error'>Error 404</div>
      <button className='errorbut' onClick={() => navigate('/')} >Home</button>
    </>
  )
}

export default Error