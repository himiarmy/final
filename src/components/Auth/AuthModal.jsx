import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useAuth } from "../../contexts/authContext";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
};

const AuthModal = () => {
  const { email, setEmail, password, setPassword, handleSignUp } = useAuth();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Wrong E-mail!",
          },
          {
            required: true,
            message: "Your E-mail please!",
          },
        ]}
      >
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm your password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Confirm your password please!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("Your passwords don't match!"));
            },
          }),
        ]}
      >
        <Input.Password
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Form.Item>
     
    </Form>
  );
};

export default AuthModal;
