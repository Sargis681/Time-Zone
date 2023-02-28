import React, { useEffect } from 'react'
import './ShopWiev.css'
import { useState } from 'react';
import ShopWiewItem from './ShopwiewItem/ShopWiewItem';

function ShopWiev({ cart, setCart }) {
  const [sumi, setSumi] = useState()
  useEffect(() => {
    setSumi(() => {
      return cart.reduce((total, item) => {
        return total + item.price
      }, 0)
    })
    console.log(sumi);
  }, [cart])

  return (
    <div>
      <div className='zambyuxi'>
        {cart.map(el => <ShopWiewItem key={el.id} id={el.id} title={el.titel} images={el.images} description={el.description} brand={el.brand} rating={el.rating} price={el.price} count={el.count} cart={cart} setCart={setCart} sumi={sumi} />)}
      </div>
      <h2 onClick={() => setSumi()}>SUM</h2>
      <div>{sumi}$</div>

    </div>

  )
}

export default ShopWiev