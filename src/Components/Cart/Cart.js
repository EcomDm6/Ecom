// @flow
import React from 'react';
import styled from 'styled-components';
import './Cart.css';

const Cart = () => (
  <CartContainer>
    <img src="http://icons.veryicon.com/ico/System/Pretty%20Office%206/shopping%20basket.ico" height="50px" alt="Shopping Cart"/>
  </CartContainer>
);

export default Cart;

const CartContainer = styled.div`
  display-flex: right;
  justify-content: center;
  align-items: right;
`;
