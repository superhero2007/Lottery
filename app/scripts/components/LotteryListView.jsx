import React from 'react';
import PropTypes from 'prop-types';
import LotteryEditView from 'components/LotteryEditView';

class LotteryListView extends React.PureComponent {
  status = (index) => {
    const status = {
      1: { title: 'New', class: 'm-badge--brand' },
      2: { title: 'Pending', class: ' m-badge--warning' },
      3: { title: 'Completed', class: ' m-badge--danger' },
      4: { title: 'Canceled', class: ' m-badge--metal' },
    };
    return <span className={`m-badge ${status[index].class} m-badge--wide`}>{ status[index].title }</span>;
  };

  content = () => {
    const { admin, changeView, dispatch, lotteries, username } = this.props;
    lotteries.sort((a, b) => a.id - b.id);
    const result = [];
    for (let i = 0; i < lotteries.length; i++) {
      result.push(
        <div className="col-md-3 lottery__list__view__item" key={i} onClick={() => changeView(i)}>
          <div className="lottery__list__view__item__image">
            <LotteryEditView
              changeView={changeView}
              admin={false}
              dispatch={dispatch}
              lottery={lotteries[i]}
              clickable={false}
              username={username}
            />
          </div>
          <div className="lottery__list__view__item__paragraph text-center">
            <div>
              <span>{lotteries[i].name}</span>
              <span className="pl-3">{ this.status(lotteries[i].status) }</span>
            </div>
            <div>
              <span>Width: </span>
              <span>{lotteries[i].width}</span>
              <span className="pl-3">Height: </span>
              <span>{lotteries[i].height}</span>
            </div>
            <div>
              <span>Selected Count: </span>
              <span>{lotteries[i].user.length} / {lotteries[i].width * lotteries[i].height} </span>
            </div>

            {admin && (
              <div>
                <span>Shape Count:  </span>
                <span>{lotteries[i].shape.length} / {lotteries[i].width * lotteries[i].height} </span>
              </div>
            )}

            {admin && (
              <div>
                <span>Cost:  </span>
                <span>$ {lotteries[i].cost}  </span>
              </div>
            )}
          </div>
        </div>
      );
    }
    return result;
  };

  render() {
    const { changeView, admin } = this.props;
    return (
      <div className="m-portlet m-portlet--mobile lottery__list__view">
        <div className="m-portlet__head">
          <div className="m-portlet__head-caption">
            <div className="m-portlet__head-title">
              <h3 className="m-portlet__head-text">
                Active Lotteries
              </h3>
            </div>
          </div>
          {admin && (
            <div className="m-portlet__head-tools">
              <ul className="m-portlet__nav">
                <li className="m-portlet__nav-item">
                  <div className="btn btn-accent m-btn m-btn--custom m-btn--pill m-btn--icon m-btn--air" onClick={() => changeView(-1)}>
                    <span>
                      <i className="la la-plus" />
                      <span>New Lottery</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="m-portlet__body">
          <div className="row">
            { this.content() }
          </div>
        </div>
      </div>
    );
  }
}

LotteryListView.propTypes = {
  admin: PropTypes.bool.isRequired,
  changeView: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  lotteries: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

export default LotteryListView;
