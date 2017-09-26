// @flow
import React from 'react';
import styled from 'styled-components';
import './SaleComponent.css';

const SaleComponent = () => (
  <SaleContainer className="">
    Top 5 sales
  </SaleContainer>
);

export default SaleComponent;

const SaleContainer = styled.div`
  background-color: grey;
  height: 70vh;
  width: 100%;
  color: white;
`;
