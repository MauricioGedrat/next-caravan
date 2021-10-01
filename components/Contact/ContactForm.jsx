import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Image from 'next/image'
import ImageMap from '../../assets/img/mapa.png'
import ModalImages from '../Common/ModalImages'


const ContactForm = () => {
    const [show, setShow] = useState(false)
  const [imagemModal, setimagemModal] = useState()
  const onHide = () => {
    setShow(!show)
  }
  const openModal = (e) => {
    setimagemModal(e)
    setShow(true)
  }
  return (
    <section className="container">
      <div className="my-5 text-center">
        <span className="h6 d-block">PRECISA DE AJUDA?</span>
        <h2 className="display-4 text-primary">Fale Conosco</h2>
      </div>
      <div className="row">
        <div className="col-lg mb-5">
          <Form className="bg-light rounded p-4 box-shadow">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar Mensagem
            </Button>
          </Form>
        </div>
        <div className="col-lg">
          <h2 className="h6">NOSSO ENDEREÇO</h2>
          <div className="img-fluid box-shadow mb-4" style={{cursor:'pointer'}}>
            <Image  src={ImageMap}
            onClick={(e) => openModal(<Image src={ImageMap} />)} layout="responsive" className="rounded" />
          </div>

          <h4 className="h6">DADOS DE CONTATO</h4>
          <ul className="list-unstyled text-secondary">
            <li>caravan@caravan.com.br</li>
            <li>21 99999-9999</li>
            <li>De Seg. à Sex. das 8h às 18h</li>
          </ul>

          <h4 className="h6">REDES DE CONTATO</h4>
          <ul className="list-unstyled text-secondary">
            <li>
              <a
                href="#"
                className="btn btn-outline-secondary btn-block btn-sm mb-2"
                style={{ maxWidth: '240px', width: '240px' }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn btn-outline-secondary btn-block btn-sm mb-2"
                style={{ maxWidth: '240px', width: '240px' }}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn btn-outline-secondary btn-block btn-sm mb-2"
                style={{ maxWidth: '240px', width: '240px' }}
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ModalImages show={show} onHide={onHide} Image={imagemModal} />
    </section>
  )
}

export default ContactForm
