import React, { useState } from 'react'
 import './NavBar.css'
 import SearchButton from './SearchButton'
 import './SearchButton.css'
 import CartIcon from './CartIcon'
 import './CartIcon.css'
 import UserIcon from './UserIcon'
import Drawers from './Drawer'

function NavBar({onClick,onCLose,openCart})  {
  const [open, setOpen] = useState(false);
  return (
    <div className='NavContainer'>
      <nav className="navbar">
      <ul className="nav-list">
        <img src="/yoyo1.png" alt="" />
      {/*<li  onClick={(()=>setOpen(true))} className="nav-item"><a >Galerie</a></li>  */}
      </ul>
        <div className='navContaint'>
          <UserIcon onClick={onClick}/>
      <CartIcon openDrawer={openCart} />
      </div>
          </nav>
          <Drawers open={open} setOpen={setOpen} />
    </div>
  )
}

export default NavBar