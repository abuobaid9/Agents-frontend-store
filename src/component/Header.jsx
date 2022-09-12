import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container-fluid">
          <Link className="navbar-brand fw-blod fs-4" to="/">
            Anas Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favlist">
                Favourite List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contac Us
                </Link>
              </li>
            </ul>
            <Link to="/newproduct" className="btn btn-outline-dark ms-2">
              Add Product 
            </Link>
            <Link to="/login" className="btn btn-outline-dark ms-2">
              Log in 
            </Link>
            
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
