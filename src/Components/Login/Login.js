// @flow

import React from 'react';
import styled from 'styled-components';
// import './.css';
import LoginModal from './LoginModal';

const Login = () => {

  return (
    <LoginContainer>
      <LoginModal />
    </LoginContainer>
  )
};
export default Login;

const LoginContainer = styled.div`
  float: right;
  width: 10vw;
  height: 100%;
  padding-top: 3.8vh;
`;
