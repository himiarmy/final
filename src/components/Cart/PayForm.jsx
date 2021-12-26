import React, { useState } from "react";
// import Cards from "react-credit-card";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router";
// import "react-credit-card/es/styles-compiled.css";


const PayForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate("/paym");
  };
  //   payment

  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const [numberState, setNumberState] = React.useState("");

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  let regex = /\d{0,16}?/gi;
  const handleInputChangeNumber = (e) => {
    const { name, value } = e.target;
    const haveLetters = (str) => {
      let alphabet = "qwertyuiopasdfghjklzxcvbnm";
      return str.split("").some((letter) => alphabet.includes(letter));
    };
    if (regex.test(value) && value.length < 17 && !haveLetters(value)) {
      console.log("regex passed");
      setNumberState(value);
      setState({ ...state, [name]: value });
    } else {
      setNumberState(numberState);
    }
  };
  return (
    <>
      {/* <Cards
        style={{marginBottom: "20vh"}}
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      /> */}
      <Form
        style={{ marginTop: "20vh" }}
        name="complex-form"
        onFinish={onFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="number"
          label="Card number"
          rules={[{ required: true, message: "Enter your card number" }]}
        >
          <Input
            // type="number"
            name="number"
            placeholder="Enter card number"
            maxLength={16}
            value={numberState}
            onChange={handleInputChangeNumber}
            // onChange={handleInputChange}
            onFocus={handleInputFocus}
            // style={{ minWidth: 200 }}
          />
        </Form.Item>

        <Form.Item
          name="Name"
          label="Name"
          rules={[{ required: true, message: "Enter your name" }]}
        >
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Form.Item>

        <Form.Item name="cvc" label="CVC" rules={[{ required: true }]}>
          <Input
            // type="number"
            name="cvc"
            placeholder="CVC"
            maxLength={3}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Form.Item>

        <Form.Item
          name="expiry"
          label="VALID/THRU"
          rules={[{ required: true }]}
        >
          <Input
            // type="number"
            name="expiry"
            placeholder="VALID/THRU"
            maxLength={6}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button
            style={{ marginTop: "1%" }}
            type="primary"
            block
            htmlType="submit"
          >
            Pay
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default PayForm;
