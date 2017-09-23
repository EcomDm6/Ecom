import React from 'react';
import styled from 'styled-components';
import './Footer.css';

const FooterContainer = () => (
  <FooterDiv className="FooterMainContainer">
    Additional routes go here
  </FooterDiv>
);

export default FooterContainer;

const FooterDiv = styled.div`
  background-color: black;
  height: 100px;
  width: 100%;
  color: white;
`;
