import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../Assets/BookHaven.svg'
import cart_icon from '../Assets/cart.png'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

  const [menu, setMenu] = useState("all");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("all")}}><Link to='/'>Store</Link>{menu==="all"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("classic")}}><Link to='/classic'>Classic Literature</Link>{menu==="classic"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("modern")}}><Link to='/modern'>Modern Literature</Link>{menu==="modern"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("science")}}><Link to='science'>Science</Link>{menu==="science"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("history")}}><Link to='history'>History</Link>{menu==="history"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
