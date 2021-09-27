import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalImages = (props) => {
  const { Image, show, onHide } = props
  return (
    <Modal className="modal-fullscreen" show={show} onHide={onHide}>
      {Image}
    </Modal>
  )
}

export default ModalImages
