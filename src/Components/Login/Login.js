import React, { Component } from 'react';
// import './.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex flex_align_center flex_center flex_1">
        Login/<br />
        Sign up
      </div>
    );
  }
}
