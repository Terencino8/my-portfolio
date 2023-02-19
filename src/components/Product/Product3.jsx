import React from 'react'
import "./Product.css"
import wildlife from "../../img/wildlife.png"

const Product = () => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        
      </div>
      <img src={wildlife} alt=""  className='p-img three'/>
    </div>
  )
}

export default Product




