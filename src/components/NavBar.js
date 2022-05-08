import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

import './styles/NavBar.css'

const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <Link to="/" className='nav-link'>
                    <a className="navbar-brand" href="/">{ props.brand }</a>
                    </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link to="/" className="nav-link" href="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/productos" className="nav-link" href="/">Productos</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/nosotros" className="nav-link" href="/">Nosotros</Link>
                      </li>
                    </ul>
                    <CartWidget />
                  </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;