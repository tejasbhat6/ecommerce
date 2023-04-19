import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
// import DATA from '../Data';
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { FetchProducts } from "./config/api";

const ProductDetail = () => {
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
  }, []);

  const [cartBtn, setCartBtn] = useState("Add to Cart");
  
  const proid = useParams();
  const proDetail = products.filter((x) => x.id == proid.id);
  const product = proDetail;
  console.log(product);

  
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
            {(product[0] != undefined)?
            <>
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product[0].image} alt={product[0].title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product[0].title}</h1>
            <hr />
            <h2 className="my-4">${product[0].price}</h2>
            <p className="lead">{product[0].description}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
          </>:<>
          </>
}

        </div>
      </div>
    </>
  );
};

export default ProductDetail;
