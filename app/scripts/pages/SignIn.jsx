import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from 'actions';

const USER_SIGN_IN = 'USER_SIGN_IN';
const USER_SIGN_UP = 'USER_SIGN_UP';
const USER_FORGOT_PASSWORD = 'USER_FORGOT_PASSWORD';
export class SignIn extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      status: USER_SIGN_IN,
      username: '',
      password: ''
    };
  }

  goToSignUp = (e) => {
    e.preventDefault();
    this.setState({ status: USER_SIGN_UP });
  };

  goToSignIn = (e) => {
    e.preventDefault();
    this.setState({ status: USER_SIGN_IN });
  };

  goToForgotPassword = (e) => {
    e.preventDefault();
    this.setState({ status: USER_FORGOT_PASSWORD });
  };

  login = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { username, password } = this.state;

    if (username === '' || password !== 'a') {
      return;
    }

    dispatch(login({
      username,
      password,
    }));
  };

  updateUsername = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  updatePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  render() {
    const { status, username, password } = this.state;

    let parentClassName = "";
    if (status === "USER_SIGN_UP") {
      parentClassName =  "m-login--signup";
    }
    else if (status === "USER_SIGN_IN") {
      parentClassName =  "m-login--signin";
    }
    else if (status === "USER_FORGOT_PASSWORD") {
      parentClassName = "m-login--forget-password";
    }

    return (
      <div key="Home" className="app__login app__route">
        <div
          className={"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 " + parentClassName}
          id="m_login"
        >
          <div className="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
            <div className="m-stack m-stack--hor m-stack--desktop">
              <div className="m-stack__item m-stack__item--fluid">
                <div className="m-login__wrapper">
                  <div className="m-login__logo">
                    <img src="assets/app/media/img/logos/logo-2.png" />
                  </div>
                  <div className="m-login__signin">
                    <div className="m-login__head">
                      <h3 className="m-login__title">Sign In To Admin</h3>
                    </div>
                    <form className="m-login__form m-form" action="">
                      <div className="form-group m-form__group">
                        <input
                          className="form-control m-input" type="text" placeholder="Username" name="username"
                          autoComplete="off"
                          value={username}
                          onChange={(e) => this.updateUsername(e)}
                        />
                      </div>
                      <div className="form-group m-form__group">
                        <input
                          className="form-control m-input m-login__form-input--last" type="password"
                          placeholder="Password" name="password"
                          value={password}
                          onChange={(e) => this.updatePassword(e)}
                        />
                      </div>
                      <div className="row m-login__form-sub">
                        <div className="col m--align-left">
                          <label className="m-checkbox m-checkbox--focus">
                            <input type="checkbox" name="remember" />
                            Remember me
                            <span />
                          </label>
                        </div>
                        <div className="col m--align-right">
                          <span id="m_login_forget_password" className="m-link" onClick={this.goToForgotPassword}>Forget Password ?</span>
                        </div>
                      </div>
                      <div className="m-login__form-action">
                        <button
                          id="m_login_signin_submit"
                          className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                          onClick={this.login}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="m-login__signup">
                    <div className="m-login__head">
                      <h3 className="m-login__title">Sign Up</h3>
                      <div className="m-login__desc">Enter your details to create your account:</div>
                    </div>
                    <form className="m-login__form m-form" action="">
                      <div className="form-group m-form__group">
                        <input className="form-control m-input" type="text" placeholder="Fullname" name="fullname" />
                      </div>
                      <div className="form-group m-form__group">
                        <input
                          className="form-control m-input" type="text" placeholder="Email" name="email"
                          autoComplete="off"
                        />
                      </div>
                      <div className="form-group m-form__group">
                        <input
                          className="form-control m-input" type="password" placeholder="Password"
                          name="password"
                        />
                      </div>
                      <div className="form-group m-form__group">
                        <input
                          className="form-control m-input m-login__form-input--last" type="password"
                          placeholder="Confirm Password" name="rpassword"
                        />
                      </div>
                      <div className="row form-group m-form__group m-login__form-sub">
                        <div className="col m--align-left">
                          <label className="m-checkbox m-checkbox--focus">
                            <input type="checkbox" name="agree" />
                              I Agree the <Link to="#" className="m-link m-link--focus">terms and conditions</Link>.
                            <span />
                          </label>
                          <span className="m-form__help" />
                        </div>
                      </div>
                      <div className="m-login__form-action">
                        <button
                          id="m_login_signup_submit"
                          className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                        >
                          Sign Up
                        </button>
                        <button
                          id="m_login_signup_cancel"
                          className="btn btn-outline-focus  m-btn m-btn--pill m-btn--custom"
                          onClick={this.goToSignIn}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="m-login__forget-password">
                    <div className="m-login__head">
                      <h3 className="m-login__title">Forgotten Password ?</h3>
                      <div className="m-login__desc">Enter your email to reset your password:</div>
                    </div>
                    <form className="m-login__form m-form" action="">
                      <div className="form-group m-form__group">
                        <input
                          className="form-control m-input" type="text" placeholder="Email" name="email"
                          id="m_email" autoComplete="off"
                        />
                      </div>
                      <div className="m-login__form-action">
                        <button
                          id="m_login_forget_password_submit"
                          className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                        >
                          Request
                        </button>
                        <button
                          id="m_login_forget_password_cancel"
                          className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom"
                          onClick={this.goToSignIn}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="m-stack__item m-stack__item--center">
                <div className="m-login__account">
                  <span className="m-login__account-msg">
                Don't have an account yet ?
                  </span>&nbsp;&nbsp;
                  <span id="m_login_signup" className="m-link m-link--focus m-login__account-link" onClick={this.goToSignUp}>
                    Sign Up
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1 m-login__content m-grid-item--center"
            style={{ backgroundImage: 'url(assets/app/media/img/bg/bg-4.jpg)' }}
          >
            <div className="m-grid__item">
              <h3 className="m-login__welcome">Join Our Community</h3>
              <p className="m-login__msg">
                Lorem ipsum dolor sit amet, coectetuer adipiscing<br />elit sed diam nonummy et nibh euismod
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(SignIn);
