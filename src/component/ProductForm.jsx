import React, { useEffect, useState } from 'react'
import { addProduct, updateProduct } from '../redux/product/action'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductForm() {
    const { products } = useSelector(state => state.productReducer)
    const [product, setProduct] = useState([
        {
            id: "",
            name: "",
            image: "",
            title:
                "",
            price: " ",
            quantity: "",
        },
        
    ])
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
            dispatch(addProduct(product))
    }
            console.log("🚀 ~ file: ProductForm.jsx:25 ~ handleSubmit ~ product:", product)
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.quantity]: e.target.value
            
        })

    }
  return (
    <div className='listproduct'>
          <form onSubmit={handleSubmit} action="">
              <div className='listproduct-header'>
                  <h3>ListProduct</h3>
              </div>
              <div className='listproduct-body'>
                  {products.map((product) => (
                      <div className="card mb-3" style={{ width: "100%" }}>
                          <div className="row g-0" style={{ height: "100%" }}>
                              <div className="col-md-4">
                                  <img
                                      src={product.image} 
                                      alt="Trendy Pants and Shoes"
                                      className="img-fluid rounded-start a"
                                      style={{ height: "200px", width: "250px" }}
                                  />
                              </div>
                              <div className="col-md-8">
                                  <div className="card-body">
                                      <h5 className="card-title">{product.name}</h5>
                                      <p className="card-text">
                                          {product.title}
                                      </p>
                                  </div>
                                  <div className='card-form'>
                                      <input type="number" onChange={handleChange} /><br />
                                      <button type='submit'>{product.price}USD</button>
                                  </div>
                              </div>
                          </div>
                      </div>
            ))}
              </div>
     </form>
    </div>
  )
}
