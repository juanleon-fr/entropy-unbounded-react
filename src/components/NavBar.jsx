import React from 'react';
import NavIcon from '../assets/icons/entropy-icon.svg';
import NavLogotype from '../assets/icons/entropy-logotype.svg';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div class="nav-logo">
            <button className="nav-icon"><img src={NavIcon} alt="Icon"/></button>
            <button className="nav-logotype"><img src={NavLogotype} alt="Entropy"/></button>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><button className="btn link">Home</button></li>
            <li className="nav-item"><button className="btn link">Productos</button></li>
            <li className="nav-item"><button className="btn link"><CartWidget /></button></li>
            <li className="nav-item" id="login-li"><button className="btn btn-color-10">Ingresar</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;