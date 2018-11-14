import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { logOut } from 'actions';

export default class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    showMessage: PropTypes.func.isRequired,
  };

  handleClickLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(logOut());
  };

  render() {
    const { showMessage } = this.props;
    return (
      <header
        id="m_header"
        className="app__header m-grid__item m-header"
        m-minimize-offset="200"
        m-minimize-mobile-offset="200"
      >
        <div className="m-container m-container--fluid m-container--full-height">
          <div className="m-stack m-stack--ver m-stack--desktop">

            <div className="m-stack__item m-brand  m-brand--skin-dark ">
              <div className="m-stack m-stack--ver m-stack--general">
                <div className="m-stack__item m-stack__item--middle m-brand__logo">
                  <Link to="/" className="m-brand__logo-wrapper">
                    <img alt="" src="assets/demo/default/media/img/logo/logo_default_dark.png" />
                  </Link>
                </div>
                <div className="m-stack__item m-stack__item--middle m-brand__tools">
                  <div
                    id="m_aside_left_minimize_toggle"
                    className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block  "
                  >
                    <span />
                  </div>

                  <div
                    id="m_aside_left_offcanvas_toggle"
                    className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block"
                  >
                    <span />
                  </div>

                  <div
                    id="m_aside_header_menu_mobile_toggle"
                    className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block"
                  >
                    <span />
                  </div>

                  <div
                    id="m_aside_header_topbar_mobile_toggle"
                    className="m-brand__icon m--visible-tablet-and-mobile-inline-block"
                  >
                    <i className="flaticon-more" />
                  </div>
                </div>
              </div>
            </div>

            <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
              <div id="m_header_menu" />
              <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid">
                <div className="m-stack__item m-topbar__nav-wrapper">
                  <ul className="m-topbar__nav m-nav m-nav--inline">
                    <li
                      className="m-nav__item m-topbar__languages m-dropdown m-dropdown--small m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--mobile-full-width"
                      m-dropdown-toggle="click"
                    >
                      <div className="m-nav__link m-dropdown__toggle cursor">
                        <span className="m-nav__link-text">
                          <img
                            alt=""
                            className="m-topbar__language-selected-img"
                            src="assets/app/media/img/flags/020-flag.svg"
                          />
                        </span>
                      </div>
                      <div className="m-dropdown__wrapper">
                        <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                        <div className="m-dropdown__inner">
                          <div
                            className="m-dropdown__header m--align-center"
                            style={{ background: 'url(assets/app/media/img/misc/quick_actions_bg.jpg)', backgroundSize: 'cover' }}
                          >
                            <span className="m-dropdown__header-subtitle">Select your language</span>
                          </div>
                          <div className="m-dropdown__body">
                            <div className="m-dropdown__content">
                              <ul className="m-nav m-nav--skin-light">
                                <li className="m-nav__item m-nav__item--active">
                                  <div className="m-nav__link m-nav__link--active cursor">
                                    <span className="m-nav__link-icon">
                                      <img
                                        alt=""
                                        className="m-topbar__language-img"
                                        src="assets/app/media/img/flags/020-flag.svg"
                                      />
                                    </span>
                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">USA</span>
                                  </div>
                                </li>
                                <li className="m-nav__item">
                                  <div className="m-nav__link cursor">
                                    <span className="m-nav__link-icon">
                                      <img
                                        alt=""
                                        className="m-topbar__language-img"
                                        src="assets/app/media/img/flags/015-china.svg"
                                      />
                                    </span>
                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">China</span>
                                  </div>
                                </li>
                                <li className="m-nav__item">
                                  <div className="m-nav__link cursor">
                                    <span className="m-nav__link-icon">
                                      <img
                                        alt=""
                                        className="m-topbar__language-img"
                                        src="assets/app/media/img/flags/016-spain.svg"
                                      />
                                    </span>
                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">Spain</span>
                                  </div>
                                </li>
                                <li className="m-nav__item">
                                  <div className="m-nav__link cursor">
                                    <span className="m-nav__link-icon">
                                      <img
                                        alt=""
                                        className="m-topbar__language-img"
                                        src="assets/app/media/img/flags/014-japan.svg"
                                      />
                                    </span>
                                    <span
                                      className="m-nav__link-title m-topbar__language-text m-nav__link-text"
                                    >
                                      Japan
                                    </span>
                                  </div>
                                </li>
                                <li className="m-nav__item">
                                  <div className="m-nav__link cursor">
                                    <span className="m-nav__link-icon">
                                      <img
                                        alt=""
                                        className="m-topbar__language-img"
                                        src="assets/app/media/img/flags/017-germany.svg"
                                      />
                                    </span>
                                    <span className="m-nav__link-title m-topbar__language-text m-nav__link-text">Germany</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light"
                      m-dropdown-toggle="click"
                    >
                      <div className="m-nav__link m-dropdown__toggle cursor">
                        <span className="m-topbar__userpic">
                          <img
                            src="assets/app/media/img/users/user4.jpg"
                            className="m--img-rounded m--marginless"
                            alt=""
                          />
                        </span>
                        <span className="m-topbar__username m--hide">Nick</span>
                      </div>
                      <div className="m-dropdown__wrapper">
                        <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                        <div className="m-dropdown__inner">
                          <div
                            className="m-dropdown__header m--align-center"
                            style={{ background: 'url(assets/app/media/img/misc/user_profile_bg.jpg)', backgroundSize: 'cover' }}
                          >
                            <div className="m-card-user m-card-user--skin-dark">
                              <div className="m-card-user__pic">
                                <img
                                  src="assets/app/media/img/users/user4.jpg"
                                  className="m--img-rounded m--marginless"
                                  alt=""
                                />
                              </div>
                              <div className="m-card-user__details">
                                <span className="m-card-user__name m--font-weight-500">Mark Andre</span>
                                <span className="m-card-user__email m--font-weight-300 m-link">mark.andre@gmail.com</span>
                              </div>
                            </div>
                          </div>
                          <div className="m-dropdown__body">
                            <div className="m-dropdown__content">
                              <ul className="m-nav m-nav--skin-light">
                                <li className="m-nav__section m--hide">
                                  <span className="m-nav__section-text">Section</span>
                                </li>
                                <li className="m-nav__item">
                                  <Link to="/settings" className="m-nav__link">
                                    <i className="m-nav__link-icon flaticon-profile-1" />
                                    <span className="m-nav__link-title">
                                      <span className="m-nav__link-wrap">
                                        <span className="m-nav__link-text">My Profile</span>
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                                <li className="m-nav__separator m-nav__separator--fit" />
                                <li className="m-nav__item">
                                  <span
                                    className="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder"
                                    onClick={this.handleClickLogout}
                                  >
                                    Logout
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li id="m_quick_sidebar_toggle" className="m-nav__item">
                      <div className="m-nav__link m-dropdown__toggle cursor" onClick={showMessage}>
                        <span className="m-nav__link-icon">
                          <i className="flaticon-grid-menu" />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    );
  }
}
