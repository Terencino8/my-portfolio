import React from 'react'
import "./Product.css"
import Tcard from "../../img/handyman.png"


const Product = () => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <img src={Tcard} alt="" className='p-img two' />
    </div>
  )
}

export default Product




