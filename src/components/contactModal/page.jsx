import React from "react";
import Modal from "react-bootstrap/Modal";
import "./page.css";

export default function ContactModal({ onHide, show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <form action="#">
              <div className="d-flex gap-4">
                <div className="w-100">
                  <label htmlFor="name">First Name</label>
                  <input type="text" className="form-control" requried />
                </div>
                <div className="w-100">
                  <label htmlFor="name">Last Name</label>
                  <input type="text" className="form-control" requried />
                </div>
              </div>
              <div>
                <label htmlFor="name">Email</label>
                <input type="text" className="form-control" requried />
              </div>
              <div>
                <label htmlFor="name">Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="4"
                  requried
                />
              </div>

              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="primary-btn border-0"
                  onClick={onHide}
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
