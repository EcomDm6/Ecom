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
  align-self: center;
  padding-right: 20px;
`;
