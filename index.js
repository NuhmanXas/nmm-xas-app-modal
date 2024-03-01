import React from "react";
import PropTypes from "prop-types"; 
import { Button, Modal } from "react-bootstrap";

/**
 * Reusable Modal Component
 *
 * @param {object} props Component props
 * @param {string} props.title Modal title
 * @param {React.ReactNode} props.children Modal content
 * @param {string} [props.size="lg"] Modal size
 * @param {function} props.onHide Callback for hiding the modal
 * @returns {React.Component} A modal component
 */
function AppModal({ title, size, children, onHide }) {
  return (
    <Modal
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: "20px" }}
        >
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

AppModal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  onHide: PropTypes.func.isRequired,
};


AppModal.defaultProps = {
  size: "lg", 
};

export default AppModal;
