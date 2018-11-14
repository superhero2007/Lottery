import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="m-grid__item m-footer ">
        <div className="m-container m-container--fluid m-container--full-height m-page__container">
          <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
            <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
              <span className="m-footer__copyright">
                2018 &copy; Lottery
              </span>
            </div>
            <div className="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
              <ul className="m-footer__nav m-nav m-nav--inline m--pull-right">
                <li className="m-nav__item">
                  <Link to="/settings" className="m-nav__link">
                    <span className="m-nav__link-text">Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
