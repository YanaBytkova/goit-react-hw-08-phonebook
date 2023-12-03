import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';
import { StyledLoginPage } from './LoginPage.styled.js';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };

  return (
    <StyledLoginPage>
      <form onSubmit={onSubmit} className="formLogin">
      <label>
        <p className="labelTitle">Name:</p>
        <input
          className="input"
          type="text"
          placeholder="Ivan Ivanovich Ivanov"
          required
          name="userName"
        />
      </label>
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
        />
      </label>
      <br />
      <button type="submit" className="buttonLogin">Sign Up</button>
    </form>
    </StyledLoginPage>
    
  );
};

export default RegisterPage;
