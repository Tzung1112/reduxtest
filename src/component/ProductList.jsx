import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, selectedProduct } from '../redux/product/action'
export default function ProductList() {
  const { products } = useSelector(state => state.productReducer)
  console.log("🚀 ~ file: ProductList.jsx:6 ~ ProductList ~ products:", products)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }
  const handleEdit = (product) => {
    dispatch(selectedProduct(product))
  }
  return (
    <div className='product'>
      <div className='product-header'>
        <h3>Your Cart</h3>
      </div>
      <div className='product-body'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><input type="number" style={{ width: "70px", border: "1px solid black" }} value={product.quantity} /></td>
                <td>{product.price * product.quantity}</td>
                <td><span><button onClick={() => handleEdit(product)}>Edit</button></span><span><button onClick={() => handleDelete(product.id)}>Delete</button></span></td>
              </tr>
            ))}
            
          </tbody>
          <tfoot>
            <tr><td colSpan={6}><span>asdfsadfdsfgdsfdsfsd</span></td></tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
