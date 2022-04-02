import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return (
      <p className='text-center text-danger fs-5'>Your cart is empty</p>
  )

  return (
    <section className='container py-4'>
      <div className='row justify-content-center'>
          <div className='col-md-4 col-11 col-lg-3'>
            <h3>Cart {totalUniqueItems} Total Items:({totalItems}) </h3>
          </div>
      </div>
    </section>

  )


}

export default Cart;