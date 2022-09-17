import React from 'react'
import "./Product.css"
import Hsite from "../../img/Hsite.png"

const Product = () => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <img src={Hsite} alt=""  className='p-img three'/>
    </div>
  )
}

export default Product




