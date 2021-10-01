import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3 col-6">
            <h4 className="h6">PÁGINAS</h4>
            <ul className="list-unstyled">
              <li>
                <Link href="/Planos">Planos</Link>
              </li>
              <li>
                <Link href="/Contact">Contato</Link>
              </li>
              <li>
                <Link href="/Subscribe">Incrição</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <h4 className="h6">LOCAL</h4>
            <ul className="list-unstyled">
              <li>
                <Link href="/Local">Califórnia</Link>
              </li>
              <li>
                <Link href="/Local">Paris</Link>
              </li>
              <li>
                <Link href="/Local">Dublin</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="h6">DADOS DE CONTATO</h4>
            <ul className="list-unstyled text-secondary">
              <li>caravan@caravan.com.br</li>
              <li>21 99999-9999</li>
              <li>De Seg. à Sex. das 8h às 18h</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 className="h6">REDES DE CONTATO</h4>
            <ul className="list-unstyled text-secondary">
              <li>
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-block btn-sm mb-2"
                  style={{ maxWidth: '140px', width: '140px' }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-block btn-sm mb-2"
                  style={{ maxWidth: '140px', width: '140px' }}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-block btn-sm mb-2"
                  style={{ maxWidth: '140px', width: '140px' }}
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary text-center py-3">
        <p className="mb-0">Caravan © 2017. Alguns direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
