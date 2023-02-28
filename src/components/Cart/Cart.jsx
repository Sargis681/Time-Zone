import React from 'react'
import './Cart.css'

function Cart(props) {
  return (
    <>
      <div className='cart'>
        <img style={{ width: "40px", heigth: "40px" }} src={props.image} />
        <p style={{ color: "red" }}>${props.price}</p>
      </div>
    </>
  )
}

export default Cart