// @flow
import React from 'react';
import styled from 'styled-components';
import './SaleComponent.css';

const SaleComponent = () => <SaleContainer>Top 5 sales</SaleContainer>;

export default SaleComponent;

const SaleContainer = styled.div`
  background-color: grey;
  height: 600px;
  width: 100%;
  color: white;
`;
