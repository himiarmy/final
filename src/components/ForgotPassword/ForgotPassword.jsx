import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

const ForgotPassword = () => {
  let authButton = {
    border: "none",
    color: "#000",
    background: "pink",
    cursor: "pointer",
    marginTop: "4vh",
  };
  let login = {
    display: "flex",
  };
  let loginContainer = {
    margin: " 30vh auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "rgba(1, 1, 1, 0.3)",
    boxShadow: "0 50px 70px -20px rgba(0, 0, 0, 0.8)",
    borderRadius: "15px",
  };
  let authLabel = {
    color: "black",
    fontFamily: '"Merienda"',
    display: "block",
    fontSize: "20px",
  };
  let authInput = {
    border: "none",
    background: "white",
    color: "#000",
  };

  let authP = {
    margin: "14px 0 0 0",
    textAlign: "right",
    color: "#000",
    cursor: "pointer",
  };

  let errorMsg = {
    color: "#eebb4f",
    fontSize: "16px",
  };

  const { passwordError, resetPassword } = useAuth();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <section style={login}>
        <div style={loginContainer}>
          <label
            style={{
              alignSelf: "center",
              color: "black",
              fontFamily: '"Merienda"',
              fontSize: "20px"
            }}
          >
            {" "}
            Reset Password
          </label>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}

          <p style={errorMsg}>{passwordError}</p>
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label style={authLabel}>Email</Form.Label>
                <Form.Control
                  style={authInput}
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Button
                style={authButton}
                disabled={loading}
                className="w-100"
                type="submit"
              >
                Reset Password
              </Button>
            </Form>

            <Link to="/">
              <p style={authP}>Login</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
