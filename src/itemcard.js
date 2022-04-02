import React from 'react'

export default function itemCart(props) {
  return (
    <div className='col-md-4 col-11 col-lg-3 mx-0 mb-3'>
        <div className='card'>
            <div className='card-body text-center p-3 h-100 shadow'>
                <img className='card-img-top img-fluid' src={props.img} />
                    <h5 className='card-title'>
                        {props.namaProduk}
                    </h5>
                    <div className='text-muted fs-5 my-3'>
                        $ {props.harga}
                    </div>
                    <button className='btn btn-success btn-md'>Add Cart</button>
            </div> 
        </div>
    </div>
  )
}
