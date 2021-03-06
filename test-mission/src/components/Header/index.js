import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart} from './styles';

import logo from '../../assets/images/logo.png';

export default function Header(props) {
  return (
  <Container>
    <Link to="/">
      <img src={logo} alt="BarberShop" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{props.amount} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"/>
      </Cart>
  </Container>
    );
}
