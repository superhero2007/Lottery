import React from 'react';
import LeftSideBar from 'components/LeftSideBar';
import SubHeader from 'components/SubHeader';

export default class User extends React.PureComponent {
  render() {
    return (
      <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

        <button type="button" className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
          <i className="la la-close" />
        </button>

        <LeftSideBar />

        <div className="m-grid__item m-grid__item--fluid m-wrapper">
          <SubHeader title="Users" />

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

              <div className="m-portlet__body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <td>ID</td>
                      <td>First Name</td>
                      <td>Last Name</td>
                      <td>Email</td>
                      <td>Address</td>
                      <td>Total Orders</td>
                      <td>Placed Orders</td>
                      <td>Won Orders</td>
                      <td>Lost Orders</td>
                      <td>Canceled Orders</td>
                      <td>Balance</td>
                      <td>Credit</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nixie</td>
                      <td>Sailor</td>
                      <td>nsailor0@livejournal.com</td>
                      <td>746 Pine View Junction</td>
                      <td>39</td>
                      <td>12</td>
                      <td>5</td>
                      <td>20</td>
                      <td>2</td>
                      <td>524 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Emelita</td>
                      <td>Giraldez</td>
                      <td>egiraldez1@seattletim.com</td>
                      <td>01652 Fulton Trail</td>
                      <td>29</td>
                      <td>7</td>
                      <td>3</td>
                      <td>17</td>
                      <td>2</td>
                      <td>317 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Englebert</td>
                      <td>Shelley</td>
                      <td>eshelley6@pcworld.com</td>
                      <td>56482 Fairfield Terrace</td>
                      <td>21</td>
                      <td>12</td>
                      <td>1</td>
                      <td>2</td>
                      <td>6</td>
                      <td>153 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Nixie</td>
                      <td>Sailor</td>
                      <td>nsailor0@livejournal.com</td>
                      <td>746 Pine View Junction</td>
                      <td>39</td>
                      <td>12</td>
                      <td>5</td>
                      <td>20</td>
                      <td>2</td>
                      <td>524 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Emelita</td>
                      <td>Giraldez</td>
                      <td>egiraldez1@seattletim.com</td>
                      <td>01652 Fulton Trail</td>
                      <td>29</td>
                      <td>7</td>
                      <td>3</td>
                      <td>17</td>
                      <td>2</td>
                      <td>317 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Englebert</td>
                      <td>Shelley</td>
                      <td>eshelley6@pcworld.com</td>
                      <td>56482 Fairfield Terrace</td>
                      <td>21</td>
                      <td>12</td>
                      <td>1</td>
                      <td>2</td>
                      <td>6</td>
                      <td>153 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Nixie</td>
                      <td>Sailor</td>
                      <td>nsailor0@livejournal.com</td>
                      <td>746 Pine View Junction</td>
                      <td>39</td>
                      <td>12</td>
                      <td>5</td>
                      <td>20</td>
                      <td>2</td>
                      <td>524 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Emelita</td>
                      <td>Giraldez</td>
                      <td>egiraldez1@seattletim.com</td>
                      <td>01652 Fulton Trail</td>
                      <td>29</td>
                      <td>7</td>
                      <td>3</td>
                      <td>17</td>
                      <td>2</td>
                      <td>317 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Englebert</td>
                      <td>Shelley</td>
                      <td>eshelley6@pcworld.com</td>
                      <td>56482 Fairfield Terrace</td>
                      <td>21</td>
                      <td>12</td>
                      <td>1</td>
                      <td>2</td>
                      <td>6</td>
                      <td>153 Tokens</td>
                      <td>0x0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
