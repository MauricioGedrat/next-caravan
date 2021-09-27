import React from 'react'
import { FormControl, Button, InputGroup } from 'react-bootstrap'
import ComponentCarousel from './Carousel'

const ContainerFluid = () => {
  return (
    <section className="container-fluid p-0">
      <div className="row g-0 bg-secondary text-white">
        <div className="col-lg-7 ">
          <ComponentCarousel />
        </div>
        <div className="col-lg-5 p-5 align-self-center">
          <h1 className="display-4">Realize a viagem do seu sonho</h1>
          <p className="lead">
            O melhor local para viajar é com a Caravan, mais de 5.000 excursões
            concluídas.
          </p>
          <form action="">
            <div className="input-group input-group-lg">
              <InputGroup>
                <FormControl
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-describedby="basic-addon2"
                />
                <Button id="button-addon2" className="bg-primary">
                  Inscreva-se
                </Button>
              </InputGroup>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContainerFluid
