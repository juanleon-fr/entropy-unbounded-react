import NavIcon from '../assets/icons/entropy-icon.svg';
import NavLogotype from '../assets/icons/entropy-logotype.svg';
import CartWidget from './CartWidget';
import Spbtn from './SpecialBtn';
import { BrowserRouter as Router, Link } from 'react-router-dom'

function NavBar() {
  return (
    // <Router>
      <header>
        <nav className="navbar">
          <Link to="/">
            <div className="nav-logo">
              <button className="nav-icon"><img src={NavIcon} alt="Icon" /><div className="circle" /></button>
              <button className="nav-logotype"><img src={NavLogotype} alt="Entropy" /><div className="line" /></button>
            </div>
          </Link>
          <ul className="nav-menu">
            <Link to="/products/tshirts"><li className="nav-item"><Spbtn input='Remeras' /></li></Link>
            <Link to="/products/hoodies"><li className="nav-item"><Spbtn input='Buzos' /></li></Link>
            <Link to="/products/pants"><li className="nav-item"><Spbtn input='Pantalones' /></li></Link>
            <Link to="/products/cart"><li className="nav-item"><button className="btn link"><CartWidget /></button></li></Link>
            <li className="nav-item" id="login-li"><Spbtn input='Ingresar' color='color-10' /></li>
          </ul>
        </nav>
      </header>
    // </Router>
  );
}

export default NavBar;