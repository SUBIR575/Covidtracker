import React from 'react'
import Slider from './Slider'
import Tracker from './Tracker'
import Overall from './Overall'

const Home = () => {
  return (
    <>
    <Slider/>
    <div className="section">
    <h2 style={{margin:'30px',textAlign:'center'}}>Daily Data</h2>
    <Tracker/>
    <h2 style={{margin:'30px',textAlign:'center'}}>Total Data of India</h2>
    <Overall/>
    </div>
    </>
  )
}

export default Home
