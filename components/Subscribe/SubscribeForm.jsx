import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const AppSubscribeForm = () => {
  return (
    <div className="container">
      <div className="my-5 text-center">
        <span className="h6 d-block">PROGRAME A VIAGEM DO SEU SONHO</span>
        <h2 className="display-4 text-primary">INSCREVA-SE</h2>
      </div>
      <div className="row">
        <form className="col-lg-6">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="inputNome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="inputNome"
                placeholder="Nome completo"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputCPF">CPF</label>
              <input
                type="text"
                className="form-control"
                id="inputCPF"
                placeholder="xxx.xxx.xxx-xx"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="exemple@example.com"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputSenha">Senha</label>
              <input
                type="password"
                className="form-control"
                id="inputSenha"
                placeholder="Sua senha"
              />
            </div>
            <div className="form-group col-12">
              <label htmlFor="inputEndereço">Endereço</label>
              <input
                type="text"
                className="form-control"
                id="inputEndereço"
                placeholder="Localização"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputCidade">Cidade</label>
              <input type="text" className="form-control" id="inputCidade" />
            </div>
            <div className="form-group col-md-3 col-6">
              <label htmlFor="inputEstado">Estado</label>
              <select
                className="form-control form-select"
                aria-label=".form-select-sm example"
                id="inputEstado"
              >
                <option value>Selecione o estado</option>
                <option value="1">Rio de janeiro</option>
                <option value="2">São Paulo</option>
                <option value="3">Paraná</option>
                <option value="3">Ceará</option>
                <option value="3">Acre</option>
              </select>
            </div>
            <div className="form-group col-md-3 col-6">
              <label htmlFor="inputCep">Cep</label>
              <input
                type="text"
                className="form-control"
                id="inputCep"
                placeholder="xxxxx-xxx"
              />
            </div>
          </div>
          <div className="bg-light rounded mt-4 box-shadow p-3 form-group">
            <h2 className="h6 text-primary">FORMA DE PAGAMENTO</h2>
            <nav id="formaPagamento" role="tablist">
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Cartão de crédito">
                  <div className="row mt-3">
                    <div className="form-group col-md-6  active">
                      <label htmlFor="inputCep1">Nome do cartão</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCep1"
                        placeholder="Cartão"
                      />
                    </div>
                    <div className="form-group col-md-3 col-sm-6">
                      <label htmlFor="inputMês">Mês</label>
                      <select
                        className="form-control form-select"
                        aria-label=".form-select-sm example"
                        id="inputMês"
                      >
                        <option value>Expira Mês</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                      </select>
                    </div>
                    <div className="form-group col-md-3 col-sm-6">
                      <label htmlFor="inputAno">Ano</label>
                      <select
                        className="form-control form-select"
                        aria-label=".form-select-sm example"
                        id="inputAno"
                      >
                        <option value>Expira Ano</option>
                        <option value="1">2022</option>
                        <option value="2">2023</option>
                        <option value="3">2024</option>
                        <option value="3">2025</option>
                        <option value="3">2026</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6 mt-2 active">
                      <label htmlFor="inputNumero">Número do Cartão</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputNumero"
                        placeholder="5555 55555 5555"
                      />
                    </div>
                    <div className="form-group col-md-6 mt-2 active">
                      <label htmlFor="inputSeg">Código de Segurança</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputSeg"
                        placeholder="XXX"
                      />
                    </div>
                  </div>
                </Tab>

                <Tab eventKey="profile" title=" Boleto bancário">
                  <p className="lead mt-2">
                    Clique em contratar plano que enviaremos um boleto para o
                    seu e-mail.
                  </p>
                </Tab>
              </Tabs>{' '}
            </nav>
          </div>
          <div className="form-group form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label mb-3" htmlFor="exampleCheck1">
            Concordo com os <a className='text-primary' href="#">Termos e Condições</a>.
            </label>
          </div>
          <button type="button" className="btn btn-primary">
         Contratar Plano
          </button>
        </form>
        <div className="col-lg-6">
          <h3 className='h6 text-primary'>PLANO ESCOLHIDO</h3>
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
            <h3 className="col">R$7.500</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppSubscribeForm
