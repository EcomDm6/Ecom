import React from 'react';
import styled from 'styled-components';

const FooterComponent = () => (
  <FooterDiv className="FooterContainer">
    Additional routes go here
  </FooterDiv>
);

export default FooterComponent;

const FooterDiv = styled.div`
  background-color: black;
  height: 15vh;
  width: 100%;
  color: white;
`;
