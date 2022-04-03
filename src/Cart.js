import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return  <p className='text-center text-danger fs-5'>Your cart is empty</p>;
  

  // console.log(items)
  return (
    <section className='container py-0'>
      <div className='row justify-content-center'>
            {/* <h3>Cart {totalUniqueItems} Total Items {totalItems} </h3> */}
            <h3 className='text-center fw-bold mb-3'>Cart</h3>
          <div className='col-md-9 col-lg-9'>
            <table className='table table-hover mb-5'>
              <thead className='text-center'>
                <tr>

                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
              {items.map((item,index) => {
                return (
                  <tr key={index} className="align-items-center">
                    <td className='d-flex justify-content-center'>
                      <img src={item.img} style={{height:'6rem'}} />
                    </td>
                    <td className='fw-bold w-auto'>{item.title}</td>
                    <td>$ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <button className='btn btn-warning btn-md ' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        <button className='btn btn-warning btn-md mx-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                        <button className='btn btn-danger btn-md' onClick={() => removeItem(item.id)}>Hapus</button>
                      </div>
                    </td>
                </tr>
                  )
              })}
              </tbody>
            </table>
            <div className='col-auto ms-auto mb-5'>
                  <button className='btn btn-danger btn-md' onClick={() => emptyCart()}>Clear Cart</button>
                  <h4 className='text-end'>Total Price: $ {cartTotal}</h4>
            </div>
          </div>
      </div>
    </section>

  )


}

export default Cart;