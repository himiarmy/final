import React, { useContext, useEffect } from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";

const Paym = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const navigate = useNavigate();
  return (
    <Result
      status="success"
      title="Payment successfully completed!"
      subTitle={
        <p>
          {" "}
          Your total order: <h6>{cart?.totalPrice}$</h6> Order number: 12154
          Your order will be delivered within 3-5 hours, please wait.
        </p>
      }
      extra={[
        <Button onClick={() => navigate("/")} type="primary" key="console">
          Home
        </Button>,
      ]}
    />
  );
};

export default Paym;
