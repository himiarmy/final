import { Modal, Button } from "react-bootstrap";
import LoginModal from "./LoginModal";

function Login(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginModal />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
