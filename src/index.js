// @flow
import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<App />, document.getElementById('root'));
});
