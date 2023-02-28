import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Cart from '../Cart/Cart'
import './Header.css'

function Header({ cart }) {
  const navigate = useNavigate()
  // console.log(cart);
  return (
    <div>
      <nav>
        <div className='container'>
          <div className='timezone'>
            <img src='https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp' />
          </div>
          <div className='navlink'>
            <a style={{ cursor: "pointer" }} onClick={() => navigate(-1)}> {'<'} </a>
            <a style={{ cursor: "pointer" }} onClick={() => navigate(1)}> {'>'} </a>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/about'>About us</NavLink>
            <NavLink to='/shopwiew'>Shop Wiew</NavLink>
          </div>

          <div className='z'>
            <div className='zCart'>Cart</div>
            {cart.map(el => {
              return <Cart id={el.id} key={el.id} image={el.images} price={el.price} />
            })}


          </div>

        </div>


      </nav>
    </div>
  )
}

export default Header