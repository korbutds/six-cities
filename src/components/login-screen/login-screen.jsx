import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/api-actions';
import Header from '../header/header';
import {AuthorizationStatus, RoutePathes} from '../../const';
import {Redirect} from 'react-router';

const LoginScreen = () => {
  const loginRef = useRef();
  const passwordRef = useRef();
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault({
      login: loginRef.current.value,
      password: passwordRef.current.value
    });
    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value
    }));
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={RoutePathes.MAIN_SCREEN} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" ref={loginRef} name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" ref={passwordRef} name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginScreen;
