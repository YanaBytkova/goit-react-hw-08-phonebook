
import React from 'react';

import { StyledHomePage } from './HomePage.styled.js';


export class HomePage extends React.Component {


  render() {
    return (
      <StyledHomePage>
        <h1 className="itemTitle">The best <span className="titleWord">PHONEBOOK</span> for you contacts</h1>
        <p className="textTyping">To get started, register or log in ...</p>
        {/* <img src="./src/assets/images/people.jpg" alt="Phonebook icon" className="image" /> */}
      </StyledHomePage>
    );
  }
}

export default HomePage;
