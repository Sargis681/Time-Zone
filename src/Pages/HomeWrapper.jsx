import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function HomeWrapper({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <Outlet />
      <Footer />

    </>
  )
}

export default HomeWrapper