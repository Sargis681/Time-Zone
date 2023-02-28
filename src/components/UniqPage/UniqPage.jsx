import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './UniqPage.css'


function UniqPage({ products, cart, setCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentProduct, setCurentProduct] = useState(null)
  useEffect(() => {
    if (products.some(el => id === el.id)) {
      setCurentProduct({
        ...products.find(el => id === el.id)
      })
    } else {
      axios.get('https://fakestoreapi.com/products/' + id)
        .then(({ data }) => {
          setCurentProduct({
            id: data.id.toString(),
            title: data.title,
            price: Math.round(data.price),
            description: data.description,
            category: data.category,
            image: data.image
          })
        })
        .catch(() => {
          navigate('/err')
        })
    }
  }, [])


  function addcart() {
    if (cart.some(el => el.id === id)) {

      setCart([
        ...cart.map(item => {
          if (item.id !== id) return item
          return {
            ...item,
            count: item.count + 1,
            price: item.price + item.price / item.count
          }
        })
      ])
    } else {

      setCart([
        ...cart,
        {
          id: currentProduct?.id,
          title: currentProduct?.title,
          images: currentProduct?.image,
          description: currentProduct?.description,
          brand: currentProduct?.brand,
          rating: currentProduct?.rating,
          price: currentProduct?.price,
          count: 1
        }
      ])
    }

    // console.log(cart);
    navigate('/shopwiew')
  }


  return (
    <div className='iti'>
      <img src={currentProduct?.image} />
      <h1>{currentProduct?.title}</h1>
      <p style={{ color: "red" }}>${currentProduct?.price}</p>
      <h1>{currentProduct?.rating}</h1>
      <p>{currentProduct?.description.slice(1, 90)}</p>
      <button onClick={() => { addcart() }}>Add to cart</button>
    </div>

  )
}


export default UniqPage