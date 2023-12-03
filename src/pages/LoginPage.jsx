import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';
import { StyledLoginPage } from './LoginPage.styled.js';
import { ReactComponent as IconLogin } from 'assets/icons/loginIcon.svg';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };

  return (
    <StyledLoginPage>
        <form onSubmit={onSubmit} className="formLogin">
      <label>
        <p className="labelTitle">Email:</p>
        <input
        className="input"
          type="email"
          placeholder="hotmail@hotmail.com"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p className="labelTitle">Password:</p>
        <input
          className="input"
          type="password"
          placeholder="*******"
          required
          name="userPassword"
          minLength={7}
        />
      </label>
      
      <button type="submit" className="buttonLogin">Sign In
      <IconLogin className="svgIcon"/>
      </button>
    </form>
    </StyledLoginPage>
    
  );
};

export default LoginPage;
