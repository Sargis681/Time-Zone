import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShopItems from '../ShopItems/ShopItems'
import './Shop.css'

function Shop({ products, setProducts }) {
  const [isLoading, setIsLoading] = useState(true)
  const [errMessage, setErrMessage] = useState('')
  const [arri, setArri] = useState(["jewelery", "electronics", "men's clothing", "women's clothing"])
  const [arr, setArr] = useState("")
  // console.log(products
  useEffect(() => {
    console.log(arr);
    axios.get(`https://fakestoreapi.com/products${arr}`)
      .then((response) => {

        const currentData = response.data.map(el => ({
          id: el.id.toString(),
          title: el.title,
          price: Math.round(el.price),
          description: el.description,
          category: el.category,
          image: el.image
        }))


        setProducts([
          ...currentData
        ])

      })
      .catch((err) => {
        console.log(err.message);
        setErrMessage(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })



  }, [arr])
  // if(arr===""){

  // }


  // console.log(arr);





  return (
    <div className='containershop'>
      <div className='navigator'>

        {arri.map((it) => {
          return <h3 key={it} onClick={() => setArr(`/category/${it}`)}>{it}</h3>
        })}
      </div>
      {
        isLoading ?  <div className='mej'> <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> :
          errMessage ? <h1>{errMessage}</h1> :
            <div className='obitems'>
              {products.map(el => {

                return <ShopItems products={products} image={el.image} description={el.description} title={el.title} price={el.price} key={el.id} id={el.id} />
              })}
            </div>
      }
    </div>
  )
}

export default Shop