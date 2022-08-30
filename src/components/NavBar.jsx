import React from 'react';
import NavIcon from '../assets/icons/entropy-icon.svg';
import NavLogotype from '../assets/icons/entropy-logotype.svg';
import CartWidget from './CartWidget';
import Spbtn from './SpecialBtn';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div class="nav-logo">
          <button className="nav-icon"><img src={NavIcon} alt="Icon" /><div className="circle" /></button>
          <button className="nav-logotype"><img src={NavLogotype} alt="Entropy" /><div className="line" /></button>
        </div>
        <ul className="nav-menu">
          <li className="nav-item"><Spbtn input='Home' /></li>
          <li className="nav-item"><Spbtn input='Productos' /></li>
          <li className="nav-item"><button className="btn link"><CartWidget /></button></li>
          <li className="nav-item" id="login-li"><Spbtn input='Ingresar' color='color-10' /></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;