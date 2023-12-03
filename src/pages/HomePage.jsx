
import React from 'react';

import { StyledHomePage } from './HomePage.styled.js';


export class HomePage extends React.Component {


  render() {
    return (
      <StyledHomePage>
        <h1>The best PHONEBOOK for you contacts</h1>
        <p>For starting you will register on RegisterPage</p>
      </StyledHomePage>
    );
  }
}

export default HomePage;
