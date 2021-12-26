import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button } from "antd";

import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";
import "../DetailsProduct/DetailsProduct.css"


const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  // cart
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(id));
  });
  return (
    <div className="container" style={{ marginTop: "23vh" }}>
      {product ? (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              // alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "45vw"}}>
              <Carousel autoplay>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                  <img width="100%" src={product.image2} alt="" />
                </div>
              </Carousel>
            </div>
            <div  style={{ width: "35vw" }}>
              <h1>{product.model}</h1>
              <h6>{product.brand}</h6>
              <h4 style={{ color: "red" }}>{"$" + product.price}</h4>
              <Button
                size="large"
                // style={{ margin: "15px 0px", width: "100%" }}
                style={{ color: checkInCart ? "red" : "black" }}
                onClick={() => {
                  addProductToCart(product);
                  setCheckInCart(checkItemInCart(id));
                }}
              >
                ADD TO CART
              </Button>
              <h3 className="prod-desc">{product.description}</h3>
            </div>
          </div>
          <video src={product.video} width="100%" style={{height:"100vh"}} autoPlay loop muted></video>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
