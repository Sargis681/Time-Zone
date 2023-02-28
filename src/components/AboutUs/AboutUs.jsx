import React from 'react'
import './AboutUs.css'
import ReactPlayer from 'react-player'

function AboutUs() {
  return (
    <>
      <div className='aboutus'>
        <div>
          <h1>About Us</h1>
        </div>
      </div>
      <div className='containerabout'>
        <div>
          <h2>... Our Mission</h2>
          <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore  magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
          <p>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>

        </div>

        <div>
          <h2>... Our Vision</h2>
          <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore  magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
          <p>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>

        </div>


        <ReactPlayer
          url={'https://www.youtube.com/watch?v=GSuF0NSZJYg'}
          playing={true}
          loop={true}
          width='90%'
          stopOnUnmount={true}
          onReady={true}

        />
      </div>
    </>
  )
}

export default AboutUs