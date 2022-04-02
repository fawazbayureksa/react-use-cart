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

  if (isEmpty) return  <p className='text-center text-danger fs-5'>Your cart is empty</p>
  

  console.log(items)
  return (
    <section className='container py-4'>
      <div className='row justify-content-center'>
          <div className='col-md-4 col-11 col-lg-3'>
            <h3>Cart {totalUniqueItems} Total Items {totalItems} </h3>
            <table className='table table-bordered table-hover m-0'>
              <tbody>
              {items.map((item,index) => {
                <tr key={item.id}>
                    <td><img src={item.img} className="img-fluid"/></td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className='btn btn-warning' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className='btn btn-warning' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Hapus</button>
                    </td>
                </tr>
              })}
              </tbody>
            </table>
          </div>
      </div>
    </section>

  )


}

export default Cart;