import React from 'react'
import "./Product.css"
import website from "../../img/website.png"



const Product = () => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <img src={website} alt="" className='p-img five'/>
    </div>
  )
}

export default Product




