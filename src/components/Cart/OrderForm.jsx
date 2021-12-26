import React from "react";
import { Form, Input, Select, Button, Space } from "antd";
import { useNavigate } from "react-router";

const { Option } = Select;

const OrderForm = () => {
  const navigate = useNavigate();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="999">+996</Option>
        <Option value="7">+7</Option>
        <Option value="8">+8</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    navigate("/pay");
  };
  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{marginTop:"17vh"}}
    >
      <Form.Item label="BIO" style={{ marginBottom: 0 }}>
        <Form.Item
          name="Name"
          rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="Surname"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="Surname" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={["address", "region"]}
            noStyle
            rules={[{ required: true, message: "Write region!" }]}
          >
            <Select placeholder="Choose region">
              <Option value="Chui">Chui</Option>
              <Option value="Bishkek">Bishkek</Option>
              <Option value="Osh">Osh</Option>
              <Option value="Naryn">Naryn</Option>
              <Option value="Batken">Batken</Option>
              <Option value="Talas">Talas</Option>
              <Option value="Yssyk-Kul">Yssyk-Kul</Option>
              <Option value="Jalal-Abad">Jalal-Abad</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={["Address", "street"]}
            noStyle
            rules={[{ required: true }]}
          >
            <Input style={{ width: "50%" }} placeholder="Street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        name="phonenumber"
        label="PhoneNumber"
        rules={[{ required: true, message: "Write your PhoneNumber!" }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="E-mail">
        <Space>
          <Form.Item
            name="E-mail"
            noStyle
            rules={[
              {
                required: true,
                message: "Write your E-mail!",
                type: "email",
              },
            ]}
          >
            <Input style={{ width: 160 }} placeholder="E-mail" />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Pay
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
