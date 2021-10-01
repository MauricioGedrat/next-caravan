import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalImages = (props) => {
  const { Image, show, onHide } = props
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
      className="modal-fullscreen p-4"
    >
      <Modal.Header closeButton className="p-4">
        <Modal.Title className="h5"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">{Image}</Modal.Body>
    </Modal>
  )
}

export default ModalImages
