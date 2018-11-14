import React from 'react';
import { connect } from 'react-redux';
import LeftSideBar from 'components/LeftSideBar';
import SubHeader from 'components/SubHeader';
import LotteryListView from 'components/LotteryListView';
import LotteryEditView from 'components/LotteryEditView';
import PropTypes from 'prop-types';

import { getLotteries } from 'actions';

class Lottery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      view: true,
    };
  }

  changeView = (index) => {
    this.setState(state => ({
      index,
      view: !state.view,
    }));

    const { dispatch } = this.props;
    dispatch(getLotteries());
  };

  status = (lottery) => {
    const { user } = this.props;
    let index = lottery.status;
    const userShape = lottery.user.filter((element) => element.user === user.user.username).map((element) => element.index);
    const won = lottery.shape.filter(value => userShape.indexOf(value) !== -1);
    if (index === 3 && won.length) {
      index = 5;
    }
    const status = {
      1: { title: 'New', class: 'm-badge--brand' },
      2: { title: 'Pending', class: ' m-badge--warning' },
      3: { title: 'Lost', class: ' m-badge--danger' },
      4: { title: 'Canceled', class: ' m-badge--metal' },
      5: { title: 'Won', class: ' m-badge--primary' },
    };
    return <span className={`m-badge ${status[index].class} m-badge--wide`}>{ status[index].title }</span>;
  };

  tableContent = (orders) => {
    let result = [];
    const { dispatch, user } = this.props;
    for (let i = 0;i < orders.length; i++) {
      result.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>
            <LotteryEditView
              changeView={this.changeView}
              admin={false}
              dispatch={dispatch}
              lottery={orders[i]}
              clickable={false}
              username={user.user.username}
            />
          </td>
          <td>
            {orders[i].name}
          </td>
          <td>
            {orders[i].width}
          </td>
          <td>
            {orders[i].height}
          </td>
          <td>
            {orders[i].width * orders[i].height}
          </td>
          <td>
            {orders[i].user.length}
          </td>
          <td>
            {orders[i].user.filter(value => value.user === user.user.username).length}
          </td>
          <td>
            { this.status(orders[i]) }
          </td>
        </tr>
      );
    }
    return result;
  };

  render() {
    const { index, view } = this.state;
    const { dispatch, lotteries, user } = this.props;
    let content = '';
    let table = '';
    let orders = lotteries;
    if (!user.isAdmin) {
      orders = lotteries.filter((lottery) => {
        return lottery.user.filter((value) => value.user === user.user.username).length === 0 && lottery.status === 2;
      });
      const myOrders = lotteries.filter((lottery) => {
        return lottery.user.filter((value) => value.user === user.user.username).length;
      });
      table = this.tableContent(myOrders);
    }

    if (view) {
      content = <LotteryListView changeView={this.changeView} admin={user.isAdmin} dispatch={dispatch} lotteries={orders} username={user.user.username} />;
    }
    else {
      content = <LotteryEditView changeView={this.changeView} admin={user.isAdmin} dispatch={dispatch} lottery={index === -1 ? null : orders[index]} username={user.user.username} />;
    }

    return (
      <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

        <button type="button" className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
          <i className="la la-close" />
        </button>

        <LeftSideBar />

        <div className="m-grid__item m-grid__item--fluid m-wrapper">
          <SubHeader title="Dashboard" />
          <div className="m-content">
            { content }
            {!user.isAdmin && view && (
              <div className="m-portlet app__lottery__edit__view">
                <div className="m-portlet__head">
                  <div className="m-portlet__head-caption">
                    <div className="m-portlet__head-title">
                      <h3 className="m-portlet__head-text">
                        Order History
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="m-portlet__body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <td width="5%">ID</td>
                        <td width="20%">Image</td>
                        <td width="10%">Name</td>
                        <td width="10%">Width</td>
                        <td width="10%">Height</td>
                        <td width="10%">Total Count</td>
                        <td width="10%">Selected Count</td>
                        <td width="10%">Selected By me</td>
                        <td width="15%">State</td>
                      </tr>
                    </thead>
                    <tbody>
                      { table }
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    lotteries: state.lottery.lotteries,
    user: state.user,
  };
}

Lottery.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lotteries: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Lottery);
