import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';


export default function Cart() {
  return (
      <Container>
        <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                  src="https://static.netshoes.com.br/produtos/tenis-olympikus-corre-1/08/D22-3707-008/D22-3707-008_zoom2.jpg?ims=326x"
                  alt="Tênis"
                  />
                </td>
                <td>
                  <strong>Tênis muito massa</strong>
                  <span>R$129,99</span>
                </td>

                <td>
                  <div>
                    <button type="button">
                      <MdRemoveCircleOutline size={20} color="#37ad7e"/>
                    </button>
                    <input type="number" readOnly value={2}/>
                    <button type="button">
                      <MdAddCircleOutline size={20} color="#37ad7e"/>
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$258,80</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete size={20} color="#37ad7e"/>
                  </button>
                </td>
              </tr>
            </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>R$1920,28</strong>
          </Total>
        </footer>
      </Container>
  );
}
