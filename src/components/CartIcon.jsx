import React from 'react'
import './CartIcon.css'


function CartIcon({panier,validerPanier,openDrawer}) {
  const onClick= ()=>{
    openDrawer()
  }
  return (
    <div onClick={onClick} className="cart-icon">
    <i className="fas fa-shopping-cart"></i> 
  </div>
  )
}

export default CartIcon


