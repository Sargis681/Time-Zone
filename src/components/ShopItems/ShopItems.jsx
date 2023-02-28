import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './ShopItems.css'


function ShopItems(props) {
  const navigate = useNavigate()
  return (
    <div className='item'>
      <div className='itemimg'>
        <img src={props.image} />
      </div>
      <div>{props.category}</div>
      <div>{props.price}</div>
      <div>{props.title}</div>
      <div>{props.description.slice(1, 25)}</div>
      {/* <Link to='/uniq' state={{id:props.id}} >add</Link> */}
      <button onClick={() => navigate(props.id)}>More</button>



    </div>
  )
}

export default ShopItems