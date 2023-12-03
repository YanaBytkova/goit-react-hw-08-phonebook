import styled from 'styled-components';

export const StyledHomePage = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 15px;
  

  
  .loader {
    position: fixed;
    top: 20px;
    right: 20px;
  }


  .itemTitle {
    margin: 20px auto;
    text-align: center;
    max-width: 480px;
  }

  .error{
    padding: 25px;
    border: 1px solid blue;
    background-color: orange;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .titleWord {
    color: white;
    font-style: italic;
 }
  .textTyping
    {
    margin: 40px auto;
    width: 18em;
    color:white;
    font-size: 26px;
    font-family: 'Marck Script', cursive;
    white-space:nowrap;
    overflow:hidden;
    -webkit-animation: type 5s steps(50, end);
    animation: type 5s steps(50, end);
    }
    @keyframes type{
    from { width: 0; }
    }
    @-webkit-keyframes type{
    from { width: 0; }

    
`;