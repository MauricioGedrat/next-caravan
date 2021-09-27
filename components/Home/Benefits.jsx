import React from 'react'
import Passaport from '../SvgIcons/Passaport'
import Passage from '../SvgIcons/Passage'
import Transfer from '../SvgIcons/Transfer'
import Tourism from '../SvgIcons/Tourism'
import Bag from '../SvgIcons/Bag'
import Beach from '../SvgIcons/Beach'
import Link from 'next/link'

const Benefits = () => {
  return (
    <section className=" py-5 bg-lig">
      <div className="container text-center">
        <div className="my-5">
          <span className="h6 d-block">TUDO DE MELHOR PARA VOCÊ</span>
          <h2 className="display-4 text-primary">Aproveite as Vantagens</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div
              style={{ height: '100px' }}
              className="d-flex justify-content-center"
            >
              <Passaport />
            </div>
            <h3>Documentos</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              nemo nulla.
            </p>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              style={{ height: '100px' }}
              className="d-flex justify-content-center"
            >
              <Passage />
            </div>
            <h3>Passagem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              nemo nulla.
            </p>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              style={{ height: '100px' }}
              className="d-flex justify-content-center"
            >
              <Transfer />
            </div>
            <h3>Translado</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              nemo nulla.
            </p>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              style={{ height: '100px' }}
              className="d-flex justify-content-center"
            >
              <Beach />
            </div>
            <h3>Praias</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              nemo nulla.
            </p>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              style={{ height: '100px' }}
              className="d-flex justify-content-center"
            >
              <Bag />
            </div>
            <h3>Bagagem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              nemo nulla.
            </p>
          </div>
          <div className="col-xl-4 col-md-6">
            <div
              style={{ height: '100px' }}
              className="d-flex justify-content-center"
            >
              <Tourism />
            </div>
            <h3>Turismo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              nemo nulla.
            </p>
          </div>
        </div>
        <div>
          <Link href="/Planos">
            <a className="btn btn-outline-danger btn-lg mt-4">Comprar plano</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Benefits
