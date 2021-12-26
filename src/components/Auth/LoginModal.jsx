import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { useAuth } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const LoginModal = () => {
  let authP = {
    margin: "14px 0 0 0",
    textAlign: "right",
    color: "#000",
    cursor: "pointer",
  };
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
    authWithGoogle,
  } = useAuth();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Wrong E-mail!",
          },
        ]}
      >
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="error-msg">{emailError}</p>
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[]}>
        <Input.Password
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="error-msg">{passwordError}</p>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Checkbox>Save my data</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Log in
        </Button>
      </Form.Item>
      <Link to="/">
        <p
          onClick={authWithGoogle}
          style={{ textAlign: "center", color: "#8F98A0" }}
        >
          Войти с помощью
          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            onClick={authWithGoogle}
            src="https://cdn-icons-png.flaticon.com/512/2875/2875404.png"
            alt="google"
          />
        </p>
      </Link>
      <Link to="/forgotPassword">
        <p style={authP}>
          Forgot Password?
        </p>
      </Link>
    </Form>
  );
};

export default LoginModal;
