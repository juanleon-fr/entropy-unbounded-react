import React from 'react';

function Navigation() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
            <div className="nav-logo">
                <button className="nav-logotype">ENTROPY</button>
            </div>
            <ul className="nav-menu">
                <li className="nav-item"><button className="btn link">Home</button></li>
                <li className="nav-item"><button className="btn link">Productos</button></li>
                <li className="nav-item"><button className="btn link">Carrito</button></li>
                <li className="nav-item" id="login-li"><button className="btn btn-color-10">Ingresar</button></li>
            </ul>
        </nav>
    </header>
    </div>
  );
}

export default Navigation;