import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../images/avocado.svg";

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="containerB">
                    <Logo height={50} style={{paddingTop:".6%", left: "0"}}/>
                    <Link to="/" className="brand-logo">DUBICADOS</Link>
                    <ul className="right">
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;