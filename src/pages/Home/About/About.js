import React from 'react'
import person from '../../../assets/images/about_us/persomn1.png'


const About = () => {
  return (
    <div className="hero min-h-screen bg-light">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2'>
    <img src={person} className="rounded-lg shadow-2xl h-full " alt='' />
    
    </div>
    <div  className='w-1/2'>
        <p className='text-2xl font-bold text-green-600'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      <br/>
      <br/>
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
  )
}

export default About