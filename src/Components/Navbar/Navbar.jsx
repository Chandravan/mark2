import React from 'react';
import './Navbar.css';
import icon from '../../assets/logo.png';
import { IoSearchOutline } from 'react-icons/io5'; 
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={icon} alt='Logo' className='navbar-logo' />
      </div>
      <div className='navbar-middle'>
        <div className='search-bar'>
          <input type='text' placeholder='Search...' className='search-input' />
          <IoSearchOutline className='search-icon' />
        </div>
      </div>
      <div className='navbar-right'>
        <div>Home</div>
        <div>Products</div>
        <div className="profile-icon"><CgProfile/></div>
        <div className='cart-icon'><AiOutlineShoppingCart /></div>
      </div>
    </div>
  );
}

export default Navbar;
