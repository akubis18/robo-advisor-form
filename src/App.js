/* global Plotly:true */

import React, { Component } from 'react';
import Form from './Form';
import Results from './Form';
import createPlotlyComponent from 'react-plotly.js/factory'
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


import logo from './bender.svg';
import './App.css';

const Plot = createPlotlyComponent(Plotly);


//Reactjs template from create-react-app
//A lot of code taken from this artcle
//https://lorenstewart.me/2016/10/31/react-js-forms-controlled-components/
//Demo: https://lorenstewart.me/react-controlled-form-components/
class App extends Component {
  render() {
    return (
    <div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Robo-Advisor Risk Assessment</h1>
          <h3 className="App-title-authors">Arthur Krivoruk, Andrew Kubis, Matthew Murphy, Laramie Regalado, and Mike Wezyk </h3>
      </header>

      <Form />
    </div>
    );
  }
}

export default App;
