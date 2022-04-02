import React from 'react';
import  {useCart}  from 'react-use-cart';


const Card = (props) => {

    const {addItem} = useCart();
    // console.log(props.item);

  return (
    <div className='col-md-4 col-11 col-lg-3 mx-0 mb-3'>
        <div className='card'>
            <div className='card-body text-center p-3 h-100 shadow rounded-3'>
                <img className='card-img-top img-fluid' src={props.img} />
                    <h5 className='card-title'>
                        {props.title}
                    </h5>
                    <div className='text-muted fs-5 my-3'>
                        $ {props.price}
                    </div>
                    <div className='my-3'>
                        {props.quantity}
                    </div>
                    <button className='btn btn-success btn-md' onClick={() => addItem(props.item)}>Add Cart</button>
            </div> 
        </div>
    </div>
  )
}


export default Card;