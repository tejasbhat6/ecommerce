import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";
import { FetchProducts } from "./config/api";

const Product = () => {
  const [products, setProducts] = useState([]);
  
 
  const Url = FetchProducts;
  console.log(Url);

  // const Opt = FetchOptions;
  // console.log(Opt);

  const productdata = async () => {
    const res = await fetch(Url);
    var data = await res.json();
    // console.log(data);
    setProducts(data);
    
  };
  useEffect(() => {
    productdata();
  }, [])
  
  const cardItem = (item) => {
    // console.log(products)
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.image} class="card-img-top" alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  console.log(products);

  return (

    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{products.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
