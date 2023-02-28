import React from 'react'
import { useState } from 'react';
// import React, { useEffect } from 'react'
import { useEffect } from 'react';


function ShopWiewItem({ title, images, description, rating, price, count, cart, setCart, id, sumi }) {
    //    console.log(cart);
    const countMinus = () => {
        if (count > 1) {
            setCart([
                ...cart.map(item => {
                    if (item.id !== id) return item
                    return {
                        ...item,
                        count: item.count - 1,
                        price: item.price - item.price / item.count
                    }
                })
            ])
        }
    }
    const countPlus = () => {
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
    }
    const deleteItem = () => {
        setCart([
            ...cart.filter(el => el.id !== id)
        ])

    }
    useEffect(() => {
        console.log(("component did ubdate"));
    })

    return (
        <>
            <div className='homeSectionItem'>
                <div className='img'>
                    <img src={images} alt='nkar' />
                </div>
                <p>{description.slice(0, 20)}...</p>
                <div className='span'>
                    <span>{rating}</span>
                    <span>${price}</span>
                </div>
                <div>
                    <input type='button' value='-' onClick={() => countMinus()} />
                    <span>X{count}</span>
                    <input type='button' value='+' onClick={() => countPlus()} />
                </div>
                <button onClick={deleteItem}>Delete</button>
            </div>
            <div>
            </div>
        </>
    )
}

export default ShopWiewItem