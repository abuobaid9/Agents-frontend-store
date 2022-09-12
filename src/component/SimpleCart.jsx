import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCart } from "../redux/action";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

const SimpleCart = () => {
const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);

const handleDel = (item) => {
    dispatch(delCart(item));
};
const cartItems = (product) => {
    return (
    <div
        className=" position-relative "
        style={{ minHeight: "120px" }}
        key={product.id}
    >

        <ToastContainer   position="top-end" className="p-3 ">
        <Toast className="d-flex justify-content-center  align-items-center">
            <img
            src={product.image}
            alt={product.title}
            className='cartItemImg'
            width="50px"
            />
            <strong className="me-auto" >{product.category}</strong>
            <Toast.Body>{product.title.substring(0, 19)}</Toast.Body>
            <button 
            className="btn btn-outline-danger  mb-1  close"
            onClick={() => handleDel(product)}
            >
            x
            </button>
        </Toast>
        </ToastContainer>
    </div>
    );
};
return <div>{state.length === 0 ? "" : state.map(cartItems)}</div>;
};

export default SimpleCart;
