import "./productList.css"
import Product from "../Product/Product"

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-text">
            <h1 className="pl-title"> Create & Inspire. It's Lama</h1>
            <p className="pl-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Ab tenetur voluptates nisi quos? Error delectus sapiente
                minima architecto earum voluptatum perferendis repellendus,
                quasi natus?
                Pariatur enim totam temporibus explicabo maxime.
            </p>
      </div>
      <div className="pl-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        
      </div>
    </div>
  )
}

export default ProductList
