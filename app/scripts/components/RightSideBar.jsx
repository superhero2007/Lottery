import React from 'react';
import PropTypes from 'prop-types';

export default class RightSideBar extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    showMessage: PropTypes.func.isRequired,
    message: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  };

  render() {
    const { message, showMessage } = this.props;
    return (
      <div id="m_quick_sidebar" className={'m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light' + (message ? ' m-quick-sidebar--on' : '')}>
        <div className="m-quick-sidebar__content">
          <div id="m_quick_sidebar_close" className="m-quick-sidebar__close cursor" onClick={showMessage}>
            <i className="la la-close" />
          </div>
          <div className="m-messenger m-messenger--message-arrow m-messenger--skin-light pt-5">
            <div className="m-messenger__messages m-scrollable">
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--in">
                  <div className="m-messenger__message-pic">
                    <img src="assets/app/media/img//users/user3.jpg" alt="" />
                  </div>
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-username">
                        Megan wrote
                      </div>
                      <div className="m-messenger__message-text">
                        Hi Bob. What time will be the meeting ?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--out">
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-text">
                        Hi Megan. It's at 2.30PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--in">
                  <div className="m-messenger__message-pic">
                    <img src="assets/app/media/img//users/user3.jpg" alt="" />
                  </div>
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-username">
                        Megan wrote
                      </div>
                      <div className="m-messenger__message-text">
                        Will the development team be joining ?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--out">
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-text">
                        Yes sure. I invited them as well
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-messenger__datetime">2:30PM</div>
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--in">
                  <div className="m-messenger__message-pic">
                    <img src="assets/app/media/img//users/user3.jpg" alt="" />
                  </div>
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-username">
                        Megan wrote
                      </div>
                      <div className="m-messenger__message-text">
                        Noted. For the Coca-Cola Mobile App project as well ?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--out">
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-text">
                        Yes, sure.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-messenger__datetime">3:15PM</div>
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--in">
                  <div className="m-messenger__message-no-pic m--bg-fill-danger">
                    <span>M</span>
                  </div>
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-username">
                        Megan wrote
                      </div>
                      <div className="m-messenger__message-text">
                        Noted. I will prepare it.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--out">
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-text">
                        Thanks Megan. I will see you later.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-messenger__wrapper">
                <div className="m-messenger__message m-messenger__message--in">
                  <div className="m-messenger__message-pic">
                    <img src="assets/app/media/img//users/user3.jpg" alt="" />
                  </div>
                  <div className="m-messenger__message-body">
                    <div className="m-messenger__message-arrow" />
                    <div className="m-messenger__message-content">
                      <div className="m-messenger__message-username">
                        Megan wrote
                      </div>
                      <div className="m-messenger__message-text">
                        Sure. See you in the meeting soon.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-messenger__seperator" />
            <div className="m-messenger__form">
              <div className="m-messenger__form-controls">
                <input type="text" name="" placeholder="Type here..." className="m-messenger__form-input" />
              </div>
              <div className="m-messenger__form-tools">
                <a href="" className="m-messenger__form-attachment">
                  <i className="la la-paperclip" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
