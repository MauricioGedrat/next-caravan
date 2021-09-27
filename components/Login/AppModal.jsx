import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

const AppModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-outline-secondary bg-transparent" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='p-4'>
          <Modal.Title className="h5">ENTRE NA SUA CONTA</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-4'>
          <InputGroup className='mb-4'>
            <FormControl
              placeholder="E-mail"
              aria-label="E-mail"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder="Senha"
              aria-label="Senha"
              aria-describedby="basic-addon2"
              type='password'
            />
          </InputGroup>
          <button type="button" class="btn btn-outline-dark">Entrar</button>
          <p className='text-muted my-1'>Esqueceu a senha? <a href="#" className='text-info'>Clique aqui</a></p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AppModal;
