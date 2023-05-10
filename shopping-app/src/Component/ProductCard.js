import React from "react";
import PropTypes from "prop-types";
import { useContext } from 'react';
import { Context } from '../context/login';
function ProductCard({
  id,
  productName,
  feature,
  productStatus,
  productDescription,
  price,
  del,
  upd
}) {

  const {Role,SetRole} = useContext(Context);
  function clickDelete() {
    del(id);

    fetch(`http://localhost:8081/api/v1.0/shopping/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${localStorage.getItem('username')}:${localStorage.getItem('password')}`),
      },
      mode: "cors",
    })
      .then((response) => {
      })
      


  }
  function clickUpdate() {
    upd(id);
    fetch(`http://localhost:8081/api/v1.0/shopping/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${localStorage.getItem('username')}:${localStorage.getItem('password')}`),
      },
      mode: "cors",
    })
      .then((response) => {
        
      })
  }
  return (
    <div>
      <div className="card text-center container">
        <div className="card-header">
          <h1 className="btn  position-relative ">
            {productName}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {productStatus}
            </span>
          </h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">{feature}</h5>
          <p className="card-text">{productDescription}.</p>
          <a href="#" className="btn btn-info">
            ₹ {price}
          </a>
        </div>
        {Role==="ADMIN" && (
        <div className="card-footer text-muted">
          <div>
            <button
              className="btn btn-outline-success my-2 mx-5 my-sm-0 "
              onClick={clickDelete}
            >
              Delete
            </button>
            <button
              className="btn btn-outline-success my-2 mx-5 my-sm-0 "
              onClick={clickUpdate}
            >
              Update
            </button>
          </div>
        </div>)}
      </div>
    </div>
  );
}

ProductCard.propTypes = {};

export default ProductCard;
