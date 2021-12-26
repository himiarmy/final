import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import { cartContext } from "../../contexts/cartContext";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Modal } from "antd";
import OrderForm from "./OrderForm";

const Cart = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  //order form
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container" style={{ marginTop: "17vh" }}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={<h2>In All: {cart?.totalPrice}$</h2>}
        renderItem={(item) => <CartItem item={item} />}
      />
      <Button
        onClick={showModal}
        variant="contained"
        endIcon={<SendIcon />}
        style={{ backgroundColor: "#00b0eb", marginLeft: "1%" }}
      >
        Order
      </Button>

      <Modal
        footer={null}
        title="Order Form"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <OrderForm />
      </Modal>
    </div>
  );
};

export default Cart;
