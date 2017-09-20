import React, { Component } from 'react';

import styled from 'styled-components';
import './Nav.css';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: black;
  color: white;
  font-size: 1.5em;
  padding: 10px;
`;

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar className="">
        <div className="flex flex_align_center flex_center flex_5">
          &#123; Logo goes here &#125;
        </div>
        <div className="flex flex_align_center flex_center flex_2">
          &#123; Cart goes here &#125;
        </div>
        <div className="flex flex_align_center flex_center flex_1">
          Login/<br />
          Sign up
        </div>
      </Navbar>
    );
  }
}
