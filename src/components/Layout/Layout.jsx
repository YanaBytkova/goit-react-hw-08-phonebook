import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';
import { logOutThunk } from 'redux/auth/auth.reducer';
import { ReactComponent as IconUser } from 'assets/icons/userIcon.svg';
import { ReactComponent as IconLogout } from 'assets/icons/logoutIcon.svg';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  }

  return (
    <div className={css.containerPhonebook}>
      <header className={css.containerHeader}>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        {authenticated ? (
          <>
           
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/contacts"
            >
              Contacts
            </NavLink>

            <div className={css.containerLogout}>
              <IconUser className={css.svgIcon}/>
              <span className={css.hello}>Hello, {userData.name}!</span> 
              <button onClick={onLogOut} className={css.buttonLogout}> <IconLogout className={css.svgIcon}/></button>
            </div>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
