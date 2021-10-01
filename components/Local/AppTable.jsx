import React from 'react'
import { Table, Button } from 'react-bootstrap'

const AppTable = () => {
  return (
    <section className="container ">
      <div className="my-5 text-center">
        <span className="h6 d-block">DESCUBRA O QUE ACONTECE NA CIDADE</span>
        <h2 className="display-4 text-primary">Próximos Eventos</h2>
      </div>
      <div className="table-responsive-md ">
        <Table striped bordered hover variant="white" className="table  ">
          <thead>
            <tr>
              <th>Data</th>
              <th>Evento</th>
              <th>Local</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23/10</td>
              <td>Julien Baker</td>
              <td>The Academy</td>
              <td className="text-center">
                <Button variant="outline-secondary btn-sm">
                  Comprar Ticket
                </Button>{' '}
              </td>
            </tr>
            <tr>
              <td>23/10</td>
              <td>Julien Baker</td>
              <td>The Academy</td>
              <td className="text-center">
                <Button variant="outline-secondary btn-sm">
                  Comprar Ticket
                </Button>{' '}
              </td>
            </tr>
            <tr>
              <td>23/10</td>
              <td>Julien Baker</td>
              <td>The Academy</td>
              <td className="text-center">
                <Button variant="outline-secondary btn-sm">
                  Comprar Ticket
                </Button>{' '}
              </td>
            </tr>
            <tr>
              <td>23/10</td>
              <td>Julien Baker</td>
              <td>The Academy</td>
              <td className="text-center">
                <Button variant="outline-secondary btn-sm">
                  Comprar Ticket
                </Button>{' '}
              </td>
            </tr>
            <tr>
              <td>23/10</td>
              <td>Julien Baker</td>
              <td>The Academy</td>
              <td className="text-center">
                <Button variant="outline-secondary btn-sm">
                  Comprar Ticket
                </Button>{' '}
              </td>
            </tr>
            <tr>
              <td>23/10</td>
              <td>Julien Baker</td>
              <td>The Academy</td>
              <td className="text-center">
                <Button variant="outline-secondary btn-sm">
                  Comprar Ticket
                </Button>{' '}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  )
}

export default AppTable
