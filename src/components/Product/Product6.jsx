import React from 'react'
import "./Product.css"
import mockup from "../../img/mockup.png"



const Product = () => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <img src={mockup} alt="" className='six'/>

    </div>
  )
}

export default Product




