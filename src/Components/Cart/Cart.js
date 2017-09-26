// @flow
import React from 'react';
import styled from 'styled-components';
import './Cart.css';

const Cart = () => (
  <CartContainer>
    <img src="http://icons.veryicon.com/ico/System/Pretty%20Office%206/shopping%20basket.ico" height="45px" alt="Shopping Cart"/>
  </CartContainer>
);

export default Cart;

const CartContainer = styled.div`
  flex: auto;
  display-flex: right;
  flex-direction: row-reverse;
  align-self: center;
  padding-right: 20px;

`;
