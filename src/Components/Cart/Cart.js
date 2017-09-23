// @flow
import React from 'react';
import styled from 'styled-components';
import './Cart.css';

const Cart = () => <CartContainer>{'{ Cart goes here }'}</CartContainer>;

export default Cart;

const CartContainer = styled.div`
  display-flex: center;
  flex-grow: 2;
  justify-content: center;
  align-items: center;
`;
