import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut, isAuthenticated } from './auth/index';


const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const { user } = isAuthenticated();
  console.log(JSON.stringify(user)+'***sa*d**d*sa*d');
  useEffect(() => {

  }, [user])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container-fluid">
          <Link className="navbar-brand fw-blod fs-4" to="/">
            Anas Store
          </Link>

          <div className="collapse navbar-collapse" >
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


            {
              !user ?
                (
                  <>
                    <Link to="/newproduct" className="btn btn-outline-dark ms-2">
                      Add Product
                    </Link>
                    <Link to="/cart" className="btn btn-outline-dark ms-2">
                      <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
                    </Link>
                    <button onClick={logOut} className="btn btn-outline-dark ms-2">
                      logout
                    </button>
                  </>
                )
                : (
                  <>
                    <Link to="/signin" className="btn btn-outline-dark ms-2">
                    sign in
                  </Link>
                   <button onClick={logOut} className="btn btn-outline-dark ms-2">
                      logout
                    </button>
                  </>
                
                  
                )


            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
