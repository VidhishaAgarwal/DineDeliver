import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' className="text" />
          <input type="text" placeholder='Last Name' className="text" />
        </div>
        <input type="text" placeholder='Email' className="text" />
        <input type="text" placeholder='Street' className="text" />
        <div className="multi-fields">
          <input type="text" placeholder='City' className="text" />
          <input type="text" placeholder='State' className="text" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' className="text" />
          <input type="text" placeholder='Country' className="text" />
        </div>
        <input type="text" placeholder='Phone' className="text" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder