import ProductCard from "./ProductCard";

import React, { useEffect, useState } from "react";

const AllProduct = () => {
  const [products, setproducts] = useState([]);

  
  const fetchUserData = () => {
    fetch("http://localhost:8081/api/v1.0/shopping/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${localStorage.getItem('username')}:${localStorage.getItem('password')}`),
      },
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setproducts(data);
      });
  };
  function del(id) {
    setproducts((data) => data.filter((data) => data.id !== id));
  }
  function upd(id) {
    const update = products.map((products) => {
      if (products.id === id) {
        return {
          ...products,
          productStatus: "Out of Stock",
        };
      } else {
        return products;
      }
    });
    setproducts(update);
  }
  
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      
        {products.length > 0 && (
          <ul>
      
            {products.map((products) => (
              <ProductCard
                key={products.id}
                id={products.id}
                productName={products.productName}
                productDescription={products.productDescription}
                price={products.price}
                feature={products.feature}
                productStatus={products.productStatus}
                del={del}
                upd={upd}
              />
            ))}
          </ul>
        )}
        
     
    </>
  );
};

export default AllProduct;
