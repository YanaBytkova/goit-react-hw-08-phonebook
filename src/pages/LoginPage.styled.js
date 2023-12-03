import styled from 'styled-components';

export const StyledLoginPage = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 15px;
  

  
  .loader {
    position: fixed;
    top: 20px;
    right: 20px;
  }

  .labelTitle {
    font-size: 24px;
    font-weight: bold;
  }

  .input {
    font-size: 24px;
    padding-left: 10px;
    border: 1px solid;
    border-radius: 14px;
    box-shadow: 18px 17px 76px -10px rgba(26,1,9,0.89);
  }
  .svgIcon {
    width: 28px;
    height: 28px;
  }
  .buttonLogin {
    width: 200px;
    margin-top: 20px;
    padding: 10px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
  }
  .buttonLogin:hover,
  .buttonLogin:focus {
    background-color: rgba(253,154,45,1);
  transform: scale(1.1);
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
}

  .formLogin {
    margin: 0 auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border: 3px dashed #000;
    border-radius: 10px;
    box-shadow: 18px 17px 76px -10px rgba(26,1,9,0.89);
  }
  .error{
    padding: 25px;
    border: 1px solid blue;
    background-color: orange;
    margin-bottom: 20px;
    font-size: 20px;
  }

    
`;