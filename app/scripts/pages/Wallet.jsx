import React from 'react';
import LeftSideBar from 'components/LeftSideBar';
import SubHeader from 'components/SubHeader';

export default class Wallet extends React.PureComponent {
  render() {
    return (
      <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

        <button type="button" className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
          <i className="la la-close" />
        </button>

        <LeftSideBar />

        <div className="m-grid__item m-grid__item--fluid m-wrapper">
          <SubHeader title="Wallet" />

          <div className="m-content">
            <div className="m-portlet">
              <div className="m-portlet__head">
                <div className="m-portlet__head-caption">
                  <div className="m-portlet__head-title">
                    <h3 className="m-portlet__head-text">
                      User
                    </h3>
                  </div>
                </div>
              </div>

              <div className="m-form m-form--fit m-form--label-align-right">
                <div className="m-portlet__body">
                  <div className="form-group m-form__group row">
                    <span className="col-3 offset-1 col-form-label">Address</span>
                    <span className="col-3">0x000000000000</span>
                  </div>
                  <div className="form-group m-form__group row">
                    <span className="col-3 offset-1 col-form-label">Balance</span>
                    <span className="col-3">524 Tokens</span>
                  </div>
                  <div className="form-group m-form__group row">
                    <span className="col-3 offset-1 col-form-label">Credit</span>
                    <span className="col-3">20000</span>
                  </div>
                  <div className="form-group m-form__group row">
                    <div className="col-2 offset-1">
                      <button type="button" className="btn btn-primary btn-block">Buy</button>
                    </div>
                    <div className="col-2 offset-1">
                      <button type="button" className="btn btn-primary btn-block">Withdraw</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
