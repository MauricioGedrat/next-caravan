import React from 'react'
import Link from 'next/link'

const Prices = () => {
  return (
    <section className="container">
      <div className="my-5 text-center">
        <span className="h6 d-block">SEU PLANO, SUA VIAGEM</span>
        <h2 className="display-4 text-primary">Escolha o Plano</h2>
      </div>
      <div className="row">
        <div className="col-md mb-5">
          <div className="bg-light rounded p-4 box-shadow">
            <h2>Gold</h2>
            <ul className="list-unstyled">
              <li className="py-3">→ 30 dias de viagem</li>
              <div className="dropdown-divider"></div>
              <li className="py-3">→ 3 destinos diferentes</li>
              <div className="dropdown-divider"></div>
              <li className="py-3">→ Tudo pago pela empresa</li>
              <div className="dropdown-divider"></div>
              <li className="py-3">→ Ingressos para festas</li>
            </ul>
            <select
              className="form-select form-select-md mb-3 bg-light"
              aria-label=".form-select-md example"
            >
              <option value>Selecione a cidade</option>
              <option value="1">California</option>
              <option value="2">Paris</option>
              <option value="3">Dublin</option>
            </select>
            <div className="row mt-4 d-flex p-2 align-items-center">
              <Link href="/Subscribe">
                <a className="btn btn-success btn-lg me-3 col btn-block">
                  {' '}
                  Comprar Plano
                </a>
              </Link>
              <h3 className="col">R$5.000</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="bg-light rounded p-4 box-shadow">
            <h2>
              Platinum <span className="badge bg-success py-2">Novo</span>
            </h2>
            <ul className="list-unstyled">
              <li className="py-3">→ 60 dias de viagem</li>
              <div className="dropdown-divider"></div>
              <li className="py-3">→ 6 destinos diferentes</li>
              <div className="dropdown-divider"></div>
              <li className="py-3">→ Tudo pago pela empresa</li>
              <div className="dropdown-divider"></div>
              <li className="py-3">→ Ingressos para festas</li>
            </ul>
            <select
              className="form-select form-select-md mb-3 bg-light"
              aria-label=".form-select-md example"
            >
              <option value>Selecione a cidade</option>
              <option value="1">California</option>
              <option value="2">Paris</option>
              <option value="3">Dublin</option>
            </select>
            <div className="row mt-4 d-flex p-2 align-items-center">
              <Link href="/Subscribe">
                <a className="btn btn-success btn-lg me-3 col btn-block">
                  {' '}
                  Comprar Plano
                </a>
              </Link>
              <h3 className="col">R$7.500</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices
