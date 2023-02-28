import React from 'react'
import './Footer.css'

function Footer() {
  return (

    <footer>
      <div className='container'>
        <div className='timezone'>
          <img src='https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png.webp' />
          <p>Asorem ipsum adipolor sdit amet,</p>
          <p>consectetur adipisicing elitcf sed do</p>
          <p>eiusmod tem.</p>
        </div>

        <div className='quicklinks'>
          <h3>Quick Links</h3>
          <p>About</p>
          <p>Offers & Discounts</p>
          <p>Get Coupon</p>
          <p>Contact Us</p>
        </div>

        <div className='newproducts'>
          <h3>New Products</h3>
          <p>Woman Cloth</p>
          <p>Fashion Accessories</p>
          <p>Man Accessories</p>
          <p>Rubber made Toys</p>

        </div>

        <div className='support'>
          <h3>Support</h3>
          <p>Frequently Asked Questions</p>
          <p>Privacy Policy</p>
          <p>Man Accessories</p>
          <p>Report a Payment Issue</p>

        </div>


      </div>
    </footer>
  )
}

export default Footer